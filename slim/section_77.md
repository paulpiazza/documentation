---
title: Lesson 3.6 - Generators
description: Slim notes.
order: 77
---

See [Generators](https://www.php.net/manual/en/language.generators.syntax.php)

Generators in PHP are a feature that allows you to iterate over a potentially large set of data without having to load the entire set into memory at once. Instead of creating an array or collection of all the data, generators create a "lazy" sequence of values, generating and yielding each value one by one as needed. This can greatly reduce memory consumption and improve performance when working with large datasets.

Here's how generators work and some common use cases:

1. **Generator Function Creation**: Generators are defined using a special kind of function called a generator function. Instead of using the `return` keyword, you use the `yield` keyword to emit a value and pause the execution of the function until the next value is requested.

```php
function simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

$generator = simpleGenerator();

foreach ($generator as $value) {
    echo $value . ' ';
}
// Output: 1 2 3
```

2. **Memory Efficiency**: The key advantage of generators is their memory efficiency. If you were to create an array with millions of elements, it would consume a lot of memory. With generators, only one value is held in memory at a time.

3. **Infinite Sequences**: Generators are perfect for representing infinite sequences, like an infinite list of Fibonacci numbers.

```php
function fibonacciGenerator() {
    $a = 0;
    $b = 1;
    while (true) {
        yield $a;
        list($a, $b) = [$b, $a + $b];
    }
}

$generator = fibonacciGenerator();
foreach ($generator as $value) {
    if ($value > 1000) break;
    echo $value . ' ';
}
```

4. **Large Data Sets**: When working with large data sets from databases or files, generators allow you to process the data row by row without having to load the entire dataset into memory.

5. **Stream Processing**: You can use generators to process streaming data, like reading and processing log files line by line.

6. **Complex Data Manipulation**: Generators can also be used to manipulate complex data structures. For example, you could implement a generator that traverses and yields specific elements from a deeply nested array.

7. **Custom Iterators**: Generators can be used to create custom iterators for your classes, allowing you to iterate over custom data structures with ease.

8. **Performance**: Generators can improve performance by avoiding the overhead of constructing and managing large arrays.

Overall, generators are a powerful tool in PHP that provide memory-efficient and flexible ways to work with large data sets, infinite sequences, and stream processing. They are particularly useful when you need to process data sequentially without loading everything into memory.
