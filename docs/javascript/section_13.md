---
title: TypeOf
description: Slim notes.
order: 13
---

The `typeof` operator in JavaScript is used to determine the data type of a given value or expression. It returns a string that represents the type of the operand.

The syntax for using the `typeof` operator is:
```javascript
typeof operand
```

Here, the `operand` can be any value or expression whose type you want to determine.

The `typeof` operator returns one of the following string values:
- `"undefined"`: Represents an undefined value.
- `"boolean"`: Represents a boolean value (`true` or `false`).
- `"number"`: Represents a numeric value, including integers and floating-point numbers.
- `"string"`: Represents a string value.
- `"symbol"`: Represents a unique symbol value.
- `"object"`: Represents an object (including arrays, functions, and null).
- `"function"`: Represents a function.

Here are some examples of using the `typeof` operator:

```javascript
typeof 42;  // "number"
typeof "Hello";  // "string"
typeof true;  // "boolean"
typeof undefined;  // "undefined"
typeof null;  // "object"
typeof [];  // "object"
typeof function() {};  // "function"
```

It's important to note that the `typeof` operator has some quirks. For example, it returns `"object"` for arrays and `null`, even though they are technically not objects. It also returns `"function"` for functions, which are a type of object.

The `typeof` operator is useful for performing type checks or conditional logic based on the data type of a value.

[1]: [MDN Web Docs - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
[2]: [W3Schools - JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)
[3]: [JavaScript.info - Type Conversions](https://javascript.info/type-conversions)

