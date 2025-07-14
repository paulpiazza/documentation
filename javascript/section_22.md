---
title: Loops
description: Slim notes.
order: 22
---

### for

Here's an explanation of the `for`, `forEach`, `for...in`, and `for...of` loops in JavaScript:

1. `for` loop:
The `for` loop is a traditional loop that allows you to iterate over a block of code for a specified number of times. It consists of three parts: initialization, condition, and increment/decrement. Here's the syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

2. `forEach` loop:
The `forEach` loop is a method available for arrays in JavaScript. It allows you to iterate over each element of an array and execute a provided function for each element. Here's the syntax:

```javascript
array.forEach(function(element, index) {
  // code to be executed
});
```

Example:
```javascript
const array = [1, 2, 3];
array.forEach(function(element, index) {
  console.log(element);
});
```

3. `for...in` loop:
The `for...in` loop is used to iterate over the properties of an object. It iterates over the enumerable properties of an object, including inherited properties from its prototype chain. Here's the syntax:

```javascript
for (variable in object) {
  // code to be executed
}
```

Example:
```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

4. `for...of` loop:
The `for...of` loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, etc. It provides an easy way to iterate over the values of an iterable without dealing with indexes or keys. Here's the syntax:

```javascript
for (variable of iterable) {
  // code to be executed
}
```

Example:
```javascript
const array = [1, 2, 3];

for (let element of array) {
  console.log(element);
}
```

In summary, the `for` loop is a general-purpose loop for iterating a specific number of times, `forEach` is used for iterating over each element of an array, `for...in` is used for iterating over object properties, and `for...of` is used for iterating over iterable objects.

I hope this clarifies the differences and usage of these loops! Let me know if you have any further questions.

[5]





### While

Sure, I'd be happy to help you understand while loops and do/while loops!

A while loop is a type of loop that allows you to execute a block of code repeatedly as long as a certain condition is true. Here's the basic syntax for a while loop:

```javascript
while (condition) {
  // code to be executed
}
```

The condition is a boolean expression that is evaluated before each iteration of the loop. If the condition is true, the code inside the loop is executed. After the code is executed, the condition is evaluated again, and if it's still true, the code is executed again. This process continues until the condition becomes false.

Here's an example of a while loop that counts from 1 to 5:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

This loop will output the numbers 1 through 5 to the console.

A do/while loop is similar to a while loop, but with one key difference: the code inside the loop is executed at least once, even if the condition is false. Here's the basic syntax for a do/while loop:

```javascript
do {
  // code to be executed
} while (condition);
```

The code inside the loop is executed first, and then the condition is evaluated. If the condition is true, the code is executed again. This process continues until the condition becomes false.

Here's an example of a do/while loop that prompts the user to enter a number between 1 and 10:

```javascript
let num;

do {
  num = prompt("Enter a number between 1 and 10:");
} while (num < 1 || num > 10);

console.log("You entered: " + num);
```

This loop will keep prompting the user to enter a number until they enter a number between 1 and 10. Once they do, the loop will exit and the number they entered will be logged to the console.

### break

The `break` keyword is used in JavaScript to exit a loop prematurely. When a `break` statement is encountered inside a loop, the loop is immediately terminated and the program continues with the next statement after the loop.

Here's an example of using `break` in a `for` loop:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

In this example, the loop will count from 1 to 4, and then exit when `i` becomes 5. The output will be:

```
1
2
3
4
```

You can also use `break` in a `while` or `do/while` loop. Here's an example of using `break` in a `while` loop:

```javascript
let i = 1;

while (i <= 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}
```

In this example, the loop will count from 1 to 4, and then exit when `i` becomes 5. The output will be:

```
1
2
3
4
```

It's important to use `break` judiciously, as using it too often can make your code harder to understand and debug. However, in certain situations, such as when you need to exit a loop early based on a certain condition, it can be a useful tool.

There is no `break(2)` keyword in JavaScript. The `break` statement is used to exit a loop or switch statement prematurely. When `break` is encountered, the program breaks out of the innermost loop or switch statement and continues with the next statement after the loop or switch.

The `break` statement can be used without an argument or with a label as an argument. When used with a label, it allows you to break out of a specific loop or switch statement that is labeled with the specified label.

Here's an example of using `break` with a label in JavaScript:

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

In this example, the `break outerLoop;` statement is used to break out of the outer loop when `i` is 1 and `j` is 1. The program will continue with the statement after the outer loop.

To summarize, the `break` statement in JavaScript is used to exit a loop or switch statement. It does not take a numeric argument like `break(2)`. If you need to break out of nested loops, you can use labels to specify which loop to break out of.

[1]: [MDN Web Docs - break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
[2]: [W3Schools - JavaScript break Statement](https://www.w3schools.com/jsref/jsref_break.asp)
[3]: [Stack Overflow - How to break nested loops in JavaScript?](https://stackoverflow.com/questions/2641347/how-to-break-nested-loops-in-javascript)
[4]: [W3Schools - Java break Keyword](https://www.w3schools.com/java/ref_keyword_break.asp)

