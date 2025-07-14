---
title: Lesson 3.2 - Mocking - PHPUnit Part 2
description: Slim notes.
order: 72
---

See [mocking](https://docs.phpunit.de/en/10.3/)

Mocking is a technique used in software testing to create and use simulated versions of objects or components that a piece of code interacts with. These simulated versions, called mock objects, are designed to mimic the behavior of real objects but are under the control of the test developer. Mocking is commonly used to isolate specific parts of a system during testing, ensuring that the behavior of the code being tested is not affected by the behavior of other components.

Mocking is particularly useful when:

1. **External Dependencies:** Your code interacts with external services, databases, APIs, or components that are not readily available during testing. Mock objects can simulate these dependencies to ensure your tests remain isolated and predictable.

2. **Performance Optimization:** Real objects or services might be slow or resource-intensive, which can hinder the execution of tests. Mock objects can be used to simulate these objects, allowing tests to run faster.

3. **Controlled Environment:** Mocking allows you to control the behavior of objects and simulate specific scenarios that are difficult to replicate using real objects.

4. **Isolation:** Tests need to be isolated from each other to prevent side effects and ensure consistent results. Mock objects provide a controlled environment for testing.

5. **Incomplete Implementation:** When testing a component that relies on other components that are not fully implemented yet, you can use mock objects to simulate those components and continue testing.

In the context of PHPUnit and other testing frameworks, you can use libraries to create mock objects easily. These libraries provide methods to set expectations on method calls, return specific values, and even throw specific exceptions to simulate different scenarios.

For example, PHPUnit's built-in mocking framework provides the `MockBuilder` class to create mock objects. Here's a simple example of how you might use PHPUnit to create and use a mock object:

```php
class MyTest extends PHPUnit\Framework\TestCase {
    public function testMockExample() {
        // Create a mock object for a class named 'MyClass'
        $mock = $this->getMockBuilder(MyClass::class)
                     ->getMock();

        // Set expectations on method calls
        $mock->expects($this->once())
             ->method('someMethod')
             ->willReturn('mocked result');

        // Use the mock object in your test
        $result = $mock->someMethod();

        $this->assertEquals('mocked result', $result);
    }
}
```

In this example, you're creating a mock object of the `MyClass` class, setting expectations on the behavior of its `someMethod` method, and then using the mock object in your test.

Mocking and stubbing are both techniques used in software testing, particularly in the context of unit testing, to isolate specific parts of code and control their behavior during testing. While they are related concepts, they serve slightly different purposes:

**Stubbing:**
A stub is a simplified implementation of a class or method that provides specific, predetermined responses to method calls. Stubs are used to simulate the behavior of a real object's methods in order to isolate the code being tested from the actual implementation of the dependency.

For example, if you're testing a function that relies on a database query, you might create a stub for the database connection that returns predefined data instead of actually querying the database. This allows you to control the data that the function receives during testing.

**Mocking:**
A mock is an object that mimics the behavior of a real object, but with additional capabilities. Mocks not only provide predefined responses to method calls (similar to stubs) but also allow you to set expectations about how methods should be called.

For instance, you might create a mock object for a class and specify that a certain method should be called a certain number of times or with specific arguments. This allows you to verify that the code being tested interacts with its dependencies correctly.

In summary:

- **Stubbing:** Involves replacing a real object with a simplified version that returns predefined responses, mainly used for isolating code from dependencies.

- **Mocking:** Involves creating an object that mimics the behavior of a real object, allows setting method expectations, and is used for verifying interactions between the code under test and its dependencies.

Let's walk through an example of testing a simple class using stubs and mocks. For this example, let's consider a `UserManager` class that interacts with a `UserRepository` class to manage user data.

**UserRepository.php**
```php
class UserRepository {
    public function getUserById($userId) {
        // Simulate fetching user data from a database
        // Returns an associative array with user data
    }
}
```

**UserManager.php**
```php
class UserManager {
    private $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function getUserInfo($userId) {
        $user = $this->userRepository->getUserById($userId);
        if ($user) {
            return "User: {$user['name']}, Email: {$user['email']}";
        } else {
            return "User not found";
        }
    }
}
```

Now, let's write tests for the `UserManager` class using stubs and mocks.

**UserManagerTest.php**
```php
use PHPUnit\Framework\TestCase;

class UserManagerTest extends TestCase {
    public function testGetUserInfoWithExistingUser() {
        // Create a stub for UserRepository
        $userRepositoryStub = $this->createStub(UserRepository::class);
        $userRepositoryStub->method('getUserById')
            ->willReturn(['name' => 'John', 'email' => 'john@example.com']);

        // Create the UserManager instance with the stub
        $userManager = new UserManager($userRepositoryStub);

        // Test the getUserInfo method
        $result = $userManager->getUserInfo(123);
        $this->assertEquals("User: John, Email: john@example.com", $result);
    }

    public function testGetUserInfoWithNonExistingUser() {
        // Create a mock for UserRepository
        $userRepositoryMock = $this->createMock(UserRepository::class);
        $userRepositoryMock->method('getUserById')
            ->willReturn(null);

        // Create the UserManager instance with the mock
        $userManager = new UserManager($userRepositoryMock);

        // Test the getUserInfo method
        $result = $userManager->getUserInfo(456);
        $this->assertEquals("User not found", $result);
    }
}
```

In the first test (`testGetUserInfoWithExistingUser`), we use a stub of `UserRepository` to simulate the behavior of fetching a user from the database. The stub's method is configured to return predefined user data. This allows us to test the `getUserInfo` method of `UserManager` without worrying about the actual database interaction.

In the second test (`testGetUserInfoWithNonExistingUser`), we use a mock of `UserRepository` to simulate the behavior of fetching a user who doesn't exist. We set expectations on the mock to ensure that the method is called with the expected arguments.

By using stubs and mocks, we can isolate the behavior of the `UserManager` class and focus on testing its logic without worrying about the actual database or external dependencies.


In PHPUnit, you can use the `willReturn` method to specify the return value for a mocked method without setting up an expectation for it. This is useful when you have methods that are called indirectly and you want to control their return values.

Let's say you have a `Math` class with a method `multiply` and a `Calculator` class with a method `add`. The `add` method uses the `multiply` method to perform a calculation. You want to test the `add` method's behavior while controlling the return value of the `multiply` method.

Here's an example:

```php
use PHPUnit\Framework\TestCase;

class Math {
    public function multiply($a, $b) {
        // Real multiplication logic
    }
}

class Calculator {
    private $math;

    public function __construct(Math $math) {
        $this->math = $math;
    }

    public function add($a, $b) {
        $multiplied = $this->math->multiply($a, $b);
        return $a + $b + $multiplied;
    }
}

class CalculatorTest extends TestCase {
    public function testAdd() {
        // Create a mock for the Math class
        $mathMock = $this->createMock(Math::class);

        // Use willReturn to control the return value of multiply
        $mathMock->method('multiply')
                 ->willReturn(10); // Return 10 for any input to Math::multiply

        // Create an instance of Calculator with the mock Math
        $calculator = new Calculator($mathMock);

        // Test the add method
        $result = $calculator->add(2, 3);
        $this->assertEquals(15, $result);
    }
}
```

In this example, we're using the `willReturn` method to set the return value of the `multiply` method on the `$mathMock` object. This means that whenever the `multiply` method is called on the mocked `Math` object, it will return `10` regardless of the input values.

This allows you to test the `add` method's behavior without relying on the real implementation of the `multiply` method. The focus here is on isolating the behavior of the `add` method and controlling the return value of its dependencies.

Let's say you have a class `Calculator` with a method `add` that you want to test. The `add` method internally uses another method `multiply` from a collaborator class `Math`. You want to mock the `multiply` method and make sure it's called once during the test.

Here's how you can create a PHPUnit mock test to achieve this:

Assuming you have the following classes:

```php
class Math {
    public function multiply($a, $b) {
        return $a * $b;
    }
}

class Calculator {
    private $math;

    public function __construct(Math $math) {
        $this->math = $math;
    }

    public function add($a, $b) {
        $multiplied = $this->math->multiply($a, $b);
        return $a + $b + $multiplied;
    }
}
```

You can create a mock test like this:

```php
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
    public function testAdd() {
        // Create a mock for the Math class
        $mathMock = $this->getMockBuilder(Math::class)
                         ->getMock();

        // Set up the expectation that the multiply method will be called once
        $mathMock->expects($this->once())
                 ->method('multiply')
                 ->willReturn(10);

        // Create an instance of Calculator with the mock Math
        $calculator = new Calculator($mathMock);

        // Test the add method
        $result = $calculator->add(2, 3);
        $this->assertEquals(15, $result);
    }
}
```

In this example:

1. We create a mock for the `Math` class using `getMockBuilder`.
2. We set up an expectation using `expects($this->once())` to ensure that the `multiply` method will be called exactly once during the test.
3. We define the return value of the mocked `multiply` method using `willReturn(10)`.
4. We create an instance of `Calculator` with the mock `Math` and then test the `add` method.
5. We use `assertEquals` to verify that the result of the `add` method is as expected.

Running this test will ensure that the `multiply` method is called once as expected during the execution of the `add` method.


In PHPUnit, both `getMockBuilder` and `createMock` are used to create mock objects for testing purposes. However, they differ in their behavior and usage:

1. **`getMockBuilder`**:
   - `getMockBuilder` is a method provided by PHPUnit's TestCase class (or a subclass of it) to set up and configure a mock object.
   - It returns a mock object builder instance that you can use to customize the behavior of the mock before creating the final mock object.
   - You can set expectations, define method behaviors, and configure other mock-specific settings using the returned builder.
   - You create the mock object by calling `->getMock()` on the builder instance.
   - `getMockBuilder` is more flexible and allows you to customize the mock's behavior before creating it.

Example:
```php
$builder = $this->getMockBuilder(MyClass::class)
                ->setMethods(['methodToMock'])
                ->getMock();
```

2. **`createMock`**:
   - `createMock` is a shorter and more straightforward method that directly creates a mock object without extensive configuration.
   - It's a convenience method that creates a mock with all methods returning `null` by default. You can't set detailed expectations or specific behaviors using this method alone.
   - `createMock` is useful for creating simple mock objects quickly without needing to configure every aspect of the mock.
   
Example:
```php
$mock = $this->createMock(MyClass::class);
```

In general, you would choose between `getMockBuilder` and `createMock` based on the complexity of your testing scenario:

- If you need to set specific expectations or behaviors for certain methods, and you want more control over the mock's behavior, use `getMockBuilder`.

- If you need a quick mock with minimal setup for methods that you don't plan to interact with in your test, use `createMock`.

Both methods serve a purpose, and you can use them based on the requirements of your test cases.

```php
class Math {
    public function multiply($a, $b) {
        return $a * $b;
    }
}

class Calculator {
    private $math;

    public function __construct(Math $math) {
        $this->math = $math;
    }

    public function add($a, $b) {
        $multiplied = $this->math->multiply($a, $b);
        return $a + $b + $multiplied;
    }
}
```

Here's how you can create a test using the `createMock` method:

```php
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
    public function testAdd() {
        // Create a mock for the Math class
        $mathMock = $this->createMock(Math::class);

        // Set up the expectation that the multiply method will be called once
        $mathMock->expects($this->once())
                 ->method('multiply')
                 ->willReturn(10);

        // Create an instance of Calculator with the mock Math
        $calculator = new Calculator($mathMock);

        // Test the add method
        $result = $calculator->add(2, 3);
        $this->assertEquals(15, $result);
    }
}
```

In this example, we use the `createMock` method to quickly create a mock object for the `Math` class. We then proceed to set up the expectation for the `multiply` method just like in the previous example using `getMockBuilder`.

The rest of the test remains the same, and we're still verifying that the `add` method works as expected.

The primary difference is that `createMock` provides a more concise way to create simple mock objects without needing to set method behaviors extensively.
