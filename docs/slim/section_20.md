---
title: Lesson 1.18 - Match Expression
description: Slim notes.
order: 20
---

The `match` expression is a new feature introduced in PHP 8.0. It provides a concise way to perform pattern matching against a single value and execute corresponding code based on the matched pattern. It is similar to the `switch` statement but offers more expressive power and can return a value.

The basic syntax of the `match` expression is as follows:

```php
$result = match ($value) {
    pattern1 => expression1,
    pattern2 => expression2,
    // more patterns...
    default => expression,
};
```

1. The expression inside the parentheses, `$value`, is evaluated.

2. The `match` expression checks if the value matches any of the provided patterns. If a match is found, the corresponding expression is evaluated and its result is assigned to the `$result` variable.

3. If none of the patterns match the value, the `default` pattern is used. If a `default` pattern is not provided, a `MatchError` exception is thrown.

4. The `match` expression returns the result of the evaluated expression corresponding to the matched pattern.

```php
$value = 42;

$result = match ($value) {
    1 => "One",
    2, 3, 4 => "Two to Four",
    5, 6, 7 => myFunction(),
    42 => "The Answer",
    default => "Other Number",
};

echo $result;  // Output: "The Answer"
```

In this example, the `match` expression compares the value of `$value` against different patterns. When `$value` is `42`, the pattern `42` is matched, and the corresponding expression `"The Answer"` is assigned to `$result`. Therefore, the output will be "The Answer".

The `match` expression offers a concise and expressive way to perform pattern matching in PHP. It simplifies code and enhances readability when dealing with multiple conditions and possible values. It is particularly useful when you want to match a value against specific patterns and obtain a result based on the match.

Functionality:

- The `switch` statement allows you to compare a single value against multiple cases and execute code blocks based on the matching case.
- The `match` expression also compares a single value against multiple patterns and executes expressions based on the matching pattern.

Pattern Matching:

- The `switch` statement uses equality comparisons (`==` or `===`) to match the value against cases.
- The `match` expression supports more advanced pattern matching features, including equality comparisons, type comparisons (`instanceof`), and value comparisons (`<`, `>`, `<=`, `>=`, `!=`, `!==`), among others.

Return Value:

- The `switch` statement does not have an inherent return value. Instead, you need to use variables or additional logic to store or retrieve values.
- The `match` expression returns the value of the evaluated expression corresponding to the matched pattern, allowing it to be directly assigned to a variable.

Syntax:

- The `switch` statement uses the `switch`, `case`, and `default` keywords, along with the use of `break` statements to control the flow.
- The `match` expression uses the `match`, `=>`, and `default` keywords, providing a more concise and readable syntax without the need for explicit `break` statements.

Flexibility and Expressiveness:

- The `match` expression provides more expressive power with its advanced pattern matching capabilities, making it more suitable for complex matching scenarios. Has Only ONE statment.
- The `switch` statement is a more traditional construct that is widely supported in older PHP versions and other programming languages, offering familiarity and simplicity for simpler matching needs. Multiple statement are allowed.

Compatibility:

- The `switch` statement is available in all PHP versions, including versions before PHP 8.0.
- The `match` expression is only available in PHP 8.0 and later versions. If you are working with an older version of PHP, you cannot use the `match` expression.
