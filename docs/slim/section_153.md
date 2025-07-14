---
title: Headers sent - No output before sending headers!
description: Slim notes.
order: 153
---

Functions that send/modify HTTP headers must be invoked _**before any output is made**_. [**summary ⇊**](https://stackoverflow.com/a/8028979/345031) Otherwise the call fails:

> Warning: Cannot modify header information - headers already sent (output started at _script:line_)

Some functions modifying the HTTP header are:

- [`header`](http://php.net/header) / [`header_remove`](http://php.net/header_remove)
- [`session_start`](http://php.net/session_start) / [`session_regenerate_id`](http://php.net/session_regenerate_id)
- [`setcookie`](http://php.net/setcookie) / [`setrawcookie`](http://php.net/setrawcookie)

Output can be:

- _Unintentional:_
    
    - Whitespace before `<?php` or after `?>`
    - The [UTF-8 Byte Order Mark](http://en.wikipedia.org/wiki/Byte_order_mark) specifically
    - Previous error messages or notices

- _Intentional:_
    
    - `print`, `echo` and other functions producing output
    - Raw `<html>` sections prior `<?php` code.

### Why does it happen?

To understand why headers must be sent before output it's necessary to look at a typical [HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) response. PHP scripts mainly generate HTML content, but also pass a set of HTTP/CGI headers to the webserver:

```php
HTTP/1.1 200 OK
Powered-By: PHP/5.3.7
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8

<html><head><title>PHP page output page</title></head>
<body><h1>Content</h1> <p>Some more output follows...</p>
and <a href="/"> <img src=internal-icon-delayed> </a>
```

The page/output always _follows_ the headers. PHP has to pass the headers to the webserver first. It can only do that once. After the double linebreak it can nevermore amend them.

When PHP receives the first output (`print`, `echo`, `<html>`) it will _flush_ all collected headers. Afterward it can send all the output it wants. But sending further HTTP headers is impossible then.

### How can you find out where the premature output occurred?

The `header()` warning contains all relevant information to locate the problem cause:

> Warning: Cannot modify header information - headers already sent by _**(output started at**_ /www/usr2345/htdocs/**auth.php:52**) in /www/usr2345/htdocs/index.php on line 100

Here "line 100" refers to the script where the `header()` _invocation_ failed.

The "_output started at_" note within the parenthesis is more significant. It denominates the source of previous output. In this example, it's `auth.php` and **line `52`**. That's where you had to look for premature output.

_Typical causes:_

1. ### Print, echo
    
    Intentional output from `print` and `echo` statements will terminate the opportunity to send HTTP headers. The application flow must be restructured to avoid that. Use [functions](http://php.net/function) and templating schemes. Ensure `header()` calls occur _before_ messages are written out.
    
    Functions that produce output include
    
    - `print`, `echo`, `printf`, `vprintf`
    - `trigger_error`, `ob_flush`, `ob_end_flush`, `var_dump`, `print_r`
    - `readfile`, `passthru`, `flush`, `imagepng`, `imagejpeg`
    
      
    among others and user-defined functions.
    
2. ### Raw HTML areas
    
    Unparsed HTML sections in a `.php` file are direct output as well. Script conditions that will trigger a `header()` call must be noted before _any_ raw `<html>` blocks.
    
    ```php
    <!DOCTYPE html>
    <?php
        // Too late for headers already.
    ```
    
    Use a templating scheme to separate processing from output logic.
    
    - Place form processing code atop scripts.
    - Use temporary string variables to defer messages.
    - The actual output logic and intermixed HTML output should follow last.  
          
        
3. ### Whitespace before `<?php` for "script.php **line 1**" warnings
    
    If the warning refers to output inline **`1`**, then it's mostly leading **whitespace**, text or HTML before the opening `<?php` token.
    
    ```php
     <?php
    # There's a SINGLE space/newline before <? - Which already seals it.
    ```
    
    Similarly it can occur for appended scripts or script sections:
    
    ```php
    ?>
    
    <?php
    ```
    
    PHP actually eats up a _single_ linebreak after close tags. But it won't compensate multiple newlines or tabs or spaces shifted into such gaps.
    
4. ### UTF-8 BOM
    
    Linebreaks and spaces alone can be a problem. But there are also "invisible" character sequences that can cause this. Most famously the [**UTF-8 BOM** (Byte-Order-Mark)](http://en.wikipedia.org/wiki/Byte_order_mark) which isn't displayed by most text editors. It's the byte sequence `EF BB BF`, which is optional and redundant for UTF-8 encoded documents. PHP however has to treat it as raw output. It may show up as the characters `ï»¿` in the output (if the client interprets the document as Latin-1) or similar "garbage".
    
    In particular graphical editors and Java-based IDEs are oblivious to its presence. They don't visualize it (obliged by the Unicode standard). Most programmer and console editors however do:
    
    ![joes editor showing UTF-8 BOM placeholder, and MC editor a dot](https://i.stack.imgur.com/aXgWY.png)
    
    There it's easy to recognize the problem early on. Other editors may identify its presence in a file/settings menu (Notepad++ on Windows can identify and [remedy the problem](https://stackoverflow.com/questions/3589358/fix-utf8-bom)), Another option to inspect the BOMs presence is resorting to an **hexeditor**. On *nix systems [`hexdump`](http://linux.die.net/man/1/hexdump) is usually available, if not a graphical variant which simplifies auditing these and other issues:
    
    ![beav hexeditor showing utf-8 bom](https://i.stack.imgur.com/QyqUr.png)
    
    An easy fix is to set the text editor to save files as "UTF-8 (no BOM)" or similar to such nomenclature. Often newcomers otherwise resort to creating new files and just copy&pasting the previous code back in.
    
    ### Correction utilities !
    
    There are also automated tools to examine and rewrite text files ([`sed`/`awk`](https://stackoverflow.com/questions/1068650/using-awk-to-remove-the-byte-order-mark) or `recode`). For PHP specifically there's the [`phptags` tag tidier](http://freshcode.club/projects/phptags). It rewrites close and open tags into long and short forms, but also easily fixes leading and trailing whitespace, Unicode and UTF-x BOM issues:
    
    ```php
    phptags  --whitespace  *.php
    ```
    
    It's safe to use on a whole include or project directory.
    
5. ### Whitespace after `?>`
    
    If the error source is mentioned as behind the [closing `?>`](https://stackoverflow.com/questions/4410704/php-closing-tag) then this is where some whitespace or the raw text got written out. The PHP end marker does not terminate script execution at this point. Any text/space characters after it will be written out as page content still.
    
    It's commonly advised, in particular to newcomers, that trailing `?>` PHP close tags should be omitted. This _eschews_ a small portion of these cases. (Quite commonly `include()d` scripts are the culprit.)
    
6. ### Error source mentioned as "Unknown on line 0"
    
    It's typically a PHP extension or php.ini setting if no error source is concretized.
    
    - It's occasionally the `gzip` stream encoding setting [or the `ob_gzhandler`](https://stackoverflow.com/questions/622192/php-warning-headers-already-sent-in-unknown).
    - But it could also be any doubly loaded `extension=` module generating an implicit PHP startup/warning message.  
          
        
7. ### Preceding error messages
    
    If another PHP statement or expression causes a warning message or notice being printed out, that also counts as premature output.
    
    In this case you need to eschew the error, delay the statement execution, or suppress the message with e.g. [`isset()`](http://php.net/isset) or [`@()`](http://php.net/@) - when either doesn't obstruct debugging later on.
    
### No error message

If you have `error_reporting` or `display_errors` disabled per `php.ini`, then no warning will show up. But ignoring errors won't make the problem go away. Headers still can't be sent after premature output.

So when `header("Location: ...")` redirects silently fail it's very advisable to probe for warnings. Reenable them with two simple commands atop the invocation script:

```php
error_reporting(E_ALL);
ini_set("display_errors", 1);
```

Or `set_error_handler("var_dump");` if all else fails.

Speaking of redirect headers, you should often use an idiom like this for final code paths:

```php
exit(header("Location: /finished.html"));
```

Preferably even a utility function, which prints a user message in case of `header()` failures.

### Output buffering as a workaround

PHPs [output buffering](http://www.php.net/manual/en/intro.outcontrol.php) is a workaround to alleviate this issue. It often works reliably, but shouldn't substitute for proper application structuring and separating output from control logic. Its actual purpose is minimizing chunked transfers to the webserver.

1. The [`output_buffering=`](http://php.net/manual/en/outcontrol.configuration.php) setting nevertheless can help. Configure it in the [php.ini](http://www.php.net/manual/en/configuration.file.php) or via [.htaccess](http://www.php.net/manual/en/configuration.changes.php) or even [.user.ini](http://php.net/manual/en/configuration.file.per-user.php) on modern FPM/FastCGI setups.  
    Enabling it will allow PHP to buffer output instead of passing it to the webserver instantly. PHP thus can aggregate HTTP headers.
    
2. It can likewise be engaged with a call to [`ob_start();`](http://php.net/ob_start) atop the invocation script. Which however is less reliable for multiple reasons:
    
    - Even if `<?php ob_start(); ?>` starts the first script, whitespace or a BOM might get shuffled before, [rendering it ineffective](https://stackoverflow.com/questions/2168956/php-header-problem-even-i-use-ob-start-and-ob-end-flush).
        
    - It can conceal whitespace for HTML output. But as soon as the application logic attempts to send binary content (a generated image for example), the buffered extraneous output becomes a problem. (Necessitating `ob_clean()` as a further workaround.)
        
    - The buffer is limited in size, and can easily overrun when left to defaults. And that's not a rare occurrence either, [difficult to track down](https://stackoverflow.com/questions/17643837/php-headers-already-sent-error-depending-on-output-length) when it happens.
        

Both approaches therefore may become unreliable - in particular when switching between development setups and/or production servers. This is why output buffering is widely considered just a crutch / strictly a workaround.

See also the [basic usage example](http://www.php.net/manual/en/outcontrol.examples.basic.php) in the manual, and for more pros and cons:

- [What is output buffering in PHP?](https://stackoverflow.com/questions/2832010/what-is-output-buffering)
- [Why use output buffering in PHP?](https://stackoverflow.com/questions/2148114/why-use-output-buffering-in-php)
- [Is using output buffering considered a bad practice?](https://stackoverflow.com/questions/4731375/is-using-output-buffering-considered-a-bad-practice)
- [Use case for output buffering as the correct solution to "headers already sent"](https://stackoverflow.com/questions/2919569/use-case-for-output-buffering-as-the-correct-solution-to-headers-already-sent)

### But it worked on the other server!?

If you didn't get the headers warning before, then the [output buffering php.ini setting](http://php.net/manual/en/outcontrol.configuration.php) has changed. It's likely unconfigured on the current/new server.

### Checking with `headers_sent()`

You can always use [`headers_sent()`](http://php.net/headers_sent) to probe if it's still possible to... send headers. Which is useful to conditionally print info or apply other fallback logic.

```php
if (headers_sent()) {
    die("Redirect failed. Please click on this link: <a href=...>");
}
else{
    exit(header("Location: /user.php"));
}
```

Useful fallback workarounds are:

- ### HTML `<meta>` tag
    
    If your application is structurally hard to fix, then an easy (but somewhat unprofessional) way to allow redirects is injecting a HTML `<meta>` tag. A redirect can be achieved with:
    
    ```php
     <meta http-equiv="Location" content="http://example.com/">
    ```
    
    Or with a short delay:
    
    ```php
     <meta http-equiv="Refresh" content="2; url=../target.html">
    ```
    
    This leads to non-valid HTML when utilized past the `<head>` section. Most browsers still accept it.
    
- ### JavaScript redirect
    
    As alternative a [JavaScript redirect](https://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-in-jquery-javascript) can be used for page redirects:
    
    ```php
     <script> location.replace("target.html"); </script>
    ```
    
    While this is often more HTML compliant than the `<meta>` workaround, it incurs a reliance on JavaScript-capable clients.
    

Both approaches however make acceptable fallbacks when genuine HTTP header() calls fail. Ideally you'd always combine this with a user-friendly message and clickable link as last resort. (Which for instance is what the [http_redirect()](https://php.uz/manual/en/function.http-redirect.php) PECL extension does.)

### Why `setcookie()` and `session_start()` are also affected

Both `setcookie()` and `session_start()` need to send a `Set-Cookie:` HTTP header. The same conditions therefore apply, and similar error messages will be generated for premature output situations.

(Of course, they're furthermore affected by disabled cookies in the browser or even proxy issues. The session functionality obviously also depends on free disk space and other php.ini settings, etc.)

### Further links

- Google provides a [lengthy list of similar discussions](http://www.google.com/search?q=php+headers+already+sent).
- And of course [many specific cases](https://stackoverflow.com/search?q=%5Bphp%5D+headers+already+sent) have been covered on Stack Overflow as well.
- The WordPress FAQ explains [How do I solve the Headers already sent warning problem?](http://codex.wordpress.org/FAQ_Troubleshooting#How_do_I_solve_the_Headers_already_sent_warning_problem.3F) in a generic manner.
- Adobe Community: [PHP development: why redirects don't work (headers already sent)](http://kb2.adobe.com/community/publishing/505/cpsid_50572.html)
- Nucleus FAQ: [What does "page headers already sent" mean?](http://faq.nucleuscms.org/item/79)
- One of the more thorough explanations is [HTTP Headers and the PHP header() Function - A tutorial by NicholasSolutions](http://web.archive.org/web/20080430141149/http://www.expertsrt.com/tutorials/Matt/HTTP_headers.html) (Internet Archive link). It covers HTTP in detail and gives a few guidelines for rewriting scripts.