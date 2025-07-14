---
title: Lesson 1.23 - Variable Scopes & Static Variables
description: Slim notes.
order: 25
---

[00:00](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=0s) - Variable scope

Variable scope in PHP refers to the visibility and accessibility of variables within different parts of a program.

[00:25](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=25s) - Global scope 

- Variables declared outside of any function or class have global scope. Use `include` method and you will have access to one.
- Global variables can be accessed from anywhere in the program, including within functions and classes. To access a global variable within a function, you need to use the `global` keyword or the `$GLOBALS` superglobal array.

[01:00](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=60s) - Local scope

- Variables declared within a function have local scope.
- Local variables are only accessible within the function in which they are declared.
- They are destroyed and no longer accessible once the function execution is completed.

[01:41](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=101s) - Using global keyword to access variables in the global scope

```php
$t = "test";

function test() {
	global $t; // you can access to the variable ...
	$t = " ici";
	echo $t; // ... but you can update it only in the function
}

echo $t;

test();

//test ici
```

[02:12](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=132s) - How are global variables stored & GLOBALS superglobal

See [superglobals](https://www.php.net/manual/en/language.variables.superglobals.php)

You should avoid.

```php
$t = "test";

function test() {
	$GLOBALS['t'] = " ici"; 
	echo $GLOBALS['t'];
}

echo $t;

test();

//test ici
```


[03:13](https://www.youtube.com/watch?v=et1aVZWMvVE&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=24&t=193s) - Static variables

Static variables are useful in scenarios where you need to track and maintain data across multiple calls to a function. They provide a way to store and access information within the local scope of a function without using global variables or relying on external storage.

- Static variables are local variables that preserve their value across multiple function calls.
- Unlike regular local variables, static variables are not destroyed when the function execution ends.
- Static variables retain their value for subsequent invocations of the function.
- Static variables are declared using the `static` keyword within a function.

```php
function incrementCounter() {
    static $counter = 0;
    $counter++;
    echo "Counter: $counter\n";
}

incrementCounter();  // Output: Counter: 1
incrementCounter();  // Output: Counter: 2
incrementCounter();  // Output: Counter: 3
```

In this example, the `incrementCounter()` function has a static variable named `$counter`. 

- The `static` keyword is used to declare the variable as static.
- The initial value of `$counter` is set to `0`.
- Each time the `incrementCounter()` function is called, the value of `$counter` is incremented by `1`.
- The value of `$counter` is retained between multiple function calls because it is a static variable.

The static variable `$counter` preserves its value across multiple invocations of the `incrementCounter()` function. This behavior allows the function to maintain state between calls, as the value of `$counter` is not reset to `0` each time the function is executed.

