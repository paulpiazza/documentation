---
title: Lesson 3.12 - Composition vs Inheritance
description: Slim notes.
order: 83
---

> [!Todo]

Inheritance and composition are both fundamental concepts in object-oriented programming (OOP), and they represent different ways to achieve code reuse and create relationships between classes. While inheritance can be powerful, it also has its drawbacks. Composition provides an alternative approach that can address some of these drawbacks. Let's explore both concepts and their pros and cons:

**Inheritance**: 

Inheritance is a mechanism where a class (subclass or derived class) inherits the properties and behaviors of another class (superclass or base class). This allows you to create a hierarchy of classes with shared characteristics.

**Pros of Inheritance**:
- Code Reuse: Inheritance allows you to reuse code from a superclass in subclasses, reducing duplication.
- Polymorphism: Subclasses can be treated as instances of their superclass, allowing for polymorphic behavior.

**Cons of Inheritance**:
- Tight Coupling: Subclasses are tightly coupled to their superclass, making changes in the superclass affect all subclasses.
- Fragile Base Class Problem: Modifications to the superclass can unintentionally break subclasses.
- Limited Reusability: Subclasses may inherit unnecessary or irrelevant methods and attributes from the superclass.

**Composition**:

Composition involves building complex objects by combining simpler objects. Instead of relying on an "is-a" relationship as in inheritance, composition uses a "has-a" relationship.

**Pros of Composition**:
- Loose Coupling: Components can be developed and tested independently, leading to less coupling between classes.
- Flexibility: Components can be easily replaced or upgraded without affecting the entire system.
- Better Encapsulation: Each component can have its own well-defined responsibilities, improving encapsulation.
- Greater Reusability: Components can be reused in various contexts, leading to better modularity.

**Cons of Composition**:
- May Require More Boilerplate: Composition can sometimes lead to more code for managing interactions between components.

**Example - Inheritance**:

```php
class Vehicle {
    protected $wheels;
    protected $color;
}

class Car extends Vehicle {
    public function startEngine() {
        // ...
    }
}
```

Here, `Car` inherits properties and behaviors from `Vehicle`.

**Example - Composition**:

```php
class Engine {
    public function start() {
        // ...
    }
}

class Car {
    private $engine;

    public function __construct() {
        $this->engine = new Engine();
    }

    public function startEngine() {
        $this->engine->start();
    }
}
```

In this example, `Car` composes an `Engine` object to achieve the same behavior.

Composition is often favored over inheritance because it promotes a more flexible and maintainable codebase. While inheritance can be suitable for certain scenarios, it's important to carefully consider its drawbacks and explore composition as an alternative. Composition allows for better encapsulation, loose coupling, and more modular code, making it a preferred choice in many situations.
