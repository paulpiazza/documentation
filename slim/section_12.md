---
title: Lesson 1.10 - Arrays
description: Slim notes.
order: 12
---

[00:00](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=0s) - Intro 

Do not repeat yourself. Put values in a list of values.

```php
// display arrays
echo '<pre>'
print_r($myArray);
echo '</pre>'
```


[00:43](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=43s) - What are arrays

```php
// declaration
$programmingLanguages = ['PHP', 'JavaScript', 'Python']; // brackets syntax

$programmingLanguages = array('PHP', 'JavaScript', 'Python');
```


[01:27](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=87s) - Indexed arrays & accessing elements

Automatically, indexes in array start at 0 to the lenght. No negativ indexes are possible (not like strings).

```php
// access to individual elements
$programmingLanguages[0]; // PHP
```


[03:06](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=186s) - Undefined array key

It returns a warning "Undefined array key".

[03:41](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=221s) - Check if array key exists - isset()

```php
// access to individual elements
isset($programmingLanguages[-1]); // false
```


[04:04](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=244s) - Mutate arrays

```php
// you can update a value
$programmingLanguages[1] = 'C++'; // replaces JavaScript to C++
```


[04:52](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=292s) - Get length of array - count()

```php
// get length with count
count($programmingLanguages); // return 3
```


[05:04](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=304s) - Add elements to an array - square bracket syntax


```php
$programmingLanguages[] = 'C#'; // add value at the end of the array
```


[05:37](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=337s) - Add multiple elements to an array using array_push

Used to push multiple arguments.

```php
array_push($programmingLanguages, 'Vlang', 'Shell'); // add values at the end of the array
```


[06:05](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=365s) - Name your keys (associative arrays)

```php
$programmingLanguages = [
	'php' => '8.0',
	'Python' => '3.9'
];

$programmingLanguages['php']; // shows 8.0
```


[07:11](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=431s) - Add elements to associative arrays at specified keys

```php
$programmingLanguages['C#'] = '1.0.0'; // shows 8.0
```


[07:45](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=465s) - Multi-dimensional arrays

You can have multiple data types.

```php
$programmingLanguages = [
	'php' => [
		'version' => 8.2,
		'enabled' => true
	]
];

$programmingLanguages['php']['version']; // prints 8.2
```


[10:02](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=602s) - Duplicate keys & overwriting

Displays the last key asking. Be carefull of the casting of the keys.

```php
$programmingLanguages = [
	true => 'a',
	1 => 'b',
	'1' => 'c',
	1.8 => 'd'
];

$programmingLanguages[1]; // prints d

// null can be key. Casts in empty string
$programmingLanguages = [
	null => 'e'
];

$programmingLanguages['']; // prints e

```


[11:18](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=678s) - Having keys on only some elements & how automatic indexing works

It automatically defines keys with the greatest integer key.

```php
$myArray= [
	'a', 'b', 50 => 'c', 'd'
];

// indexes are 0 1 50 51

```


[12:05](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=725s) - Removing an element from the end of an array using array_pop

```php
$myArray= [
	'a', 'b', 50 => 'c', 'd'
];

array_pop($myArray); // returns 'd' and $myArray has been updated.

```

[12:27](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=747s) - Removing an element from the beginning of an array using array_shift & re-indexing

```php
$myArray= [
	'a', 'b', 50 => 'c', 'foo' => 'd'
];

array_shift($myArray); // returns 'a' and $myArray has been updated.

// indexes are also updated.
// 0 => b
// 1 => c (re-indexed)
// but d will not be re-indexed!he key will be always foo.
```


[13:14](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=794s) - Removing element(s) from arrays by specifying keys using unset

```php
$myArray= [
	'a', 'b', 50 => 'c', 'foo' => 'd'
];

unset($myArray); // $myArray is undefined

unset($myArray[50]); // c will be removed

unset($myArray[0], $myArray['foo']); // a and d will be removed
```

[13:59](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=839s) - Using unset() does not re-index arrays

You will keep original indexes. The maximum integer key is retained.

```php
$myArray= [
	'a', 'b', 'c'
];

unset($myArray[0], $myArray[1], $myArray[2],); // $myArray is []

$myArray[] = 'd'; 

print_r($myArray); //displays 3 => 'd'
```


[15:00](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=900s) - Casting to arrays


```php
$x = 5;
(array)$x; // [0 => 5];

(array)null; // []
```


[15:27](https://www.youtube.com/watch?v=C8ZFLq24g_A&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=11&t=927s) - Another way to check if the key exists in array & the difference between array_key_exists & isset()

Isset checks if the key exists and also if its value is not null.

array_key_exists just check that a key exists in the array.

```php
$myArray = [
	'a' => 1, 'b' => null
];

array_key_exists('a', $myArray); // true
isset($myArray['a']); // true

array_key_exists('b', $myArray); // true
isset($myArray['b']); // false
```
