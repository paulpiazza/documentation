---
title: What's new in PHP 8?
description: Slim notes.
order: 3
---

PHP 8 introduced several significant improvements and new features to the language, offering developers enhanced capabilities, performance optimizations, and better syntactic sugar. Here are some of the key advantages of PHP 8:

1. **Performance Improvements**: PHP 8 includes performance enhancements that make code execution faster and more efficient, resulting in reduced response times for web applications.

2. **Just-In-Time Compilation (JIT)**: PHP 8 introduced JIT compilation, which can provide further performance boosts by dynamically compiling and optimizing code during runtime.

3. **Union Types**: Union types allow you to specify that a variable can accept multiple types of values. This enhances type safety and helps to catch potential bugs earlier in the development process.

4. **Named Arguments**: PHP 8 allows you to pass function arguments by name, making function calls more self-documenting and improving code readability.

5. **Match Expression (Pattern Matching)**: The `match` expression is a powerful replacement for the traditional `switch` statement. It allows you to perform pattern matching on values and execute code based on patterns.

6. **Nullsafe Operator (->?)**: The nullsafe operator provides a concise way to access properties and methods of an object without risking a fatal error if the object is null.

7. **Attributes (Annotations)**: Attributes allow you to add metadata to classes, methods, and other code elements. They provide a more structured way to annotate code compared to docblocks.

8. **Constructor Property Promotion**: Constructor property promotion simplifies the creation of classes by allowing you to define and initialize properties directly in the constructor.

9. **Consistent Type Errors**: Type errors now consistently produce `TypeError` exceptions, making it easier to catch and handle type-related issues.

10. **New String Functions**: PHP 8 introduced new string functions like `str_contains()`, `str_starts_with()`, and `str_ends_with()` for easier and more efficient string manipulation.

11. **Throw Expression**: PHP 8 allows you to throw exceptions directly in expressions, making error handling more concise.

12. **Improved Error Messages**: Error messages in PHP 8 are clearer and provide more context, which simplifies debugging and troubleshooting.

13. **New Syntax Features**: PHP 8 introduces several new syntax features, such as the `::class` constant syntax, that improve code readability and maintainability.

14. **Deprecations and Removals**: PHP 8 deprecated and removed several legacy features and outdated functionalities, promoting best practices and cleaner code.