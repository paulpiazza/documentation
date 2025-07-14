---
title: Operators precedence and associativity
description: Slim notes.
order: 15
---

See [MDN - List of precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

Operator precedence and associativity are important concepts in programming languages, including JavaScript. They determine the order in which operators are evaluated in an expression.

**Operator Precedence** refers to the priority or hierarchy of operators. It defines which operators are evaluated first and which ones are evaluated later. For example, in the expression `2 + 3 * 4`, the multiplication operator (`*`) has a higher precedence than the addition operator (`+`), so the multiplication is performed first and then the addition. 

Here is an example that demonstrates operator precedence in JavaScript:

```javascript
const result = 2 + 3 * 4;
console.log(result); // Output: 14
```

In this example, the multiplication (`3 * 4`) is evaluated first due to its higher precedence, and then the addition (`2 + 12`) is performed.

**Operator Associativity** comes into play when there are multiple operators with the same precedence in an expression. It determines the order in which operators of the same precedence are evaluated. Associativity can be either left-to-right or right-to-left.

For example, in the expression `10 - 5 - 2`, both subtraction operators have the same precedence. The associativity for subtraction operators in JavaScript is left-to-right. Therefore, the expression is evaluated as `(10 - 5) - 2`, resulting in `3`.

Here is an example that demonstrates operator associativity in JavaScript:

```javascript
const result = 10 - 5 - 2;
console.log(result); // Output: 3
```

In this example, the leftmost subtraction (`10 - 5`) is evaluated first due to left-to-right associativity, and then the result is further subtracted by `2`.

It's important to understand operator precedence and associativity to ensure that expressions are evaluated correctly. If needed, parentheses can be used to override the default precedence and explicitly define the order of evaluation.

You can refer to the official documentation or language specifications for specific details on operator precedence and associativity in JavaScript.


