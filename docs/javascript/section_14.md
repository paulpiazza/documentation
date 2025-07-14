---
title: Conditional statement
description: Slim notes.
order: 14
---

### If ... else 

In JavaScript, `if`, `else if`, and `else` are conditional statements used to execute different code blocks based on different conditions.

The `if` statement is used to execute a block of code if a condition is true. Here's an example:

```javascript
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}
```

The `else if` statement is used to execute a block of code if the first condition is false and a second condition is true. Here's an example:

```javascript
let x = 10;
if (x > 20) {
  console.log("x is greater than 20");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 20");
}
```

The `else` statement is used to execute a block of code if all the conditions are false. Here's an example:

```javascript
let x = 2;
if (x > 5) {
  console.log("x is greater than 5");
} else if (x > 1) {
  console.log("x is greater than 1 but less than or equal to 5");
} else {
  console.log("x is less than or equal to 1");
}
```

In this example, the `else` statement will be executed since both the `if` and `else if` conditions are false.

### Comparison operators

In JavaScript, comparison operators are used to compare two values and return a boolean value of `true` or `false`. These operators include `==` (equality), `!=` (inequality), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to). 

Here are some examples:

```javascript
let x = 5;
let y = 10;

console.log(x == y); // false
console.log(x != y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
```

In the above example, we declare two variables `x` and `y`, and then use comparison operators to compare their values.

It's important to note that the `==` operator compares two values for equality, but doesn't take data types into account. On the other hand, the `===` operator compares two values for equality and also checks if they are of the same data type. 

For example:

```javascript
let a = 5;
let b = '5';

console.log(a == b); // true
console.log(a === b); // false
```

In the above example, the `==` operator returns `true` because it only checks if the values are equal, while the `===` operator returns `false` because it also checks if they are of the same data type.

[1]: [W3Schools - JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[2]: [GeeksforGeeks - JavaScript Comparison Operators](https://www.geeksforgeeks.org/javascript-comparison-operators/)

[3]: [MDN Web Docs - Expressions and operators - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

### Logical operators

Logical operators in JavaScript are used to perform logical operations on boolean values. There are three commonly used logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

The logical AND (`&&`) operator returns `true` if both operands are `true`, otherwise it returns `false`. Here's an example:

```javascript
let x = 5;
let y = 10;

console.log(x > 0 && y < 20); // true
console.log(x > 0 && y > 20); // false
```

In the first example, both conditions (`x > 0` and `y < 20`) are true, so the result is `true`. In the second example, the second condition (`y > 20`) is false, so the result is `false`.

The logical OR (`||`) operator returns `true` if at least one of the operands is `true`, otherwise it returns `false`. Here's an example:

```javascript
let x = 5;
let y = 10;

console.log(x > 0 || y > 20); // true
console.log(x < 0 || y > 20); // true
console.log(x < 0 || y < 5); // false
```

In the first example, at least one of the conditions (`x > 0` or `y > 20`) is true, so the result is `true`. In the second example, the second condition (`y > 20`) is true, so the result is `true`. In the third example, both conditions (`x < 0` and `y < 5`) are false, so the result is `false`.

The logical NOT (`!`) operator is used to negate a boolean value. It returns `true` if the operand is `false`, and `false` if the operand is `true`. Here's an example:

```javascript
let x = 5;
let y = 10;

console.log(!(x > 0)); // false
console.log(!(x < 0)); // true
```

In the first example, the condition `x > 0` is true, but the logical NOT operator negates it to `false`. In the second example, the condition `x < 0` is false, and the logical NOT operator negates it to `true`.

These logical operators are useful for combining conditions and making decisions based on multiple conditions in JavaScript.

[1]: [Programming Fundamentals - Logical Operators](https://www.programming-fundamentals.org/notes/logical-operators/)

[2]: [Wikipedia - Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra)

[3]: [MDN Web Docs - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

### truthy and falsy values

See [list MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
See [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

In JavaScript, truthy and falsy values are values that are evaluated as either true or false in a boolean context. When a non-boolean value is used in a condition, JavaScript implicitly converts it to a boolean value based on its truthiness or falsiness.

Truthy values are those that are considered true when evaluated in a boolean context. These include values such as numbers other than 0, non-empty strings, objects, arrays, and functions.

Here are some examples of truthy values in JavaScript:

```javascript
console.log(Boolean(5)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean({})); // true
console.log(Boolean(function() {})); // true
```

Falsy values, on the other hand, are those that are considered false when evaluated in a boolean context. These include values such as 0, an empty string `""`, `null`, `undefined`, `NaN`, and `false` itself.

Here are some examples of falsy values in JavaScript:

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
```

It's important to note that the concept of truthy and falsy values is not limited to JavaScript and can be found in other programming languages as well.

[1]: [MDN Web Docs - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

[2]: [MDN Web Docs - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)


### ternary operators

In JavaScript, the ternary operator is a shorthand way of writing an `if...else` statement. It's the only operator that takes three operands, hence the name "ternary". The syntax of the ternary operator is as follows:

```
condition ? expressionIfTrue : expressionIfFalse
```

The `condition` is evaluated first. If it's true, the `expressionIfTrue` is executed, otherwise the `expressionIfFalse` is executed.

Here's an example:

```javascript
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // "You are an adult"
```

In this example, we first declare a variable `age` with a value of 20. We then use the ternary operator to check if `age` is greater than or equal to 18. Since it's true, the first expression (`"You are an adult"`) is executed and assigned to the variable `message`.

The ternary operator can be useful for writing concise and readable code, especially when dealing with simple conditions.

[1]: [Computer Hope - What is a Ternary Operator?](https://www.computerhope.com/jargon/t/ternoper.htm)

[2]: [Wikipedia - Ternary operation](https://en.wikipedia.org/wiki/Ternary_operation)

[3]: [MDN Web Docs - Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### `switch` statement

A switch statement is a control flow statement used in programming languages to execute different blocks of code based on the value of a variable or expression. It provides an alternative to using multiple if-else statements when there are multiple possible conditions to check.

The syntax of a switch statement typically consists of the keyword `switch`, followed by an expression or variable that is being evaluated. This expression is then compared to different cases using the `case` keyword. When a match is found, the corresponding block of code is executed. The `default` keyword is used to specify the code block to be executed if none of the cases match the expression.

Here's an example in JavaScript:

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Unknown";
}

console.log(dayName); // "Wednesday"
```

In this example, the value of the `day` variable is evaluated against different cases using the switch statement. Since `day` is equal to 3, the code block under `case 3` is executed, and the value of `dayName` is set to "Wednesday".

The switch statement provides a more concise and readable way to handle multiple conditions compared to using nested if-else statements.

[1]: [Wikipedia - Switch statement](https://en.wikipedia.org/wiki/Switch_statement)
[2]: [Programiz - C switch Statement](https://www.programiz.com/c-programming/c-switch-case-statement)
[3]: [GeeksforGeeks - Switch Statement in C](https://www.geeksforgeeks.org/switch-statement-in-c/)
[4]: [cppreference.com - switch statement](https://en.cppreference.com/w/c/language/switch)

### the null coalescing (??)

Yes, there is a null coalescing operator in JavaScript called the "nullish coalescing operator" (`??`). It is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. This operator helps to provide a default value when a variable is `null` or `undefined`. 

Here's an example usage of the nullish coalescing operator in JavaScript:

```javascript
const defaultValue = null;
const value = defaultValue ?? "Default Value";
console.log(value); // Output: "Default Value"
```

In this example, the variable `value` will be assigned the value of `defaultValue` if it is `null` or `undefined`, otherwise it will be assigned the value "Default Value".

You can find more information about the nullish coalescing operator in JavaScript in the MDN Web Docs [1] and The Modern JavaScript Tutorial [3].


The `||` (logical OR) operator and the `??` (nullish coalescing) operator are both logical operators in JavaScript, but they serve different purposes.

Here's a comparison between the `||` operator and the `??` operator:

1. **Behavior with falsy values:**
   - `||` operator: The `||` operator returns the first truthy value encountered or the last value if all operands are falsy. Falsy values include `false`, `0`, `''`, `null`, `undefined`, and `NaN`.
   - `??` operator: The `??` operator returns the right-hand side operand if the left-hand side operand is `null` or `undefined`, otherwise it returns the left-hand side operand. It specifically checks for `null` or `undefined`, excluding other falsy values.

2. **Default value assignment:**
   - `||` operator: The `||` operator is often used for providing a default value when a variable is falsy. For example, `const result = myVariable || "Default Value";`
   - `??` operator: The `??` operator is specifically designed for providing a default value when a variable is `null` or `undefined`. For example, `const result = myVariable ?? "Default Value";`

3. **Short-circuit evaluation:**
   - Both operators exhibit short-circuit behavior, which means that if the left-hand side operand of either operator is truthy (for `||`) or not `null` or `undefined` (for `??`), the right-hand side operand is not evaluated.

Here are some examples to illustrate the differences:

```javascript
const myVariable = 0;
const result1 = myVariable || "Default Value";
console.log(result1); // Output: "Default Value"

const result2 = myVariable ?? "Default Value";
console.log(result2); // Output: 0
```

In the example above, since `myVariable` is a falsy value (`0`), the `||` operator returns the right-hand side operand ("Default Value"). However, the `??` operator does not consider `0` as nullish, so it returns the left-hand side operand (`0`).

In summary, the `||` operator is more suitable for providing a default value when a variable is falsy, while the `??` operator is specifically designed for providing a default value when a variable is `null` or `undefined`.

I hope this clarifies the differences between the two operators. Let me know if you have any further questions!

### bitwise operators

Yes, JavaScript does have bitwise operators. Bitwise operators are used to perform operations on individual bits of binary numbers. They are useful for low-level operations, such as manipulating binary data, working with flags, or performing bitwise calculations.

Here are the bitwise operators available in JavaScript:

1. Bitwise AND (`&`): Performs a bitwise AND operation on the corresponding bits of two numbers. It returns a number where each bit is set to 1 only if both corresponding bits are also 1.

2. Bitwise OR (`|`): Performs a bitwise OR operation on the corresponding bits of two numbers. It returns a number where each bit is set to 1 if either of the corresponding bits is 1.

3. Bitwise XOR (`^`): Performs a bitwise XOR (exclusive OR) operation on the corresponding bits of two numbers. It returns a number where each bit is set to 1 if the corresponding bits are different (one bit is 0 and the other is 1).

4. Bitwise NOT (`~`): Performs a bitwise NOT operation on a number. It inverts all the bits, turning 1s into 0s and vice versa.

5. Left Shift (`<<`): Shifts the bits of a number to the left by a specified number of positions. This is equivalent to multiplying the number by 2 raised to the power of the shift amount.

6. Right Shift (`>>`): Shifts the bits of a number to the right by a specified number of positions. This is equivalent to dividing the number by 2 raised to the power of the shift amount and rounding towards negative infinity.

7. Zero-fill Right Shift (`>>>`): Similar to the right shift operator (`>>`), but it fills the leftmost positions with zeros instead of replicating the sign bit.

Here's an example that demonstrates the usage of bitwise operators in JavaScript:

```javascript
const num1 = 5; // binary: 0101
const num2 = 3; // binary: 0011

const resultAnd = num1 & num2;
console.log(resultAnd); // Output: 1 (binary: 0001)

const resultOr = num1 | num2;
console.log(resultOr); // Output: 7 (binary: 0111)

const resultXor = num1 ^ num2;
console.log(resultXor); // Output: 6 (binary: 0110)

const resultNot = ~num1;
console.log(resultNot); // Output: -6 (binary: 11111111111111111111111111111010)

const resultLeftShift = num1 << 2;
console.log(resultLeftShift); // Output: 20 (binary: 10100)

const resultRightShift = num1 >> 1;
console.log(resultRightShift); // Output: 2 (binary: 0010)

const resultZeroFillRightShift = num1 >>> 1;
console.log(resultZeroFillRightShift); // Output: 2 (binary: 0010)
```

These bitwise operators can be used in various scenarios, such as manipulating binary flags, performing bitwise calculations, or optimizing certain algorithms.

You can refer to reputable sources such as W3Schools [1], MDN Web Docs [2], Programiz [3], or GeeksforGeeks [4] for more detailed explanations and examples on bitwise operators in JavaScript.

I hope this clarifies your question! Let me know if you have any further inquiries.