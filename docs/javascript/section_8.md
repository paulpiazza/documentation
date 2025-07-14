---
title: Casting - type coercion - type conversion
description: Slim notes.
order: 8
---

In JavaScript, casting is the process of converting one data type to another. There are two types of casting in JavaScript: implicit and explicit.

Implicit casting, also known as In JavaScript, casting is the process of converting one data type to another. There are two types of casting in JavaScript: implicit and explicit.

Implicit casting, also known as type coercion, happens automatically when JavaScript converts one data type to another in order to perform an operation. For example, if you use the `+` operator to add a number and a string, JavaScript will convert the number to a string and concatenate the two values. Here's an example:

```javascript
const num = 10;
const str = '5';
const result = num + str;
console.log(result); // Output: '105'
```

In this example, JavaScript converts the number `10` to a string and concatenates it with the string `'5'`, resulting in the string `'105'`.

Explicit casting, also known as type conversion, is when you manually convert a value from one data type to another using built-in functions or operators. For example, you can use the `Number()` function to convert a string to a number. Here's an example:

```javascript
const str = '10';
const num = Number(str);
console.log(num); // Output: 10
```

In this example, we use the `Number()` function to convert the string `'10'` to a number.

JavaScript provides several functions and operators for explicit casting, including `Number()`, `String()`, `Boolean()`, `parseInt()`, and `parseFloat()`. These functions and operators can be used to convert between different data types.

It's worth noting that JavaScript is a dynamically-typed language, which means that variables can hold values of different data types at different times during program execution. This can sometimes lead to unexpected results when casting values, so it's important to be aware of the data types of your variables and how they're being used in your code., happens automatically when JavaScript converts one data type to another in order to perform an operation. For example, if you use the `+` operator to add a number and a string, JavaScript will convert the number to a string and concatenate the two values. Here's an example:

```javascript
const num = 10;
const str = '5';
const result = num + str;
console.log(result); // Output: '105'
```

In this example, JavaScript converts the number `10` to a string and concatenates it with the string `'5'`, resulting in the string `'105'`.
