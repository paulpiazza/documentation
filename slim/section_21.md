---
title: Lesson 1.19 - Return, Declare & Tickable Statements
description: Slim notes.
order: 21
---

[00:00](https://www.youtube.com/watch?v=6cPc_SEfgSw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=20&t=0s) - Return statement

The `return` statement is used in PHP to explicitly exit a function or method and optionally provide a value as the result of the function call. When the `return` statement is encountered, the execution of the function or method is immediately halted, and the control is returned back to the caller. The returned value, if provided, can be used by the calling code.

1. When the `return` statement is executed, the expression (optional) is evaluated.
2. If an expression is provided, its value becomes the return value of the function or method.
3. If no expression is provided, the function or method returns `null` by default.
4. The execution of the function or method immediately stops at the `return` statement, and the control is passed back to the caller.

[01:41](https://www.youtube.com/watch?v=6cPc_SEfgSw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=20&t=101s) - Declare statement (ticks directive)

The `declare` statement with the `ticks` directive was used in older versions of PHP (prior to PHP 7) to enable the usage of ticks as a means of triggering a function call at every specified number of executed statements. However, it is important to note that the `ticks` directive has been deprecated since PHP 5.3.0 and removed as of PHP 7.0.0. Therefore, it is no longer recommended or supported in current PHP versions.

The `declare` statement, along with the `ticks` directive, allowed developers to register a callback function that would be automatically invoked after a certain number of statements were executed, providing a form of statement-based event handling.



[03:22](https://www.youtube.com/watch?v=6cPc_SEfgSw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=20&t=202s) - Declare statement (encoding directive)

The `declare` statement with the `ticks` directive was used in older versions of PHP (prior to PHP 7) to enable the usage of ticks as a means of triggering a function call at every specified number of executed statements. However, it is important to note that the `ticks` directive has been deprecated since PHP 5.3.0 and removed as of PHP 7.0.0. Therefore, it is no longer recommended or supported in current PHP versions.

The `declare` statement, along with the `ticks` directive, allowed developers to register a callback function that would be automatically invoked after a certain number of statements were executed, providing a form of statement-based event handling.

Here's an example that demonstrates the usage of the `declare` statement with the `ticks` directive:

```php
declare(ticks=1);

function tickHandler() {
    // Code to be executed at each tick
    echo "Tick!\n";
}

register_tick_function('tickHandler');

// Rest of the code
```

In this example, the `declare` statement sets the `ticks` directive to `1`, indicating that the `tickHandler()` function should be called after every executed statement. The `register_tick_function()` function is used to register the `tickHandler()` function as the callback to be invoked at each tick.

It's worth noting that the usage of ticks and the `ticks` directive had certain limitations and could introduce performance overhead. As a result, it was deprecated and eventually removed from PHP. Therefore, it is recommended to use alternative approaches, such as event-driven programming or specific callbacks, to achieve similar functionality in modern PHP versions.

[03:43](https://www.youtube.com/watch?v=6cPc_SEfgSw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=20&t=223s) - Declare statement (strict_types directive)

The `declare` statement with the `strict_types` directive is used in PHP to enforce strict type checking for scalar type declarations in function and method arguments and return types. It was introduced in PHP 7.0 as a way to improve the consistency and reliability of type handling in PHP code.

When the `strict_types` directive is enabled using the `declare` statement, it affects the entire file in which it is declared. Here's an example to illustrate its usage:

```php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

$result = add(2, 3);  // The function call is type-checked

var_dump($result);  // Output: int(5)
```

In this example, the `strict_types` directive is set to `1` within the `declare` statement. It enforces strict type checking for the file. The `add()` function is defined with strict scalar type declarations for its arguments (`int`) and return type (`int`). When calling the function, if the provided arguments do not match the specified types, a `TypeError` will be thrown. The strict type checking ensures that the returned value is of the declared type.

By enabling the `strict_types` directive, PHP behaves more strictly regarding type declarations. It helps prevent unintended type coercion and promotes better code quality and reliability. However, it's important to note that the strict type checking only applies to scalar type declarations (such as `int`, `string`, `float`, `bool`), and not to non-scalar types like arrays and objects.

It's worth mentioning that the `strict_types` directive must be declared at the top of the file before any other code, including `namespace` declarations and `use` statements. Additionally, the `strict_types` directive does not affect functions or code in other files.

Overall, the `declare` statement with the `strict_types` directive provides a way to enforce stricter type checking in PHP, improving code quality and reducing potential type-related bugs.

[05:45](https://www.youtube.com/watch?v=6cPc_SEfgSw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=20&t=345s) - Goto statement

> [!error]
> Bad practice!

The `goto` statement is a control statement in PHP that allows you to transfer the program's execution to a labeled statement elsewhere in the code. It provides an unconditional jump to a specified label, bypassing the normal flow of control.

The basic syntax of the `goto` statement is as follows:

```php
goto label;
```

To use the `goto` statement, you need to define a label at the target location in your code:

```php
label:
// Code to be executed
```

Here's an example to illustrate the usage of the `goto` statement:

```php
goto jump;

echo "This will not be executed.";

jump:
echo "Jumped to the label.";
```

In this example, the program will execute the `goto jump;` statement and immediately jump to the `jump` label. The code following the `goto` statement will be skipped, and the output will be "Jumped to the label."

It's important to use the `goto` statement with caution, as it can make code harder to read and understand. Improper use of `goto` can lead to spaghetti code and make program logic difficult to follow. Therefore, it is generally recommended to use structured control statements (such as `if`, `switch`, `for`, `while`, etc.) to maintain a clear and logical flow in your code.

It's worth noting that the `goto` statement cannot jump into or out of a loop or a conditional block (`if`, `switch`, etc.). Additionally, the use of `goto` is limited within the same file scope, meaning you cannot jump to a label defined in a different file or function.

Due to its potential for misuse and the negative impact on code readability, it is generally advisable to avoid using the `goto` statement unless you have a specific and justified use case where it significantly improves code structure and clarity.
