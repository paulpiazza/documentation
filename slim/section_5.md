---
title: Lesson 1.3 - Constants & Variable Variables
description: Slim notes.
order: 5
---


[00:59](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=59s) Using define()

You can define a constant with `define`.

You cannot change the value of a constant.

[01:28](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=88s) Constant Naming Rules

The name respect variables naming rules.

A constant is written in uppercase and camelcase.

[02:00](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=120s) Print Constants

You do not need to put `$` before.

[02:23](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=143s) Check If Constant Has Been Defined 

```php
defined('MY_CONST');
```

[03:05](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=185s) Using Const Keyword 

```php
const MY_CONSTANT = 100;
```

[03:18](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=198s) Differences 

Constant defined with `const` are defined at a compile time while constant defined with `define` are defined at a runtime. This mean you cannot use a constant define with `const` into a loop or If...Else statement.

[04:14](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=254s) Dynamic Constant Names 

You define dynamically constants with `define` method into a loop of an if...Else statement.

[04:49](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=289s) When To Use Constants

Used for status.

[05:03](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=303s) Predefined Constants

There are plenty of PHP [predefined constants](https://www.php.net/manual/en/reserved.constants.php)

[05:38](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=338s) Magic Constants 

There are plenty of PHP [magic constants](https://www.php.net/manual/en/language.constants.magic.php)

They may changed whenever there are used.

[06:14](https://www.youtube.com/watch?v=6JtP8xk1U_k&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=4&t=374s) Variable Variables

A varibale variable takes the value of the variable and treats that as the name of the new variable.

```php
$var = 'name';
$$var = 'paul'; // same with $name = 'paul'
```

It's a dynamic variable declaration.
