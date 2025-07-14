---
title: Lesson 2.7 - Static Properties & Methods
description: Slim notes.
order: 43
---

In object-oriented programming (OOP) with PHP, static properties and methods belong to the class itself rather than to instances (objects) of the class. 

This means that they are shared among all instances of the class and can be accessed without creating an object. 

Static properties and methods are defined using the `static` keyword. 

1. **Static Properties:**
   Static properties are shared among all instances of the class. They are defined using the `static` keyword within the class definition.

```php
class MyClass {
    public static $staticProperty = "This is a static property.";

    public function printStaticProperty() {
        echo self::$staticProperty; // Accessing static property using self:: or MyClass::
    }
}

$instance1 = new MyClass();
$instance2 = new MyClass();

echo $instance1::$staticProperty; // Accessing static property through an instance
echo MyClass::$staticProperty;    // Accessing static property directly from the class

$instance1->printStaticProperty(); // Output: This is a static property.
$instance2->printStaticProperty(); // Output: This is a static property.
```

2. **Static Methods:**
   Static methods are defined using the `static` keyword in the method declaration. They can be called without creating an instance of the class.

```php
class MathHelper {
    public static function add($a, $b) {
        return $a + $b;
    }
}

$result = MathHelper::add(5, 3); // Calling a static method
echo $result; // Output: 8
```

Static methods and properties are often used for utility functions or constants that are shared across all instances of a class, or when you need to perform operations that don't require object-specific data.

Keep in mind that while static properties and methods can be useful, they can also lead to tight coupling and make your code less testable and maintainable. It's a good practice to use them judiciously and only when they make sense for the specific use case:

1. Memoization
You will cache values for a better use in the future. The principle is the counter. You can cache high cost operations like a recursive function (Fibonacci). See Memoization for better understanding.

```php
class MyClass {
	public static $counter = 0;
	public function __construct(): void {
		self::$counter++;
	}
}

echo MyClass::$counter;
```

2. utility methods
Keep methods that you don't need really to have a specialized class. For example, formatter class for currency, date, etc.. It doesn't really depend on the object.

3. Singleton pattern
The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

```php
class Singleton {
    private static $instance = null;

    // Private constructor to prevent direct instantiation
    private function __construct() {
        // Initialization code goes here
    }

    // Get the instance of the Singleton class
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Other methods of the Singleton class
    public function showMessage() {
        echo "Hello from Singleton!";
    }
}

// Usage
$singleton1 = Singleton::getInstance();
$singleton2 = Singleton::getInstance();

// Both $singleton1 and $singleton2 point to the same instance
var_dump($singleton1 === $singleton2); // Output: true

$singleton1->showMessage(); // Output: Hello from Singleton!
```

In this example, the `Singleton` class has a private static variable `$instance`, which holds the single instance of the class. The constructor is marked as private to prevent external instantiation of the class. The `getInstance()` method is the only way to get an instance of the class. If no instance exists, it creates one; otherwise, it returns the existing instance.

Using a static variable for the instance ensures that the instance is shared across all calls to `getInstance()`, making sure that only one instance of the class exists throughout the application.

4. Factory design pattern
The Factory Pattern is a creational design pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. This pattern is useful when you have multiple classes that share a common interface and you want to encapsulate the object creation process.

```php
// Interface for the product
interface Vehicle {
    public function drive();
}

// Concrete product classes
class Car implements Vehicle {
    public function drive() {
        echo "Driving a car...\n";
    }
}

class Truck implements Vehicle {
    public function drive() {
        echo "Driving a truck...\n";
    }
}

// Factory class
class VehicleFactory {
    public static function createVehicle($type) {
        switch ($type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            default:
                throw new InvalidArgumentException("Invalid vehicle type: $type");
        }
    }
}

// Usage
$car = VehicleFactory::createVehicle('car');
$truck = VehicleFactory::createVehicle('truck');

$car->drive();   // Output: Driving a car...
$truck->drive(); // Output: Driving a truck...
```

- `Vehicle` is an interface that defines the common methods that all vehicles should have.
- `Car` and `Truck` are concrete classes that implement the `Vehicle` interface.
- `VehicleFactory` is the factory class that creates instances of `Car` and `Truck` based on the type specified.

Using the Factory Pattern, you can easily add new vehicle types without modifying the client code that uses the factory. This allows for a more flexible and maintainable design.

Factory Pattern is particularly useful when you have multiple classes implementing a common interface, and you want to decouple the client code from the specific implementations of those classes.

5. Static callbacks & closures
Static closures or callbacks refer to the usage of anonymous functions (closures) or regular functions as static variables in PHP. This can be useful when you want to store a piece of code that you can execute later within a static context, such as a class method or a static variable.

It also prevent others to change properties of the instance. The callback is static so it cannot access and modify a non-static instance's property. Use this method only if you want that a variable is not available and accessible in that object and function.

```php
class CallbackManager {
    private static $callback;

	private $insideVar;

    public static function setCallback($callback) {
        self::$callback = $callback;
    }

    public static function executeCallback($data) {
        if (self::$callback !== null) {
            self::$callback($data);
        } else {
            echo "No callback set.\n";
        }
    }
}

// Usage

// Define an anonymous function (closure)
$myClosure = function ($data) {
    echo "Executing callback with data: $data\n";
	// you will not be able to modify $insideVar
	$this->$insideVar // nether work! you protect your var from edition into an object.
};

// Set the closure as a static callback
CallbackManager::setCallback($myClosure);

// Execute the static callback
CallbackManager::executeCallback("Hello");

// Output: Executing callback with data: Hello
```

In this example:

- The `CallbackManager` class has a private static variable `$callback` to store a closure or callback function.
- The `setCallback` method allows you to set the callback function (closure) in the static variable.
- The `executeCallback` method executes the stored callback function with the provided data.

By using static closures or callbacks, you can encapsulate behavior within a class, making it more flexible and reusable. This pattern is often used in scenarios where you want to provide a mechanism for other parts of your code to define and execute custom logic without directly modifying the class code.

Keep in mind that closures (anonymous functions) were introduced in PHP 5.3. If you're working with an older version of PHP, you might need to use traditional named functions instead.