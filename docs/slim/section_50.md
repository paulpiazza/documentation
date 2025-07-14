---
title: Lesson 2.14 - Traits
description: Slim notes.
order: 50
---

[00:27](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=27s) - Multiple inheritance problem

PHP doesn't support multiple inheritance in the traditional sense, where a class directly inherits from more than one class. This means you cannot create a single class that inherits from multiple other classes. PHP uses single inheritance, where a class can inherit from only one superclass.

This is the diamond problem. All-In-One Coffee Maker Class is not possible in PHP.

![[diamond-problem.png]]


[02:02](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=122s) - Overview of coffee maker example in code

[03:08](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=188s) - Using interfaces instead of multiple inheritance

Not the best idea.

An interface defines a contract that a class must adhere to. A class can implement multiple interfaces, effectively providing a way to inherit behavior from multiple sources. This is not exactly the same as traditional multiple inheritance, but it helps achieve similar flexibility.

   ```php
   interface Flyable {
       public function fly();
   }

   interface Swimmable {
       public function swim();
   }

   class FlyingFish implements Flyable, Swimmable {
       public function fly() {
           echo "Flying...\n";
       }

       public function swim() {
           echo "Swimming...\n";
       }
   }
   ```

[05:43](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=343s) - Creating & using traits

```php


// LatteTrait.php

trait LatteTrait
{
    public function makeLatte()
    {
        echo static::class . ' is making latte' . PHP_EOL;
    }
}


// LatteMaker.php

class LatteMaker extends CoffeeMaker
{
    use LatteTrait;
}


// CappuccinoTrait.php

trait CappuccinoTrait
{
    public function makeCappuccino()
    {
        echo static::class . ' is making cappuccino' . PHP_EOL;
    }
}


// CappuccinoMaker.php

class CappuccinoMaker extends CoffeeMaker
{
    use CappuccinoTrait;
}


// AllInOneCoffeeMaker.php

class AllInOneCoffeeMaker extends CoffeeMaker
{
    use CappuccinoTrait;
    use LatteTrait;
}

// index.php
// it works!
$allInOne = new AllInOneCoffeeMaker();
$allInOne->makeCoffee();
$allInOne->makeLatte();
$allInOne->makeCappuccino();

```

[08:22](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=502s) - How do traits work?

It's just like copy the code int he trait and paste in the class with `use`. 

[08:39](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=519s) - Method precedence

Method precedence, also known as method resolution, refers to the order in which programming languages determine which method implementation to call when a method is invoked on an object that inherits from multiple classes or implements multiple interfaces. This concept is particularly relevant when dealing with multiple inheritance, traits, or interfaces.

In languages like PHP that support multiple inheritance through traits and interfaces, method precedence helps resolve potential conflicts when two or more sources provide methods with the same name. Here's how method precedence works in different scenarios:

1. **Using Traits:**
   When a class uses multiple traits that define a method with the same name, PHP uses the "last-in" rule. The method from the last trait used takes precedence.

   ```php
   trait TraitA {
       public function method() {
           echo "Method from TraitA\n";
       }
   }
   
   trait TraitB {
       public function method() {
           echo "Method from TraitB\n";
       }
   }
   
   class Example {
       use TraitA, TraitB;
   }
   
   $example = new Example();
   $example->method();  // Output: Method from TraitB (last-in rule)
   ```

2. **Using Interfaces:**
   When a class implements multiple interfaces that define a method with the same name, there is no inherent order of precedence. The class must provide its own implementation of the method, resolving the conflict.

   ```php
   interface InterfaceA {
       public function method();
   }
   
   interface InterfaceB {
       public function method();
   }
   
   class Example implements InterfaceA, InterfaceB {
       public function method() {
           echo "Method from Example class\n";
       }
   }
   
   $example = new Example();
   $example->method();  // Output: Method from Example class
   ```

3. **Using Class and Trait:**
   When a class uses a trait and also defines a method with the same name, the class's own method takes precedence.

   ```php
   trait TraitA {
       public function method() {
           echo "Method from TraitA\n";
       }
   }
   
   class Example {
       use TraitA;
       
       public function method() {
           echo "Method from Example class\n";
       }
   }
   
   $example = new Example();
   $example->method();  // Output: Method from Example class
   ```

Method precedence helps ensure that conflicts are resolved consistently, allowing for predictable behavior in your code. 


[11:02](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=662s) - Conflict resolution ("insteadof" & "as" operators)

Conflict resolution in PHP, using the `insteadof` and `as` operators, is a technique used when a class uses multiple traits that have methods with the same name. When there's a naming conflict, you need to explicitly specify which method implementation to use from the conflicting traits. The `insteadof` and `as` operators help you resolve these conflicts.

```php
trait TraitA {
    public function method() {
        echo "Method from TraitA\n";
    }
}

trait TraitB {
    public function method() {
        echo "Method from TraitB\n";
    }
}

class Example {
    use TraitA, TraitB {
        TraitA::method insteadof TraitB;  // Use method from TraitA instead of TraitB
        TraitB::method as aliasMethod;    // Rename method from TraitB to aliasMethod
    }
}

$example = new Example();
$example->method();        // Output: Method from TraitA
$example->aliasMethod();   // Output: Method from TraitB
```

In this example:

- The `Example` class uses both `TraitA` and `TraitB`.
- The `insteadof` operator is used to resolve the conflict between the `method` implementations from `TraitA` and `TraitB`. It tells PHP to use the method from `TraitA` instead of `TraitB`.
- The `as` operator is used to create an alias for the method from `TraitB` within the `Example` class. The method is renamed to `aliasMethod`, which avoids the naming conflict.

[13:38](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=818s) - Changing visibility of trait methods

In PHP, you can change the visibility of methods from traits when they are used in a class that employs the trait. This is achieved through the use of access modifiers (`public`, `protected`, or `private`) in the trait itself. The visibility of a method from a trait can be different when used in different classes, depending on how the trait is used.

Here's an example of how you can change the visibility of trait methods:

```php
trait MyTrait {
    public function publicMethod() {
        echo "Public method from trait\n";
    }

    protected function protectedMethod() {
        echo "Protected method from trait\n";
    }

    private function privateMethod() {
        echo "Private method from trait\n";
    }
}

class Example {
    use MyTrait {
        publicMethod as private;    // Change visibility of publicMethod to private
        protectedMethod as public;  // Change visibility of protectedMethod to public
        privateMethod as protected; // Change visibility of privateMethod to protected
    }
}

$example = new Example();
$example->publicMethod();     // Output: Public method from trait
$example->protectedMethod();  // Output: Protected method from trait
$example->privateMethod();    // Output: Private method from trait
```

In this example, the `MyTrait` defines methods with different access modifiers. When using the `use` statement in the `Example` class, you can change the visibility of the trait methods by specifying the desired access modifier using the `as` keyword.

However, please note that while this is possible, changing the visibility of methods from traits in this manner can make your code less intuitive and harder to understand. It's generally recommended to keep the visibility consistent between the trait and the class using the trait to maintain code clarity and readability.

[16:02](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=962s) - Composing traits from other traits

In PHP, you can compose traits from other traits, allowing you to build more complex and reusable behavior by combining smaller pieces of functionality. This is similar to how you compose classes by using traits, but with the added benefit of reusing traits themselves.


```php
trait Logging {
    public function log($message) {
        echo "Log: $message\n";
    }
}

trait Validation {
    public function validate($data) {
        echo "Validating data...\n";
    }
}

trait ComplexFeature {
    use Logging, Validation;

    public function performComplexTask($data) {
        $this->log("Starting complex task...");
        $this->validate($data);
        echo "Performing complex task...\n";
        $this->log("Complex task completed.");
    }
}

class MyClass {
    use ComplexFeature;
}

$object = new MyClass();
$object->performComplexTask("some data");
```

In this example:

- The `Logging` trait provides logging functionality.
- The `Validation` trait provides data validation functionality.
- The `ComplexFeature` trait composes both the `Logging` and `Validation` traits, combining their behaviors.
- The `MyClass` class uses the `ComplexFeature` trait, effectively inheriting the combined behavior of the composed traits.

By composing traits from other traits, you can create more modular and maintainable code by reusing smaller units of functionality. This approach promotes code reusability and organization while allowing you to build up complex behaviors through composition.

[16:46](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1006s) - Properties within traits

In PHP, traits can also include properties along with methods. Properties within traits work similarly to properties in classes, but there are some considerations and limitations to be aware of. Here's how properties within traits work:

1. **Defining Properties:**
   You can define properties within traits just like you would in a class. Properties can have different access modifiers (`public`, `protected`, or `private`), and they can store values that represent different kinds of data.

   ```php
   trait MyTrait {
       public $publicProperty = "Public property in trait";
       protected $protectedProperty = "Protected property in trait";
       private $privateProperty = "Private property in trait";
   }
   ```

2. **Using Properties:**
   The properties within traits are used in the same way as properties in classes. They are accessible from the class that uses the trait as if they were defined in the class itself.

   ```php
   class Example {
       use MyTrait;

       public function printProperties() {
           echo $this->publicProperty . "\n";
           echo $this->protectedProperty . "\n";
           echo $this->privateProperty . "\n";
       }
   }

   $example = new Example();
   $example->printProperties();
   ```

3. **Property Name Conflicts:**
   If a class that uses a trait already has a property with the same name, there will be a conflict. The class property will take precedence, and you won't be able to directly access the trait property with the same name.

   ```php
   trait MyTrait {
       public $property = "Property in trait";
   }

   class Example {
       use MyTrait;

       public $property = "Property in class"; // Conflicting property
   }

   $example = new Example();
   echo $example->property;  // Output: Property in class
   ```

4. **Initialization and Visibility:**
   Properties within traits are initialized when the trait is used in a class. The visibility of the property depends on how it's defined in the trait. Traits can have properties with different access modifiers.

   ```php
   trait MyTrait {
       public $publicProperty = "Public property in trait";
       protected $protectedProperty = "Protected property in trait";
       private $privateProperty = "Private property in trait";
   }
   ```

5. **Property Overrides:**
   A class that uses a trait can override trait properties with its own properties. This can lead to different behavior based on the order in which the traits and class properties are accessed.

   ```php
   trait MyTrait {
       public $property = "Property in trait";
   }

   class Example {
       use MyTrait;

       public $property = "Property in class"; // Overrides trait property
   }

   $example = new Example();
   echo $example->property;  // Output: Property in class
   ```

Properties within traits can be useful for sharing common data across classes that use the trait. However, you should be mindful of potential conflicts and unintended behavior when using properties within traits, especially in scenarios involving property naming and visibility.

[20:40](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1240s) - Abstract methods in traits

[23:19](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1399s) - Static properties & methods in traits

[25:38](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1538s) - Magic _CLASS_ constant in traits

[26:13](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1573s) - Personal opinion & downsides of traits

[28:46](https://www.youtube.com/watch?v=PMruqUC4Qpc&t=1726s) - Example comparing inheritance & traits

