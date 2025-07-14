---
title: Lesson 1.15 - Control Structures - If/Else
description: Slim notes.
order: 17
---

The `if/else` statement is a control structure in programming that allows you to conditionally execute different blocks of code based on a specified condition. It helps control the flow of execution by branching the code based on whether a condition is true or false.

```php
if (condition) { 
	// Code block executed if the condition is true 
} else { 
	// Code block executed if the condition is false
}

// shorts (bad practice)
if(condition) expression
// or (also bad practice)
if(condition) 
	expression

// with elseif
if (condition) { 
    // Code block executed if the condition is true
} elseif(other condition) {
    // if other condition is true
} else {
	// otherwise
}
```


Alternative syntax in HTML file:
```html
<?php if ($age >= 18): ?>
    <p>"You are an adult."</p>
<?php else: ?>
    <p> "You are a minor."</p>
<?php endif; ?>
```

You also can use the ternary operator `?:`.
