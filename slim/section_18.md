---
title: Lesson 1.16 - Loops - Break & Continue
description: Slim notes.
order: 18
---

The common loop types in PHP are `for`, `while`, `do-while`, and `foreach`. 

[00:15](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=15s) - While loop

The `while` loop is used when you want to repeat a block of code while a certain condition is true. It checks the condition before each iteration.

```php
$i = 0;
while ($i < 5) {
   // Code to be executed
   $i++;
}
```

In this example, the loop will execute the code block as long as the condition `$i < 5` is true. The value of `$i` is incremented inside the loop to eventually satisfy the condition.

[01:05](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=65s) - Infinite loops

The loop never stops because the statement is always evaluated to true.

```php
// exemple of infinite loop
$i = 0;
while ($i < 5) {
   $i; // no incrementation
}
```


[01:32](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=92s) - Break statement & use-case of an infinite loop

`break` statement: It is used to exit the current loop entirely. When encountered within a loop, the `break` statement terminates the loop's execution and transfers control to the next statement after the loop.

Use case: the coder are waiting to something happened.

```php
// exemple of infinite loop
$i = 0;
while (true) {

   if($i > 15) {
	   break; // execution leaves the loop
   }
   
   ++$i;
}
```


[02:05](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=125s) - Break out of multiple levels of nested loops

```php
// exemple of infinite loop
$i = 0;
while (true) {
	while ($i > 15)) {
	   if($i > 20) {
		   break 2; // execution leaves the 2 loops
	   }
	}
	
	++$i;
}

```


[02:31](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=151s) - Continue statement

`continue` statement: It is used to skip the current iteration of a loop and proceed to the next iteration. When encountered within a loop, the `continue` statement skips the remaining code in the current iteration and proceeds with the next iteration.

```php
for ($i = 0; $i < 5; $i++) {
    if ($i === 2) {
        continue; // Skip iteration when $i is 2
    }
    if ($i === 4) {
        break; // Exit loop when $i is 4
    }
    echo $i . ' ';
}
```

In this example, the loop will print the numbers 0, 1, and 3. When `$i` is 2, the `continue` statement skips the remaining code in that iteration and proceeds to the next iteration. When `$i` is 4, the `break` statement terminates the loop.

[03:32](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=212s) - Alternative while loop syntax

```html
<?php $i = 0; ?>
<?php while (true) : ?>
	<?php ++$i; ?>
<?php endwhile; ?>
```

[03:47](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=227s) - Do-While loop

The `do-while` loop is similar to the `while` loop, but it checks the condition after each iteration. This ensures that the code block is executed at least once.

```php
$i = 0;
do {
	// Code to be executed
	$i++;
} while ($i < 5);
```

In this example, the code block is executed at least once, and then the condition `$i < 5` is checked. If the condition is true, the loop continues; otherwise, it terminates.


[04:26](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=266s) - For loop

The `for` loop is used when you know the number of iterations in advance. It consists of an initialization, a condition, and an iteration statement.
   
```php
for ($i = 0; $i < 5; $i++) {
 // Code to be executed
}
```

In this example, the loop will execute the code block as long as the condition `$i < 5` is true. After each iteration, the value of `$i` is incremented by 1.

[05:07](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=307s) - Multiple expressions within for loop

you can have multiple expressions within the `for` loop's initialization, condition, and iteration sections.

```php
for ($i = $j = 0; $i < 5, $j <1; print 'i', print 'j', $i++, $j++) {   
}
// prints ij because it's the last condition
```

The evaluation whether the loop should ontinue or not will be determined by the last expression.

```php
for ($i = 0; print 'i ', $i < 5; $i++) {
}

// prints i i i i i i 
// 5 i
// because print is before the condition. We print and after we check i.
```

[05:48](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=348s) - Iterate over strings

```php
for ($i = 0; $i < strlen($text); $i++) {
	echo $text[$i];
}
```

[06:09](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=369s) - Iterate over arrays

```php
for ($i = 0; $i < count($text); $i++) {
	echo $text[$i];
}
```

[06:23](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=383s) - Performance concerns

Avoid calculation in expressions in for loop because you compute `count` for each loop. You should init them in the first part of the loop.

```php
for ($i = 0, $length = count($text); $i < $length; $i++) {
	echo $text[$i];
}
```


[07:20](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=440s) - Foreach loop

The `foreach` loop is used to iterate over elements of an array or an object. It automatically assigns the current element's value to a variable in each iteration.

```php
$array = ['a' => 1, 'b' => 2];

foreach ($array as $value) {
	// Code to be executed
}

// get the key index
foreach ($array as $key => $value) {
	// Code to be executed
}
```

In this example, the loop iterates over each element of the `$numbers` array, assigning the current element's value to the variable `$number`.

[08:38](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=518s) - Overwriting array elements using assignment by reference

```php
$array = ['a' => 1, 'b' => 2];

foreach ($array as &$value) {
	$value = "a";
}

// array is ['a', 'a']


foreach ($array as $value) {
	$value = "a";
}

// array is not changed
```

[09:15](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=555s) - Something to be aware of - variable within the foreach loop is not destroyed 


```php
$array = ['a' => 1, 'b' => 2];

foreach ($array as $value) {
	
}

echo $value; // already exists!

unset($value); // destroy
```

[10:30](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=630s) - Iterate over associative arrays


```php
$array = ['a' => 1, 'b' => 2, 'c' => [1,2,3]];

foreach ($array as $key => $value) {
	if(is_array($value)) {
		$value = implode(',', $value);
	}
	echo $key.': '.$value;
}
```


[11:48](https://www.youtube.com/watch?v=NhXvpHB_PMQ&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=17&t=708s) - Alternative foreach & for loop syntax

```html
<?php foreach ($array as $key => $value) : ?>
	<p><?php $value ?><p>
<?php endforeach; ?>
```
