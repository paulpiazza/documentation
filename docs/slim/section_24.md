---
title: Lesson 1.22 - Function Parameters - Named Arguments - Variadic Functions & Unpacking
description: Slim notes.
order: 24
---

[00:00](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=0s) - Function parameters

When defining a function in PHP, you can specify function parameters (also called arguments) to accept values that are passed into the function when it is called. Parameters allow you to make your functions more flexible and reusable by allowing different values to be passed into the function's code. Here's how you can define function parameters:

[00:19](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=19s) - Define function parameters

```php
function functionName(parameter1, parameter2, ...) {
    // Function body (code to be executed)
}

function greet($name, $greeting) {
    echo "$greeting, $name!";
}
```

To call a function and pass values to its parameters, you simply provide the values within the parentheses when calling the function:

```php
greet("John", "Hello");
```

When the `greet` function is called with the arguments `"John"` and `"Hello"`, the parameters `$name` and `$greeting` within the function are assigned those values. 

[00:45](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=45s) - Parameters vs arguments

```php
greet("John", "Hello"); // John and Hello are the arguments

function greet($name, $greeting) { // name and greeting are the parameters
    echo "$greeting, $name!";
}
```

[01:04](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=64s) - Type hinting

```php
declare(strict_type=1);

function greet(string $name, string $greeting) { 
    echo "$greeting, $name!";
}
```


[01:39](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=99s) - Union types 

See [Union](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.union.coercive)

```php
declare(strict_type=1);

// since php 7
function greet(string|float $name, bool|string $greeting) { 
    
}
```


[02:25](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=145s) - Default values

```php
declare(strict_type=1);

// require and optional parameters
function greet(int $num, string $name = '') { 
    
}
```

Your optional parameters must be __after__ the required parameters.

[03:01](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=181s) - Passing arguments by value vs by reference

Passing by Value:
- By default, arguments in PHP are passed by value.
- When a value is passed by value, a copy of the original value is made and used within the function.
- Any modifications made to the argument within the function do not affect the original value outside of the function.

```php
function increment($num) {
	$num++;
}

$value = 5;
increment($value);
echo $value;  // Output: 5
```

Passing by Reference:
- Passing an argument by reference allows the function to directly modify the original value outside of the function.
- To pass an argument by reference, you need to explicitly specify the ampersand (`&`) before the parameter in both the function declaration and the function call.

```php
function incrementByReference(&$num) {
   $num++;
}

$value = 5;
incrementByReference($value);
echo $value;  // Output: 6
```

In this example, the `incrementByReference` function takes an argument `$num` passed by reference. The `&` before `$num` indicates that changes made to `$num` within the function will affect the original value passed as an argument. As a result, the increment operation (`$num++`) directly modifies the original value of `$value`, resulting in `6` when echoed outside of the function.

Passing arguments by value is the default behavior and ensures that modifications within the function do not affect the original values outside. However, when you need a function to modify the original values, passing arguments by reference can be used to achieve that. 


[04:00](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=240s) - Variadic functions - splat operator - capture passed arguments

In PHP, a variadic function is a function that can accept a variable number of arguments. 

The splat operator (`...`) is used to capture the passed arguments as an array within the function. 

```php
function functionName(...$arguments) {
    // Function body (code to be executed)
}
```

```php
function sum(int ...$numbers) {
    $total = 0;
    foreach ($numbers as $number) {
        $total += $number;
    }
    return $total;
}

$result = sum(2, 4, 6, 8);
echo $result;  // Output: 20
```

```php
function concatenate(string ...$strings) {
    return implode(' ', $strings);
}

$result = concatenate('Hello', 'World', '!');
echo $result;  // Output: Hello World !
```

Keep in mind that the splat operator must be the last parameter in the function declaration, and a function can have only one variadic parameter.

[06:47](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=407s) - Argument unpacking with splat (elipsis / three dot) operator

the splat operator (also known as the ellipsis or three-dot operator) can be used for argument unpacking.

```php
function sum($a, $b, $c) {
    return $a + $b + $c;
}

$numbers = [2, 4, 6];
$result = sum(...$numbers);
```

[07:39](https://www.youtube.com/watch?v=I9XkWyets9w&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=23&t=459s) - PHP8 named arguments

See [named arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments)

```php
declare(strict_type=1);

function greet(string|float $name, bool|string $greeting) { 
    
}

// (since php 8) using named arguments
greet(greeting: 'thx', name: 'hi');

// you can use the unpacking
$arr = ['greeting' => 'test', 'name' => 'here'];
greet(...$arr);
```

