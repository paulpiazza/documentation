---
title: Errors
description: Slim notes.
order: 29
---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

### Error Stack Traces

Error stack traces are an essential tool for debugging and understanding errors in JavaScript (JS) and TypeScript (TS) code. When an error occurs during the execution of a program, the error stack trace provides valuable information about the sequence of function calls that led to the error.

A stack trace typically includes the following components:

1. Error message: The error message provides a brief description of the error that occurred. It can help you identify the type of error, such as a syntax error or a runtime error.

2. Stack trace: The stack trace is a list of function calls that were made leading up to the error. It starts with the function where the error occurred and goes back through the chain of function calls.

Each entry in the stack trace includes:

- Function name: The name of the function where the error occurred.
- File name and line number: The file name and line number where the function call is located.
- Call stack: The call stack shows the sequence of function calls that led to the current function call.

By examining the stack trace, you can trace back the sequence of function calls and identify the specific line of code that caused the error. This information is crucial for locating and fixing bugs in your code.

In JS and TS, you can view the stack trace in your browser's developer console or in your IDE's debug panel. Understanding how to read and interpret stack traces will greatly assist you in debugging and resolving errors in your web development projects.

```
Error: Cannot read property 'name' of undefined
    at getUserInfo (file.js:10:15)
    at renderUser (file.js:15:10)
    at displayUser (file.js:20:5)
    at main (file.js:25:1)
```

In this example, we have an error message stating that we cannot read the property 'name' of undefined. The stack trace provides information about the sequence of function calls leading up to this error.

- The error occurred in the `getUserInfo` function, which is located in `file.js` on line 10, column 15.
- The `getUserInfo` function was called from the `renderUser` function, located in `file.js` on line 15, column 10.
- The `renderUser` function was called from the `displayUser` function, located in `file.js` on line 20, column 5.
- Finally, the `displayUser` function was called from the `main` function, located in `file.js` on line 25, column 1.

By examining the stack trace, you can identify the chain of function calls that led to the error. In this case, you can focus on investigating why the property 'name' is undefined and fix the issue accordingly.

![[Pasted image 20231027173605.png]]

### JavaScript Error Types

Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

Here are three common error types:

- **SyntaxError**: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.

- **ReferenceError**: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.

- **TypeError**: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the [MDN JavaScript Error documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.

### Debugging Errors

Here’s a process for efficiently working through your code’s errors one by one:

1. Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
2. Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
3. Fix the bug and re-run your code.
4. Repeat steps 1-3 until your code no longer throws any errors.

While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

### Locating Silent Bugs

Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: `console.log()`!

By adding print statements to our code, we can identify where things have gone wrong.

### Debugging with console.log()

Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

1. Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using `console.log()`. If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
2. After the next piece of logic in your code, add `console.log()` statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
3. Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.

### Debugging Review

You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

1. **Is your code throwing errors?** If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
2. **Is your code broken but not throwing errors?** Walk through your code using `console.log()` statements. When unexpected results occur, isolate the bug and try to fix it.
3. **Did you locate the bug using steps 1 and 2, but can’t fix the bug?** Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.

It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an expert in no time.
### Runtime Errors

Runtime errors in JavaScript are errors that occur during the execution of a JavaScript program. They can happen when the program encounters unexpected conditions or attempts to perform operations that are not allowed. Runtime errors can manifest as exceptions or error messages that are displayed in the browser's console.

Common examples of runtime errors in JavaScript include:

1. Type Errors: These occur when you try to perform an operation on a value of the wrong type or when accessing properties or methods on undefined or null values.

2. Reference Errors: These occur when you try to access a variable or function that is not defined or out of scope.

3. Syntax Errors: These occur when the JavaScript code does not conform to the language's syntax rules and cannot be executed.

4. Range Errors: These occur when you use a value that is outside the acceptable range, such as accessing an array index that does not exist.

5. Evaluation Errors: These occur when there is an issue with the `eval()` function, such as passing invalid JavaScript code to be evaluated.

When a runtime error occurs, it interrupts the normal execution of the program and may cause it to crash or produce unexpected results. To handle runtime errors in JavaScript, you can use try-catch blocks to catch and handle exceptions, or use defensive programming techniques to validate inputs and handle potential errors gracefully.

```javascript
const num = 10;
console.log(nonExistentVariable);
```

In this example, we're trying to log the value of a variable called `nonExistentVariable`, which has not been defined anywhere in the code. As a result, a `ReferenceError` will occur.

The error message displayed in the browser's console would look something like this:

```
Uncaught ReferenceError: nonExistentVariable is not defined
    at script.js:2
```

The error message consists of the following components:

- `Uncaught ReferenceError`: Indicates that a reference to an undefined variable was encountered.
- `nonExistentVariable is not defined`: Describes the specific problem, indicating that the variable `nonExistentVariable` has not been defined.
- `at script.js:2`: Specifies the location of the error. In this case, it occurred on line 2 of the `script.js` file.

By examining the error message, you can quickly identify that the issue is with an undefined variable and locate the exact line where the error occurred. This information can be helpful for debugging and fixing the code.

### Error()

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

In this example, the `divide()` function attempts to divide the value of `a` by `b`. However, before performing the division, it checks if `b` is equal to zero. If it is, the function throws a new `Error` object with a custom error message.

When the `divide()` function is called with `divide(10, 0)`, the division by zero triggers an error. The `try-catch` block catches the error, and the error message `'Division by zero is not allowed'` is logged to the console using `error.message`.

```javascript
console.log(new Error('My message for the error.'))
// Error: My message for the error.
```


The `Error` constructor allows you to specify a custom error message that provides information about the encountered problem. You can use this to communicate specific details about the error to aid in debugging or error handling.

In JavaScript, you can create custom errors using the `Error` constructor and extending it to create your own error classes. This can be useful when you need to handle specific types of errors in your code.

To create a custom error, you can define a new class that extends the `Error` class and provides additional properties or methods as needed. For example:

```javascript
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyCustomError';
  }
}
```

In this example, we define a new `MyCustomError` class that extends the built-in `Error` class. We provide a custom constructor that accepts a message parameter and calls the `super()` method to initialize the `message` property of the error. We also set the `name` property of the error to `'MyCustomError'`.

Once you have defined your custom error class, you can throw instances of it using the `throw` statement, just like any other error. For example:

```javascript
function myFunction() {
  throw new MyCustomError('Something went wrong');
}

try {
  myFunction();
} catch (error) {
  console.log(error.name + ': ' + error.message);
}
```

In this example, we define a `myFunction()` that throws a new instance of our `MyCustomError`. We then use a `try-catch` block to catch the thrown error and log its name and message to the console.

Custom errors can be useful for adding more context to your error messages and making it easier to handle specific types of errors in your code.

### throw

The `throw` keyword in JavaScript is used to explicitly throw an exception or error. When an exception is thrown, it interrupts the normal flow of execution and transfers control to the nearest enclosing `try-catch` block that can handle the exception.

Here's an example of using the `throw` keyword to throw an error:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw 'Division by zero is not allowed';
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error);
}
```

In this example, the `divide()` function attempts to divide the value of `a` by `b`. However, before performing the division, it checks if `b` is equal to zero. If it is, the function throws a string `'Division by zero is not allowed'` using the `throw` keyword.

When the `divide()` function is called with `divide(10, 0)`, the division by zero triggers an error. The `try-catch` block catches the error, and the error message `'Division by zero is not allowed'` is logged to the console using `console.log(error)`.

By using the `throw` keyword, you can deliberately generate an error in your code to handle exceptional cases and communicate error messages to users or other parts of your application.

### try ... catch

The `try-catch` statement in JavaScript is used to handle exceptions or errors that may occur during the execution of a block of code. It allows you to catch and handle exceptions gracefully, preventing them from causing the program to crash.

The `try` block contains the code that you want to monitor for exceptions. If an exception is thrown within the `try` block, the code execution is immediately transferred to the corresponding `catch` block.

Here's the basic syntax of a `try-catch` statement:

```javascript
try {
  // Code that may throw an exception
} catch (error) {
  // Code to handle the exception
} finally {
	 // Code that will always be executed
}
```

Let's consider an example to illustrate how `try-catch` works:

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw 'Division by zero is not allowed';
    }
    return a / b;
  } catch (error) {
    console.log('An error occurred:', error);
    return null;
  }
}

const result1 = divide(10, 2);
console.log(result1); // Output: 5

const result2 = divide(10, 0);
console.log(result2); // Output: null
```

In this example, the `divide()` function attempts to divide the value of `a` by `b`. Inside the `try` block, there's a condition to check if `b` is equal to zero. If it is, an exception is thrown using the `throw` keyword.

If an exception is thrown, the code execution jumps to the `catch` block, where you can handle the exception. In this case, we log an error message to the console and return `null` as the result.

Using `try-catch` allows you to gracefully handle exceptions and prevent them from crashing your program. It provides a way to recover from exceptional situations and take appropriate actions.


