---
title: Lesson 1.21 - Functions & Type Hinting
description: Slim notes.
order: 23
---

[00:00](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=0s) - Functions

A function is a named block of code in PHP that performs a specific task or a set of related tasks.

It is a fundamental building block of modular and reusable code. Functions allow you to organize code into logical units, encapsulate functionality, and promote code reusability.

[00:36](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=36s) - Creating functions

```php
function functionName(parameter1, parameter2, ...) {
    // Function body (code to be executed)
    // Optionally, return a value using the return statement
}

```

Let's break down the different components of a function:

- `function`: The keyword used to define a function in PHP.
- `functionName`: The name you choose for your function. It should be unique within the same scope.
- `parameter1, parameter2, ...`: Optional input parameters that the function can accept. These are variables that hold values passed into the function when it is called.
- `{}`: Encloses the function body, which contains the code to be executed when the function is called.
- `return`: An optional statement used to return a value from the function to the caller. It terminates the execution of the function and passes the specified value back.


[01:10](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=70s) - Return values from functions

Use the keyword `return`

```php
function addNumbers($a, $b) {
    $sum = $a + $b;
    return $sum;
}

$result = addNumbers(2, 3);
echo $result;  // Output: 5
```


[01:52](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=112s) - Where to define functions

Before or after the call to the function.

[02:14](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=134s) - Declaring functions conditionally

If you define conditionally a function you need to organize the order of functions.

[02:49](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=169s) - Inner functions

You can create functions declare in another function.

Pay attention the scope of the function. The function is used in the scope here it's declared.

```php
function foo() {
    echo "foo";
	bar(); // ok
    
    function bar() {
	    echo "bar";
	}
}

bar(); // error!
```

>[!Error]
>It's a bad practice!

[03:47](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=227s) - Functions with the same name 

You can't declare two functions with the same name in the same scope.

[04:21](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=261s) - Return types & strict types

Remember to use strict types, however your return types will not work.

```php
declare(strict_types=1);

function foo(): int {
	return 1;
	return null; // error
}

function bar(): void {
	return ; // default return will be null
	return null; // get an error because you are trying to return a sort of value.
}
```

[06:13](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=373s) - Nullable types

```php
declare(strict_types=1);

// you can return int or null
function bar(): ?int {
	return null; 
}
```

[06:43](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=403s) - Union types (type hinting multiple types)

```php
declare(strict_types=1);

// you can return int or float or array
function bar(): float|int|array {
	return 1; 
}
```

[07:05](https://www.youtube.com/watch?v=ba1rulfNhLk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=22&t=425s) - Mixed type

```php
declare(strict_types=1);

// if you return multiple type 
function bar(): mixed {
	return 1; 
}
```

The more explicit you are in the typing, the less you will get errors. Be careful when using mixed.
