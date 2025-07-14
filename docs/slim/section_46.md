---
title: Lesson 2.10 - Abstract Classes & Methods
description: Slim notes.
order: 46
---

Abstract classes and methods are fundamental concepts in object-oriented programming that provide a way to create a blueprint for other classes and enforce certain behaviors or structures. In PHP, abstract classes and methods are used to define common functionality and ensure that subclasses implement specific methods.

**Abstract Classes**:
An abstract class is a class that cannot be instantiated on its own. It serves as a base class for other classes to extend. Abstract classes can contain a mix of regular methods and abstract methods. Abstract methods are declared without a body in the abstract class and must be implemented by any concrete subclass.

```php
abstract class Shape {
	// only the definition
	// no implementation of the method
	// must be implemented in the child class
	// it's just like a template that all child classes must implement
    abstract public function calculateArea();
}

class Circle extends Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return 3.14 * $this->radius * $this->radius;
    }
}
```

In this example, `Shape` is an abstract class with an abstract method `calculateArea()`. The `Circle` class extends `Shape` and provides an implementation for the `calculateArea()` method.

**Abstract Methods**:
An abstract method is a method declared in an abstract class without providing an implementation. Subclasses that extend the abstract class must provide an implementation for the abstract methods. This enforces a specific behavior in all subclasses.

```php
abstract class Animal {
    abstract public function makeSound();
}

class Dog extends Animal {
    public function makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    public function makeSound() {
        return "Meow!";
    }
}
```

In this example, `Animal` is an abstract class with an abstract method `makeSound()`. The `Dog` and `Cat` classes extend `Animal` and provide their own implementations of `makeSound()`.

Abstract classes and methods are useful for creating a consistent structure across multiple classes, ensuring that certain methods are always present and providing a clear hierarchy of classes. They help promote code reusability and maintainability in larger projects.