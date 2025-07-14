---
title: Lesson 3.3 - Dependency Injection & DI Containers
description: Slim notes.
order: 73
---

> [!todo]

Dependency Injection (DI) is a design pattern used in software engineering, including in PHP, to achieve the separation of concerns, improve modularity, and enhance testability and maintainability of code. It's a fundamental concept in object-oriented programming and is often associated with the principles of Inversion of Control (IoC).

In the context of PHP, Dependency Injection involves passing dependencies (such as objects or values that a class needs to perform its tasks) from the outside rather than creating them within the class itself. This allows for more flexible and reusable code, as well as easier testing and maintenance.

The key idea behind Dependency Injection is to reduce the coupling between classes by ensuring that a class doesn't directly create or obtain its dependencies, but receives them from the outside. This is typically achieved through constructor injection, method injection, or property injection.

```php
class Logger {
    public function log($message) {
        // Log the message
    }
}

class UserManager {
    private $logger;

    public function __construct(Logger $logger) {
        $this->logger = $logger;
    }

    public function createUser($userData) {
        // Create user logic
        $this->logger->log('User created');
    }
}

// Usage
$logger = new Logger();
$userManager = new UserManager($logger);
$userManager->createUser($userData);
```

In this example, the `UserManager` class depends on the `Logger` class for logging purposes. Instead of creating a `Logger` instance within the `UserManager` class, we inject it via the constructor. This allows us to switch or modify the behavior of the `Logger` without modifying the `UserManager` class. It also makes testing easier, as we can easily replace the `Logger` with a mock object during testing.

Dependency Injection helps to achieve the principles of Single Responsibility (each class should have a single responsibility) and Open-Closed (classes should be open for extension but closed for modification) from SOLID principles.

Frameworks like Symfony, Laravel, and others have built-in mechanisms for handling Dependency Injection, making it easier to manage and configure dependencies in larger applications.