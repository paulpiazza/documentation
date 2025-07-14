---
title: Lesson 1.9 - Null Data Type
description: Slim notes.
order: 11
---

null represents a variable with no value.

#### Null Constant

```php
$n = NULL; // case insensitive $n = null;
echo $n; // display nothing because is cast to empty string
```

#### VarDump

```php
var_dump($n); // display NULL
is_null($n); // return true
```

#### Undefined

```php
var_dump($x); // warn undefined, $x has not been declared.
is_null($x); // return false
isset($x); // return if the var has been declared

$x = '123';
unset($x); // destroy the var. Undefined variable.
```

Use the operator `===` to define if a variable is null or undefined.

#### Casting

null value is cast into an empty string.

```php
$n = null;
(string)$n; // empty string ''
(bool)$n; // false
(int)$n; // 0
(array)$n; // []
```

#### Use Cases
