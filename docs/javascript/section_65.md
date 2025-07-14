---
title: Sorting with Custom Comparator Functions
description: Slim notes.
order: 65
---

Learn about internal sorting and create a comparator function in JavaScript.

### The Array Sort Method

There are many algorithms to sort arrays, including bubble sort, merge sort, and quicksort. The JavaScript array object type actually has a `.sort()` method that will sort the array it’s called on in place and return the sorted version.



As you can see, the internal `.sort()` method does return an altered array that is more sorted than before, but it’s not what we would expect to see. The numbers are ordered by the first digit, so while `1` comes before `2` (as expected), `10` _also_ comes before `2` since its first digit is a `1`. The same pattern can be seen in the sorting of the strings, where it’s sorted according to the first character. This is because `.sort()`‘s default comparator converts the values in the array to strings and then compares them lexically.

But what if we want to sort the array another way? Yes, it’s possible to use one of the sorting algorithms listed above, but the `.sort()` method will actually allow us to tell it how we want it to compare the elements in the array.

### Custom Comparators

We can pass a custom comparator function that we have created to the `.sort()` method in order to sort the array in any way we desire:

```
myArray.sort(myComparatorFunction);
```

The comparator function will compare two elements in the array and return a value that `.sort()` will use to determine the sorting order. The function should take two arguments, usually named `a` and `b`:

```
const myComparatorFunction = (a, b) => {}
```

There are three possible categories of return values:

1. A value less than zero, which means `a` will be sorted at a lower index than `b`
2. A value greater than zero, which means `b` will be sorted at a lower index than `a`
3. The value zero, which means the two elements were equal and won’t be moved

Now that we’re familiar with the idea of a comparator function, let’s take a look at some examples.

#### Sorted in Ascending Order

We’re going to start with one of the most intuitive orderings: ascending. This sort will yield the same results as using a sorting algorithm like quicksort or merge sort. The first step is to create the comparator function. Given inputs `a` and `b`, the plaintextcode is as follows:

```plaintext
if a is less than b
  return negative number
if a is greater than b
  return positive number
if a is equal to b
  return 0
```

While you could create the `ascendingOrder()` function using three `if` statements, you could optimize it by simply returning `a - b`. This will return a negative number if `a` is smaller, a positive number if `b` is smaller, and zero if they are equal. Likewise, if you wanted to sort an array in _descending_ order, the function could simply return `b - a`.

#### Sorting by Length

Let’s try sorting elements by their length, from the shortest element to the longest.

Multiple choice

If we want to sort an array by each element’s length in ascending order, we should return _________ when `a` is shorter than `b`, and _________ when `a` is longer than `b`.

`-1`, `1`

`1`, `-1`

We have handled situations when `a` and `b` have different lengths, but what if they have the same length? Following the logic we currently have, the function would place each group of elements with the same length together in the same order they were in the original array. It would be nice to have those elements sorted in some way, and we can reuse our `ascendingOrder()` function from above for that.

Coding question

Create the `sortByLength()` comparator function. (Remember that you can use `someVariable.length` to access an array or string’s length!)

How do you think you would change the function to sort the array from the longest elements to the shortest?

### Explicit Ordering

Let’s try a more complicated custom comparator. Given an input array, we want to sort the array given to an explicit order. If elements aren’t in the given explicit order, put them at the back in the same order they appeared in. For example, given:

```
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g'];const order = ['a', 'n', 'd', 'y'];
```

the comparator function `explicitSort(inputArray, order)` should return:

```
['a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g']
```

In order to do this, we are going to use an `explicitSortWithComparator()` function that takes `inputArray` and `order` as parameters, and has an internal `explicitComparator()` function, which is what will take `a` and `b`. At the end of `explicitSortWithComparator()`, we will call `.sort(explicitComparator)` on `inputArray` and return the result.

The `explicitComparator()` function will find the indices of `a` and `b` in the `order` array (if they exist) and return the difference between them:

```plaintext
indexA and indexB are initialized to the length of the order array
if a is in order
  indexA = a's index in order
if b is in order
  indexB = b's index in order
return indexA - indexB
```

Coding question

Finish the `explicitComparator()` function to complete the `explicitSortWithComparator()` function. Remember that you can use `someArray.indexOf(someElement)` to find the index of an element in the array, and `someArray.includes(someElement)` to see if that element exists in the array.

### Time and Space Complexities

The time and space complexities of your custom comparator functions will vary depending on your implementations, but what about the time and space complexities of JavaScript’s internal `.sort()` method? That depends on the length of the array you want to sort. If the array has 10 or fewer elements, then the method will use insertion sort, with a time complexity of `O(n^2)` and a space complexity of `O(1)`. If the array is longer, then the method will use quicksort, giving it a time complexity of `O(n log n)` and a space complexity of `O(log n)`.

