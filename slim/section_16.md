---
title: Lesson 1.14 - Operator Precedence & Associativity
description: Slim notes.
order: 16
---

See [Ressource on Precedence & Associativity](https://www.php.net/manual/en/language.operators.precedence.php)


Precedence refers to the order in which different operators are evaluated in an expression. It determines which operator is evaluated first and how the expression is parsed. Operators with higher precedence are evaluated before operators with lower precedence.

For example, in the expression `2 + 3 * 4`, the multiplication operator (`*`) has higher precedence than the addition operator (`+`). Therefore, the multiplication operation is performed first, followed by the addition operation.

To override the default precedence, parentheses `()` can be used to explicitly group operations and control the order of evaluation.


Associativity defines the order in which operators with the same precedence are evaluated. It determines whether operators are evaluated from left to right (left-associative) or right to left (right-associative).

For example, in the expression `5 - 3 - 1`, the subtraction operator (`-`) has left associativity. This means that the operation is evaluated from left to right. The expression is equivalent to `(5 - 3) - 1`, resulting in a final value of `1`.

On the other hand, exponentiation (`**`) is right-associative, meaning it is evaluated from right to left. For example, `2 ** 3 ** 2` is equivalent to `2 ** (3 ** 2)`, resulting in a final value of `512`.

Associativity matters when multiple operators of the same precedence are present in an expression. It determines the order in which the operations are performed.

