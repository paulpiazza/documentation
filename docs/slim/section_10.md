---
title: Lesson 1.8 - String Data Type - Heredoc & Nowdoc Syntax
description: Slim notes.
order: 10
---

With single quotes, the text gets printed as is meaning. You cannot use variables inside.

With double quotes, variables are interpreted.

> [!info]
> It's not readable. Dev prefers to use curly braces `echo "My name is {$name}";`

Another way is to use the concatenation operator.

```php
$name = 'paul';

echo 'My name is $name'; // prints My name is $paul

echo "My name is $name"; // print My Name is paul

echo "My name is " . $name; // print My Name is paul
```

You can get/update a letter in a string by typing its index.

```php
$name = 'paul';
echo $name[1]; // return 'a'
echo $name[-2]; // return 'u'

$name[0] = 'P';
echo $name // return 'Paul'

// warning!
$name[5] = 'I';
echo $name; // return 'Paul I'

//  Always count the number of caracters
count($name)
```

Heredoc, short for "here document," is a way to define multiline strings or blocks of text within the source code of a program.

Nowdoc, short for "now document".  
* Unlike heredoc, nowdoc does not support specifying a custom delimiter; instead, it uses the identifier 'NOWDOC' as the delimiter.
* nowdoc treats the text content as a literal string without any variable interpolation or special character interpretation.

```php
// spaces are respected.
$myText = <<<HTML
<div>
	<p>This variable $myVariable will be printed correctly.</p>
</div>
HTML

$myText = <<<'NOWDOC' 
This is a nowdoc example. Variables and special characters are not interpolated: For example, this is a variable: $myVariable 
NOWDOC;
```
