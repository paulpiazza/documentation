---
title: Lesson 2.8 - OOP Principles - Encapsulation & Abstraction
description: Slim notes.
order: 44
---

Encapsulation hides internal state.
Abstraction hides the internal implementation.

1. **Encapsulation:**
   Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit, called a class. It also involves restricting direct access to the internal data of an object and controlling how it is modified and used. Encapsulation provides a level of data protection and allows you to hide the implementation details of a class from external entities.

   Key points of encapsulation:
   - **Access Control:** Using visibility modifiers (public, private, protected), you can control which parts of a class are accessible from outside code.
   - **Data Integrity:** By encapsulating data and providing controlled methods for accessing and modifying it, you can ensure data integrity and maintain consistency.
   - **Code Organization:** Encapsulation helps in organizing code by grouping related data and behavior within a single entity (class).

2. **Abstraction:**
   Abstraction is the process of simplifying complex reality by modeling classes based on their essential properties and behavior. It involves focusing on what an object does rather than how it does it. Abstraction allows you to create a high-level model that hides the low-level implementation details, making the code more understandable and manageable.

   Key points of abstraction:
   - **Defining Interfaces:** Abstraction is often achieved by defining interfaces (abstract classes or interfaces in PHP) that declare a set of methods without providing the implementation.
   - **Reducing Complexity:** Abstracting away unnecessary details and focusing on essential features helps reduce the complexity of code.
   - **Code Reusability:** Abstraction promotes code reusability since you can create multiple classes that implement the same interface, providing consistent behavior.

Here's a simple example to illustrate both principles:

```php
// Encapsulation Example

class BankAccount {
    private $balance;

    public function __construct($initialBalance) {
        $this->balance = $initialBalance;
    }

    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

	// use getter with formatter
	
    public function getBalance() {
        return $this->balance;
    }

	// no setter !!!
}

// Abstraction Example

abstract class Shape {
    abstract public function calculateArea();
}

class Circle extends Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * $this->radius * $this->radius;
    }
}

class Rectangle extends Shape {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function calculateArea() {
        return $this->width * $this->height;
    }
}
```

In this example:
- `BankAccount` demonstrates encapsulation by hiding the `balance` attribute and providing controlled methods (`deposit` and `getBalance`) for interacting with it.
- `Shape` and its subclasses (`Circle` and `Rectangle`) illustrate abstraction by defining an abstract base class with a common interface (`calculateArea`). Subclasses provide their specific implementations.

Encapsulation and abstraction work together to create well-structured, modular, and maintainable code, leading to better code organization, reduced complexity, and improved reusability.


Getters and setters, also known as accessor and mutator methods, are used to control access to the private attributes (fields) of a class in object-oriented programming. They allow you to enforce encapsulation by providing a controlled interface for interacting with the internal state of an object. While not always necessary, there are cases where getters and setters are appropriate:

1. **Encapsulation and Data Hiding:** If you want to encapsulate your class's attributes and hide the details of how they are stored, you can use getters and setters to provide controlled access to those attributes. This allows you to modify the implementation of an attribute without affecting the external code using the class.

2. **Validation and Control:** Getters and setters can be used to enforce validation rules on attribute values before they are set. For example, if an attribute should always be within a specific range, you can perform validation in the setter method and prevent invalid values from being assigned.

3. **Computed Properties:** Sometimes, you might want to calculate and return values based on the existing attributes of the class. Getters can be used to create computed properties without exposing the internal attributes.

4. **Logging and Monitoring:** Getters and setters can provide hooks for logging or monitoring attribute changes. You can add logging code to setters to track when and how attributes are modified.

5. **Flexibility for Future Changes:** Using getters and setters provides a level of abstraction that can make it easier to change the internal implementation of a class without affecting the external code that uses it. For example, you can later change an attribute from a simple value to a more complex object without changing the external interface.

6. **Interface Consistency:** In some cases, using getters and setters helps maintain a consistent interface across classes in your project. This can make it easier for other developers to understand and work with your code.

7. **Public API Design:** When designing a library or API that is meant to be used by other developers, getters and setters can help you define a clear and controlled way for users to interact with your classes.

However, it's important to note that ***not all attributes*** require getters and setters. If an attribute is a simple piece of data with no special logic or validation, you might expose it directly as a public property, especially in languages like PHP. Overusing getters and setters can lead to unnecessary complexity and reduced code readability. It cancels the encapsulation.


**Way to access to private property**

You can use the Reflection API in PHP to access and edit private properties of a class. 

Reflection is a powerful feature that allows you to inspect the structure of classes, methods, properties, and other elements of your code at runtime. However, keep in mind that accessing private properties using Reflection goes against the principles of encapsulation, and it's generally not recommended for regular application code. It's more commonly used for debugging, testing, or specialized scenarios.

```php
class MyClass {
    private $privateProperty = "This is a private property.";
}

$object = new MyClass();

$reflectionClass = new ReflectionClass($object);
$reflectionProperty = $reflectionClass->getProperty('privateProperty');

// Set the property as accessible
$reflectionProperty->setAccessible(true); 
$propertyValue = $reflectionProperty->getValue($object);

echo $propertyValue; // Output: This is a private property.

```

In this example, the Reflection API is used to get access to the private property `privateProperty` of the `MyClass` instance. The `setAccessible(true)` method is called to override the access modifier and make the property accessible. Then, the `getValue($object)` method retrieves the value of the private property.

It's important to note that using Reflection to access private properties is a deviation from standard object-oriented programming practices and can lead to unintended consequences, including breaking encapsulation and compromising the design of your classes. It's recommended to avoid using Reflection for accessing private properties in regular application code and instead rely on public methods and proper encapsulation for interacting with class internals.

You can access to private property of an instance if you are in the same object.

```php

class Transaction
{
    public function __construct(
        private int $amount = 0,
    ) {}

    public function addAmount(Transaction $transaction): int {
        //it is possible to have access to private property into the same class
        return $transaction->amount + $this->amount;
    }
}

$transaction1 = new Transaction(100);
$transaction2 = new Transaction(100);

echo $transaction1->addAmount($transaction2);
// display 200

```


**Abstraction pros**

Abstraction is a fundamental concept in object-oriented programming that involves simplifying complex reality by modeling classes based on their essential properties and behavior. Abstraction allows you to focus on what an object does rather than how it does it. Here are some scenarios where abstraction is appropriate and beneficial:

1. **Creating Hierarchies and Generalization:**
   Abstraction is often used to create class hierarchies where base classes represent more general concepts, and subclasses represent more specific variations. This allows you to define common behavior in the base class and specialize it in the subclasses. For example, a `Shape` base class with subclasses like `Circle`, `Rectangle`, and `Triangle` illustrates abstraction by focusing on the common "calculate area" behavior.

2. **Modeling Real-World Concepts:**
   Abstraction is useful when you want to model real-world entities, their attributes, and behaviors in your code. For example, you can model a `Vehicle` base class with subclasses like `Car`, `Truck`, and `Motorcycle` to abstract away vehicle-related concepts.

3. **Defining Interfaces:**
   Abstraction involves defining interfaces that declare a set of methods without providing the implementation. Interfaces provide a contract that classes must adhere to, allowing for consistent behavior across multiple classes. This is useful when you want to ensure a certain set of methods are present in different classes.

4. **Reducing Complexity:**
   Abstraction helps reduce complexity by focusing on high-level behavior and ignoring implementation details. By abstracting away unnecessary details, you can create a clearer and more understandable model of your system.

5. **Code Reusability:**
   Abstraction promotes code reusability. You can create multiple classes that implement the same interface or extend the same base class, which facilitates consistent behavior and reduces redundant code.

6. **Separating Concerns:**
   Abstraction allows you to separate concerns in your code by dividing it into different levels of abstraction. You can have high-level classes that deal with overall behavior and low-level classes that handle specific implementation details.

7. **Supporting Future Changes:**
   Using abstraction makes it easier to change the internal implementation of a class without affecting the external code using it. For instance, you can change the storage mechanism of a data class without altering the code that interacts with it.

It's important to use abstraction judiciously. While abstraction provides benefits like modularity and code reusability, over-abstracting can lead to unnecessary complexity. You should focus on creating abstractions that align with the real-world entities you're modeling and provide a balance between high-level behavior and necessary details.