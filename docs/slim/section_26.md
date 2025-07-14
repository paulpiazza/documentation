---
title: Lesson 1.24 - Variable, Anonymous, Callable, Closure & Arrow Functions
description: Slim notes.
order: 26
---

[00:20](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=20s) - Variable functions 

Variable functions allow you to use a variable as the name of a function. You can assign a function name to a variable and then use that variable to call the function. This provides dynamic control over which function to call based on the value of the variable.

```php
function sayHello() {
	echo "Hello, World!";
}

$functionName = "sayHello";

$functionName(); // This will call the sayHello() function and output "Hello, World!"
```

[01:49](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=109s) - Anonymous functions

Anonymous functions, also known as closures, are functions without a specific name. They can be assigned to variables, passed as arguments to other functions, and used as return values from other functions. Closures are useful for defining small, self-contained code blocks that can be reused or passed around.


```php
$greet = function ($name) { 
	echo "Hello, $name!";
};

$greet("John"); // Output: "Hello, John!"
```


[02:38](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=158s) - Closures & accessing variables from the parent scope

Example of a closure:

```php
$add = function ($a, $b) {
    return $a + $b;
};

echo $add(2, 3); // Output: 5
```


Closure with `use` Keyword (Closures with Bound Variables): Closures can capture variables from the outer scope using the `use` keyword. This allows you to pass variables from the outer scope into the closure's context.


```php
$factor = 10;

$multiplier = function ($num) use ($factor) {
	//$factor is a copy. Modification are applied only in this function.
	return $num * $factor;
}; 

echo $multiplier(5); // Output: 50 (5 * 10)
```


[03:53](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=233s) - Callable data type & callback functions

The term "callable" is a data type that represents any type of callable entity, including regular functions, closures, and methods of objects. It allows you to treat functions and callable objects uniformly, making it easier to pass them as arguments or store them in arrays.

```php
function addNumbers($a, $b) {
	return $a + $b;
} 

$operation = 'addNumbers';

$result = call_user_func($operation, 2, 3);

echo $result; // Output: 5
```

An exemple of callback function with functions on arrays, you can call the name of your callback.

```php
$arr = [1,2,3];

function foo($element) {
	return $element * 2;
}

$array2 = array_map('foo', $arr);

```

Wrap all:

```php
function foo($element) {
	return $element * 2;
}

$sum = function(callable $callback, int ...$numbers): int {
	return $callback(array_sum($numbers));
};

echo $sum('foo', 1, 2, 3);

// ----

// with closure
$callback = function ($element) {
	return $element * 2;
};

$sum = function(callable $callback, int ...$numbers): int {
	return $callback(array_sum($numbers));
};

echo $sum($callback, 1, 2, 3);
```

[05:41](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=341s) - Closure vs callable

In PHP, both closures and callables are used to represent and work with functions or code blocks that can be invoked at runtime. However, there are some differences between them:

- Closures, also known as anonymous functions, are functions without a specific name. They are defined using the `function` keyword or the newer arrow function syntax (PHP 7.4 and later).
- Closures can capture variables from the outer scope using the `use` keyword, allowing them to access variables defined outside of the closure's context.
- Closures are objects of the `Closure` class, and they can be assigned to variables, passed as arguments to other functions, or returned from other functions.
- Closures are particularly useful when you need to create small, self-contained code blocks that can be passed around as first-class citizens in your code.

- The term "callable" in PHP is a type hint that represents any type of callable entity. It can refer to regular functions, closures, and methods of objects.
- Callables can be used with functions like `call_user_func()`, `array_map()`, `usort()`, and others that expect a callable argument.
- The `is_callable()` function can be used to check if a variable is a callable before invoking it.

In summary, closures are a specific type of callable that represents anonymous functions and can capture variables from the outer scope. 

On the other hand, the term "callable" is more general and encompasses all types of functions or code blocks that can be invoked at runtime, including closures.

[06:05](https://www.youtube.com/watch?v=7_FOIxYLF-s&t=365s) - Arrow functions

Arrow Functions (Introduced in PHP 7.4): Arrow functions are a more concise syntax for writing closures with a single expression. They do not support capturing variables from the outer scope using `use` but are convenient for simple operations that require a single expression.

Arrow functions are especially useful for short callbacks, such as those used in array functions like `array_map()`, `array_filter()`, etc.

```php
$add = fn ($a, $b) => $a + $b;
echo $add(2, 3); // Output: 5

// ----
$array = [1, 2, 3];

// first method
$ar = array_map(function($number) {
	return $number * 2;
}, $array)

// with arrow fn
// it's more concise
$ar = array_map(fn($number) => $number * 2, $array);

// difference 1
// you can use variable before the fn but not with the anonymous function
// you must apply use keyword
$f = 2;
$ar = array_map(fn($number) => $number * $f, $array);
$ar = array_map(function($number) use ($f) {
	return $number * $f;
}, $array)

// difference 2
// the arrow function can't have multiple lines.

```

