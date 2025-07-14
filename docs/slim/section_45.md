---
title: Lesson 2.9 - Inheritance
description: Slim notes.
order: 45
---

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (subclass or derived class) to inherit properties and behaviors (methods and attributes) from an existing class (superclass or base class). Inheritance promotes code reuse and supports the "is-a" relationship between classes.

Inheritance is used to create a hierarchy of classes where the subclass inherits the characteristics of the superclass. This allows you to define common behaviors and attributes in the superclass and then specialize or extend them in the subclasses. The subclass can add new methods or override existing methods from the superclass.

Key points about inheritance:

1. **Superclass (Base Class):**
   The class whose properties and behaviors are inherited is called the superclass or base class. It serves as a template for the subclasses. The superclass is more general in nature and represents a higher-level concept.

2. **Subclass (Derived Class):**
   The class that inherits properties and behaviors from the superclass is called the subclass or derived class. The subclass can add new attributes and methods or override the inherited ones to provide specialized behavior. PHP does not support more than one class child.

3. **"Is-A" Relationship:**
   Inheritance represents an "is-a" relationship between the superclass and subclass. For example, if you have a `Vehicle` superclass and a `Car` subclass, you can say that "a car is a vehicle.". A pro toaster is a (Is-A) toaster.

4. **Access to Members:**
   The subclass has access to all the public and protected members (methods and attributes) of the superclass. Private members of the superclass are not directly accessible in the subclass. Only protected and public. You cannot overrides private properties and methods. You cannot decrease the visibility. A public property in the Base cannot be overrides with private in the Child.

5. **Overriding Methods:**
   Subclasses can override (replace) methods inherited from the superclass. This allows the subclass to provide its own implementation of a method while retaining the same method signature. The keyword `final` block the possibility to override the method.

6. **Method Inheritance:**
   When a subclass inherits methods from the superclass, it inherits their functionality and behavior. The subclass can extend or override these methods as needed.

7. **Constructor Chaining:**
   When creating an object of a subclass, the constructor of both the subclass and the superclass is called. This allows you to set up the object's state properly.

Here's a simple example of inheritance in PHP:

```php
class Animal {
    protected $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function speak() {
        echo "Animal sound\n";
    }
}

class Dog extends Animal {

	public function __construct($name) {
		// the parent constructor is not called by default
		// pay attention to inputs there
		parent::__construct($name);
		$this->name = $name;
	}
	
	// overrides the method because of the same signature
    public function speak() {
        echo $this->name." says Woof!\n";
    }
}

$dog = new Dog("Buddy");
echo $dog->speak(); 
```

In this example, `Dog` is a subclass of `Animal`. The `Dog` class inherits the constructor and the `speak` method from the `Animal` class. The `speak` method is overridden in the `Dog` class to provide specialized behavior.


Whether to use inheritance or not depends on the design goals and the relationship between classes in your object-oriented programming (OOP) application. While inheritance can be a powerful tool for code reuse and modeling real-world relationships, it's important to consider its pros and cons in your specific context. Here are some considerations to help you decide when to use inheritance and when to avoid it:

**When to Use Inheritance:**

1. **Commonality of Behavior:** Use inheritance when multiple classes share common behavior and attributes that can be abstracted into a superclass. If you find that multiple classes exhibit similar methods and characteristics, inheritance can help avoid code duplication.

2. **"Is-A" Relationship:** When there's a clear "is-a" relationship between a subclass and a superclass, inheritance is appropriate. If the subclass naturally fits the description of the superclass, inheritance can provide a natural and logical structure. 

3. **Code Reusability:** Inheritance promotes code reuse by allowing you to define common behavior in a superclass and extend or specialize it in subclasses. This can save you from duplicating code across multiple classes.

4. **Framework and Library Design:** Inheritance can be useful when designing frameworks or libraries. You can provide a base class with common methods and allow users to create specialized subclasses that extend and adapt the provided functionality.

**When Not to Use Inheritance:**

1. **Inappropriate "Is-A" Relationship:** If the subclass doesn't naturally fit the description of the superclass in terms of behavior and attributes, inheritance might not be the right choice. Don't force an "is-a" relationship where it doesn't make sense.

2. **Tight Coupling:** Overuse of inheritance can lead to tight coupling between classes. Changes in the superclass might affect all subclasses, potentially causing unintended consequences.

3. **Inflexible Hierarchies:** If you foresee a need for dynamic changes to the behavior or structure of classes, a rigid inheritance hierarchy might not be the best approach. It can limit your ability to adapt to changing requirements.

4. **Complexity:** Overly complex inheritance hierarchies can make your code difficult to understand, maintain, and extend. Strive for a balance between abstraction and simplicity.

5. **Code Duplication:** While inheritance can help reduce code duplication, it's not the only way. Sometimes, composition (using objects as components) or interfaces (defining contracts for behavior) can provide cleaner solutions.

6. **Lack of Polymorphism:** If subclasses tend to override most methods of the superclass, it might indicate that you're not benefiting from the polymorphism that inheritance provides. In such cases, consider alternative design patterns.

In many cases, a combination of inheritance, composition, and interfaces can provide a more flexible and maintainable codebase. Ultimately, the decision to use inheritance should be based on careful consideration of the relationship between classes and the overall design goals of your application.
