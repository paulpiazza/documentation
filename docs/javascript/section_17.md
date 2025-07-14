---
title: The spread operator
description: Slim notes.
order: 17
---

In TypeScript, the spread operator (`...`) is used to spread the elements of an array or an object into another array or object. This allows you to easily concatenate arrays, create copies of objects, or pass multiple arguments to a function.

Here are some examples of how to use the spread operator in TypeScript:

```typescript
// Spreading an array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Spreading an object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Using spread in a function call
function addNumbers(a: number, b: number, c: number) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const sum = addNumbers(...numbers);
console.log(sum); // Output: 6
```

In the first example, we use the spread operator to concatenate two arrays into a single array. The `...arr1` syntax spreads the elements of `arr1` into the new array, followed by the elements of `arr2`.

In the second example, we use the spread operator to create a new object by merging the properties of two objects. The `...obj1` syntax spreads the properties of `obj1` into the new object, followed by the properties of `obj2`.

In the third example, we use the spread operator to pass an array of numbers as individual arguments to a function. The `...numbers` syntax spreads the elements of `numbers` into separate arguments for the `addNumbers` function.

Note that the spread operator can be used with any iterable object, including arrays and objects. It is a powerful and flexible feature that can simplify many common programming tasks.


