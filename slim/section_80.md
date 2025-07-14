---
title: Lesson 3.9 - Covariance & Contravariance
description: Slim notes.
order: 80
---

Covariance and contravariance are concepts related to type compatibility in programming languages, particularly in the context of subtyping and function parameter/return types. These concepts are important in languages that support polymorphism and type hierarchies, like object-oriented languages.

1. **Covariance**:

   Covariance refers to the relationship between types in which a more derived (more specific) type is considered compatible with its base (less specific) type. In other words, covariance preserves the direction of the type hierarchy. It means you can use a subtype where a supertype is expected.

   In terms of function parameter/return types, covariance applies to function return types. If a function returns a subtype of the expected type, it's considered covariant. This is often referred to as the "output" type of the function.

2. **Contravariance**:

   Contravariance is the opposite of covariance. It refers to the relationship between types in which a more derived (more specific) type is considered compatible with its base (less specific) type. Contravariance reverses the direction of the type hierarchy. It means you can use a supertype where a subtype is expected.

   In terms of function parameter/return types, contravariance applies to function parameter types. If a function parameter accepts a supertype of the expected type, it's considered contravariant. This is often referred to as the "input" type of the function.

To illustrate these concepts, consider the following example using a programming language with covariant and contravariant type support:

```php
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

// Covariance: Function returns a subtype (Dog) where a supertype (Animal) is expected
function getCovariantAnimal(): Animal {
    return new Dog();
}

// Contravariance: Function accepts a supertype (Animal) where a subtype (Dog) is expected
function useContravariantAnimal(Dog $dog): void {
    // ...
}

$animal = getCovariantAnimal(); // Covariant
useContravariantAnimal(new Animal()); // Contravariant
```

Note that the concept of covariance and contravariance might behave differently in various programming languages based on their type systems and type hierarchies. These concepts are more commonly encountered in statically typed languages, like C#, Java, and TypeScript.

In PHP, the concept of covariance and contravariance is less pronounced due to its dynamic typing and weakly typed nature, but similar principles can be applied when dealing with objects and function signatures.

See [Covariance and Contravariance](https://www.php.net/manual/en/language.oop5.variance.php)


[00:00](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=0s) - Covariant & Contravariant Types

Covariance and contravariance are concepts related to the typing of function parameters and return values in programming languages. These concepts deal with how the type relationships are allowed between related types in the context of function signatures.

**Variance** and **invariance** are concepts related to how the type of a container (such as a data structure or function) behaves with respect to subtypes. They define whether you can use a container of one type with elements of a more specific or more general type.

* PHP allows overriding methods to return a more specific type. This is called *Return Type Covariance*
* Allows us to accept less specific parameter types. this is called *Parameter Type Contravariance*. 

Covariance = less specific to more specific
Contravariance = More specific to less specific
PHP = covariant return types and contravariant parameter types

[01:40](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=100s) - Return Type Covariance Example

Covariance relates to the direction in which the type relationships flow, specifically for function return values. In a covariant type system, you can substitute a more derived (more specific) type for a less derived (less specific) type in return values. In other words, you can return a more specialized type from a function that is declared to return a more general type.

For example, consider a hierarchy of classes where `Cat` is a subclass of `Animal`:

```php
  
abstract class Animal  
{  
	protected string $name;  
	  
	public function __construct(string $name)  
	{  
		$this->name = $name;  
	}  
	  
	abstract public function speak();  
}  
  
class Dog extends Animal  
{  
	public function speak()  
	{  
		echo $this->name . " barks";  
	}  
}  
  
class Cat extends Animal  
{  
	public function speak()  
	{  
		echo $this->name . " meows";  
	}  
}

interface AnimalShelter  
{  
	public function adopt(string $name): Animal;  
}  
  
class CatShelter implements AnimalShelter  
{  
	public function adopt(string $name): Cat // instead of returning class type Animal, it can return class type Cat  
	{  
		return new Cat($name);  
	}  
}  
  
class DogShelter implements AnimalShelter  
{  
	public function adopt(string $name): Dog // instead of returning class type Animal, it can return class type Dog  
	{  
		return new Dog($name);  
	}  
}  
  
$kitty = (new CatShelter)->adopt("Ricky");  
$kitty->speak();  
echo "\n";  
  
$doggy = (new DogShelter)->adopt("Mavrick");  
$doggy->speak();

// Ricky meows
// Mavrick barks
```

In this example, `adopt()` is declared to return an `Animal`, but it actually returns a `Cat`, which is more specific. This is allowed in a covariant type system.


[04:38](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=278s) - Parameter Type Contravariance Example

Contravariance is the opposite of covariance. It relates to the direction in which the type relationships flow, specifically for function parameters. In a contravariant type system, you can substitute a less derived (less specific) type for a more derived (more specific) type in function parameters. In other words, you can accept a more general type as an argument in a function that is declared to accept a more specific type.

Contravariance for parameters is not directly supported in PHP, and attempts to override a method with a method that accepts a parent type as a parameter will lead to a fatal error. PHP's type system is more restrictive in this regard.

Continuing with the previous example with the classes `Animal`, `Cat`, and `Dog`, a class called `Food` and `AnimalFood` will be included, and a method `eat(AnimalFood $food)` is added to the `Animal` abstract class.

```php
class Food {}  
  
class AnimalFood extends Food {}  
  
abstract class Animal {  
	protected string $name;  
  
	public function __construct(string $name) {  
		$this->name = $name;  
	}  
	  
	public function eat(AnimalFood $food) {  
		echo $this->name . " eats " . get_class($food);  
	}  
}
  
class Dog extends Animal {  
	public function eat(Food $food) {  
		echo $this->name . " eats " . get_class($food);  
	}  
}


$kitty = (new CatShelter)->adopt("Ricky");  
$catFood = new AnimalFood();  
$kitty->eat($catFood);  
echo "\n";  
  
$doggy = (new DogShelter)->adopt("Mavrick");  
$banana = new Food();  
$doggy->eat($banana);

// Ricky eats AnimalFood
// Mavrick eats Food

$kitty->eat($banana);

/*
Fatal error: Uncaught TypeError: Argument 1 passed to Animal::eat() must be an instance of AnimalFood, instance of Food given
*/

```

In order to see the behavior of contravariance, the eat method is overridden in the Dog class to allow any Food type object. The Cat class remains unchanged.

It's important to note that not all programming languages support covariance and contravariance, and their behavior may vary depending on the language and its type system. Some languages, like Python, have limited support for these concepts, while others, like C# and Java, provide more comprehensive support through features like generics or wildcards. The exact rules and behavior may differ from one language to another.

[06:39](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=399s) - Testing Covariance & Contravariance In PHP 7.3

It would fail.

[08:06](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=486s) - Covariant Parameter & Contravariant Return Type Support?

Covariant parameter and Contravariant parameter types are not supported in PHP.

This could introduce potential bugs in the code.

```php

// covariant

abstract class Animal {  
	public function eat(Food $food) {  
		// ...
	}  
}
  
class Dog extends Animal {  
	public function eat(AnimalFood $food) {  
		// ...
	}  
}

// contravariant

class CatShelter implements AnimalShelter  
{  
	public function adopt(string $name): Cat // <= try a more specific class 
	{ 
		// ...
	}  
}  
```

[10:16](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=616s) - Covariance & Contravariance With Union & Intersection Types

When using "union types" in base class, it is covariant when you remove a type while overriding a method in the child class.

When using 'intersection types' in base class, it is covariant when you add a type while overriding a method in a child class.

[11:48](https://www.youtube.com/watch?v=AgSrOI7N-fU&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=77&t=708s) - Liskov Substitution Principle (LSP)

The Liskov Substitution Principle (LSP) is one of the five SOLID principles of object-oriented programming and design. It is named after Barbara Liskov, a computer scientist who introduced this principle in a 1987 paper titled "A Behavioral Notion of Subtyping." The Liskov Substitution Principle is a guideline that helps ensure the correct and consistent behavior of subclasses (derived classes) when they are used in place of their parent classes (base classes) without causing unexpected issues.

The LSP can be formally stated as follows:

**"Subtypes must be substitutable for their base types without altering the correctness of the program."**

In simpler terms, this principle asserts that objects of derived classes should be able to replace objects of their base classes without affecting the correctness of the program. In other words, you should be able to use a subclass wherever you use its superclass, and the program should still behave correctly.

Key principles and implications of the Liskov Substitution Principle:

1. **Behavioral Compatibility**: Derived classes should extend or specialize the behavior of the base class, not contradict it. This means that a subclass should maintain or enhance the expected behavior of its superclass. An object and a sub-object or a Class and a sub-class must be interchangeable without breaking the code.

2. **Preconditions and Postconditions**: Derived classes should not weaken the preconditions (requirements) of the methods defined in the base class, and they should not strengthen the postconditions (guarantees) of those methods. In other words, the derived class should not impose stricter constraints on input parameters or promise more than the base class.

3. **Inheritance Hierarchy**: The inheritance hierarchy should reflect an "is-a" relationship. If a subclass does not satisfy the Liskov Substitution Principle, it may indicate that the inheritance hierarchy is not well-designed, and composition or another approach might be more appropriate.

4. **Override with Care**: When overriding methods from the base class in a derived class, ensure that the overridden methods adhere to the same contract as the base class methods. In other words, the overridden methods should respect the expectations set by the base class.

5. **Interface Adherence**: In languages that support interfaces or abstract classes, derived classes should adhere to the same interface as the base class, fulfilling the contract defined by the base class.

6. **Testing and Validation**: Subclasses should be thoroughly tested to ensure that they meet the requirements of the Liskov Substitution Principle. This includes testing that objects of the derived class can seamlessly replace objects of the base class without causing unexpected behavior.

Adhering to the Liskov Substitution Principle promotes software design that is more robust, maintainable, and flexible. It helps prevent unexpected bugs and runtime errors that can occur when subclasses deviate from the behavior expected by clients of the base class.
