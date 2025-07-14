---
title: Functions
description: Slim notes.
order: 18
---



![[Pasted image 20231021065615.png]]

Sure! Here's an explanation of functions, callbacks, and arrow functions in JavaScript along with some examples:

1. Functions Declaration:
   Functions in JavaScript are reusable blocks of code that can be executed when called. They are defined using the `function` keyword followed by a name and a set of parentheses. Functions can take in parameters (optional) and return a value (optional). Here's an example of a function that adds two numbers:

   ```javascript
   function addNumbers(num1, num2) {
     return num1 + num2;
   }

   // Call the function
   let result = addNumbers(5, 3);
   console.log(result); // Output: 8
   ```

2. Callbacks:
   Callback functions are functions that are passed as arguments to other functions and are executed later when a certain event occurs or a task is completed. They allow for asynchronous programming and can be used for handling responses, events, or timeouts. Here's an example of using a callback function with the `setTimeout` function:

   ```javascript
   function greet(name, callback) {
     console.log("Hello, " + name);
     callback();
   }

   function sayGoodbye() {
     console.log("Goodbye!");
   }

   greet("Alice", sayGoodbye);
   // Output:
   // Hello, Alice
   // Goodbye!
   ```

3. Arrow Functions:
   Arrow functions are a concise way to write functions in JavaScript. They have a shorter syntax compared to regular functions and do not bind their own `this` value. Arrow functions are often used as anonymous functions or for short one-liner functions. Here's an example of an arrow function that doubles a number:

   ```javascript
   let double = (num) => {
     return num * 2;
   };

   console.log(double(5)); // Output: 10
   ```

   Arrow functions can also be further simplified for single-expression functions:

   ```javascript
   let triple = num => num * 3;

   console.log(triple(5)); // Output: 15
   ```

4. Function Expressions
Function expressions are another way to define functions in JavaScript. Unlike function declarations, which define a named function using the `function` keyword, function expressions define an unnamed function using a variable assignment.

Here's an example of a function expression:

```javascript
let addNumbers = function(num1, num2) {
  return num1 + num2;
};

console.log(addNumbers(5, 3)); // Output: 8
```

In this example, the function expression `function(num1, num2) { return num1 + num2; }` is assigned to the variable `addNumbers`. The function can then be called using the variable name as shown in the `console.log` statement.

Function expressions can also be written using arrow function syntax:

```javascript
let multiplyNumbers = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplyNumbers(5, 3)); // Output: 15
```

In this case, the function expression is defined using the arrow function syntax (`(num1, num2) => { ... }`).

Function expressions are useful when you need to define a function that is only used in a specific context and doesn't need to be referenced elsewhere in your code. They are also commonly used as arguments passed to higher-order functions or for constructing the result of a higher-order function.


Arrow functions can be refactor. The most condensed form of the function is known as _concise body_.

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
    
    ![showcasing how arrow functions parameters differ for different amounts of parameters](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/parameters.svg)
2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow `=>` and the `return` keyword can be removed. This is referred to as _implicit return_.
    

![comparing single line and multiline arrow functions](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/return.svg)

[1]: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
[2]: [W3Schools - JavaScript Function Definitions](https://www.w3schools.com/js/js_function_definition.asp)


### parameters and arguments

![[Pasted image 20231021070327.png]]

![[Pasted image 20231021070338.png]]

Here's what you need to know about parameters of a JavaScript function:

1. Parameters are variables that are listed as part of a function's definition. They are used to pass values into a function when it is called.
2. Parameters are defined inside the parentheses after the function name.
3. Parameters are optional, meaning that a function can be defined with zero, one, or multiple parameters.
4. When a function is called, the values passed in as arguments are assigned to the corresponding parameters in the function definition.
5. Parameters can have default values, which are used if no value is passed in for that parameter.
6. Parameters can also be rest parameters, which allow you to pass an arbitrary number of arguments into a function as an array.
7. Parameters can be destructured, which allows you to extract specific values from an object or array passed in as an argument.

Here's an example of a function with parameters:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

In this example, `name` is the parameter of the `greet` function. When the function is called with the argument `"Alice"`, the value `"Alice"` is assigned to the `name` parameter inside the function.

Here's an example of a function with default parameters:

```javascript
function greet(name = "World") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, World!
greet("Alice"); // Output: Hello, Alice!
```

In this example, the `name` parameter has a default value of `"World"`. If no argument is passed in when the function is called, the default value is used.

Here's an example of a function with rest parameters:

```javascript
function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log(total);
}

sum(1, 2, 3); // Output: 6
sum(4, 5, 6, 7, 8); // Output: 30
```

In this example, the `...nums` syntax defines a rest parameter that allows you to pass an arbitrary number of arguments into the `sum` function as an array.


