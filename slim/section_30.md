---
title: Lesson 1.28 - Error Handling
description: Slim notes.
order: 30
---

See [set error handler](https://www.php.net/manual/en/function.set-error-handler.php)
See [error function constants](https://www.php.net/manual/en/errorfunc.constants.php)
See [SPL exceptions class](https://www.php.net/manual/en/spl.exceptions.php)
See [error functions](https://www.php.net/manual/en/book.errorfunc.php)

Error handling in PHP involves managing and responding to different types of errors that can occur during the execution of your code. Errors can range from syntax errors to runtime issues, and handling them properly is crucial to ensure the stability and reliability of your applications. PHP provides several mechanisms for error handling:

1. **Error Reporting Levels**: PHP allows you to control the level of error reporting using the `error_reporting` directive in your php.ini file or using the `error_reporting` function in your code. You can set the error reporting level to display or log different types of errors. If set to 0, no errors will be reported. Set to `E_ALL` it will reports all errors. 

2. **Error Types**: PHP categorizes errors into different types, such as notices, warnings, and fatal errors. Notices are non-critical issues that won't halt the script, warnings indicate potential problems, and fatal errors stop the script's execution.

3. **Display Errors**: During development, you might want to display errors directly on the screen. You can enable error display using the `display_errors` directive in php.ini or in your code using `ini_set('display_errors', 1);`.

4. **Logging Errors**: In a production environment, you should log errors to a file instead of displaying them to users. You can set the `log_errors` directive to true and specify the `error_log` file path.

5. **Custom Error Handling**: PHP allows you to define custom error handling functions using `set_error_handler` and `set_exception_handler` functions. This gives you full control over how errors are handled, and you can log, display, or handle errors in a specific way.

6. **Try-Catch Blocks (Exceptions)**: PHP supports exceptions for more advanced error handling. You can use `try`, `catch`, `finally`, and `throw` to manage and respond to exceptions that occur during the execution of your code.

Here's an example of how error handling works in PHP using custom error handling functions and exceptions:

```php
// Custom error handling function
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    echo "Error: $errstr in $errfile on line $errline\n";
}

// Set custom error handler
set_error_handler("customErrorHandler", E_ALL);

// Trigger an error
echo $undefinedVariable;

// Using exceptions for error handling
try {
    // Attempt some operations that may throw exceptions
    $result = 10 / 0; // Division by zero
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage();
}
```

Remember that proper error handling depends on the context and requirements of your application. It's important to implement error handling that ensures a smooth user experience, provides meaningful error messages, and helps you identify and fix issues in your code. In production mode, you should put that errors in a log file.

You can generate an error with `trigger_error`. [trigger error](https://www.php.net/manual/en/function.trigger-error.php)

Logging errors is an essential practice in software development to help identify and diagnose issues in your applications. In PHP, you can log errors to files, databases, or external services using various logging libraries or by implementing custom logging mechanisms. Here's a basic example of how to log errors to a file:

```php
// Set error reporting and logging settings
error_reporting(E_ALL); // Report all types of errors
ini_set('log_errors', 1); // Enable error logging
ini_set('error_log', '/path/to/error.log'); // Set the path to the error log file

// Log errors to a file
function logError($message) {
    error_log(date('[Y-m-d H:i:s]') . ' ' . $message . PHP_EOL, 3, '/path/to/error.log');
}

// Example usage
try {
    // Some code that might throw an exception or error
    $result = 10 / 0; // Division by zero
} catch (Exception $e) {
    // Log the error
    logError('Caught exception: ' . $e->getMessage());
}
```

Additionally, consider implementing different log levels (e.g., info, warning, error) and organizing logs based on severity for better analysis and troubleshooting.

In PHP, exceptions are instances of classes that are used to represent and handle errors or exceptional conditions in your code. PHP provides a built-in `Exception` class, and you can also create your custom exception classes to provide more context-specific error handling. 

See [exception class](https://www.php.net/manual/en/class.exception.php)
See [predefined exceptions](https://www.php.net/manual/en/reserved.exceptions.php)
```php
class CustomException extends Exception {
    public function __construct($message = "", $code = 0, Throwable $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}

try {
    // Code that might throw a custom exception
    $age = -5;
    if ($age < 0) {
        throw new CustomException("Age cannot be negative.");
    }
} catch (CustomException $e) {
    echo "Caught custom exception: " . $e->getMessage();
}
```
