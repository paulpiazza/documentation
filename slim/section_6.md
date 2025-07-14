---
title: Lesson 1.4 - Data Types & Casting
description: Slim notes.
order: 6
---

[00:00](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=0s) - Intro

You are not required to type your variables.

Scalar Types
* bool
* int
* float
* string

Compound Types
* array
* object
* callable
* iterable

Special Types
* resource
* null


[00:19](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=19s) - Dynamically Types vs Statically Typed 

No type. More flexible but loose performance. It can create buggs.

[01:18](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=78s) - Scalar Types (bool, int, float, string)

| type | gettype | values |
| --- | --- | --- |
| `bool` | `'boolean'` | `true - false` |
| `int` | `'integer'` | `0` , `-1`, `42` ... |
| `float` | `'double'` | `0`, `-1.56`, ... |
| `string` | `'string'` | `''`, `' '`, `'my string'` |


[03:05](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=185s) - Get The Type Of The Variable (gettype, var_dump)

```php
$boolean = true;
echo gettype($boolean); // return 'boolean'
```

`var_dump` print the type and the value.

```php
$boolean = true;
var_dump($boolean): // bool(true)
```

[04:25](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=265s) - Arrays (Compound Types) 

It is just a list of items.

PHP can not convert array into a string. See configuration file.

```php
$arr = [];

$arr = [
	true, 1, 5.023, 'ok', ''
]

echo $array; // displays Array

```

Use `print_r` or `var_dump` instead.

[06:19](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=379s) - Null Type

Means no value.

[06:25](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=385s) - Automatic Type Detection

PHP determine automatically the type of a variable with the value of the first declaration.

[07:05](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=425s) - Type Hinting Example

Type hinting in PHP is a feature that allows you to specify the expected data type for a parameter in a function or method declaration. 

It helps to enforce type safety and provides better code readability and maintainability. 

```php
function calculateSum(int $num1, int $num2): int {
    return $num1 + $num2;
}
```


[08:22](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=502s) - Type Juggling / Type Coercion

Type juggling in PHP refers to the automatic conversion or manipulation of data types during certain operations.

PHP is a dynamically typed language, which means that variables are not bound to a specific data type. As a result, PHP can perform implicit type conversions to make the code work in certain situations.

1. Numeric Strings to Numbers

```php
$num1 = "10"; 
$num2 = 5; 
$sum = $num1 + $num2; 
echo $sum; // Output: 15
```

2. String to Numbers

```php
$num1 = "10"; 
$num2 = 5;
$sum = $num1 + $num2;
echo $sum; // Output: 15
```

3. Concatenation of Numbers and Strings

```php
$str = "The number is: " . $num; 
echo $str; // Output: "The number is: 10"
```

4. Comparison of Different Data Types

```php
$str = "The number is: " . $num; 
echo $str; // Output: "The number is: 10"
```

If PHP does not arrive to convert the variable, it throws un error TypeError.

[10:15](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=615s) - Strict Types

It's recommended to use strict types. The type of your variable is predictable.

```php
declare(strict_types=1);
```

It provides better quality of code.

For functions, you are not able to put any type of variable.

[11:12](https://www.youtube.com/watch?v=KH4MmQsCDuw&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=5&t=672s) - Type Casting

Put the type into parentheses.

```php
$x = (int)'5'; // cast string into int
```
