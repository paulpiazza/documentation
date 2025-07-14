---
title: Lesson P.9 - Request Validation - Factory Design Pattern
description: Slim notes.
order: 113
---

See [P9-End](https://github.com/paulpiazza/gio-formation-expennies/commits/P9_End)

Create a validator for creating a user.
Use DTO.
Use requestValidatorFactory

bookmark 
#### factory pattern

The Factory Pattern is a creational design pattern in software engineering that provides an interface for creating objects in a super class but allows subclasses to alter the type of objects that will be created. It promotes loose coupling by ensuring that the code creating objects does not need to know the specific class of object being created.

The Factory Pattern involves creating an abstract factory interface (or class) that defines methods for creating objects. Concrete implementations of this factory interface produce instances of the desired classes.

There are two main types of Factory Pattern:

1. **Simple Factory Pattern**:
   This is not a true design pattern, but a way of creating objects without exposing the creation logic. It involves using a single factory class to create various types of objects based on a parameter provided to the factory method.

2. **Factory Method Pattern**:
   This is the formal Factory Pattern. It defines an interface for creating objects but delegates the responsibility of instantiation to its subclasses. Each subclass can implement the factory method to create instances of different classes.

**Advantages of Factory Pattern**:
- Encapsulation: It hides the details of object creation from the client code, promoting encapsulation.
- Loose Coupling: Clients only interact with the factory interface, making the code more loosely coupled.
- Scalability: Adding new classes or variations of objects is easier as it only requires implementing new factory methods.

**Example - Factory Method Pattern**:

Suppose you are building a game that involves different types of characters: warriors, mages, and archers.

```php
// Abstract factory interface
interface CharacterFactory {
    public function createCharacter();
}

// Concrete factory classes
class WarriorFactory implements CharacterFactory {
    public function createCharacter() {
        return new Warrior();
    }
}

class MageFactory implements CharacterFactory {
    public function createCharacter() {
        return new Mage();
    }
}

class ArcherFactory implements CharacterFactory {
    public function createCharacter() {
        return new Archer();
    }
}

// Product classes
interface Character {
    public function attack();
}

class Warrior implements Character {
    public function attack() {
        echo "Warrior attacks!\n";
    }
}

class Mage implements Character {
    public function attack() {
        echo "Mage casts a spell!\n";
    }
}

class Archer implements Character {
    public function attack() {
        echo "Archer shoots an arrow!\n";
    }
}

// Client code
function createAndAttack(CharacterFactory $factory) {
    $character = $factory->createCharacter();
    $character->attack();
}

createAndAttack(new WarriorFactory()); // Warrior attacks!
createAndAttack(new MageFactory());    // Mage casts a spell!
createAndAttack(new ArcherFactory());  // Archer shoots an arrow!
```

In this example, the factory methods (`createCharacter()`) are implemented by the concrete factories (`WarriorFactory`, `MageFactory`, `ArcherFactory`). The client code (`createAndAttack()`) uses the factory interface to create and interact with different types of characters without knowing their specific implementations.

The Factory Pattern helps manage object creation, encapsulates the object creation logic, and makes the code more flexible and maintainable.

Grafikart
Creating a Factory Design Pattern with instance methods in a static context is not a standard practice and might lead to confusion and less maintainable code. The Factory Pattern is usually used to create instances of different classes based on a common interface, and using instance methods within a static context could result in unexpected behavior and make the code harder to understand.

However, if you still want to explore this approach, here's a basic example:

```php
interface Product {
    public function getName();
}

class ProductA implements Product {
    public function getName() {
        return "Product A";
    }
}

class ProductB implements Product {
    public function getName() {
        return "Product B";
    }
}

class ProductFactory {
    private static $instance;

    private function __construct() {}

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function createProduct($type) {
        switch ($type) {
            case 'A':
                return new ProductA();
            case 'B':
                return new ProductB();
            default:
                throw new Exception("Invalid product type");
        }
    }
}

// Usage
$factory = ProductFactory::getInstance();
$productA = $factory->createProduct('A');
$productB = $factory->createProduct('B');

echo $productA->getName(); // Output: Product A
echo $productB->getName(); // Output: Product B
```

In this example, the `ProductFactory` class contains a private instance and a static method `getInstance()` to create or return the existing instance. The instance method `createProduct()` is used to create different products.

However, it's important to consider that this approach may lead to confusion, as it mixes static and instance methods in a way that's not typical for the Factory Pattern. Using either a static Factory Method or an instance Factory object is a more conventional and understandable way to implement the Factory Design Pattern.