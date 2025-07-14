---
title: Lesson 2.20 - Exceptions
description: Slim notes.
order: 56
---

[00:00](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=0s) - What are exceptions

See [SPL](https://www.php.net/manual/en/spl.exceptions.php)
See [set_exception_handler](https://www.php.net/manual/en/function.set-exception-handler.php)
See [errors](https://www.php.net/manual/en/language.errors.php7.php)

An exception in programming refers to an abnormal or unexpected event that occurs during the execution of a program, which disrupts the normal flow of code execution.

Exceptions are used to handle errors, exceptional conditions, or situations that are beyond the regular scope of a program's execution.

[01:15](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=75s) - Throwing exceptions

Throwing an exception in programming involves generating an exceptional event during the execution of a program. This typically happens when the program encounters an error or an exceptional condition that it cannot handle directly. When an exception is thrown, the normal flow of code execution is interrupted, and the program searches for an appropriate "catch" block to handle the exception.

In languages like PHP, you can throw an exception using the `throw` statement. Here's a basic example:

```php
function divide($dividend, $divisor) {
    if ($divisor === 0) {
        throw new Exception("Division by zero is not allowed.");
    }
    return $dividend / $divisor;
}

try {
    echo divide(10, 2);  // Output: 5
    echo divide(10, 0);  // This will throw an exception
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage();
}
```

In this example, the `divide` function throws an exception if the divisor is zero. When the `divide(10, 0)` call is made, an exception is thrown with the specified error message. The `catch` block catches the exception and handles it by displaying the error message.

When you throw an exception, the program flow immediately jumps out of the current block of code and searches for a matching `catch` block to handle the exception. If no appropriate `catch` block is found, the exception will propagate up the call stack until it's caught or until the program terminates.

In addition to creating custom exceptions, you can also use more specific built-in exception classes provided by PHP to handle different types of errors or exceptional conditions. PHP offers a range of predefined exception classes that cover various scenarios. Some of the specific built-in exception classes include:

1. `InvalidArgumentException`: Used when an argument passed to a function or method is not of the expected type or value.
   
2. `RuntimeException`: A generic exception class for runtime errors that don't fall into more specific categories.
   
3. `LogicException`: Used for exceptions caused by logical errors in code, such as violating contracts or assumptions.

4. `PDOException`: Used for exceptions related to database errors when using PDO (PHP Data Objects).

5. `FileNotFoundException`: Used when a file could not be found or opened.

6. `DivisionByZeroError`: A specific exception class for division by zero errors.

7. `OutOfRangeError`: Used when an index or value is out of the acceptable range.

8. `HttpUnauthorizedException`: Used for unauthorized access in web applications.

These specific exception classes provide more context to the error and help you handle different scenarios more accurately. 
The `Error` class and the `Exception` class in PHP serve different purposes in the context of error handling and exception handling:

1. **`Error` Class**:
   - The `Error` class is a base class for all internal PHP errors, like fatal errors, warnings, and notices.
   - These errors typically indicate issues that might prevent the correct execution of a script. Examples include fatal errors like "Call to undefined function" or "Allowed memory size exhausted."
   - `Error` instances are not meant to be caught or handled in user code, as attempting to catch and handle them might lead to unpredictable behavior.

2. **`Exception` Class**:
   - The `Exception` class is the base class for all user-defined exceptions in PHP.
   - User-defined exceptions are meant to represent exceptional conditions or errors that occur in the program's logic.
   - Exceptions provide a structured and standardized way to handle errors and exceptional situations in your code.
   - You can create custom exception classes that extend the `Exception` class to represent specific types of errors in your application. This allows you to catch and handle these exceptions with precision.
   - Exceptions are caught and handled using `try` and `catch` blocks, providing better control over error handling flow.

Here's a simple example that demonstrates the difference:

```php
// Example of using the Error class
try {
    // Attempt to divide by zero (generates a fatal error)
    $result = 10 / 0;
} catch (Error $error) {
    echo "Caught error: " . $error->getMessage();
}

// Example of using the Exception class
class CustomException extends Exception {}

try {
    // Throwing a custom exception
    throw new CustomException("This is a custom exception.");
} catch (Exception $exception) {
    echo "Caught exception: " . $exception->getMessage();
}
```

In summary, the `Error` class represents internal PHP errors and is not meant to be caught or handled in user code. The `Exception` class is the foundation for user-defined exceptions and provides a structured way to handle errors and exceptional conditions in a program.

 
[04:34](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=274s) - Custom exceptions

Custom exceptions in programming refer to user-defined exception classes that extend a base exception class (like `Exception` in PHP) to create specialized exceptions tailored to specific situations or error types. These custom exception classes provide a structured way to handle different types of errors or exceptional conditions in your code.

Here's how you can create and use custom exceptions in PHP:

```php
class CustomException extends Exception {
    // Custom exception class
}

function performTask($value) {
    if ($value < 0) {
        throw new CustomException("Value cannot be negative.");
    }
    // ... perform the task
}

try {
    performTask(5);   // This will execute successfully
    performTask(-2);  // This will throw a CustomException
} catch (CustomException $e) {
    echo "Caught exception: " . $e->getMessage();
} catch (Exception $e) {
    echo "Caught general exception: " . $e->getMessage();
}
```

In this example, the `CustomException` class extends the built-in `Exception` class. Inside the `performTask` function, if a negative value is passed, a `CustomException` is thrown with a specific error message. The `catch` block for `CustomException` catches this specific exception type and handles it by displaying the error message.

Custom exceptions allow you to create more meaningful and specialized error messages for different scenarios in your code, making it easier to understand and debug errors. They also provide a way to separate different error-handling logic and improve code organization.

[07:15](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=435s) - Catching exceptions (try/catch)

The `try` and `catch` blocks allow you to gracefully manage errors and exceptional situations in your code, ensuring that your application doesn't crash unexpectedly. Here's how the `try` and `catch` blocks work:

1. **`try` Block**:
   - Inside a `try` block, you enclose the code that you suspect might throw an exception or encounter an error.
   - If an exception is thrown or an error occurs within the `try` block, the normal flow of execution is interrupted, and PHP starts looking for a matching `catch` block.

2. **`catch` Block**:
   - A `catch` block is used to catch and handle exceptions that were thrown in the corresponding `try` block.
   - You can have multiple `catch` blocks, each handling a specific type of exception. This allows you to handle different exceptions differently.
   - When an exception is caught, the code inside the appropriate `catch` block is executed. This allows you to handle the error gracefully and possibly recover from it.

Here's a basic example:

```php
try {
    // Code that might throw an exception
    $result = 10 / 0; // This will cause a division by zero error
} catch (Exception $e) {
    // Code to handle the caught exception
    echo "An exception occurred: " . $e->getMessage();
}

echo "This will still be executed.";
```

In this example, the division by zero will cause an exception to be thrown. The code inside the `catch` block will handle the exception and display an error message. The last `echo` statement will still be executed after the `catch` block.

When an exception is throwed, the execution will search the first try-catch block. If no one is found, it will stop the execution.

It's possible to multiply caches.

```php
try {
    // Code that might throw an exception
    $result = 10 / 0; // This will cause a division by zero error
} catch (DivisionByZeroError $e) {
    // Handle division by zero error
    echo "Division by zero error: " . $e->getMessage();
} catch (Exception $e) {
    // Handle other exceptions
    echo "An exception occurred: " . $e->getMessage();
}
```

[11:21](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=681s) - Finally block & how return statements work from try, catch & finally blocks

The `finally` block is another component of PHP's exception handling mechanism. It allows you to define code that will be executed regardless of whether an exception was thrown or not. The `finally` block is placed after the `catch` block(s) in a `try-catch-finally` structure.

Here's how the `finally` block works and how return statements behave in different scenarios:

1. **`finally` Block**:
   - The code inside the `finally` block will always be executed, regardless of whether an exception was thrown or caught.
   - This is useful for performing cleanup tasks or releasing resources that should be executed no matter the outcome of the code block.

2. **Return Statements**:
   - If a `return` statement is encountered in the `try` block, the code in the `finally` block will still be executed before the function returns.
   - If a `return` statement is encountered in the `catch` block, the code in the `finally` block will still be executed before the function returns.
   - If a `return` statement is encountered in the `finally` block, it will override any previous `return` statements in the `try` or `catch` blocks. The value from the `finally` block will be returned.

Here's an example to illustrate these concepts:

```php
function testFunction() {
    try {
        echo "Inside try block<br>";
        return 1; // This will be overridden by finally block's return
    } catch (Exception $e) {
        echo "Inside catch block<br>";
        return 2; // This will be overridden by finally block's return
    } finally {
        echo "Inside finally block<br>";
        return 3; // This will be returned by the function
    }
}

$result = testFunction();
echo "Result: $result";
```

Output:

```
Inside try block
Inside catch block
Inside finally block
Result: 3
```

In this example, the `finally` block's `return` statement takes precedence, and its value (3) is returned by the function. The `try` and `catch` block's `return` statements are overridden.

Remember that while `finally` can modify the return value of a function, it's generally recommended to avoid using `return` statements in `finally` blocks. It can lead to confusing code and unexpected behavior. Instead, use the `finally` block for cleanup and resource release operations.

[14:12](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=852s) - Global exception handler, error hierarchy & changes in error reporting in PHP 7 & PHP 8 

In PHP, you can set up a global exception handler using the `set_exception_handler()` function. This handler will be called whenever an uncaught exception occurs in your code. You can define your own custom logic for handling exceptions, such as logging the error, displaying a user-friendly message, or performing other actions.

In PHP, exceptions are organized in a hierarchy. At the top of the hierarchy is the base class `Exception`, and various specific exception classes extend from it. This allows you to catch different types of exceptions separately and handle them accordingly.

In PHP 7 and PHP 8, there have been changes and improvements in error reporting:

1. **Error Reporting in PHP 7**:
   - PHP 7 introduced the Throwable interface, which is implemented by both the `Exception` class and the `Error` class (the base class for all internal PHP errors).
   - The `Error` class introduced a consistent way to handle internal errors like division by zero, undefined variables, etc. These errors now also throw exceptions, making error handling more consistent.

2. **Error Reporting in PHP 8**:
   - PHP 8 introduced the concept of Union Types for function and method parameters. This allows you to specify that a parameter can accept multiple types, including exceptions and errors.
   - The `Throwable` interface and `Error` class introduced in PHP 7 are further enhanced in PHP 8, providing more flexibility in error and exception handling.

Here's a simple example of a global exception handler and how you can catch different types of exceptions:

```php
// Define a custom exception class
class CustomException extends Exception {}

// Global exception handler function
function customExceptionHandler($exception) {
    echo "Global Exception Handler: " . $exception->getMessage() . "<br>";
}

// Set the global exception handler
set_exception_handler('customExceptionHandler');

try {
    // Trigger an exception
    // throw new Exception("An exception occurred!");

    // Trigger a custom exception
    // throw new CustomException("Custom exception occurred!");

    // Trigger an error
    // $undefinedVar = $someValue;

} catch (CustomException $e) {
    echo "Caught CustomException: " . $e->getMessage() . "<br>";
} catch (Exception $e) {
    echo "Caught Exception: " . $e->getMessage() . "<br>";
} finally {
    echo "Finally block<br>";
}

echo "After try-catch block";
```

In this example, you can uncomment different sections to see how the global exception handler is triggered for different types of exceptions and errors. The `finally` block will always be executed, regardless of whether an exception was caught.

In PHP, errors are categorized into two main types: **standard PHP errors** and **fatal errors**. Additionally, PHP 7 and later versions introduced a unified hierarchy of errors and exceptions.

1. **Standard PHP Errors**:
   - These are the familiar errors that you encounter in PHP development, such as "Undefined variable," "Division by zero," "Call to undefined function," etc.
   - These errors are considered non-fatal. While they do interrupt the normal flow of your script, they can be caught using custom error handlers, and the script execution can continue afterward.

2. **Fatal Errors**:
   - These are errors that cannot be caught and handled by your custom error handlers. They are usually more severe issues that prevent the script from running properly.
   - Examples include syntax errors, which prevent the script from being parsed, or using a non-existent class name, which prevents class instantiation.

The PHP error hierarchy and exception hierarchy are closely related:

- At the top level, there's the `Throwable` interface. Both `Exception` and `Error` classes implement this interface.
- The `Exception` class represents recoverable exceptions that can be caught and handled.
- The `Error` class represents fatal and non-recoverable errors. It's divided into several categories, such as `ParseError`, `TypeError`, `DivisionByZeroError`, etc.

Here's a simplified hierarchy of exceptions and errors in PHP:

```
Throwable
├── Exception // base class for custom
│   ├── LogicException
│   │   ├── BadFunctionCallException
│   │   ├── BadMethodCallException
│   │   ├── DomainException
│   │   ├── InvalidArgumentException
│   │   └── LengthException
│   └── RuntimeException
│       ├── OutOfBoundsException
│       ├── OverflowException
│       ├── RangeException
│       └── UnderflowException
└── Error // built-in errors
    ├── ArithmeticError
    │   ├── DivisionByZeroError
    │   └── ...
    ├── AssertionError
    ├── ParseError
    ├── TypeError
    │   ├── ArgumentCountError
    │   └── ...
    └── ...
```

This hierarchy helps you understand the relationship between different types of errors and exceptions, making it easier to handle them in your code.

In PHP, `set_exception_handler` is a function that allows you to set a custom global exception handler. This handler is called when an uncaught exception occurs during the execution of your script. Instead of letting PHP's default behavior handle the exception, you can define your own callback function to manage how the exception is handled, logged, or reported.

Here's how `set_exception_handler` works:

1. **Definition**: `set_exception_handler` takes a single argument, which should be a callable (usually a function or a method) that will be invoked when an uncaught exception occurs.

2. **Usage**: You typically use `set_exception_handler` at the beginning of your script or as part of your application's initialization to define the behavior you want for uncaught exceptions.

3. **Callback Function**: The callback function should accept one parameter, which will be an instance of the `Throwable` interface (or one of its subclasses, like `Exception` or `Error`). This parameter represents the uncaught exception that occurred.

4. **Custom Handling**: Inside the callback function, you can define how you want to handle the exception. You might want to log the error, send an email notification, display a user-friendly error page, or perform other actions based on the nature of the exception.

Here's a simple example of how to use `set_exception_handler`:

```php
// Custom exception handler
function customExceptionHandler($exception) {
    echo "An exception occurred: " . $exception->getMessage();
}

// Set the custom exception handler
set_exception_handler('customExceptionHandler');

// Throw an exception to test
throw new Exception("This is a test exception.");
```

In this example, the `customExceptionHandler` function is defined to display a message when an exception occurs. The `set_exception_handler` function is then used to set this function as the global exception handler. When the `throw new Exception` statement is executed, the custom exception handler is invoked to handle the exception.

It's important to note that `set_exception_handler` only handles uncaught exceptions. If an exception is caught and handled using a `try`-`catch` block, the custom exception handler won't be triggered. For that reason, it's a good practice to combine `set_exception_handler` with proper use of `try`-`catch` blocks to ensure comprehensive exception handling in your code.

[17:50](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=1070s) - When to use exceptions

If you are expecting a value and it's ok, you can treat the value with a return statement.

If you are not expecting this value and you are not able to continue the programm, you should send an exception.


   ```php
function process (int $value): void {
	// expecting to have value < 0 
	if($value < 0) {
		return;
	}
	// exceptional behaviour and not expected
	if($value < 0) {
		throw new Exception('error');
	}
}
   ```


Using the `\Throwable` type hint when catching exceptions is particularly useful when you want to handle both traditional exceptions and errors (which are instances of the `\Error` class). The reason for this is that, starting from PHP 7, exceptions and errors are unified under a common hierarchy to provide more consistent error handling.

1. **Unified Handling**: By catching `\Throwable`, you can catch both exceptions and errors in a single catch block. This can simplify your error-handling code and make it more consistent.

   ```php
   try {
       // Code that might throw an exception or error
   } catch (\Throwable $t) {
       // Handle exceptions and errors
   }
   ```

2. **Error Handling**: Prior to PHP 7, errors (like fatal errors, warnings, and notices) were not caught by the traditional `catch` blocks. However, by using `\Throwable`, you can now catch and handle certain types of errors, such as `\Error` instances, which are part of the exception hierarchy.

   ```php
   try {
       // Code that might throw an error
   } catch (\Error $error) {
       // Handle errors
   }
   ```

3. **Future-Proofing**: Using `\Throwable` allows your code to be more future-proof. If new types of exceptions or errors are introduced in future PHP versions, your catch blocks will still be able to handle them without modification.

4. **Consistent Error Reporting**: By catching `\Throwable`, you can ensure that all unexpected situations that throw exceptions or errors are consistently reported, logged, or handled in a uniform manner.

It's important to note that while catching `\Throwable` is useful for catching certain types of errors, there might be specific situations where you want to catch more specific exception types (such as `\RuntimeException`, `\InvalidArgumentException`, etc.) to provide more targeted handling for different error scenarios. Using `\Throwable` is a trade-off between unified handling and the ability to apply specific logic for different types of exceptions and errors.

[18:49](https://www.youtube.com/watch?v=XQ5Pd-6Hnjk&t=1129s) - Domain-specific exception class with static methods to throw specific exceptions

Creating domain-specific exception classes with static methods can enhance the clarity and readability of your code, making it easier to throw and handle exceptions that are specific to your application's domain. Here's how you can structure such classes:

1. **Create Domain-Specific Exception Classes**:

First, define custom exception classes for specific domains of your application. For example, if you're building an e-commerce application, you might have exceptions related to products, orders, payments, etc.

```php
namespace MyApp\Exceptions;

class ProductNotFoundException extends \Exception
{
    public static function byId(int $productId): self
    {
        return new self("Product with ID $productId not found.", 404);
    }
}

class PaymentFailedException extends \Exception
{
    public static function dueToInsufficientFunds(): self
    {
        return new self("Payment failed due to insufficient funds.", 400);
    }
}
```

2. **Use Static Methods to Throw Specific Exceptions**:

Inside each custom exception class, define static methods that create instances of the exception with specific error messages and codes. These methods act as factory methods for creating and throwing exceptions.

```php
namespace MyApp\Exceptions;

class ProductNotFoundException extends \Exception
{
    public static function byId(int $productId): self
    {
        return new self("Product with ID $productId not found.", 404);
    }
}

class PaymentFailedException extends \Exception
{
    public static function dueToInsufficientFunds(): self
    {
        return new self("Payment failed due to insufficient funds.", 400);
    }
}

// Usage
try {
    // Your code that may throw exceptions
    $productId = 123;
    $product = getProductById($productId);
    if (!$product) {
        throw ProductNotFoundException::byId($productId);
    }

    $paymentAmount = 100;
    $accountBalance = 50;
    if ($paymentAmount > $accountBalance) {
        throw PaymentFailedException::dueToInsufficientFunds();
    }
} catch (ProductNotFoundException $e) {
    echo "Product not found: " . $e->getMessage();
    http_response_code($e->getCode());
} catch (PaymentFailedException $e) {
    echo "Payment failed: " . $e->getMessage();
    http_response_code($e->getCode());
}
```

Using this approach, you encapsulate the logic for creating and throwing specific exceptions within the exception classes themselves. This promotes consistency in error reporting and makes your codebase more maintainable and organized.
