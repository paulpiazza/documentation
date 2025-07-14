---
title: Lesson 1.2 - Syntax
description: Slim notes.
order: 4
---

[00:00](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=0s) Intro

File must finish with `.php`.

PHP is a server-side language.

[00:41](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=41s) Basic Syntax

Code between php tag `<?php ?>` will be interpreted as php.

If the file is all php, you do not nee the closing tag.

In a HTML file, you have to enclosed your PHP code.

[01:58](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=118s) Hello World

You will not see any php browser side because php is a server side language.

```php
<?php
echo 'Hello World!';
```

Semi-colon is needed. You will get parser-error.

[03:22](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=202s) Run PHP In Terminal

Open a terminal, and go to your project directory.

```shell
php index.php
```

[03:50](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=230s) Print vs Echo

Use Echo unless you have a specific reason to use print.

`Print` has a return of value of 1. it could be used within expressions while echo can't.

```php
<?php
echo print 'paul'; // return paul1
print echo 'paul'; // error
```

You can use parentheses but you will not be able to join other strings. You can add many strings and `echo or print` will concatenate them.

```php
<?php
echo 'hello', ' ', 'paul', '!'; // hello paul!
echo('hello paul!'); // hello paul!
```

[05:18](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=318s) Escaping Quotes

Two ways:

```php
<?php
echo 'paul\'s car'; // paul's car
echo "paul's car"; // paul's car
```

[05:45](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=345s) Variables 

Always begin with `$` sign.

A variable name must start with a letter or an underscore.

[06:26](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=386s) $this variable

`$this` is already used by OOP PHP. Do not declare any variable with this.

[06:48](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=408s) Assigning by Value vs Reference

By default in PHP, variables are assigned by value.

```php
<?php

$x = 1;
$y = $x;

// update $x
$x = 2;

// does $y changed?  
echo $y; // Nope! it prints 1. $y has kept the value.
```

If you want to use by referece, use `&`.

```php
<?php

$x = 1;
$y = &$x;

// update $x
$x = 2;

// does $y changed?  
echo $y; // Yep! it prints 2. $y point to $x.
```

[07:45](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=465s) Variables Within Text 

With single quotes, the text gets printed as is meaning. You cannot use variables inside.

With double quotes, variables are interpreted.

> [!info]
> It's not readable. Dev prefers to use curly braces `echo "My name is {$name}";`

Another way is to use the concatenation operator.

```php
<?php

$name = 'paul';

echo 'My name is $name'; // prints My name is $paul

echo "My name is $name"; // print My Name is paul

echo "My name is " . $name; // print My Name is paul
```

[08:52](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=532s) PHP In HTML 

The file must finish with `.php`.

Use `<?php echo 'hello'; ?>` to write php code into HTML.

> [!info]
> Shorten way : `<?= 'hello' ?>` 
> It's used only to print something.

You will be able to print html directly with php. But it's not a good practice.

[10:45](https://www.youtube.com/watch?v=HrtS-FkPBqk&t=645s) Comments

```php
<?php
// single line comment

/*
	multiple 
	lines 
	comment
*/
```

