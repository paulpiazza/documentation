---
title: Algorithms
description: Slim notes.
order: 61
---

### Recursion

Recursion is a programming concept where a function calls itself to solve a problem. This technique is often used when the problem can be broken down into smaller, similar subproblems. Recursion has two main components: the base case and the recursive step.

Recursion is a powerful tool for solving problems that require the execution of a similar action multiple times until a certain condition is met. For many problems, a recursive solution will result in fewer lines of code and will be easier to comprehend than a solution that uses a `for` or `while` loop.

Recursion should be used carefully because each recursive call uses memory for the call stack. If not properly managed or if there's *no base case*, it can lead to a "stack overflow" error due to too many recursive calls. Before creating a recursive function you have to ask you "Do I have a base case? Do the machine have sufficient memory?"

#### Recursion Outline

1. **Base Case**: This is the condition under which the recursion ends. It's the simplest instance of the problem, which can be solved directly without any further recursion.
2. **Recursive Step**: This is the part of the function that includes the call to itself, aimed at breaking down the problem into smaller instances.
3. **Recursive Case**: is the condition under which a function calls itself.


```js
const recursiveFactorial = (n) => {

  // base case
  if(n === 0) return 1

  // recursive step
  if (n > 0){ // <= recursive case
    console.log(`Execution context: ${n}`);
    return recursiveFactorial(n - 1) * n;
  }
}

const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);

```



![[Pasted image 20240129190725.png]]

Recursion is a strategy for solving problems by defining the problem in terms of itself. For example, to **sum the elements of a list** we would take the first element and add it to the **sum of the remaining elements**.

How would we get that sum of remaining elements? Easy! We’d take the first element of the remaining elements and add it to the… Maybe you can understand why recursion can be a tricky subject!

In programming, recursion means a function definition will include an invocation of the function **within its own body.** Here’s a plaintext-code example:

```
define function, speller  if there are no more letters    print "all done"  print the first letter  invoke speller with the given name minus the first letter
```

If we invoked this function with “Zoe” as the argument, we would see “Z”, “o”, and “e” printed out before “all done”.

We call the function a total of 4 times!

1. function called with “Zoe”
2. function called with “oe”
3. function called with “e”
4. function called with “”

Let’s break the function into three chunks:

```
   if there are no more letters     print "all done"
```

This section is the _base case_. We are **NOT** invoking the function under this condition. The equivalent base case from the previous exercise was when we had reached the front of the line.

```
   print the first letter
```

This section solves **a piece** of the problem. If we want to spell someone’s name, we’ll have to spell **at least** one letter.

```
   invoke speller with the given name minus the first letter
```

This section is the _recursive_ step, calling the function with arguments which bring us closer to the base case. In this example, we’re reducing the length of the name by a single letter. Eventually, there will be a function call with no letters given as the argument.

For comparison’s sake, here is plaintext-code for an _iterative_ approach to the same problem:

```
 define function, speller   for each letter in the name argument     print the letter   print "all done"
```

#### Call Stacks and Execution Frames

When a recursive function is called, the current state of the function is saved in an "execution frame" on the call stack. This includes the function's parameters and local variables. Each recursive call adds a new frame to the stack. When a base case is reached, the function starts returning, and the stack begins to unwind, popping off each frame until it returns to the original call.



#### Example of Recursion

See [Fibonacci](https://leetcode.com/problems/fibonacci-number/description/)
See [Power 3](https://leetcode.com/problems/power-of-three/description/)
See [Egg Dropper](https://www.codecademy.com/code-challenges/code-challenge-egg-dropper-javascript)

Let's consider a simple web development example related to recursion: traversing a Document Object Model (DOM) tree to find an element with a specific id.

```javascript
function findElementWithId(element, id) {
  // Base case: If the current element matches the id, return it.
  if (element.id === id) {
    return element;
  }

  // Recursive step: Otherwise, iterate over children and apply recursion.
  for (let child of element.children) {
    const result = findElementWithId(child, id);
    if (result) {
      return result; // If found in children, return the matching element.
    }
  }

  // If not found, return null.
  return null;
}

// Usage example:
// Assuming 'document' is your DOM tree root and 'target-id' is what you're looking for.
const targetElement = findElementWithId(document, 'target-id');
```

In this example, `findElementWithId` is a recursive function that looks for an element by its id within a DOM tree:

- The **base case** occurs if the current element's id matches the `id` we're searching for.
- The **recursive step** happens when we call `findElementWithId` on each child of the current element.
- The **call stack** grows as we traverse deeper into the tree, and each call waits for its children to be processed before it completes.



### Asymptotic Notation

Asymptotic notation is a way to describe the behavior of a function as its input size approaches infinity. It is commonly used in the analysis of algorithms to express the time or space complexity of an algorithm in terms of its input size. The three main types of asymptotic notation are:

1. Big O notation (O): It represents the upper bound of an algorithm's time complexity. It describes the worst-case scenario for the algorithm's running time.

2. Omega notation (Ω): It represents the lower bound of an algorithm's time complexity. It describes the best-case scenario for the algorithm's running time.

3. Theta notation (Θ): It represents both the upper and lower bounds of an algorithm's time complexity. It describes the average-case scenario for the algorithm's running time.

These notations are used to simplify the analysis of algorithms by focusing on their growth rates and how they behave as the input size becomes very large.

With asymptotic notation, we calculate a program’s runtime by looking at how many instructions the computer has to perform based on the size of the program’s input. For example, if I were calculating the maximum element in a collection, I would need to examine each element in the collection. That examining step is the same regardless of the language used, or the [CPU](https://www.codecademy.com/resources/blog/what-is-a-cpu/) that’s performing the calculation. In asymptotic notation, we define the size of the input as N. I may be looking through a collection of 10 elements, or 100 elements, but we only need to know how many steps are performed _relative to the input_ so N is used in place of a specific number. If there is a second input, we may define the size of that input as M.

![[Pasted image 20240130212559.png]]

https://www.bigocheatsheet.com/

#### space complexity

Space complexity refers to the amount of memory space that an algorithm uses to solve a problem. It is a measure of the maximum amount of memory required at any point during the execution of the algorithm. Space complexity is often expressed in terms of Big O notation, just like time complexity.

For example, if an algorithm requires an array of size n to solve a problem, the space complexity would be O(n), indicating that the space required grows linearly with the size of the input.

It's important to consider both time and space complexity when analyzing the efficiency of an algorithm, as they both impact the performance and scalability of the solution.

Suppose we have an algorithm that iterates through an array of size n and prints each element. The time complexity of this algorithm would be O(n) because the number of operations increases linearly with the size of the input.

Now, let's consider the space complexity. Since the algorithm only requires a constant amount of memory to store the input array and a few variables for iteration, the space complexity would be O(1), indicating that the space required is constant regardless of the input size.

So, in this example, the time complexity is O(n) and the space complexity is O(1).

### Bubble Sort

**Concept:** Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

**Performance:** 
- Best: O(n) when the list is already sorted.
- Average and Worst: O(n²) due to the nested loops.

**Example:**

Imagine you have the array `[5, 3, 8, 4, 2]`. Here's how Bubble Sort would sort it:

1. Start with the first two elements: `[5, 3]`. Since `5 > 3`, swap them: `[3, 5, 8, 4, 2]`.
2. Move to the next pair: `[5, 8]`. They are in order, so no swap.
3. Next pair: `[8, 4]`. Since `8 > 4`, swap them: `[3, 5, 4, 8, 2]`.
4. Last pair for this pass: `[8, 2]`. Since `8 > 2`, swap them: `[3, 5, 4, 2, 8]`.
5. Now repeat this process until no swaps are needed.

See [visual bubble](https://visualgo.net/en/sorting?slide=7)

![[bubblesort.mp4]]

```js
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }

  console.log(`Swapped ${swapCount} times`);
  return input;
};

bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])
bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
```

### Merge Sort

See [animation](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)
See [Merge](https://visualgo.net/en/sorting)

![[mergesort.mp4]]

**Concept:** Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. 

Merge Sort is a divide and conquer algorithm. It consists of two parts:

```
1) splitting the original list into smaller sorted lists recursively until there is only 1 element in the list, (worst and average runtime for this part is Θ(log N))
2) merging back the presorted 1-element lists into 2-element lists, 4-element lists, and so on recursively. (The best, worst and average runtime for this part is Θ(N))
```


**Performance:** 
- Best, Average, and Worst: O(n log n), which is more efficient than Bubble Sort on larger lists.

**Example:**

Given the array `[38, 27, 43, 3, 9, 82, 10]`, here's a high-level view of Merge Sort:

1. Divide the array into halves: `[38, 27, 43, 3]` and `[9, 82, 10]`.
2. Keep dividing until you have single-element arrays.
3. Merge the single-element arrays into sorted arrays of two elements.
4. Continue merging sorted arrays until you have a single sorted array.

```js
const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

```
### Quick Sort

**Concept:** Quick Sort is another divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

![[quicksort.mp4]]

Quicksort is a method for sorting an array by repeatedly partitioning it into sub-arrays by:

1. Selecting an element from the current array. This element is called the pivot element, and in our implementation we used the mid element.
2. Comparing every element in the array to the pivot element, swap the elements into sides greater than and less than. The partition point in the array is where we guarantee everything before is less and everything after is greater than.
3. Repeating this process on the sub-arrays separated by the partition point. Do this until a sub-array contains a single element. When the partitioning and swapping are done, the arrays are sorted from smallest to largest.

The worst case runtime for quicksort is `O(N^2)` and the average runtime for quicksort is `O(N logN)`. The worst case runtime is so unusual that the quicksort algorithm is typically referred to as `O(N logN)`“

- Quicksort is a divide-and-conquer algorithm that splits an unsorted data set into two partitions recursively and sorts the partitioned arrays in-place until there is only one element left in a partition.
- To determine the elements that belong in a partition, we need a pivot element, `pivot`, that is sandwiched between the two partitions and its location called the `pivotIndex`.
- We implemented the `partition()` function which groups and swaps the elements either to the left or right of the `pivot` element and returns the `leftIndex` that is the same as the `pivotIndex`.
- We implemented the `quicksort()` function that first calls `partition()` to determine the `pivotIndex` then recursively calls itself to sort the smaller partitions until there is only one element left in the partition.


**Performance:** 
- Best and Average: O(n log n).
- Worst: O(n²), when the pivot selection is poor (e.g., always picking the first or last element in a sorted or reverse-sorted list).

**Example:**

Consider the array `[7, 2, 1, 6, 8, 5, 3, 4]` and let's pick the last element as the pivot:

1. The pivot is `4`. Rearrange the array so that elements less than `4` come before it and elements greater than `4` come after it. You might end up with `[2, 1, 3, 4, 7, 6, 8, 5]`.
2. Now apply Quick Sort to the sub-arrays `[2, 1, 3]` and `[7, 6, 8, 5]`.
3. Keep applying Quick Sort to smaller and smaller sub-arrays until they are all sorted.


```js
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
}

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
}

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }

    while (array[rightIndex] > pivot) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }

  return leftIndex;
}

```
