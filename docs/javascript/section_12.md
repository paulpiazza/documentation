---
title: String interpolation
description: Slim notes.
order: 12
---

String interpolation, also known as variable interpolation or variable substitution, is a process commonly used in computer programming to evaluate a string literal that contains placeholders or variables. The placeholders in the string are replaced with their corresponding values, resulting in a new string.

String interpolation is often used to dynamically construct strings that incorporate variable values, making it easier to create formatted and dynamic output. It provides a more readable and convenient syntax for string formatting.

In languages that support string interpolation, such as JavaScript, Python, C#, and many others, you can use special syntax to embed variables or expressions directly within a string. The placeholders are typically indicated by special symbols or syntax, such as curly braces `{}` or dollar sign and curly braces `${}`.

For example, in JavaScript using template literals (backticks), you can perform string interpolation like this:

```javascript
const name = "Alice";
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
```

In the above example, the variables `name` and `age` are interpolated within the string using `${}` syntax. The placeholders `${name}` and `${age}` are replaced with their respective values when the string is evaluated.

String interpolation allows for more concise and readable code compared to traditional string concatenation or formatting methods.
