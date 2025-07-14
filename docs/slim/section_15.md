---
title: Lesson 1.13 - Operators Part 2
description: Slim notes.
order: 15
---

[00:11](https://www.youtube.com/watch?v=gCVlQdbddXY&t=11s) - Error Control Operator (`@`)

```php
$x = file('foo.txt');
// this file not exist. We get warning in that case.

$x = @file('foo.txt');
// the error is muted.
```

>[!warning]
> It's a bad practice. You should avoid to use it and manage exceptions.

[01:26](https://www.youtube.com/watch?v=gCVlQdbddXY&t=86s) - Increment / Decrement Operators (`++ --`) 

Increment Operator (++): The increment operator `++` adds 1 to the current value of a variable.

Decrement Operator (--): The decrement operator `--` subtracts 1 from the current value of a variable.

- It as no effect on boolean.
- It will increment null to 1 
- It will de/increment only the last character of a string.

It's important to note that the placement of the increment or decrement operator can affect the behavior of the operation. 

When the operator is placed before the variable (`++$x` or `--$y`), it is called the pre-increment/pre-decrement operator and increments/decrements the variable before using its value. 

```php
$j = 10;
$k = ++$j; // $j is incremented to 11 and then $k is assigned 11
```

When the operator is placed after the variable (`$x++` or `$y--`), it is called the post-increment/post-decrement operator and increments/decrements the variable after using its value.

```php
$j = 10;
$k = $j++; // $k is assigned the original value of $j (10), then $j is incremented to 11
```

[03:17](https://www.youtube.com/watch?v=gCVlQdbddXY&t=197s) - Logical Operators (`&& || !`)

In PHP, `&&`, `||`, and `!` are logical operators used to perform logical operations on boolean expressions. They are often used to evaluate conditions and make decisions based on the results of those evaluations.


The logical AND operator (`&&`) returns true if both operands are true; otherwise, it returns false. It evaluates the expressions from left to right and short-circuits the evaluation if the left operand is false.

   ```php
   $a = true;
   $b = false;
   $result = $a && $b; // $result is false
   ```

In this example, `$result` will be false because `$a` is true, but `$b` is false. Since the logical AND operator requires both operands to be true, it evaluates to false in this case.


The logical OR operator (`||`) returns true if either of the operands is true; otherwise, it returns false. It evaluates the expressions from left to right and short-circuits the evaluation if the left operand is true.

   ```php
   $x = true;
   $y = false;
   $result = $x || $y; // $result is true
   ```

In this example, `$result` will be true because `$x` is true, even though `$y` is false. Since the logical OR operator only requires one operand to be true, it evaluates to true in this case.


The logical NOT operator (`!`) is a unary operator that negates the value of a boolean expression. It returns true if the expression is false, and false if the expression is true.

   ```php
   $condition = false;
   $result = !$condition; // $result is true
   ```

In this example, `$result` will be true because `$condition` is false. The logical NOT operator negates the value of `$condition`, resulting in true.


[04:52](https://www.youtube.com/watch?v=gCVlQdbddXY&t=292s) - Logical Operators (`and or xor`)

The main difference between the `&&`/`and` and `||`/`or` operators lies in their operator precedence. `&&` and `||` have higher precedence than `and` and `or`. This means that `&&` and `||` are evaluated first when used with other operators in an expression.

```php
$result = $a && $b or $c;
```

In this example, `$a && $b` is evaluated first due to higher precedence, and then the `or` operation is performed with the result. The parentheses can be used to explicitly specify the desired order of evaluation if needed.

The `xor` operator, on the other hand, behaves similarly to `or` but returns true only if exactly one of the operands is true. If both operands are true or both are false, `xor` returns false.

[05:45](https://www.youtube.com/watch?v=gCVlQdbddXY&t=345s) - Logical Operators - Short Circuiting

Short-circuiting means that the evaluation of the operands stops as soon as the result can be determined based on the current state of the evaluation.

**Short-circuiting with AND (`&&`):**

If the left operand of `&&` is false, the right operand is not evaluated because the overall result will always be false regardless of the right operand's value.

This behavior can be useful when the right operand involves a potentially costly or error-prone operation that should only be evaluated if the left operand is true.

**Short-circuiting with OR (`||`):**

If the left operand of `||` is true, the right operand is not evaluated because the overall result will always be true regardless of the right operand's value.

This behavior can be useful when the right operand involves an operation that should only be evaluated if the left operand is false.

[07:55](https://www.youtube.com/watch?v=gCVlQdbddXY&t=475s) - Bitwise Operators (`& | ^ ~ << >>`)

Certainly! Here's an explanation of each bitwise operator in PHP:

1. Bitwise AND (`&`):
   The bitwise AND operator (`&`) performs a bitwise AND operation between the corresponding bits of two integer values. It returns a new integer value where each bit is set to 1 only if the corresponding bits of both operands are also 1.

   ```php
   $a = 5;    // 101 in binary
   $b = 3;    // 011 in binary
   $result = $a & $b;  // $result is 1 (001 in binary)
   ```

   In this example, the bitwise AND operator compares the individual bits of `$a` and `$b`. The resulting value, `$result`, contains a 1 only in positions where both `$a` and `$b` have a 1.

2. Bitwise OR (`|`):
   The bitwise OR operator (`|`) performs a bitwise OR operation between the corresponding bits of two integer values. It returns a new integer value where each bit is set to 1 if either of the corresponding bits of the operands is 1.

   ```php
   $a = 5;    // 101 in binary
   $b = 3;    // 011 in binary
   $result = $a | $b;  // $result is 7 (111 in binary)
   ```

   In this example, the bitwise OR operator compares the individual bits of `$a` and `$b`. The resulting value, `$result`, contains a 1 in positions where either `$a` or `$b` has a 1.

3. Bitwise XOR (`^`):
   The bitwise XOR operator (`^`) performs a bitwise exclusive OR operation between the corresponding bits of two integer values. It returns a new integer value where each bit is set to 1 if the corresponding bits of the operands differ (one is 1 and the other is 0).

   ```php
   $a = 5;    // 101 in binary
   $b = 3;    // 011 in binary
   $result = $a ^ $b;  // $result is 6 (110 in binary)
   ```

   In this example, the bitwise XOR operator compares the individual bits of `$a` and `$b`. The resulting value, `$result`, contains a 1 in positions where the bits of `$a` and `$b` differ.

4. Bitwise NOT (`~`):
   The bitwise NOT operator (`~`) performs a bitwise complement operation on an integer value. It flips all the bits, changing each 1 to 0 and each 0 to 1.

   ```php
   $a = 5;    // 101 in binary
   $result = ~$a;  // $result is -6 (-110 in binary)
   ```

   In this example, the bitwise NOT operator inverts all the bits of `$a`. The resulting value, `$result`, is the two's complement representation of the inverted bits.

5. Left Shift (`<<`):
   The left shift operator (`<<`) shifts the bits of an integer value to the left by a specified number of positions. It effectively multiplies the value by 2 raised to the power of the shift count.

   ```php
   $a = 5;    // 101 in binary
   $result = $a << 2;  // $result is 20 (10100 in binary)
   ```

   In this example, the left shift operator shifts the bits of `$a` two positions to the left. The resulting value, `$result`, is obtained by appending two zeros to the right side of the binary representation of `$a`.

6. Right Shift (`>>`):
   The right shift operator (`>>`) shifts the bits of an integer value to the right by a specified number of positions. It effectively divides the value by 2 raised to the power of the shift count.

   ```php
   $a = 20;    // 10100 in binary
   $result = $a >> 2;  // $result is 5 (101 in binary)
   ```

   In this example, the right shift operator shifts the bits of `$a` two positions to the right. The resulting value, `$result`, is obtained by removing two least significant bits from the binary representation of `$a`.

Bitwise operators are useful for low-level operations, binary data manipulation, and specific bit-level calculations. They provide fine-grained control over individual bits of integer values.

They can be used for flags, user control, etc.

[12:42](https://www.youtube.com/watch?v=gCVlQdbddXY&t=762s) - Array Operators (`+ == === != !==`)

The array union operator (`+`) combines the elements of two arrays. It returns a new array containing all the elements from both arrays, excluding duplicate values. If there are duplicate keys, the value from the left-hand array is used.

```php
$array1 = ['a', 'b'];
$array2 = ['c', 'd', 'e'];
$result = $array1 + $array2; // returns ['a', 'b', 'e']

$array1 = ['a' => 1, 'b' => 2];
$array2 = ['c' => 1, 'd' => 2, 'e' => 3];
$result = $array1 + $array2; 
/*
    [a] => 1
    [b] => 2
    [c] => 1
    [d] => 2
    [e] => 3
*/
```

Equality Comparison (`==`): The equality comparison operator (`==`) compares two arrays for equality. It returns true if the arrays have the same key-value pairs, even if the order of the elements is different.

```php
$array1 = [1, 2, 3]; 
$array2 = [3, 2, 1]; 
$result = $array1 == $array2;  // $result is true
``` 

In this example, `$result` will be true because both arrays contain the same values, even though the order of the elements differs.

Identity Comparison (`===`): The identity comparison operator (`===`) compares two arrays for identity. It returns true if the arrays have the same key-value pairs in the same order.

```php
$array1 = [1, 2, 3];
$array2 = [3, 2, 1];
$result = $array1 === $array2;  // $result is false`
```

In this example, `$result` will be false because although the values in both arrays are the same, the order of the elements is different.

Inequality Comparison (`!=`): The inequality comparison operator (`!=`) compares two arrays for inequality. It returns true if the arrays have different key-value pairs or a different order of elements, and false if they are the same.

```php
$array1 = [1, 2, 3];
$array2 = [3, 2, 1];
$result = $array1 != $array2;  // $result is false
```

In this example, `$result` will be false because both arrays have the same values, even though the order of the elements differs.

Non-identity Comparison (`!==`): The non-identity comparison operator (`!==`) compares two arrays for non-identity. It returns true if the arrays have different key-value pairs, a different order of elements, or a different data type.

```php
$array1 = [1, 2, 3];
$array2 = [3, 2, 1];
$result = $array1 !== $array2;  // $result is true
```

In this example, `$result` will be true because although the values in both arrays are the same, the order of the elements is different.

[15:32](https://www.youtube.com/watch?v=gCVlQdbddXY&t=932s) - Execution Operator, Type Operator, & Nullsafe Operator

>[!warning]
>See part 2
