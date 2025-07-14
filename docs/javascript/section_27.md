---
title: Higher order functions
description: Slim notes.
order: 27
---
### Functions as Data

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

In JavaScript, functions are _first class objects_. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as `.length` and `.name`, and methods such as `.toString()`.

```js
const announceThatIAmDoingImportantWork = () => {  
    console.log("I’m doing very important work!");  
};

const busy = announceThatIAmDoingImportantWork;  
  
busy(); // This function call barely takes any space!

console.log(busy.name) // get the name of the function

```
### higher-order functions

In JavaScript, a higher-order function is a function that takes another function as an argument, or returns a function as its result. This means that the higher-order function either operates on functions or returns a new function.

Here's an example of a higher-order function that takes another function as an argument:

```javascript
function higherOrderFunction(callback) {
  // do some work
  callback();
}

function callbackFunction() {
  console.log('This is a callback function!');
}

higherOrderFunction(callbackFunction);
```

In this example, the `higherOrderFunction` takes a function called `callback` as an argument. The `callback` function is then executed within the `higherOrderFunction`. This is a common pattern for asynchronous programming in JavaScript.

Here's an example of a higher-order function that returns a new function:

```javascript
function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4)); // Output: 8
```

In this example, the `multiplyBy` function returns a new function that multiplies its argument by the initial value passed to `multiplyBy`. The returned function is then stored in a variable called `multiplyByTwo`, and is used to multiply the number 4 by 2, resulting in 8.

```js
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2
  const checkB = func(val)

  return checkA === checkB ? checkB : 'inconsistent results'
}

console.log(checkConsistentOutput(addTwo, 10));
```

### first-class object

In JavaScript, functions are considered first-class objects. This means that functions can be treated like any other object in the language. They can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. 

What sets functions apart from other objects is their ability to be invoked or called as a function. This means that you can execute a function by using parentheses after its name, passing in any necessary arguments.

Functions being first-class objects in JavaScript also means that they can have properties and methods just like any other object. You can assign properties to functions and even define methods on them.

- They have built-in properties and methods, such as the `name` property and the `.toString()` method.
- Properties and methods can be added to them.
- They can be passed as arguments and returned from other functions.
- They can be assigned to variables, array elements, and other objects.

Here are a few examples to illustrate the concept:

1. Assigning a function to a variable:
```javascript
const greet = function() {
  console.log('Hello!');
};

greet(); // Output: Hello!
```

2. Passing a function as an argument:
```javascript
function doSomething(callback) {
  callback();
}

function sayHello() {
  console.log('Hello!');
}

doSomething(sayHello); // Output: Hello!
```

3. Returning a function from another function:
```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

In the above examples, you can see how functions are treated as first-class objects and used in various ways.
