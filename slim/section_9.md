---
title: Lesson 1.7 - Float Data Type
description: Slim notes.
order: 9
---

```php
// predefined php constants can show you information about float (MIN, MAX, SIZE, etc)
PHP_FLOAT_MIN;
PHP_FLOAT_MAX;
// etc...

$x = 13.5e-3; // 0.0135
$x = 13_452e2; // 1345200

$x = floor(4.562); // 4 (rounds down)
$x = ceil(4.562); // 5 (rounds up)

$x = (float) 5; // 5.0
$x = (float) '5.4'; // 5.4
$x = (float) 'dsdqsde'; // 0
```

>[!warning]
>
> _**Never compare float numbers! Never calculate with float numbers. Never trust!**_
>
>
> 
> ```php
> $x = floor((0.1 + 0.7) * 10);
> ```
> We expect 8 but get 7 because 0.1 and 0.8 do not have the same representation as the floating point number is in base 2 which is binary.
> 
> Binary is used internally to store the floating numbers and therefore when converting this into a binary internally it loses some of the precision.
> 
> The results here is 7.99999999, and `floor` rounds down.

### The constant `NAN` and `INF`

```php
echo NAN; // NAN (not a number)
is_nan($x);

echo INF; // INF (infinity)
is_infinity($x);
```
