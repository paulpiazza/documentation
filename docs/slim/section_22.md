---
title: Lesson 1.20 - Include & Require
description: Slim notes.
order: 22
---

[00:00](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=0s) - Include & Require

In PHP, both `include` and `require` are used to include and evaluate external PHP files within another PHP file.

[00:42](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=42s) - Syntax

```php
include 'file.php';
require 'file.php';
```

[01:00](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=60s) - Difference between include & require

The `include` statement allows the script to continue running even if the included file is missing or encounters an error.

It is commonly used when including non-critical files or files that may not always be available.

The `require` statement ensures that the included file is essential for the script to function properly.

It is commonly used when including critical files or files that are necessary for the script's operation.


[01:30](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=90s) - How are files located/loaded

```php
// look by default in the main dir configured by php.ini
// see include_path configuration
require 'file.php'; 
```


[02:13](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=133s) - Difference between include_once, require_once & include, require

if you repeat twice a require, it will be executed twice. 

With the require_once, it checks if the file has already been included, and if so, it is not included again.

[02:35](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=155s) - Example usage of require_once with the variable being overwritten if the file is included more than once

[04:13](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=253s) - Bad practice

>[!warning]
> Nether declare a variable in a file and modify it in an other file. You should define functions in files and import it with require_once.

[04:48](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=288s) - Return value of include & using return within the included file


The `include` statement does not have a specific return value. You will get false if the file isn't exist or true if it exists.

If the included file contains code that produces output or returns a value, that output or value will be directly executed or returned within the context of the including file.

For example, consider the following files:

**index.php:**
```php
$result = include 'included.php';
echo "Returned value: $result";
echo "Returned value: $variable";
```

**included.php:**
```php
$variable = 'Hello, World!';
```

```
Returned value:1
Returned value: Hello, World!
```

In this scenario, when `index.php` is executed, it includes the file `included.php` using the `include` statement. The `included.php` file contains a variable assignment and a `return` statement.

The `include` statement executes the code within `included.php` in the context of `index.php`. The variable `$variable` is assigned the value `'Hello, World!'`, but the `return` statement does not directly affect the value of `$result` in `index.php`. You will get a warning.


If you want to assign a value from the included file to a variable in the including file, you can use the `return` statement in the included file and capture the value when executing the include statement:

**index.php:**
```php
$variable = include 'included.php';
echo "Returned value: $variable";
```

**included.php:**
```php
$variable = 'Hello, World!';
return $variable;
```

Now, the output of `index.php` will be:
```
Returned value: Hello, World!
```


[05:27](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=327s) - Using include within HTML for code re-usability

In PHP, you can use the `include` or `require` statements within HTML to include reusable code snippets or templates. This approach allows you to separate your code logic from the HTML markup and promotes code reusability and maintainability. Here's an example of using `include` within HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
    <?php include 'header.php'; ?>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <?php include 'content.php'; ?>
    </div>
    <?php include 'footer.php'; ?>
</body>
</html>
```

In this example, we have an HTML structure with different sections. The `include` statements are used to insert the contents of separate PHP files within specific parts of the HTML.

- The `header.php` file contains the code for the website header, which may include navigation menus, logo, etc.
- The `content.php` file contains the code for the main content section of the page.
- The `footer.php` file contains the code for the website footer, which may include copyright information, links, etc.

By separating the header, content, and footer into separate files, you can reuse these code snippets across multiple pages. If you need to update the header or footer, you only need to modify the respective included file, and the changes will be reflected across all pages where the file is included.

This approach promotes modularization, improves code organization, and makes it easier to maintain and update your website or application.

Remember to use `include` when the included file is not essential, and a failure to include it can be tolerated. Use `require` when the included file is critical, and the script should not proceed if it cannot be included.

[06:59](https://www.youtube.com/watch?v=pQLO6l5lp-Y&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=21&t=419s) - Including file into a string using output control functions (storing HTML of the included file in a string instead of printing it)

To include a file into a string instead of directly printing it, you can use PHP's output control functions: `ob_start()`, `include`, and `ob_clean()`. These functions allow you to capture the output of the included file and store it in a string variable. Here's an example:

```php
ob_start(); // Start output buffering

include 'included.php'; // Include the file and capture its output

$content = ob_get_clean(); // Get the captured output and clear the buffer

echo $content; // Output the captured content
```

In this example, let's assume we have a file named `included.php` that contains HTML markup:

**included.php:**
```php
<h1>Welcome to My Website</h1>
<p>This is some content.</p>
```

Now, let's explain the steps:

1. `ob_start()`: This function starts output buffering, which means that any output generated by PHP will be stored in an internal buffer instead of being directly sent to the output.

2. `include 'included.php'`: The `include` statement is used to include the `included.php` file. Instead of directly printing the output, it will be captured by the output buffer.

3. `ob_get_clean()`: This function retrieves the content of the output buffer and clears it. The captured output is assigned to the variable `$content`.

4. `echo $content`: Finally, we can use `echo` or perform any further operations on the captured content, such as storing it in a database, manipulating it, or using it as needed.

By using these output control functions, you can include a file and store its HTML output in a string variable, allowing you to manipulate or process the HTML content further before displaying or using it.

Remember to use `ob_start()` at the beginning to start output buffering, `include` to include the file and capture its output, and `ob_get_clean()` to retrieve the captured content and clear the output buffer.
