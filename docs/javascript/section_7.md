---
title: Unary Plus operator
description: Slim notes.
order: 7
---


```javascript
let numericString = "123";
let numericValue = +numericString;

console.log(typeof numericString); // Output: string
console.log(typeof numericValue); // Output: number
console.log(numericValue); // Output: 123
```

In this example:
- We have a string `numericString` containing the value `"123"`.
- By using the unary plus operator `+` before `numericString`, we convert the string to a numeric value and store it in `numericValue`.
- When we log the types and values of `numericString` and `numericValue`, we can see that `numericString` is of type "string", while `numericValue` is of type "number" and holds the numeric value `123`.
       
The unary plus operator is useful for converting strings that represent numeric values into actual numbers for mathematical operations or other purposes. It's very useful for TypeScript and avoid write `parseInt()`.

> [!warning]
> The unary operator and `parseInt` are different! You should use parsing when you know that your string have only number characters.
> ```js
> console.log(parseInt('1y3')); // 1
> console.log(+'1y3'); // NaN
> ```
