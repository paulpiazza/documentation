---
title: Lesson 1.6 - Integer Data Type
description: Slim notes.
order: 8
---

```php
// predefined php constants can show you information about integer (MIN, MAX, SIZE, etc)
PHP_INT_MIN;
PHP_INT_MAX;
// etc...

$x = 5; // decimal
$x = 0x2A; // hexa
$x = 055; // octal
$x = 0b11; // binary

$x = (int) PHP_INT_MAX + 1; // type change to float

$x = (int) true; // 1
$x = (int) 5.98; // 5 rounds down
$x = (int) '4.9'; // 4
$x = (int) '48adqusi'; // 48
$x = (int) 'adqusi'; // 0
$x = (int) null; // 0

is_int($x); // true

// readable numbers;
$x = 2_000_000_000; // int 2000000000
```
