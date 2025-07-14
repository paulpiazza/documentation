---
title: Iterable Vs Arrays
description: Slim notes.
order: 25
---

In TypeScript, `IterableIterator<number>` is a type that represents an iterator object that yields values of type `number`. It is typically used when working with iterators and generators.

An iterator is an object that implements the iterable protocol, which allows it to be consumed by various syntaxes expecting iterables, such as the `for...of` loop or the spread syntax (`...`).

On the other hand, an array in TypeScript is a built-in data structure that stores a collection of elements of any type. It provides various methods and properties for manipulating and accessing its elements.

While both `IterableIterator<number>` and arrays can be iterated over, there are some differences between them:

1. Type: `IterableIterator<number>` is a specific type representing an iterator object, while an array is a general-purpose data structure.

2. Mutability: Arrays in TypeScript are mutable, meaning you can modify their elements by assigning new values or using array methods. On the other hand, `IterableIterator<number>` objects are typically read-only and produce values on demand.

3. Methods: Arrays provide a wide range of methods for manipulating and accessing their elements, such as `push`, `pop`, `map`, `filter`, etc. `IterableIterator<number>` objects usually have a limited set of methods defined by the iterator protocol, like `next()` to retrieve the next value in the sequence.

It's worth noting that arrays can be converted to iterators using the `[Symbol.iterator]()` method provided by the array prototype. This allows arrays to be consumed by syntaxes expecting iterables, such as the spread syntax or `for...of` loops.

In summary, `IterableIterator<number>` represents an iterator object that yields values of type `number`, whereas arrays are general-purpose data structures with various methods for manipulating and accessing their elements.

I hope this clarifies the difference between `IterableIterator<number>` and arrays. Let me know if you have any further questions!

[3]
[4]



