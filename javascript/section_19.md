---
title: Scopes
description: Slim notes.
order: 19
---

Let’s review the following terms:

- **Scope** refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
- **Blocks** are statements that exist within curly braces `{}`.
- **Global scope** refers to the context within which variables are accessible to every part of the program.
- **Global variables** are variables that exist within global scope.
- **Block scope** refers to the context within which variables are accessible only within the block they are defined.
- **Local variables** are variables that exist within block scope.
- **Global namespace** is the space in our code that contains globally scoped information.
- **Scope pollution** is when too many variables exist in a namespace or variable names are reused.


In JavaScript, scope refers to the visibility and accessibility of variables, functions, and objects in a particular part of your code. It determines where variables and functions are defined and where they can be accessed.

JavaScript has two main types of scope: global scope and local scope.

1. Global Scope:
   - Variables declared outside of any function or block have global scope.
   - Global variables can be accessed from anywhere in your code, including inside functions or blocks.
   - They are accessible by other scripts and can persist throughout the lifetime of your application.
   - However, using too many global variables can lead to naming conflicts and make your code harder to maintain.

Example of a global variable:

```javascript
var globalVar = "I am a global variable";

function myFunction() {
  console.log(globalVar); // Accessible inside the function
}

console.log(globalVar); // Accessible outside the function
```

2. Local Scope:
   - Variables declared inside a function or block have local scope.
   - Local variables are only accessible within the function or block where they are defined.
   - They are not visible or accessible from outside the enclosing function or block.
   - Each function or block creates its own scope, allowing you to have variables with the same name in different scopes without conflicts.

Example of local scope:

```javascript
function myFunction() {
  var localVar = "I am a local variable";
  console.log(localVar); // Accessible inside the function
}

myFunction();
console.log(localVar); // Error: localVar is not defined (not accessible outside the function)
```

3. Block Scope (Introduced in ES6):
   - Variables declared with `let` and `const` keywords have block scope.
   - Block scope refers to variables that are accessible within the block of code where they are defined.
   - A block is typically defined by curly braces `{}` and can include if statements, loops, and functions.
   - Block-scoped variables are not accessible outside the block where they are defined.

Example of block scope:

```javascript
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible inside the block
}

console.log(blockVar); // Error: blockVar is not defined (not accessible outside the block)
```

Block scope allows for more fine-grained control over variable visibility and helps prevent unintended side effects or conflicts.

Understanding scope is crucial for writing clean and maintainable JavaScript code. By properly managing variable scope, you can avoid naming collisions, improve code organization, and reduce bugs caused by unintended variable access.

I hope this explanation clarifies the notion of scope, block scope variables, and global variables in JavaScript. Let me know if you have any further questions!

In JavaScript, the global namespace refers to the space where global variables, functions, and objects exist. It is the outermost scope that encompasses your entire codebase. When variables or functions are defined in the global namespace, they can be accessed from anywhere in your code.

Scope pollution occurs when there is an excessive or unintended use of global variables or when variables are declared without proper scoping. This can lead to naming conflicts, unintended variable modifications, and difficulties in code maintenance and debugging.

Scope pollution can have several negative effects:

1. Naming Conflicts: If multiple variables or functions with the same name are declared in the global namespace or shared scope, they can overwrite each other's values or behaviors, causing unexpected results.

2. Unintended Variable Modifications: Since global variables are accessible from anywhere, they can be modified accidentally by different parts of your code. This can lead to hard-to-find bugs and unexpected behavior.

3. Difficulty in Code Maintenance: When variables or functions are scattered throughout the global namespace, it becomes challenging to track and manage them. It can make code maintenance, debugging, and collaboration more difficult.

To avoid scope pollution and maintain a clean and manageable codebase, it is recommended to follow these best practices:

1. Use Local Scope: Declare variables and functions within the appropriate local scopes (functions or blocks) to limit their visibility and accessibility. This helps prevent naming conflicts and unintended modifications.

2. Use Modules: Utilize JavaScript modules to encapsulate code within separate files and avoid polluting the global namespace. Modules allow you to define private and public interfaces, keeping your code organized and modular.

3. Minimize Global Variables: Minimize the use of global variables by restricting their usage to only necessary cases. Instead, prefer local variables within functions or modules to keep your code isolated and self-contained.

By adhering to these practices, you can reduce scope pollution and improve the maintainability and reliability of your JavaScript code.

[1]: Stack Overflow - [What does it mean global namespace would be polluted](https://stackoverflow.com/questions/20810578/what-does-it-mean-global-namespace-would-be-polluted)
[2]: DEV Community - [How to avoid namespace pollution in Javascript](https://dev.to/arnavaggarwal/how-to-avoid-namespace-pollution-in-javascript-5gaf)
[3]: FreeCodeCamp - [JavaScript ES6 Modules: Avoid Polluting Global Namespace](https://www.freecodecamp.org/news/javascript-es6-modules-avoid-polluting-global-namespace/)

Sure, here's an example of scope pollution:

```javascript
var x = 10;

function foo() {
  console.log(x); // Output: 10
}

function bar() {
  var x = 20;
  foo();
}

bar();
```

In this example, the variable `x` is declared in the global scope and assigned the value `10`. The `foo` function is defined to log the value of `x`. The `bar` function is defined to declare a new variable `x` in its local scope and assign it the value `20`.

When the `bar` function is called, it calls the `foo` function. Since `foo` does not have a local variable named `x`, it looks up to the next outer scope and finds the global variable `x`, which has a value of `10`. Therefore, calling `foo` from `bar` logs `10` to the console.

This example demonstrates scope pollution because the global variable `x` is accessed and modified indirectly by the `bar` function. The `bar` function does not intend to modify the global variable, but it does so unintentionally by calling `foo`.

To avoid scope pollution, you can modify the `foo` function to accept a parameter instead of relying on a global variable:

```javascript
function foo(x) {
  console.log(x);
}

function bar() {
  var x = 20;
  foo(x);
}

bar(); // Output: 20
```

In this modified example, the `foo` function now accepts a parameter `x`, which is passed from the calling function. The `bar` function declares a local variable `x` and passes it to the `foo` function. This way, the global namespace is not polluted, and each function operates within its own scope.

