---
title: Lesson 2.11 - Interfaces & Polymorphism
description: Slim notes.
order: 47
---

Interfaces and polymorphism are fundamental concepts in object-oriented programming (OOP) that facilitate code flexibility, reusability, and design. Let's delve into interfaces and polymorphism, focusing on interfaces.

**Interfaces:**

An interface in OOP defines a contract for classes that implement it. It defines a set of methods that the implementing classes must provide, without specifying how those methods are implemented. Interfaces are used to achieve abstraction and ensure that classes adhere to a specific contract or behavior.

Here's how interfaces work:

1. **Declaration:**
   An interface is declared using the `interface` keyword in most programming languages, including PHP.

2. **Method Signatures:**
   Interfaces only contain method signatures (method names, parameters, and return types) without any implementation details. These method signatures define the contract that implementing classes must fulfill. Must be public.

3. **Implementation:**
   Classes that implement an interface must provide concrete implementations for all the methods declared in the interface.

4. **Implements Keyword:**
   In PHP and many other languages, a class can declare that it implements an interface using the `implements` keyword.

Here's a simple example of an interface in PHP:

```php
interface Shape {
    public function calculateArea();
}

class Circle implements Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * $this->radius * $this->radius;
    }
}

class Rectangle implements Shape {
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

In this example, `Shape` is an interface with a single method signature `calculateArea()`. Both `Circle` and `Rectangle` classes implement the `Shape` interface by providing their own implementations of the `calculateArea()` method.

**Polymorphism:**

Polymorphism is the ability of different classes to be treated as instances of a common superclass or interface. This allows you to write code that works with a variety of objects without knowing their specific types.

In the context of interfaces, polymorphism allows you to use objects of different classes that implement the same interface interchangeably. You can call methods defined in the interface on objects of those classes, knowing that they all provide the expected behavior.

Here's an example of how polymorphism works with interfaces:

```php
function printArea(Shape $shape) {
    echo "Area: " . $shape->calculateArea() . "\n";
}

$circle = new Circle(5);
$rectangle = new Rectangle(3, 4);

printArea($circle);     // Output: Area: 78.539816339745
printArea($rectangle);  // Output: Area: 12
```

In this example, the `printArea()` function takes an object of type `Shape`. Both `Circle` and `Rectangle` objects are passed to the function because they implement the `Shape` interface. The function can call `calculateArea()` on both objects without knowing their specific types, demonstrating polymorphism.

Interfaces play a key role in achieving polymorphism in OOP, allowing you to write more flexible and reusable code.