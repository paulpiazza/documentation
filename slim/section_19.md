---
title: Lesson 1.17 - Switch Statement
description: Slim notes.
order: 19
---

The `switch` statement is a control structure in PHP that allows you to execute different blocks of code based on the value of a single expression. It provides an alternative to using multiple `if/elseif/else` statements when you have many conditions to check against a single variable.

```php
switch ($variable) {
    case value1:
        // Code block to be executed if $variable matches value1
        break;
    case value2:
        // Code block to be executed if $variable matches value2
        break;
    // more cases...
    default:
        // Code block to be executed if $variable does not match any case
        break;
}
```

[00:50](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=50s) - Default case

If no matching is found then the default cases is used.

It's not required.

[01:00](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=60s) - Break statement within switch & how does switch statement work

The execution goes into the block only if the condition in case is matched.

the break stops the execution of the switch.

```php
switch ($variable) {
    case value1:
        // Code block to be executed if $variable matches value1
		// execution continue...
    case value2:
        // Code block to be executed if $variable matches value2
        // ... and stop executing
        break;
        
    default:
        // Code block to be executed if $variable does not match any case
}
```


[02:39](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=159s) - Fall-through strategy & use-case of omitting the break statement

If you forget to include the `break` statement within a `switch` case, it will result in what is known as "fall-through" behavior. Fall-through occurs when the code execution continues to the next `case` block, even if the current case is matched. 

```php
$day = 'Monday';

switch ($day) {
    case 'Monday':
        echo "It's Monday!";
    case 'Tuesday':
        echo "It's Tuesday!";
    case 'Wednesday':
        echo "It's Wednesday!";
    default:
        echo "It's another day.";
}
```

In this example, if the value of `$day` is `'Monday'`, the code block under the first `case` will be executed, resulting in the output:

```
It's Monday!
It's Tuesday!
It's Wednesday!
It's another day.
```

Notice how the code execution falls through from the first case to the subsequent cases. This is because the `break` statements are missing. As a result, all the code blocks from the matched case onward are executed, regardless of whether their conditions are satisfied.

To prevent fall-through behavior and ensure that only the matched case block is executed, you should include a `break` statement at the end of each case block. 

A way to use this:

```php
$day = 'Monday';

switch ($day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Friday':
        echo "weekend!";
        break;
    // ... others cases...
}

// always print "weekend!"
```


[03:28](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=208s) - Loose comparison

The comparison used in cases is the loose comparison.

[04:10](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=250s) - Switch statement within loops & using break 

If the switch statement is in a loop. You should used `break 2` if you want to break the switch and the loop. 

[04:57](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=297s) - Using continue statement within the switch statement that's within loop 

The continue statement provoke a warning. It asked to specify `continue 2`.

[05:42](https://www.youtube.com/watch?v=egDgLO8kvtI&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=18&t=342s) - Difference between switch statement & series of if statements (switch vs if). Demonstrating example of the performance difference

The initial variable can be a complicated value. You should not do this if / else because, the execution will evaluate for each elseif values conditions.

