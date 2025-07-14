---
title: Lesson 2.13 - Late Static Binding
description: Slim notes.
order: 49
---

**Late state binding in PHP 5**
Remember that `self` is resolved at compile time, and it refers to the class in which it's used. If you extend a class and override its methods, `self` will still refer to the class in which it was initially defined, not the subclass. 

For dynamic late binding in PHP 5, you might use the `static` keyword instead of `self` to allow polymorphism and method overriding.

```php
class ParentClass {
    public static function whoAmI() {
        echo "ParentClass";
    }
}

class ChildClass extends ParentClass {
    public static function whoAmI() {
        echo "ChildClass";
    }
    
    public static function printClassName() {
        self::whoAmI(); // Outputs "ParentClass"
        static::whoAmI(); // Outputs "ChildClass"
    }
}
```

In summary, `self` is used to refer to the current class and is primarily used for accessing class constants, static properties, and static methods within the same class.



In PHP, there are two types of binding: early binding and late binding. These terms are often used to describe how method calls and property accesses are resolved.

1. **Early Binding (Static Binding)**:
   Early binding refers to the process of resolving method calls and property accesses at compile-time, before the program is executed. It is also known as static binding. In early binding, the specific class and method to be called are determined based on the class where the method call is made, not the runtime object type.

   ```php
   class ParentClass {
       public static function greeting() {
           echo "Hello from ParentClass!";
       }
   }

   class ChildClass extends ParentClass {
       public static function greeting() {
           echo "Hello from ChildClass!";
       }
   }

   $object = new ChildClass();
   $object::greeting(); // Output: Hello from ChildClass!
   ```

   In early binding, the class of the variable `$object` determines which method will be called. This decision is made during compile-time, so it does not consider the actual runtime type of the object.

2. **Late Binding (Dynamic Binding)**:
   Late binding refers to the process of resolving method calls and property accesses at runtime, when the program is executed. It is also known as dynamic binding. In late binding, the specific class and method to be called are determined based on the actual runtime object type.

   ```php
   class ParentClass {
       public function greeting() {
           echo "Hello from ParentClass!";
       }
   }

   class ChildClass extends ParentClass {
       public function greeting() {
           echo "Hello from ChildClass!";
       }
   }

   $object = new ChildClass();
   $object->greeting(); // Output: Hello from ChildClass!
   ```

   In late binding, the method to be called is determined based on the actual type of the object at runtime. This allows for more flexibility and polymorphism in object-oriented programming.

In summary, early binding (static binding) determines the method to be called based on the class where the method call is made, and this decision is made at compile-time. Late binding (dynamic binding) determines the method to be called based on the actual runtime type of the object, and this decision is made at runtime. Late binding allows for more flexibility and supports polymorphism in object-oriented programming.

```php

class ClassA
{
    protected static string $name = "A";
    public static function getName(): string
    {
        return self::$name;
    }
}

class ClassB extends ClassA
{
    protected static string $name = "B";
    public static function getName(): string
    {
        return self::$name;
    }
}
  
echo ClassA::getName(); // A
echo ClassB::getName(); // A

```


Use the keyword `static` to resolve this issue.
