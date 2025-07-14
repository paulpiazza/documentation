---
title: Lesson 1.12 - Operators Part 1
description: Slim notes.
order: 14
---

[00:00](https://www.youtube.com/watch?v=t8U2FGjjqM8&t=0s) - Intro 

An operator is a symbol or a set of symbols that represents an action or operation to be performed on one or more operands. Operators manipulate the operands and produce a resulting value or perform a specific task

A unary operator is an operator that operates on only one operand.

Much of PHP operators are binary because they have two operands.

The ternary operator gets 3 operands.

[00:47](https://www.youtube.com/watch?v=t8U2FGjjqM8&t=47s) - Arithmetic Operators

- Addition (`+`): Performs addition of two operands.
- Subtraction (`-`): Performs subtraction of one operand from another.
- Multiplication (`*`): Performs multiplication of two operands.
- Division (`/`): Performs division of one operand by another.
- Modulus (`%`): Computes the remainder of the division between two operands.
- Exponentiation (`**`): Computes  the power of a value.

They works with negative values.

They do casting.

```php
$x = "10";
var_dump(+$x); // + cast the string into integer!
```

The result of the division is a float unless, the operands are integers and they are divisible.

The division by 0 will return "fatal error". To avoid this situation use `fdiv()` . 

```php
fdiv(12, 0); // retun float INF and will not throw an error.
```

The modulus cast operands into integers. If you really need to use the modulus with float values, you can use `fmod()`.

If the first operand of the modulus is negative you will get a negative result. 

[04:35](https://www.youtube.com/watch?v=t8U2FGjjqM8&t=275s) - Assignment Operators 

- Assignment (`=`): Assigns a value to a variable.
- Addition assignment (`+=`): Adds a value to the variable and assigns the result.
- Subtraction assignment (`-=`): Subtracts a value from the variable and assigns the result.
- Multiplication assignment (`*=`): Multiplies the variable by a value and assigns the result.
- Division assignment (`/=`): Divides the variable by a value and assigns the result.
- Modulus assignment (`%=`): Computes the modulus the variable by a value and assigns the result.
- Exponentiation assignment (`**=`): Exponentiate the variable by a value and assigns the result.

```php
$x = $y = 10; // assigns 10 to y and then to x

$x += 5; // add 5 to x and assign the result to x
```


[07:12](https://www.youtube.com/watch?v=t8U2FGjjqM8&t=432s) - String Operators 

The string operators (`. .=`): combine two strings


[07:39](https://www.youtube.com/watch?v=t8U2FGjjqM8&t=459s) - Comparison Operators

- Equal to (or loose comparison) (`==`): Checks if two operands are equal.
- Strictly Equal to (or strict comparison) (`===`): Checks if two operands are equal and also their types.
- Not equal to (`!=` or `<>`): Checks if two operands are not equal.
- Greater than (`>`): Checks if the left operand is greater than the right operand.
- Less than (`<`): Checks if the left operand is less than the right operand.
- Greater than or equal to (`>=`): Checks if the left operand is greater than or equal to the right operand.
- Less than or equal to (`<=`): Checks if the left operand is less than or equal to the right operand.

The spaceship operator (`<=>`) is a comparison operator introduced in PHP 7. It is used to compare two expressions and returns an integer value that indicates the relationship between the operands.

- If the left operand is less than the right operand, it returns -1.
- If the left operand is equal to the right operand, it returns 0.
- If the left operand is greater than the right operand, it returns 1.

Ternary Operator (?: or Conditional Operator): The ternary operator is a shorthand conditional operator that allows you to write concise if-else statements in a single line. It evaluates a condition and returns one of two expressions based on the result of the condition. The syntax is: `condition ? expression1 : expression2`

Before PHP 8, the operands are converted into numbers before the operation. A string will be converted into a number 0... 

>[!warning]
>In PHP 8, only when a string is not numeric, the second operand will be converted into a string.
>
>```php
>0 == "hello"; // PHP 7.4: 0 == 0 => send TRUE 
>0 == "hello"; // PHP 8.1: "0" == "hello" => send FALSE
>0 == '0'; // PHP: 0 == 0 => send TRUE
>```

See [Types comparison](https://www.php.net/manual/en/types.comparisons.php)
See [Wiki RFC](https://wiki.php.net/rfc/string_to_number_comparison)

You should use the strict comparison.

```php
$x = 'Hello';
$y = strpos($x, 'H');

/*
	here, the expression will returns H not found,
	because $y is equal to 0 and 0 == false returns true.
	You should use ===
*/
if($y == false) {
	echo "H not found";
} else {
	echo "H found at position ".$y;
}
```

**The null coalescing**

In PHP, the `??` operator, also known as the null coalescing operator, is used to handle situations where a variable may be null or not set. It provides a concise way to assign a default value when the variable is null.

The syntax of the null coalescing operator is as follows:

```php
$variable = $value ?? $default;
```

Here's how it works:

1. If `$value` is not null, the value of `$variable` will be `$value`.
2. If `$value` is null, the value of `$variable` will be `$default`.

The null coalescing operator evaluates the expressions from left to right until it finds a non-null value.

```php
$name = $username ?? "Guest"; 
echo $name;
```

In this example, if `$username` is set and not null, `$name` will be assigned the value of `$username`. If `$username` is null or not set, `$name` will be assigned the default value "Guest".

```php
$color = $preferredColor ?? $defaultColor ?? "blue"; 
echo $color;
```

In this example, the null coalescing operator is used in a chain. It tries to assign the value of `$preferredColor` to `$color` first. If `$preferredColor` is null or not set, it moves to the next expression and tries to assign the value of `$defaultColor`. If even `$defaultColor` is null or not set, the final default value "blue" is assigned to `$color`.

