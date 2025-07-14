---
title: Lesson 3.25 - Intro to Templating Engines - Blade & Twig
description: Slim notes.
order: 96
---

Sure, I can provide you with some essential information about Twig with PHP.

Twig is a templating engine for PHP, which means it allows you to separate the presentation layer (HTML, CSS) from the application logic layer (PHP). This makes your code more maintainable and easier to work with.

Some benefits of using Twig include:

- Clean and readable syntax
- Automatic HTML escaping to prevent cross-site scripting (XSS) attacks
- Extensible with custom functions, filters, and tags
- Easy to integrate with popular PHP frameworks like Symfony and Laravel

To use Twig in your PHP project, you need to install it using Composer. Once installed, you can create Twig templates and render them using the Twig environment object. 

Here's an example of a simple Twig template:

```twig
<!DOCTYPE html>
<html>
<head>
    <title>{{ page_title }}</title>
</head>
<body>
    <h1>{{ heading }}</h1>
    <p>{{ content }}</p>
</body>
</html>
```

And here's an example of rendering that template in PHP:

```php
<?php

require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('path/to/templates');
$twig = new \Twig\Environment($loader);

echo $twig->render('template.html', [
    'page_title' => 'My Page',
    'heading' => 'Welcome to my page',
    'content' => 'Lorem ipsum dolor sit amet...',
]);
```

#### XSS Attacks

XSS attacks occur when an attacker injects malicious code into a web page, which is then executed by the victim's browser. This can lead to a range of issues, from stealing sensitive information to hijacking user sessions.

Twig helps prevent XSS attacks by automatically escaping any data that is output in a template. This means that any special characters in the data (such as <, >, and &) are converted to their HTML entities, which are safe to display in the browser.

For example, if you have a variable in your PHP code that contains the following string:

```php
$name = '<script>alert("Hello!");</script>';
```

If you were to output this variable directly in your HTML template, like this:

```html
<p>Hello, {{ name }}!</p>
```

The resulting HTML would be:

```html
<p>Hello, <script>alert("Hello!");</script>!</p>
```

This would execute the `alert()` function when the page is loaded, which is not what we want.

However, if we use Twig to output the variable like this:

```twig
<p>Hello, {{ name|e }}!</p>
```

The resulting HTML would be:

```html
<p>Hello, &lt;script&gt;alert("Hello!");&lt;/script&gt;!</p>
```

This converts the special characters to their HTML entities, which are safe to display in the browser and won't execute any malicious code.

