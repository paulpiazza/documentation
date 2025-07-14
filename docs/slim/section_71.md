---
title: Lesson 3.1 - Unit Testing - PHPUnit Part 1
description: Slim notes.
order: 71
---

[00:00](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=0s) - Install PHPUnit

To install PHPUnit, you can follow these steps:

1. **Install Composer (if not already installed)**:
   PHPUnit is typically installed using Composer, a dependency management tool for PHP. If you don't have Composer installed, you can download and install it by following the instructions on the Composer website: https://getcomposer.org/

2. **Create a New Directory for Your Project**:
   Create a new directory for your PHP project if you don't have one already. Open a terminal and navigate to this directory.

3. **Initialize Composer in Your Project**:
   In your project directory, run the following command to initialize Composer in your project:

   ```
   composer init
   ```

   This command will guide you through creating a `composer.json` file for your project.

4. **Require PHPUnit**:
   Run the following command to require PHPUnit as a development dependency:

   ```
   composer require --dev phpunit/phpunit
   ```

   This command will download PHPUnit and add it to your `composer.json` file.

5. **Run PHPUnit**:
   Once PHPUnit is installed, you can run it by using the `vendor/bin/phpunit` executable. To run your tests, you'll need to create test classes and methods within your project. PHPUnit follows a specific naming convention for test classes and methods. For example, a test class for a `Calculator` class would be named `CalculatorTest`.

   Create a test class and method and then run PHPUnit using the following command:

   ```
   vendor/bin/phpunit
   ```

   PHPUnit will discover and execute your test methods. You can improve display by adding document, colors and code coverage.

   ```
   vendor\bin\phpunit --testdox --colors --coverage-text
   ```


That's it! You've successfully installed PHPUnit and can now start writing and running tests for your PHP code. Remember that PHPUnit requires you to follow its naming conventions for test classes and methods so that it can automatically discover and execute your tests.

For more advanced usage and configuration, you can refer to the official PHPUnit documentation: https://phpunit.de/documentation.html


[02:22](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=142s) - PHPUnit Configuration

PHPUnit uses a configuration file called `phpunit.xml` to customize its behavior and settings for your project. This configuration file can be placed in the root directory of your project. Here's how you can set up a basic PHPUnit configuration:

1. **Create the Configuration File**:
   In the root directory of your project, create a file named `phpunit.xml`. You can use this file to specify various settings for PHPUnit. You can generate one with
   
   ```
   vendor\bin\phpunit --generate-configuration
   ```


2. **Basic Configuration**:
   Here's a simple example of a `phpunit.xml` file:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <phpunit>
       <testsuites>
           <testsuite name="My Tests">
               <directory>tests</directory>
           </testsuite>
       </testsuites>
   </phpunit>
   ```

   In this example, we define a test suite named "My Tests" that includes all test files located in the `tests` directory. You can adjust the directory path based on your project structure.

3. **Customizing Settings**:
   PHPUnit provides a wide range of configuration options that you can use to customize its behavior. For example, you can configure the test suite, specify test files, define the bootstrap file, set up test listeners, and more.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <phpunit bootstrap="vendor/autoload.php" color="true">
       <testsuites>
           <testsuite name="My Tests">
               <directory>tests</directory>
           </testsuite>
       </testsuites>

       <php>
           <!-- Custom PHP settings, such as error reporting -->
           <ini name="display_errors" value="1"/>
       </php>

       <listeners>
           <!-- Attach custom listeners -->
           <listener class="My\TestListener"/>
       </listeners>
   </phpunit>
   ```

   In this example, we specify a bootstrap file (`tests/bootstrap.php`), set a custom PHP setting (`display_errors`), and attach a custom test listener (`My\TestListener`).

4. **Running PHPUnit with Configuration**:
   Once you've set up your `phpunit.xml` configuration file, you can run PHPUnit from the command line without specifying additional options:

   ```
   vendor/bin/phpunit
   ```

PHPUnit will automatically use the configuration from the `phpunit.xml` file in your project's root directory.

Remember that this is just a basic example of PHPUnit configuration. You can explore the official documentation for more advanced configuration options and settings: https://phpunit.de/manual/current/en/appendixes.configuration.html

[03:56](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=236s) - Writing Unit Tests

Writing unit tests involves creating test cases that verify the behavior and correctness of individual units of your code, typically functions or methods. PHPUnit provides a framework for creating and running unit tests in PHP. Here's an overview of the steps involved in writing unit tests with PHPUnit:

1. **Create Test Files**:
   Create test files in a separate directory (usually named `tests`) within your project directory. Each test class should be named after the class you are testing, followed by "Test" (e.g., `MyClassTest.php`).

2. **Write Test Cases**:
   In each test class, define test methods that correspond to the methods you want to test. Use PHPUnit's assertion methods to check if the expected behavior matches the actual output.

   ```php
   use PHPUnit\Framework\TestCase;

   class MyClassTest extends TestCase
   {
       public function testAdd()
       {
           $myClass = new MyClass();
           $result = $myClass->add(2, 3);
           $this->assertEquals(5, $result);
       }
	   
	   /**
	   * @test <= announce that it is a test.
	   */
	   public function it_should_send_sum()
	   {
		   // ...
	   }
   }
   ```

4. **Run Tests**:
   Run your tests using the `phpunit` command followed by the path to the directory containing your test files. PHPUnit will automatically discover and execute your test cases.

   ```
   vendor/bin/phpunit tests
   ```

5. **Review Test Results**:
   PHPUnit will display the results of your tests, indicating which tests passed and which failed. If any tests fail, PHPUnit will provide detailed information about the failure.

6. **Refactor and Iterate**:
   If a test fails, review your code to identify the issue and fix it. Update your test cases and rerun PHPUnit until all tests pass. This iterative process helps ensure the correctness of your code.

7. **Use Mocking and Dependency Injection**:
   When testing classes that depend on external resources (like databases or APIs), consider using mocking and dependency injection to isolate the code being tested from its dependencies.

8. **Test Coverage**:
   PHPUnit also provides a code coverage report that helps you identify which parts of your code are covered by your tests. You can generate a code coverage report using the `--coverage-html` option:

   ```
   vendor/bin/phpunit --coverage-html coverage-report
   ```

Unit testing is an essential practice in software development that helps you catch bugs early and maintain the reliability of your codebase. It ensures that each unit of code functions correctly in isolation before integrating into larger systems.

[12:08](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=728s) - Share test setup code (setup method)

In PHPUnit, the `setUp` method is used to set up the initial state and resources required for your test cases. It's called before each test method in a test class. Here's an example of how you can use the `setUp` method to share test setup code:

```php
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase
{
    protected $myClass;

    protected function setUp(): void
    {
        // This method will be called before each test method

        // Set up any resources or objects needed for tests
        $this->myClass = new MyClass();
    }

    public function testAdd()
    {
        $result = $this->myClass->add(2, 3);
        $this->assertEquals(5, $result);
    }

    public function testSubtract()
    {
        $result = $this->myClass->subtract(5, 2);
        $this->assertEquals(3, $result);
    }
}
```

In the example above, the `setUp` method initializes the `$myClass` property with an instance of `MyClass` before each test method is run. This ensures that each test method operates with a fresh instance of the class and that changes made in one test method don't affect other test methods.

By using the `setUp` method, you can reduce code duplication by setting up common resources once and reusing them across multiple test methods. It also helps keep your tests isolated and independent from each other.

[14:33](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=873s) - Data providers & testing exceptions

In PHPUnit, data providers and testing exceptions are powerful techniques to enhance your test cases. They allow you to test your code with various inputs and ensure it handles exceptions correctly. Here's an overview of how to use data providers and test exceptions:

### Data Providers:

Data providers allow you to run the same test method with multiple sets of input data. This helps ensure that your code works correctly with different inputs. Here's how to use a data provider:

```php
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAddition($a, $b, $expected)
    {
        $math = new Math();
        $result = $math->add($a, $b);
        $this->assertEquals($expected, $result);
    }

    public function additionProvider()
    {
        return [
            [2, 3, 5],
            [0, 0, 0],
            [5, -3, 2],
        ];
    }
}
```

You can add a description or phrase to your data provider methods in PHPUnit. This can help provide more context for the test cases and make the test reports more readable. To add a description to a data provider, you can use the `@dataProvider` annotation and include a description string:

```php
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAddition($a, $b, $expected)
    {
        $math = new Math();
        $result = $math->add($a, $b);
        $this->assertEquals($expected, $result);
    }

    /**
     * @dataProvider additionProvider
     * @param int $a
     * @param int $b
     * @param int $expected
     * @param string $description
     */
    public function testAdditionWithDescription($a, $b, $expected, $description)
    {
        $math = new Math();
        $result = $math->add($a, $b);
        $this->assertEquals($expected, $result, $description);
    }

    public function additionProvider()
    {
        return [
            [2, 3, 5, 'Adding positive numbers'],
            [0, 0, 0, 'Adding zeros'],
            [5, -3, 2, 'Adding positive and negative numbers'],
        ];
    }
}
```

In this example, the `testAdditionWithDescription` method is using the same data provider as `testAddition`, but it includes an additional parameter `$description` that allows you to provide a description for each test case. This description will be included in the test reports when the tests are run, providing more context for each test case.
### Testing Exceptions:

PHPUnit allows you to assert that certain code will throw exceptions when executed. This is essential for testing the error-handling behavior of your code:

```php
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testDivideByZeroThrowsException()
    {
        $math = new Math();
        $this->expectException(DivisionByZeroError::class);
        $math->divide(10, 0);
    }
}
```

In this example, the `expectException` method is used to specify the type of exception that's expected to be thrown when the code is executed.

By using data providers and testing exceptions, you can ensure that your code is robust and behaves correctly under different scenarios and error conditions.

[22:11](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=1331s) - External data providers & test class autoloading

PHPUnit supports using external data providers by specifying the data provider method as a static method in an external class. This approach allows you to keep your data provider methods organized and separate from your test classes.

Here's how you can use external data providers and ensure proper class autoloading:

1. Create an external class with the data provider method(s):

Assuming you have a class named `Math` and you want to test its addition functionality:

```php
// tests/MathDataProvider.php
class MathDataProvider
{
    public static function additionProvider()
    {
        return [
            [2, 3, 5],
            [0, 0, 0],
            [5, -3, 2],
        ];
    }
}
```

2. Create your test class and use the external data provider:

```php
// tests/MathTest.php
use PHPUnit\Framework\TestCase;

require_once 'MathDataProvider.php'; // Include the external class

class MathTest extends TestCase
{
    /**
     * @dataProvider MathDataProvider::additionProvider
     */
    public function testAddition($a, $b, $expected)
    {
        $math = new Math();
        $result = $math->add($a, $b);
        $this->assertEquals($expected, $result);
    }
}
```

3. Make sure your autoloading is set up correctly:

PHPUnit will automatically discover and run your test classes if they follow the naming convention of ending with "Test.php". Ensure that your autoloading mechanism (e.g., Composer's autoloader) is set up properly so that the classes are loaded when needed.

By using this approach, you can keep your data provider methods organized in separate classes and make use of autoloading to ensure that the required classes are loaded when running the tests.

In fact, it's a recommended practice to organize your test classes under a specific namespace. This helps in maintaining a clear separation between production code and test code.

Here's how you can achieve this:

1. Update your project's `composer.json` file to include the namespace and autoload configuration for your test classes:

```json
{
    "autoload": {
        "psr-4": {
            "MyApp\\": "src/",
            "Tests\\": "tests/"
        }
    }
}
```

In this example, we're defining two namespaces: `MyApp` for your main application code (under the `src/` directory) and `Tests` for your test classes (under the `tests/` directory).

2. Run `composer dump-autoload` to regenerate the autoloader files based on the updated configuration.

3. Organize your test classes in a similar way, matching the namespace:

```php
// tests/MathTest.php
namespace Tests;

use PHPUnit\Framework\TestCase;
use MyApp\Math;

class MathTest extends TestCase
{
    // ... your test methods
}
```

4. Run your tests using PHPUnit. PHPUnit will automatically use the autoloader to load the necessary classes based on the namespaces.

This approach provides a clean separation between your production code and test code, making your project more organized and maintainable.

[25:14](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=1514s) - More tests

PHPUnit offers a variety of testing methods and assertions that you can use to write comprehensive unit tests for your PHP code. Here are some of the commonly used methods and assertions provided by PHPUnit:

**Test Methods:**
1. `setUp()`: This method is called before each test method is executed. It's used to set up any common resources or objects required for the tests.

2. `tearDown()`: This method is called after each test method is executed. It's used to clean up any resources or objects created during the tests.

3. Test methods: These are methods that contain your actual test cases. Test methods are named starting with "test", and you can use various assertions to check the expected outcomes.

**Assertions:**
1. `assertEquals()`: Compares two values for equality.

2. `assertSame()`: Compares two values for identity (same object or scalar value).

3. `assertTrue()` / `assertFalse()`: Asserts whether a condition is true or false.

4. `assertNull()`: Asserts that a value is null.

5. `assertNotEmpty()`: Asserts that a value is not empty.

6. `assertArrayHasKey()`: Asserts that an array has a specific key.

7. `assertContains()`: Asserts that an element is present in an array or string.

8. `expectException()`: Asserts that an exception of a specific type is thrown.

9. `assertStringContainsString()`: Asserts that a string contains a substring.

10. `assertCount()`: Asserts the count of elements in an array or a countable object.

11. `assertInstanceOf()`: Asserts that an object is an instance of a specific class.

12. `assertNotEquals()`, `assertNotSame()`, `assertNotInstanceOf()`, etc.: The negated versions of the corresponding assertions.

**Annotations:**
1. `@dataProvider`: Used to specify a method that provides data for parameterized tests.

2. `@depends`: Used to specify the dependencies between test methods.


**Expectations**:
1. `expectException()`: Asserts that an exception of a specific type is thrown during the execution of the test.

2. `expectExceptionCode()`: Asserts the expected exception code when an exception is thrown.

3. `expectExceptionMessage()`: Asserts the expected exception message when an exception is thrown.

4. `expectExceptionMessageRegExp()`: Asserts the expected exception message using a regular expression.

5. `expectExceptionObject()`: Asserts the expected exception object when an exception is thrown.

6. `expectNotToPerformAssertions()`: Informs PHPUnit that a test is expected to not perform any assertions.

These methods are particularly useful for testing scenarios where you expect certain exceptions to be thrown in specific situations. By using these methods, you can write tests that ensure your code behaves correctly when exceptions are thrown and also validate the details of those exceptions.

**Mocking and Stubbing:**
PHPUnit also provides functionalities for creating mock objects and stubs, allowing you to isolate the code under test from external dependencies.

These are just some of the many methods and assertions PHPUnit provides for testing. Depending on your testing needs, you can explore these and more features to write comprehensive and reliable unit tests for your PHP code.

[27:56](https://www.youtube.com/watch?v=9-X_b_fxmRM&t=1676s) - Strict comparison vs loose comparison in tests (assertEquals vs assertSame)

In PHPUnit, the methods `assertEquals()` and `assertSame()` are used to compare values during tests. The key difference between them lies in the type of comparison they perform: strict comparison (\=\=\=) and loose comparison (\==), respectively.

1. `assertEquals($expected, $actual)`: This method performs a loose comparison between the expected and actual values. It checks whether the values are equal after converting them to the same type, if necessary. For example, if you compare an integer and a string that represents the same number, `assertEquals()` will consider them equal. However, this method doesn't ensure that the types are identical.

   ```php
   $this->assertEquals(42, '42'); // True (loose comparison)
   ```

2. `assertSame($expected, $actual)`: This method performs a strict comparison between the expected and actual values. It checks not only whether the values are equal but also whether they have the same type. This is generally a safer comparison to use in tests, as it prevents unexpected type coercion and enforces both value and type equality.

   ```php
   $this->assertSame(42, 42); // True (strict comparison)
   ```

When writing tests, it's often recommended to use `assertSame()` when you want to ensure both value and type equality. This helps catch subtle issues that might arise due to type coercion. However, there might be scenarios where `assertEquals()` could be useful, such as when you want to assert that two values are equal but don't necessarily care about their types.

In general, using strict comparisons (`assertSame()`) can help ensure more accurate and reliable tests by avoiding unexpected type conversions and subtle bugs.