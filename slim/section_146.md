---
title: immediately invoked function execution
description: Slim notes.
order: 146
---

The syntax you provided, `(require __DIR__ . '/routes.php')($app);`, is a combination of requiring a file and immediately invoking a function from that file. Let's break down each part:

1. `require __DIR__ . '/routes.php'`: This part uses the `require` statement to include the contents of the "routes.php" file located in the same directory as the current script. `__DIR__` represents the directory of the current script. So, this line loads the code from "routes.php".

2. `(...)` immediately followed by `($app)`: This is the syntax for invoking a function immediately after its definition. It's known as "immediately invoked function execution" (IIFE).

Putting it all together, `(require __DIR__ . '/routes.php')($app);` means that you are including the "routes.php" file and then immediately invoking a function defined in that file, passing `$app` as an argument to the function.

For example, in "routes.php", you might have something like:

```php
return function ($app) {
    // Define routes and configure the $app object
    // ...
};
```

The file "routes.php" defines an anonymous function that expects an argument `$app`, which is then invoked immediately after requiring the file. This pattern is often used in modern PHP applications to encapsulate route definitions or other configuration in separate files while keeping the code execution concise and controlled.

