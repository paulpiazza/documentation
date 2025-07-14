---
title: Introduction To Dynamic Programming in JavaScript
description: Slim notes.
order: 66
---

Learn how to use dynamic programming to solve complex recursive problems.

_Dynamic Programming_ is a programming technique used to solve recursive problems more efficiently. Let’s take a look at a simple algorithm that can get computationally complex very quickly, and then let’s use dynamic programming to increase its efficiency.

### Fibonacci

The Fibonacci series is a classic mathematical series in which the next number is calculated as the sum of the previous two numbers:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
```

It can be calculated iteratively by summing the two previous numbers, or the `n`th Fibonacci number can be calculated recursively:

```pseudo
function fib(n)
  if n is 1 or 0:
    return n
  else
    return fib(n - 1) + fib(n - 2)
```

This technique breaks up calculating the `n`th number into many smaller problems, calculating each step as the sum of calculating the previous two numbers.

Although this technique will certainly work to find the correct number, as `n` grows, the number of recursive calls grows very quickly. Let’s visualize all the function calls if we were to calculate the fourth Fibonacci number:

```pseudo
fib(4) -> fib(3) + fib(2)
  fib(3) -> fib(2) + fib(1)
    fib(2) -> fib(1) + fib(0)
  fib(2) -> fib(1) + fib(0)
```

As you can see`fib(2)` is called twice, `fib(1)` is called three times. If `n` were larger than `4`, you’d see these numbers of calls get high very quickly. For instance, to calculate the 10th number, we’d make 34 calls to `fib(2)` and 177 total function calls! Why do we need to call the same function multiple times with the same input?

We don’t! We can use a technique called _memoization_ to cut down greatly on the number of function calls necessary to calculate the correct number.

### Memoization

_Memoization_ is a specialized form of caching used to store the result of a function call. The next time that function is called, instead of running the function itself, the result is used directly. Memoization can result in much faster overall execution times (although it can increase memory requirements as function results are stored in memory).

Memoization is a great technique to use alongside recursion. The memo can even be saved between function calls if it’s being used for common calculations in a program.

#### Memoizing Fibonacci

In the previous example, many function calls to `fib()` were redundant. Let’s memoize it in order to speed up execution.

To begin, we’ll use a plain JavaScript object to store the memoized values. We’ll set keys using `n` and values to store the result of that Fibonacci number. Then, whenever we need to calculate a number, if it’s already been calculated, we can retrieve the value from the object in O(1) time.

```
const memo = {};
```

In pseudocode, our approach to memoization will look something like this:

```pseudo
Create a memo object

function fibonacci(n)
  if n key exists in memo object
    return memo[n]
  else
    calculate current fibonacci number
    store value in memo
    return value
```

Let’s implement it in JavaScript!

Coding question

Create a memoized `fibonacci()` function. This function should return the `n`th Fibonacci number.

Note: To avoid an infinite loop, either handle the edge case of negative numbers in your function, or don’t call it using negative numbers.

Great job! Let’s look at the total number of function calls now. Earlier, it took 177 function calls to calculate the 10th number. Now, it should only be 19.

### Conclusion

Dynamic programming and memoization are great techniques breaking up complex recursive problems into smaller chunks. They are especially useful when tackling problems that involve combinations. For example, if I asked you to calculate the total number of ways to get four dice rolls to sum to `13`, you could imagine breaking that into multiple parts. You could split `13` into `6` and `7` and then find all the combinations of two rolls that would match each one of these. As you went down each path, you’d probably start seeing a lot of similar calculations, and memoization would help you reduce the number of overall function calls by storing intermediate values.



