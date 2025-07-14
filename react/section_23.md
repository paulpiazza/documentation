---
title: create an object
description: Slim notes.
order: 23
---

### ES

If you are unable to install Sugar.js or prefer not to use it, you can still create objects in JavaScript using regular JavaScript syntax. Here's an example of how you can create objects without relying on external libraries:

```javascript
// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to the prototype of the constructor function
Person.prototype.getInfo = function() {
  return `Name: ${this.name}, Age: ${this.age}`;
};

// Create instances of the Person object
const john = new Person('John Doe', 25);
console.log(john.getInfo()); // Output: Name: John Doe, Age: 25

// Update the name attribute
john.name = 'Paul';
console.log(john.getInfo()); // Output: Name: Paul, Age: 25


// different syntax :
function Person(name, age) {
	this.name = name;
	this.age = age;
	
	this.getInfos = () => {
		return `${this.name} is ${this.age} years old.`
	}
}
```

To create an instance of the `Person` object, we use the `new` keyword followed by the constructor function and provide the necessary arguments. In this example, we create an instance called `john` with the name "John Doe" and age 25.

You can access and update the properties of the `john` object directly by using dot syntax.

### with Sugar Js

To use the `Class` module from Sugar.js and instantiate a new object, you need to include the Sugar.js library in your project and follow these steps:

1. Install Sugar.js: You can install Sugar.js using npm or include the library directly in your project. Here's an example of installing it via npm:

   ```bash
   npm install sugar
   ```

2. Import the `Class` module: In your JavaScript file, import the `Class` module from Sugar.js using the ES6 module syntax:

   ```javascript
   import { Class } from 'sugar';
   ```

3. Define a class using Sugar.js: Use the `Class.create` method provided by Sugar.js to define your class. Here's an example:

   ```javascript
   const Person = Class.create({
     initialize: function(name, age) {
       this.name = name;
       this.age = age;
     },
     getInfo: function() {
       return `Name: ${this.name}, Age: ${this.age}`;
     }
   });
   ```

   In the above code, we define a `Person` class with an `initialize` method for setting the `name` and `age` properties, and a `getInfo` method that returns information about the person.

4. Instantiate a new object: Now, you can create instances of the `Person` class using the `new` keyword:

   ```javascript
   const john = new Person('John Doe', 25);
   console.log(john.getInfo()); // Output: Name: John Doe, Age: 25
   ```

   In the example above, we create a new instance of the `Person` class called `john` with the name "John Doe" and age 25. We then call the `getInfo` method on the `john` object to retrieve and display the person's information.

That's it! You can now use the `Class` module from Sugar.js to define classes and instantiate objects in your project. Make sure you have included the Sugar.js library correctly, either by installing it via npm or including it directly in your HTML file if you're not using a build tool like webpack or Parcel.

