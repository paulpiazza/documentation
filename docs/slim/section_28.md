---
title: Lesson 1.26 - Work With Arrays - Array Functions
description: Slim notes.
order: 28
---

See [built-in function to work with arrays](https://www.php.net/manual/en/ref.array.php)

[00:25](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=25s) - Chunk an array into a list of smaller chunks of arrays - array_chunk

In PHP, the `array_chunk()` function is used to split an array into smaller chunks or sub-arrays. This function can be helpful when you want to process or display data in smaller, manageable groups.

Here's the syntax of the `array_chunk()` function:

```php
array_chunk(array $input, int $size, bool $preserveKeys = false): array
```

- `$input`: The original array that you want to split into chunks.
- `$size`: The size of each chunk. This parameter determines how many elements will be in each sub-array.
- `$preserveKeys` (optional): If set to `true`, the function will preserve the original keys of the elements in the sub-arrays. Default is `false`.

Let's see an example of how to use `array_chunk()`:

```php
$inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$chunkedArray = array_chunk($inputArray, 3);

print_r($chunkedArray);
```

Output:
```
Array
(
    [0] => Array
        (
            [0] => 1
            [1] => 2
            [2] => 3
        )

    [1] => Array
        (
            [0] => 4
            [1] => 5
            [2] => 6
        )

    [2] => Array
        (
            [0] => 7
            [1] => 8
            [2] => 9
        )

    [3] => Array
        (
            [0] => 10
        )
)
```

In this example, the original array `$inputArray` is split into chunks of size 3 using `array_chunk()`, resulting in a new array `$chunkedArray` containing sub-arrays of size 3 each.

You can also use the `$preserveKeys` parameter if you want to keep the original keys in the sub-arrays. For example:

```php
$inputArray = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
$chunkedArray = array_chunk($inputArray, 2, true);

print_r($chunkedArray);
```

Output:
```
Array
(
    [0] => Array
        (
            [a] => 1
            [b] => 2
        )

    [1] => Array
        (
            [c] => 3
            [d] => 4
        )

    [2] => Array
        (
            [e] => 5
        )
)
```

In this case, we used `$preserveKeys = true`, so the original keys of the elements are retained in the sub-arrays.

[01:15](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=75s) - Combine arrays to form a new array - array_combine

In PHP, the `array_combine()` function is used to create a new array by combining two arrays, where one array contains the keys, and the other array contains the corresponding values. This function is helpful when you have two arrays that need to be merged to form key-value pairs in a new array.

Here's the syntax of the `array_combine()` function:

```php
array_combine(array $keys, array $values): array|false
```

- `$keys`: The array containing keys that will be used as the keys of the new array.
- `$values`: The array containing values that will be used as the values of the new array.
- Returns: The new array with keys and values combined, or `false` if the number of elements in the `$keys` and `$values` arrays is different.

Let's see an example of how to use `array_combine()`:

```php
$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];

$combinedArray = array_combine($keys, $values);

print_r($combinedArray);
```

Output:
```
Array
(
    [a] => 1
    [b] => 2
    [c] => 3
)
```

In this example, the `$keys` array provides the keys, and the `$values` array provides the values. The `array_combine()` function merges the two arrays to create a new array `$combinedArray` with the keys and values combined as key-value pairs.

Keep in mind the following points when using `array_combine()`:

1. The number of elements in both the `$keys` and `$values` arrays must be the same. Otherwise, `array_combine()` will return `false`.
2. If any of the input arrays is empty, the result will also be an empty array.
3. If the `$keys` array contains duplicate values, only the last occurrence will be used as the key in the resulting array.

Ensure that the arrays you are combining have corresponding elements and are suitable for forming key-value pairs. If you have arrays with different numbers of elements or if you need more complex merging logic, consider using other array functions like `array_merge()` or `array_map()` to achieve the desired result.

[01:58](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=118s) - Filter array - array_filter

In PHP, the `array_filter()` function is used to filter an array by applying a callback function to each element. The callback function determines which elements should be included in the filtered array. This function is useful when you want to remove specific elements from an array based on certain conditions.

Here's the syntax of the `array_filter()` function:

```php
array_filter(array $array, callable $callback = null, int $flag = 0): array
```

- `$array`: The input array that you want to filter.
- `$callback` (optional): A callback function that defines the filtering condition. If not provided, the function will remove all elements that are considered "falsy" (e.g., `false`, `null`, empty strings, `0`, and empty arrays).
- `$flag` (optional): A flag that can modify the behavior of the filtering process. The possible values for `$flag` are:
  - `ARRAY_FILTER_USE_KEY`: Apply the callback to array keys instead of values.
  - `ARRAY_FILTER_USE_BOTH`: Apply the callback to both array keys and values.

Let's see some examples of how to use `array_filter()`:

Example 1: Filter an array to remove zero and empty string values.

```php
$array = [1, 0, 5, '', 'Hello', null, 'World'];

$filteredArray = array_filter($array);

print_r($filteredArray);
/*
Array
(
    [0] => 1
    [2] => 5
    [4] => Hello
    [6] => World
)
*/*
```

Example 2: Filter an associative array to remove elements with values less than 3.

```php
$array = ['a' => 1, 'b' => 4, 'c' => 2, 'd' => 5];

$filteredArray = array_filter($array, fn($value) => $value >= 3);

print_r($filteredArray);

/*
Array
(
    [b] => 4
    [d] => 5
)
*/
```

Example 3: Filter an array using the `ARRAY_FILTER_USE_KEY` flag to remove elements with keys containing the letter 'a'.

```php
$array = ['apple' => 'fruit', 'banana' => 'fruit', 'carrot' => 'vegetable'];

$filteredArray = array_filter($array, function ($key) {
    return stripos($key, 'a') === false;
}, ARRAY_FILTER_USE_KEY);

print_r($filteredArray);
/*
Array
(
    [banana] => fruit
)
*/
```

In this example, the `stripos()` function is used to check if the letter 'a' exists in the keys. The elements with keys containing the letter 'a' are removed from the filtered array.

The `array_filter()` function is a versatile tool for selectively removing elements from an array based on custom conditions defined in the callback function. It allows you to create a new array that only contains the elements that meet the filtering criteria.

[03:10](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=190s) - Re-index array - array_values

In PHP, the `array_values()` function is used to re-index an array numerically. It returns a new array containing all the values of the original array, re-indexed with consecutive integer keys starting from 0.

Here's the syntax of the `array_values()` function:

```php
array_values(array $array): array
```

- `$array`: The original array whose values you want to re-index numerically.

Let's see an example of how to use `array_values()` to re-index an array:

```php
$associativeArray = [
    'a' => 'Apple',
    'b' => 'Banana',
    'c' => 'Cherry'
];

$reindexedArray = array_values($associativeArray);

print_r($reindexedArray);

/*
Array
(
    [0] => Apple
    [1] => Banana
    [2] => Cherry
)
*/
```

In this example, the `$associativeArray` is an associative array with keys 'a', 'b', and 'c'. When we use `array_values()` on this array, it returns a new numerically indexed array `$reindexedArray` containing the values of the original array. The keys are automatically assigned as consecutive integers starting from 0.

The `array_values()` function is useful when you want to convert an associative array into a numerically indexed array or when you need to reset the array keys to a continuous numeric sequence. Keep in mind that the original array remains unchanged, and a new array is returned with the re-indexed values.

[03:30](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=210s) - Filter array with no callback - array_filter

Filter an array to remove zero and empty string values.

```php
$array = [1, 0, 5, '', 'Hello', null, 'World'];

$filteredArray = array_filter($array);

print_r($filteredArray);
/*
Array
(
    [0] => 1
    [2] => 5
    [4] => Hello
    [6] => World
)
*/*
```

[03:49](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=229s) - Get keys of an array - array_keys

In PHP, the `array_keys()` function is used to retrieve all the keys from an array and return them as a new array. This function is helpful when you want to access or manipulate the keys separately from the values in the array.

Here's the syntax of the `array_keys()` function:

```php
array_keys(array $array, mixed $searchValue = null, bool $strict = false): array
```

- `$array`: The input array from which you want to retrieve the keys.
- `$searchValue` (optional): If provided, the function will return only the keys associated with the specified value in the array.
- `$strict` (optional): If set to `true`, the function will compare the values using strict comparison (both type and value). Default is `false`.

Let's see some examples of how to use `array_keys()`:

Example 1: Get all keys from an array.
```php
$array = ['a' => 1, 'b' => 2, 'c' => 3];

$keys = array_keys($array);

print_r($keys);
/*
Array
(
    [0] => a
    [1] => b
    [2] => c
)
*/
```

Example 2: Get keys associated with a specific value in the array.
```php
$array = ['a' => 1, 'b' => 2, 'c' => 1];

$keysWithSpecificValue = array_keys($array, 1);

print_r($keysWithSpecificValue);

/*
Array
(
    [0] => a
    [1] => c
)
/*
```

Example 3: Using strict comparison to find keys with specific value.
```php
$array = ['a' => 1, 'b' => '1', 'c' => 1];

$keysStrictComparison = array_keys($array, 1, true);

print_r($keysStrictComparison);

/*
Array
(
    [0] => a,
    [1] => c
)
*/
```

In this example, the third element in the array has a string value '1', but when using strict comparison (`$strict = true`), only the key with the integer value `1` is returned.

The `array_keys()` function is versatile and allows you to easily obtain the keys of an array, filter keys based on specific values, and perform strict comparisons if needed. It is a useful tool when you need to work with keys separately from the values in your arrays.

[04:33](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=273s) - Iterate over array elements & apply callback - array_map

In PHP, the `array_map()` function is used to iterate over the elements of an array and apply a callback function to each element. It returns a new array containing the results of applying the callback to each element of the original array. This function is useful when you need to transform or process each element of an array based on a specific operation defined in the callback function.

Here's the syntax of the `array_map()` function:

```php
array_map(callable $callback, array $array, array ...$arrays): array
```

- `$callback`: The callback function to apply to each element of the array(s). It can be a string representing the name of a function, an anonymous function (closure), or an array with an object and method name (for instance methods).
- `$array`: The input array to iterate over and apply the callback function to.
- `$arrays`: (optional) Additional arrays to be used as input for the callback function if it requires multiple arrays.

Let's see some examples of how to use `array_map()`:

Example 1: Multiply each element in the array by 2.
```php
$array = [1, 2, 3, 4, 5];

$resultArray = array_map(function ($value) {
    return $value * 2;
}, $array);

print_r($resultArray);

/*
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)
*/
```

Example 2: Concatenate elements from two arrays.
```php
$array1 = ['a', 'b', 'c'];
$array2 = [1, 2, 3];

$resultArray = array_map(function ($value1, $value2) {
    return $value1 . $value2;
}, $array1, $array2);

print_r($resultArray);

/*
Array
(
    [0] => a1
    [1] => b2
    [2] => c3
)
*/
```

Example 3: Using a named function as the callback.
```php
$array = [10, 20, 30];

function square($value) {
    return $value * $value;
}

$resultArray = array_map('square', $array);

print_r($resultArray);

/*
Array
(
    [0] => 100
    [1] => 400
    [2] => 900
)
*/
```

The `array_map()` function provides a clean and efficient way to process elements in an array without the need for explicit loops. It allows you to apply custom operations to each element and create a new array with the results.

[06:10](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=370s) - Merge arrays - array_merge

In PHP, the `array_merge()` function is used to merge two or more arrays into a single array. It takes multiple arrays as arguments and returns a new array containing all the elements from the input arrays. The elements are combined in the order they appear in the arguments list.

Here's the syntax of the `array_merge()` function:

```php
array_merge(array $array1, array $array2, array ...$arrays): array
```

- `$array1`: The first array to merge.
- `$array2`: The second array to merge.
- `$arrays`: (optional) Additional arrays to merge.

Let's see some examples of how to use `array_merge()` to merge arrays:

Example 1: Merge two arrays.
```php
$array1 = ['a', 'b', 'c'];
$array2 = [1, 2, 3];

$mergedArray = array_merge($array1, $array2);

print_r($mergedArray);

/*
Array
(
    [0] => a
    [1] => b
    [2] => c
    [3] => 1
    [4] => 2
    [5] => 3
)
*/
```

Example 2: Merge three arrays.
```php
$array1 = ['apple', 'banana'];
$array2 = ['orange', 'kiwi'];
$array3 = ['grape', 'melon'];

$mergedArray = array_merge($array1, $array2, $array3);

print_r($mergedArray);

/*
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
    [3] => kiwi
    [4] => grape
    [5] => melon
)
*/
```

Example 3: Merge associative arrays with duplicate keys.
```php
$array1 = ['a' => 1, 'b' => 2];
$array2 = ['b' => 3, 'c' => 4];

$mergedArray = array_merge($array1, $array2);

print_r($mergedArray);

/*
Array
(
    [a] => 1
    [b] => 3
    [c] => 4
)
*/
```

In this example, the keys 'a' and 'b' are present in both arrays. The `array_merge()` function keeps the value of the last occurrence of the key, so the value from `$array2` (3) overwrites the value from `$array1` (2) for the key 'b' in the merged array.

Keep in mind that `array_merge()` is a simple way to merge arrays, but it is not suitable for merging arrays with numeric keys (as it reindexes them) or for handling associative arrays with duplicate keys. In such cases, you may consider using other array functions like `array_replace()` or `array_merge_recursive()` for more specific merging behavior.

[07:10](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=430s) - Reduce array to a single value - array_reduce

In PHP, the `array_reduce()` function is used to iteratively reduce an array to a single value based on a callback function's logic. The callback function is applied to each element of the array along with a "carry" value (initially provided) to accumulate the result. The final reduced value is returned after all iterations are completed.

Here's the syntax of the `array_reduce()` function:

```php
array_reduce(array $array, callable $callback, mixed $initial = null): mixed
```

- `$array`: The input array that you want to reduce.
- `$callback`: The callback function to apply on each element of the array. It takes two arguments: the "carry" value and the current array element. It should return the updated "carry" value for the next iteration.
- `$initial`: (optional) The initial value to start the reduction process. If not provided, the first element of the array will be used as the initial "carry" value.

Let's see some examples of how to use `array_reduce()` to reduce an array:

Example 1: Summing all elements in the array.
```php
$array = [1, 2, 3, 4, 5];

$sum = array_reduce($array, function ($carry, $item) {
    return $carry + $item;
});

echo $sum; // Output: 15
```

Example 2: Multiplying all elements in the array.
```php
$array = [2, 3, 4, 5];

$product = array_reduce($array, function ($carry, $item) {
    return $carry * $item;
}, 1); // 1 is the initial value

echo $product; // Output: 120
```

Example 3: Concatenating all elements in the array.
```php
$array = ['Hello', ' ', 'World', '!'];

$concatenatedString = array_reduce($array, function ($carry, $item) {
    return $carry . $item;
}, 'Greetings: '); // 'Greetings: ' is the initial value

echo $concatenatedString; // Output: Greetings: Hello World!
```

In these examples, the callback function accumulates the results (sum, product, concatenated string) as it iterates through the array. The `array_reduce()` function then returns the final value after all iterations are complete.

`array_reduce()` is a powerful function that allows you to perform complex operations on an array and reduce it to a single value. It's important to define the callback function correctly to ensure the desired reduction logic is applied correctly.

[08:35](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=515s) - Search for a value in an array & find its key - array_search

In PHP, the `array_search()` function is used to search for a specific value in an array and return its corresponding key if found. It's a handy function when you want to determine the key of an element based on its value.

Here's the syntax of the `array_search()` function:

```php
array_search(mixed $needle, array $haystack, bool $strict = false): mixed|false
```

- `$needle`: The value you want to search for in the array.
- `$haystack`: The input array where you want to search for the value.
- `$strict` (optional): If set to `true`, the function will perform a strict comparison (both type and value) when searching. Default is `false`.

The function returns the key of the found element if it exists, or `false` if the value is not found in the array.

Let's see some examples of how to use `array_search()`:

Example 1: Search for a value and get its key.
```php
$array = ['apple', 'banana', 'orange', 'kiwi'];

$key = array_search('orange', $array);

echo $key; // Output: 2
```

Example 2: Using strict comparison for searching.
```php
$array = [1, '2', 3, '4'];

$key = array_search('2', $array, true);

echo $key; // Output: 1 
```

Example 3: Search for a value in an associative array.
```php
$array = ['a' => 10, 'b' => 20, 'c' => 30];

$key = array_search(20, $array);

echo $key; // Output: b
```

Keep in mind the following points when using `array_search()`:

1. If the value you are searching for appears multiple times in the array, only the *first occurrence's* key will be returned.
2. If the value is not found or if there are any errors, `array_search()` returns `false`.
3. When using strict comparison (`$strict = true`), the function will not find values if their types do not match exactly with the types in the array.

[09:56](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=596s) - Alternative way to check if an item exists in the array - in_array

In PHP, another way to check if a specific value exists in an array is by using the `in_array()` function. It is a simple and straightforward function that checks whether a value is present in the given array.

```php
in_array(mixed $needle, array $haystack, bool $strict = false): bool
```

- `$needle`: The value you want to check for in the array.
- `$haystack`: The input array in which you want to search for the value.
- `$strict` (optional): If set to `true`, the function will perform a strict comparison (both type and value) when checking. Default is `false`.

The function returns `true` if the value is found in the array, and `false` otherwise.

Let's see some examples of how to use `in_array()`:

Example 1: Check if a value exists in a simple array.
```php
$array = ['apple', 'banana', 'orange', 'kiwi'];

$exists = in_array('orange', $array);

var_dump($exists); // Output: bool(true)
```

Example 2: Using strict comparison for checking.
```php
$array = [1, '2', 3, '4'];

$exists = in_array(2, $array, true);

var_dump($exists); // Output: bool(false)
```

Example 3: Check if a value exists in an associative array.
```php
$array = ['a' => 10, 'b' => 20, 'c' => 30];

$exists = in_array(20, $array);

var_dump($exists); // Output: bool(true)
```

Keep in mind that `in_array()` checks for the existence of a value but does not provide the key where the value is found. If you need to find the key associated with a specific value, you can use `array_search()` (as shown in a previous response) or use a loop to iterate through the array and manually find the key.

Both `in_array()` and `array_search()` are useful functions for different use cases. Choose the appropriate function based on whether you need to check the existence of a value or find its associated key.

[10:23](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=623s) - Find the difference between arrays by comparing values - array_diff

In PHP, the `array_diff()` function is used to find the difference between two or more arrays by comparing their values. It returns a new array containing all the values from the first array that are not present in any of the other arrays specified as arguments.

Here's the syntax of the `array_diff()` function:

```php
array_diff(array $array1, array $array2, array ...$arrays): array
```

- `$array1`: The first array from which you want to find the difference.
- `$array2`, `$arrays`: The arrays to compare with `$array1`.

Let's see some examples of how to use `array_diff()`:

Example 1: Find the difference between two arrays.
```php
$array1 = [1, 2, 3, 4, 5];
$array2 = [3, 4, 5, 6, 7];

$difference = array_diff($array1, $array2);

print_r($difference);
```

Output:
```
Array
(
    [0] => 1
    [1] => 2
)
```

In this example, the values `1` and `2` from `$array1` are not present in `$array2`. The `array_diff()` function returns an array containing those values.

Example 2: Find the difference among three arrays.
```php
$array1 = [1, 2, 3, 4, 5];
$array2 = [3, 4, 5, 6, 7];
$array3 = [5, 6, 7, 8, 9];

$difference = array_diff($array1, $array2, $array3);

print_r($difference);
```

Output:
```
Array
(
    [0] => 1
    [1] => 2
)
```

In this example, the values `1` and `2` from `$array1` are not present in any of the other arrays.

Example 3: Find the difference among associative arrays.
```php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['b' => 2, 'c' => 3, 'd' => 4];

$difference = array_diff($array1, $array2);

print_r($difference);

/* 
Array
(
    [a] => 1
)
*/
```

In this example, the key-value pair `'a' => 1` from `$array1` is not present in `$array2`.

The `array_diff()` function is useful when you want to find the elements that exist in one array but not in another. It is particularly handy when working with sets of data and you need to identify the unique elements. Keep in mind that `array_diff()` compares the values and keys of the arrays. For comparing only values and ignoring keys, you can use `array_diff_assoc()`.

[11:01](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=661s) - Find the difference between arrays by comparing both keys & values - array_diff_assoc

In PHP, the `array_diff_assoc()` function is used to find the difference between two or more arrays by comparing both their keys and values. It returns a new array containing all the key-value pairs from the first array that are not present in any of the other arrays specified as arguments.

Here's the syntax of the `array_diff_assoc()` function:

```php
array_diff_assoc(array $array1, array $array2, array ...$arrays): array
```

- `$array1`: The first array from which you want to find the difference.
- `$array2`, `$arrays`: The arrays to compare with `$array1`.

Let's see some examples of how to use `array_diff_assoc()`:

Example 1: Find the difference between two associative arrays by comparing both keys and values.
```php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['b' => 2, 'c' => 3, 'd' => 4];

$difference = array_diff_assoc($array1, $array2);

print_r($difference);
```

Output:
```
Array
(
    [a] => 1
)
```

In this example, the key-value pair `'a' => 1` from `$array1` is not present in `$array2`. The `array_diff_assoc()` function returns an array containing this key-value pair.

Example 2: Find the difference among three associative arrays.
```php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['b' => 2, 'c' => 3, 'd' => 4];
$array3 = ['a' => 1, 'e' => 5];

$difference = array_diff_assoc($array1, $array2, $array3);

print_r($difference);
```

Output:
```
Array
(
    [b] => 2
    [c] => 3
)
```

In this example, the key-value pairs `'b' => 2` and `'c' => 3` from `$array1` are not present in any of the other arrays. The `array_diff_assoc()` function returns an array containing these key-value pairs.

The `array_diff_assoc()` function performs a comparison using both the keys and values of the arrays. It only includes key-value pairs that are unique to the first array and not present in any of the other arrays. If you need to find the difference based only on the values (ignoring keys), you can use the `array_diff()` function.

Keep in mind that `array_diff_assoc()` is particularly useful when working with associative arrays and you want to identify the unique key-value pairs among them.

[11:33](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=693s) - Find the difference between arrays by comparing keys - array_diff_keys

In PHP, the `array_diff_assoc()` function is used to find the difference between two or more arrays by comparing both their keys and values. It returns a new array containing all the key-value pairs from the first array that are not present in any of the other arrays specified as arguments.

Here's the syntax of the `array_diff_assoc()` function:

```php
array_diff_assoc(array $array1, array $array2, array ...$arrays): array
```

- `$array1`: The first array from which you want to find the difference.
- `$array2`, `$arrays`: The arrays to compare with `$array1`.

Let's see some examples of how to use `array_diff_assoc()`:

Example 1: Find the difference between two associative arrays by comparing both keys and values.
```php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['b' => 2, 'c' => 3, 'd' => 4];

$difference = array_diff_assoc($array1, $array2);

print_r($difference);
```

Output:
```
Array
(
    [a] => 1
)
```

In this example, the key-value pair `'a' => 1` from `$array1` is not present in `$array2`. The `array_diff_assoc()` function returns an array containing this key-value pair.

Example 2: Find the difference among three associative arrays.
```php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['d' => 4];
$array3 = ['a' => 1, 'e' => 5];

$difference = array_diff_assoc($array1, $array2, $array3);

print_r($difference);
```

Output:
```
Array
(
    [b] => 2
    [c] => 3
)
```

In this example, the key-value pairs `'b' => 2` and `'c' => 3` from `$array1` are not present in any of the other arrays. The `array_diff_assoc()` function returns an array containing these key-value pairs.

The `array_diff_assoc()` function performs a comparison using both the keys and values of the arrays. It only includes key-value pairs that are unique to the first array and not present in any of the other arrays. If you need to find the difference based only on the values (ignoring keys), you can use the `array_diff()` function.

Keep in mind that `array_diff_assoc()` is particularly useful when working with associative arrays and you want to identify the unique key-value pairs among them.

[11:46](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=706s) - Sort array by values - asort

In PHP, the `asort()` function is used to sort an array in ascending order based on its values while preserving the association between keys and values. This means that the keys will remain associated with their respective values after sorting.

Here's the syntax of the `asort()` function:

```php
asort(array &$array, int $sort_flags = SORT_REGULAR): bool
```

- `$array`: The input array that you want to sort.
- `$sort_flags`: (optional) A flag that determines the sorting behavior. It can take one of the following values:
  - `SORT_REGULAR`: Compare elements normally (don't change types).
  - `SORT_NUMERIC`: Compare elements as numbers.
  - `SORT_STRING`: Compare elements as strings.
  - `SORT_LOCALE_STRING`: Compare elements as strings based on the current locale.
  - `SORT_NATURAL`: Compare elements as strings using "natural ordering" (e.g., "10" comes before "2").

The function sorts the array in place, modifying the original array, and returns `true` on success and `false` on failure.

Let's see an example of how to use `asort()`:

```php
$array = [
    'apple' => 2,
    'banana' => 1,
    'orange' => 3,
    'kiwi' => 4,
];

asort($array);

print_r($array);
```

Output:
```
Array
(
    [banana] => 1
    [apple] => 2
    [orange] => 3
    [kiwi] => 4
)
```

In this example, the `asort()` function sorts the `$array` in ascending order based on its values while keeping the keys associated with their respective values. The resulting array is sorted by values: `1`, `2`, `3`, and `4`.

If you want to sort the array in descending order based on its values, you can use the `arsort()` function instead. It works similarly to `asort()`, but it sorts the array in descending order while preserving key-value associations.

The `asort()` and `arsort()` functions are useful when you need to sort associative arrays based on their values and maintain the relationship between keys and values throughout the sorting process.

[12:08](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=728s) - Sort array by keys - ksort

In PHP, the `ksort()` function is used to sort an array in ascending order based on its keys. This means that the keys will be arranged in alphabetical or numerical order, and the association between keys and values will be preserved.

Here's the syntax of the `ksort()` function:

```php
ksort(array &$array, int $sort_flags = SORT_REGULAR): bool
```

- `$array`: The input array that you want to sort by keys.
- `$sort_flags`: (optional) A flag that determines the sorting behavior. It can take one of the following values:
  - `SORT_REGULAR`: Compare elements normally (don't change types).
  - `SORT_NUMERIC`: Compare elements as numbers.
  - `SORT_STRING`: Compare elements as strings.
  - `SORT_LOCALE_STRING`: Compare elements as strings based on the current locale.
  - `SORT_NATURAL`: Compare elements as strings using "natural ordering" (e.g., "10" comes before "2").

The function sorts the array in place, modifying the original array, and returns `true` on success and `false` on failure.

Let's see an example of how to use `ksort()`:

```php
$array = [
    'banana' => 2,
    'kiwi' => 4,
    'orange' => 3,
    'apple' => 1,
];

ksort($array);

print_r($array);
```

Output:
```
Array
(
    [apple] => 1
    [banana] => 2
    [kiwi] => 4
    [orange] => 3
)
```

In this example, the `ksort()` function sorts the `$array` in ascending order based on its keys while keeping the association between keys and values. The resulting array is sorted by keys: `'apple'`, `'banana'`, `'kiwi'`, and `'orange'`.

If you want to sort the array in descending order based on its keys, you can use the `krsort()` function instead. It works similarly to `ksort()`, but it sorts the array in descending order while preserving key-value associations.

The `ksort()` function is useful when you need to sort an associative array based on its keys and maintain the relationship between keys and values throughout the sorting process.

[12:28](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=748s) - Sort array by using custom function - usort

In PHP, the `usort()` function is used to sort an array using a custom comparison function. It allows you to define your own comparison logic to determine the order of elements in the array.

Here's the syntax of the `usort()` function:

```php
usort(array &$array, callable $cmp_function): bool
```

- `$array`: The input array that you want to sort using the custom comparison function.
- `$cmp_function`: A callable function that defines the comparison logic. The function should accept two arguments (the elements to be compared) and return an integer:
  - If the return value is less than 0, it indicates that the first element should come before the second element in the sorted order.
  - If the return value is equal to 0, it indicates that the elements are considered equal in terms of sorting.
  - If the return value is greater than 0, it indicates that the first element should come after the second element in the sorted order.

The function sorts the array in place, modifying the original array, and returns `true` on success and `false` on failure.

Let's see an example of how to use `usort()`:

```php
$array = [3, 1, 5, 2, 4];

function customCompare($a, $b) {
    if ($a === $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;

	// PHP 8 you can: return $a <=> $b;
}

usort($array, 'customCompare');

print_r($array);
```

Output:
```
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)
```

In this example, the `usort()` function sorts the `$array` using the `customCompare()` function, which defines a custom comparison logic. The comparison logic in `customCompare()` sorts the elements in ascending order based on their values.

If you want to sort the array in descending order or need a different comparison logic, you can modify the `customCompare()` function accordingly.

The `usort()` function is particularly useful when you need to sort an array based on complex or custom criteria that are not covered by the standard sorting functions like `asort()` or `ksort()`. It gives you the flexibility to define your own comparison rules for sorting the elements in the array.

[13:19](https://www.youtube.com/watch?v=E4FUeWa3WQk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=27&t=799s) - Array destructuring

Array destructuring is a feature introduced in PHP 7.1 that allows you to extract values from an array and assign them to individual variables in a single statement. It provides a concise and convenient way to access elements of an array without the need for multiple separate assignments.

The syntax for array destructuring uses square brackets `[ ]` and can be performed in two ways:

1. List Syntax:
```php
list($var1, $var2, ...) = $array;
```

2. Short Array Syntax:
```php
[$var1, $var2, ...] = $array;
```

In both cases, the array elements are assigned to the corresponding variables based on their positions in the array. The number of variables on the left-hand side must match the number of elements in the array; otherwise, a warning or error will be generated.

Here are some examples to illustrate array destructuring:

Example 1: Using List Syntax
```php
$array = [10, 20, 30];

list($a, $b, $c) = $array;

echo $a; // Output: 10
echo $b; // Output: 20
echo $c; // Output: 30
```

Example 2: Using Short Array Syntax
```php
$array = ['apple', 'banana', 'kiwi'];

[$fruit1, $fruit2, $fruit3] = $array;

echo $fruit1; // Output: apple
echo $fruit2; // Output: banana
echo $fruit3; // Output: kiwi
```

Array destructuring can be especially useful when working with functions that return arrays or when extracting specific elements from an array. It can make your code cleaner and more concise by eliminating the need for intermediate variables and separate assignments.

> [!Warning]
> It's not like in JavaScript!

```php
$array = ['apple', 'banana', 'kiwi'];

[$fruit1, ...$fruits] = $array; // not working!!

// you can put comma instead
[,$fruit2] = $array;
echo $fruits2;

```

Keep in mind that array destructuring is available only in PHP 7.1 and later versions. If you are using an older version of PHP, this feature may not be available, and you would need to use traditional methods for accessing array elements.