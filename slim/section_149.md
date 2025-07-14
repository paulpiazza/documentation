---
title: Memoization
description: Slim notes.
order: 149
---

Memoization is an optimization technique used in computer science to speed up the execution of functions by caching the results of expensive function calls and reusing those results when the same inputs occur again. This can greatly improve the performance of algorithms that involve repeated computations or recursive calls.

In simple terms, memoization involves storing the results of function calls in a data structure (usually a cache, such as a dictionary or an array) and checking if the same function call with the same inputs has been made before. If it has, the cached result is returned instead of re-computing the function. If it hasn't, the function is executed, and its result is stored in the cache for future use.

Here's a more detailed explanation of how memoization works:

1. **Function with Memoization:**
   Consider a function `fibonacci(n)` that calculates the nth Fibonacci number using recursive calls. Without memoization, this function can become very slow for larger values of `n` because it repeatedly recalculates the same Fibonacci numbers multiple times.

2. **Cache Initialization:**
   Before calling the function, you create an empty cache (usually a dictionary or an array) to store the results of function calls. The keys in the cache correspond to the function's input parameters, and the values are the computed results.

3. **Function Execution:**
   When the function is called with a particular set of inputs (e.g., `fibonacci(5)`), the first step is to check if the result is already available in the cache for those inputs.

4. **Cache Hit:**
   If the result is found in the cache (a cache hit), the function returns the cached result immediately. This avoids redundant computations.

5. **Cache Miss:**
   If the result is not found in the cache (a cache miss), the function proceeds to calculate the result using its normal logic. Once the result is computed, it is stored in the cache under the corresponding inputs for future reference.

6. **Recursive Calls:**
   If the function has recursive calls, the memoization technique ensures that previously computed results are reused for the same input values, preventing the unnecessary repetition of calculations.

Memoization is particularly effective for functions with overlapping subproblems or recursive calls. It's commonly used in algorithms like dynamic programming and in solving problems that involve combinations, permutations, or complex calculations. While memoization improves performance, it also consumes memory to store cached results, so there's a trade-off between memory usage and computation time.

In languages like Python, you can implement memoization using dictionaries. In languages like PHP, you can use arrays or other data structures to achieve the same effect. There are also libraries and frameworks that provide built-in memoization capabilities to simplify the implementation.

Sure, let's take a simple example of using memoization in PHP to calculate Fibonacci numbers. Without memoization, calculating Fibonacci numbers using recursion can become inefficient due to redundant computations. Memoization can help improve the performance by caching the results of previously computed Fibonacci numbers.

Here's how you can implement memoization in PHP:

```php
// Using memoization to calculate Fibonacci numbers

// Cache to store computed Fibonacci numbers
$cache = [];

function fibonacci($n) {
    global $cache; // BAD PRACTICE => pay attention to that!
    
    // If the result is already cached, return it
    if (isset($cache[$n])) {
        return $cache[$n];
    }
    
    // Base cases
    if ($n <= 1) {
        return $n;
    }
    
    // Calculate the Fibonacci number and store it in the cache
    $result = fibonacci($n - 1) + fibonacci($n - 2);
    $cache[$n] = $result;
    
    return $result;
}

$number = 10;
echo "Fibonacci($number) = " . fibonacci($number);
```

In this example, the `fibonacci()` function uses memoization to store previously computed Fibonacci numbers in the `$cache` array. When the function is called with a particular value of `n`, it first checks if the result is already cached. If it is, the cached result is returned; otherwise, the Fibonacci calculation is performed and the result is stored in the cache for future use.

This approach significantly reduces the number of redundant calculations when calculating Fibonacci numbers, leading to improved performance for larger values of `n`.

Remember that while memoization can enhance the efficiency of recursive algorithms, it's important to be mindful of memory consumption. The cache can grow significantly for larger inputs, which may impact memory usage.
