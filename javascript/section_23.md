---
title: Arrays
description: Slim notes.
order: 23
---

See [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Sure! An array is a data structure in JavaScript that allows you to store multiple values in a single variable. You can think of it as a collection of related data. 

Here's an example of how to create an array in JavaScript:

```javascript
let myArray = [1, 2, 3, 4, 5];
```

In this example, we've created an array called `myArray` that contains the numbers 1 through 5. We can access individual elements of the array using their index, which starts at 0. For example, to access the first element of `myArray`, we would use:

```javascript
let firstElement = myArray[0];
```

This would set the variable `firstElement` to the value `1`.

You can also add, remove, and modify elements in an array using a variety of methods. Here are a few examples:

```javascript
// Add an element to the end of the array
myArray.push(6);

// Remove the last element from the array
myArray.pop();

// Update an element in the array
myArray[0] = 0;

// test if is array
Array.isArray(myArray)
// note string is not an arrayc

// undefined
let myArray = [1, 2, 3, 4, 5];
myArray[5]
```


Variables declared with `let` can be reassigned.

Variables declared with the `const` keyword cannot be reassigned. However, elements in an array declared with `const` remain mutable. Meaning that we can change the contents of a `const` array, but cannot reassign a new array or a different value.

The text you selected contains a list of JavaScript array methods. Here's a brief explanation of each method:

1. `.join()`: This method joins all elements of an array into a string, using a specified separator between each element.

2. `.slice()`: This method returns a shallow copy of a portion of an array into a new array. It takes two optional parameters: the starting index and the ending index (exclusive), specifying the portion of the array to be extracted.

3. `.splice()`: This method changes the contents of an array by removing, replacing, or adding elements. It takes three or more parameters: the starting index, the number of elements to remove, and optional new elements to add.

4. `.shift()`: This method removes the first element from an array and returns that element. It also modifies the original array by shifting all other elements to a lower index.

5. `.unshift()`: This method adds one or more elements to the beginning of an array and returns the new length of the array.

6. `.concat()`: This method combines two or more arrays and returns a new array containing the elements of all the arrays.

7. `.indexOf()`: This method returns the first index at which a specified element is found in an array, or -1 if the element is not found.

These methods are commonly used for various array operations in JavaScript. Let me know if you have any specific questions or if there's anything else I can assist you with!

### add items

the push() method modifies the original array by adding elements to the end, making it a destructive method (mutates). 

- `.push()` can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: `'item 3'` and `'item 4'` to `itemTracker`.
- Notice that `.push()` changes, or _mutates_, `itemTracker`. You might also see `.push()` referred to as a _destructive_ array method since it changes the initial array.

1. Adding a single element:
You can use the `push()` method to add a single element to the end of an array.

```javascript
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // Output: [1, 2, 3, 4]
```

2. Adding multiple elements:
You can use the `push()` method with multiple arguments to add multiple elements to the end of an array.

```javascript
let myArray = [1, 2, 3];
myArray.push(4, 5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
```

3. Adding elements from another array:
You can use the `push()` method with the spread operator (`...`) to add elements from another array to the end of an array.

```javascript
let myArray = [1, 2, 3];
let otherArray = [4, 5];
myArray.push(...otherArray);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
```

4. Chaining `push()` calls:
You can chain multiple `push()` calls to add elements to an array in sequence.

```javascript
let myArray = [1, 2, 3];
myArray.push(4).push(5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
```

I hope these examples help you understand how to use the `push()` method to add elements to an array in JavaScript. Let me know if you have any further questions!

### remove item

Certainly! The `pop()` method is a built-in method in JavaScript arrays that removes the last element from an array and returns that element. Here's an example:

```javascript
let myArray = [1, 2, 3, 4];
let lastElement = myArray.pop();
console.log(lastElement); // Output: 4
console.log(myArray); // Output: [1, 2, 3]
```

- `.pop()` does not take any arguments, it simply removes the last element of `newItemTracker`.
- `.pop()` returns the value of the last element. In the example, we store the returned value in a variable `removed` to be used for later.
- `.pop()` is a method that mutates the initial array.

In this example, we call the `pop()` method on the `myArray` array. The `pop()` method removes the last element of the array (`4`) and returns it, which we store in the `lastElement` variable. After calling `pop()`, the `myArray` array no longer contains the element `4` and has been modified to `[1, 2, 3]`.

The `pop()` method is useful for removing elements from the end of an array. If you need to remove elements from the beginning of an array, you can use the `shift()` method instead.

I hope this helps! Let me know if you have any further questions.
