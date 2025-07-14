---
title: TDD with Mocha
description: Slim notes.
order: 36
---

See [Hackernoon](https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92)

Test-driven development (TDD) is a programming technique where you write test code before implementation code. Test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.
### The Red-Green-Refactor Cycle

![[Pasted image 20231121190202.png]]


When we use the red, green, refactor cycle, we:

1. Write test code that fails
2. Write implementation code to make the test pass
3. Consider refactoring the code

As you learn TDD, it may feel backward to intentionally write and run code that will return errors. In TDD we react to the error messages by continually re-writing our implementation code so it behaves in the way that our test specifies.

The red, green, refactor cycle is a process that helps ensure the quality of your code while also making it easier to maintain over time. Here's how it works:

1. **Red:** You start by writing a test that fails. This is the "red" phase because the test is indicating that something is wrong with your code. For example, let's say you're building a calculator app and you write a test that expects 2+2 to equal 5. When you run the test, it fails because the result is actually 4.

2. **Green:** Next, you write implementation code to make the test pass. This is the "green" phase because the test is now passing and your code is functioning as expected. In our calculator example, you would write code to correctly add 2+2 and get a result of 4.

3. **Refactor:** Finally, you consider refactoring the code to improve its design without changing its functionality. This is the "refactor" phase. In our calculator example, you might decide to refactor the code to make it more modular or easier to read.

By following this cycle, you can ensure that your code is thoroughly tested and maintainable over time.

Edge cases refer to scenarios or inputs that are at the extreme boundaries or limits of what is expected or typical. These cases often have unique characteristics or behaviors that may require special handling in a system or application.

Here's an explanation and an example:

1. **Explanation:** Edge cases are important to consider because they can reveal potential weaknesses or vulnerabilities in a system. They help ensure that the system can handle various situations, even those that are less common or unexpected. By testing and addressing edge cases, you can improve the overall robustness and reliability of your software.

2. **Example:** Let's consider a simple example of a function that calculates the average of a list of numbers. An edge case in this scenario could be when the list is empty. Since there are no numbers in the list, the function needs to handle this case appropriately. It could return a specific value (e.g., `None` or `NaN`) or throw an exception to indicate that the calculation is not possible.

Other examples of edge cases could include:
- Providing very large or very small input values to test the limits of numerical calculations.
- Testing with input values that are at the lower or upper bounds of acceptable ranges.
- Checking how the system handles unexpected or invalid inputs, such as special characters or null values.

Considering and testing edge cases helps ensure that your software is robust and can handle a wide range of scenarios, increasing its reliability and user satisfaction.
