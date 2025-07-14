---
title: Iterators
description: Slim notes.
order: 28
---

see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)


Certainly! Let's explore and explain the array methods `.reduce()`, `.forEach()`, `.filter()`, and `.map()` in JavaScript.

1. `.reduce()`:
The `.reduce()` method is used to reduce an array to a single value by executing a provided function on each element of the array. It takes two arguments: the reducer function and an optional initial value. The reducer function receives an accumulator and the current element of the array, and returns the updated accumulator value.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
```

In this example, the `.reduce()` method is used to calculate the sum of all numbers in the `numbers` array.

2. `.forEach()`:
The `.forEach()` method allows you to execute a provided function once for each element in an array. It does not return a new array; instead, it performs a side effect (e.g., logging to the console, modifying variables) for each element.

Example:
```javascript
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// apple
// banana
// orange
```

In this example, the `.forEach()` method is used to log each fruit in the `fruits` array.

3. `.filter()`:
The `.filter()` method creates a new array with all elements that pass a provided test implemented by a callback function. The callback function should return `true` or `false` to determine whether an element should be included in the new array.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

In this example, the `.filter()` method is used to create a new array containing only the even numbers from the `numbers` array.

4. `.map()`:
The `.map()` method creates a new array by applying a provided function to each element of the calling array. It returns a new array with the results of applying the function to each element.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, the `.map()` method is used to create a new array where each element is doubled from the `numbers` array.

These array methods provide powerful ways to work with arrays in JavaScript. Each method has its own specific purpose and can be used depending on the desired outcome.

I hope this explanation helps! Let me know if you have any further questions.





