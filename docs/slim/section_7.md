---
title: Lesson 1.5 - Boolean Data Type
description: Slim notes.
order: 7
---

```php
// integers 0 -0 = false
// floats 0.0 -0.0 = false
// '' = false
// '0' = false
// [] = false
// null = false

$bool = true;
echo $bool; // displays 1
echo (string) $bool; // display ''

is_bool($bool); // true
```
