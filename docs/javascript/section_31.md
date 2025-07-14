---
title: OOP with JavaScript
description: Slim notes.
order: 31
---

### Class

Classes were implemented in JavaScript with the ECMAScript 2015 (ES6) update. Prior to ES6, JavaScript did not have explicit class syntax, but instead relied on prototype-based inheritance for object creation and behavior. The introduction of classes in ES6 provided a more convenient and familiar way to define objects with shared properties and methods.

The class syntax in JavaScript allows developers to define a blueprint for creating objects with a constructor method for initialization and other methods for defining behavior. The class-based approach simplifies the creation of objects and promotes code reusability and organization.

Here's an example of using the class syntax in JavaScript:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.sayHello(); // logs "Hello, my name is John and I am 30 years old."
```

In this example, we define a `Person` class with a constructor method that takes in `name` and `age` parameters to initialize the object's properties. We also define a `sayHello` method that logs a message to the console using the object's properties.

It's important to note that even though classes were introduced in ES6, JavaScript still retains its prototype-based inheritance model underneath. Classes in JavaScript are syntactic sugar over the existing prototype system, providing a more familiar syntax for developers accustomed to class-based languages.

> [!warning]
> An object literal creates a single object with predefined properties, while a class defines a blueprint for creating objects with shared properties and methods.

### Constructor

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the _constructor_ method. JavaScript calls the `constructor()` method every time it creates a new _instance_ of a class.

```js
class Dog {
	constructor(name) {
	    this.name = name;
	    this.behavior = 0;
	}
}
```

- `Dog` is the name of our class. By convention, we capitalize and PascalCase class names.
- JavaScript will invoke the `constructor()` method every time we create a new instance of our `Dog` class.
- This `constructor()` method accepts one argument, `name`.
- Inside of the `constructor()` method, we use the `this` keyword. In the context of a class, `this` refers to an instance of that class. In the `Dog` class, we use `this` to set the value of the Dog instance’s `name` property to the `name` argument.
- Under `this.name`, we create a property called `behavior`, which will keep track of the number of times a dog misbehaves. The `behavior` property is always initialized to zero.

### Instance

Now, we’re ready to create class instances. An _instance_ is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our `Dog` class example.

```js
const myDog = new Dog('Buddy');
```

In this case, a new Dog object called myDog is created with the name "Buddy". The constructor method is invoked, setting the name property to "Buddy" and initializing the behavior property to zero.

Below our `Dog` class, we use the `new` keyword to create an instance of our `Dog` class. Let’s consider the line of code step-by-step.

- We create a new variable named `myDog` that will store an instance of our `Dog` class.
- We use the `new` keyword to generate a new instance of the `Dog` class. The `new` keyword calls the `constructor()`, runs the code inside of it, and then returns the new instance.
- We pass the `'Halley'` string to the `Dog` constructor, which sets the `name` property to `'Halley'`.

### Methods

At this point, we have a `Dog` class that spins up objects with `name` and `behavior` properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects **except you can not include commas between methods**.

### Calls

The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.

### Inheritance

Inheritance is a key feature of object-oriented programming that allows you to create new classes based on existing classes. Inheritance enables code reuse and promotes modularity, allowing you to create more complex programs with less code.

In JavaScript, you can implement inheritance using the `extends` keyword. The `extends` keyword allows you to create a new class that is a child of an existing class, inheriting all of its properties and methods.

Here's an example of inheritance in JavaScript:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Buddy');
myDog.speak(); // logs "Buddy barks."
```

In this example, we have an `Animal` class with a constructor method and a `speak` method. We then create a `Dog` class that extends the `Animal` class using the `extends` keyword. The `Dog` class overrides the `speak` method to log `"barks"` instead of `"makes a noise"`.

We then create a new instance of the `Dog` class called `myDog`, passing in the name "Buddy" to the constructor method. When we call the `speak` method on `myDog`, it logs `"Buddy barks."` to the console.

This is just one example of inheritance in JavaScript. You can create more complex class hierarchies with multiple levels of inheritance, and you can also use inheritance to override and extend the behavior of existing classes.

With inheritance, you can create a _parent_ class (also known as a superclass) with properties and methods that multiple _child_ classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

### Super Keyword

In JavaScript, the `super` keyword is used within a derived class to call a method or access a property from its parent class. It allows the derived class to inherit and extend the behavior of the parent class.

Here's an example that demonstrates the use of `super` keyword in a class hierarchy:

```javascript
class Employee {
  constructor(name, vacationDays) {
    this.name = name;
    this.vacationDays = vacationDays;
  }

  getRemainingVacationDays() {
    return this.vacationDays;
  }
}

class Manager extends Employee {
  constructor(name, vacationDays, department) {
    super(name, vacationDays);
    this.department = department;
  }

  getRemainingVacationDays() {
    const baseVacationDays = super.getRemainingVacationDays();
    return baseVacationDays + 5; // Managers get additional 5 vacation days
  }
}

const john = new Manager('John', 10, 'Sales');
console.log(john.getRemainingVacationDays()); // Output: 15
```

In this example, we have an `Employee` base class with a `getRemainingVacationDays` method that returns the number of remaining vacation days for an employee.

The `Manager` class extends the `Employee` class using the `extends` keyword. It has an additional property called `department`. In the constructor of the `Manager` class, the `super` keyword is used to call the constructor of the parent class and pass the necessary arguments.

The `Manager` class also overrides the `getRemainingVacationDays` method. Inside the overridden method, we use `super.getRemainingVacationDays()` to call the `getRemainingVacationDays` method of the parent class and get the base number of vacation days. We then add 5 to it, as managers receive an additional 5 vacation days.

Finally, we create an instance of the `Manager` class called `john`, passing in the name, vacation days, and department. When we call `john.getRemainingVacationDays()`, it returns 15, which includes the base vacation days from the parent class plus the additional days for managers.

The `super` keyword allows derived classes to access and extend the functionality of their parent classes.


### Static methods

In JavaScript, static methods are methods that belong to the class itself, rather than to its instances. They are called on the class directly, rather than on an instance of the class. Static methods are useful for creating utility functions or for performing operations that don't depend on the state of any particular instance of the class.

Here's an example of a static method in JavaScript:

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
```

In this example, we have a `MathUtils` class with a static `add` method. The `add` method takes two arguments, `a` and `b`, and returns their sum. The `add` method is called on the class itself, rather than on an instance of the class.

We can call the `add` method directly on the `MathUtils` class, passing in the necessary arguments. In this case, calling `MathUtils.add(2, 3)` returns `5`.

Here's another example that demonstrates how static methods can be used to create utility functions:

```javascript
class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

console.log(StringUtils.capitalize('hello')); // Output: "Hello"
```

In this example, we have a `StringUtils` class with a static `capitalize` method. The `capitalize` method takes a string argument and returns the same string with the first letter capitalized.

We can call the `capitalize` method directly on the `StringUtils` class, passing in a string. In this case, calling `StringUtils.capitalize('hello')` returns `"Hello"`.

Static methods are a powerful feature of object-oriented programming that allow you to create utility functions or perform operations that don't depend on any particular instance of a class.

### Mixins

In JavaScript, mixins are a way to add functionality to a class by combining methods and properties from multiple sources. A mixin is essentially an object that contains a set of methods or properties that can be mixed into the prototype of a class.

Here's an example of using mixins in JavaScript:

```javascript
// Define a mixin object
const sayHiMixin = {
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

// Create a class and mix in the sayHiMixin
class User {
  constructor(name) {
    this.name = name;
  }
}

// Mixin the sayHiMixin into the User class
Object.assign(User.prototype, sayHiMixin);

// Create an instance of the User class and call the mixed-in method
const user = new User('John');
user.sayHi(); // Output: "Hi, my name is John"
```

In this example, we define a mixin object called `sayHiMixin` which contains a `sayHi` method. We then create a `User` class with a `constructor` method that takes a `name` parameter. To mix in the `sayHiMixin` into the `User` class, we use `Object.assign()` to copy the methods from the mixin object into the prototype of the `User` class.

After mixing in the `sayHiMixin`, we can create an instance of the `User` class and call the mixed-in method `sayHi()`. The output will be "Hi, my name is John".

Mixins provide a way to compose classes with reusable functionality from multiple sources, allowing for code reuse and modularity.
