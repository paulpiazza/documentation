---
title: Objects literal
description: Slim notes.
order: 26
---

![[Pasted image 20231025181755.png]]

In JavaScript, an object literal is a way to define and create an object using curly braces `{}`. It allows you to define key-value pairs, where the keys are strings (or symbols) and the values can be any valid JavaScript expression.

Here's an example of an object literal:

```javascript
const person = {
  name: "John",
  age: 25,
  profession: "Developer"
};
```

In this example, `person` is an object with three properties: `name`, `age`, and `profession`. The values can be accessed using dot notation, like `person.name`, `person.age`, etc.

You can also dynamically access properties using bracket notation:

```javascript
const propertyName = "name";
console.log(person[propertyName]); // Output: John
```

Object literals are commonly used to represent entities or concepts in JavaScript, and they provide a convenient way to organize and access related data.

1. Define properties: You can define key-value pairs within the object literal to specify the properties of the object.
2. Access properties: You can access the values of properties using dot notation or bracket notation.
3. Dynamically access properties: You can use variables or expressions inside square brackets to dynamically access properties.
4. Define methods: You can define functions as properties within the object literal, which are then referred to as methods of the object.
5. Nest objects: You can nest object literals within other object literals to create complex data structures.
6. Modify properties: You can modify the values of properties by assigning new values to them. Objects are mutable!
7. Delete properties: You can remove properties from an object using the `delete` keyword.

Here's an example that demonstrates some of these capabilities:

```javascript
const person = {
  name: "John",
  age: 25,
  profession: "Developer",

  // method
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  
  // other way to define a method in ES6
  greet() { ... }
};

console.log(person.name); // Output: John (dot notation)
console.log(person['name']); // Output: John (bracket notation)

person.greet(); // Output: Hello, my name is John.

person['mail'] = 'mail@web.net' // add a new property. Objects are mutable.

person.age = 30; // Modifying a property
console.log(person.age); // Output: 30

delete person.profession; // Deleting a property
console.log(person.profession); // Output: undefined
```

### Pass by Reference

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
When we talk about passing objects in JavaScript, it means that we are passing a reference to the object, rather than a copy of the object itself. This means that if we pass an object to a function and then modify that object inside the function, the changes will be reflected outside of the function as well.

For example, consider the following code:

```javascript
const obj = { name: "John", age: 25 };

function modifyObject(obj) {
  obj.name = "Jane";
}

modifyObject(obj);
console.log(obj); // Output: { name: "Jane", age: 25 }
```

In this example, `obj` is an object that is passed to the `modifyObject` function. Inside the function, we modify the `name` property of the object to "Jane". When we log the `obj` object after calling the function, we can see that the `name` property has been changed to "Jane".

This behavior is because objects are passed by reference in JavaScript, which means that when we pass an object to a function, we are passing a reference to the original object. Any changes made to the object inside the function will be reflected outside of the function as well.

### looping

To loop through objects in JavaScript, you can use various techniques depending on the specific task you want to accomplish. Here are a few common approaches:

1. `for...in` loop: This loop allows you to iterate over the enumerable properties of an object. It iterates over each key in the object, and you can access the corresponding value using bracket notation.

```javascript
const obj = { name: "John", age: 25 };

for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
```

Output:
```
name: John
age: 25
```

2. `Object.keys()` method: This method returns an array of the object's own enumerable property names. You can then use a loop, such as `forEach`, to iterate over the keys and access the corresponding values.

```javascript
const obj = { name: "John", age: 25 };

Object.keys(obj).forEach((key) => {
  console.log(key + ": " + obj[key]);
});
```

Output:
```
name: John
age: 25
```

3. `Object.entries()` method: This method returns an array of the object's own enumerable property key-value pairs as arrays. You can then use a loop, such as `forEach`, to iterate over the entries and access the key-value pairs.

```javascript
const obj = { name: "John", age: 25 };

Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
```

Output:
```
name: John
age: 25
```

These are just a few examples of how you can loop through objects in JavaScript. The approach you choose depends on your specific requirements and the structure of the object you're working with.

### **How to use the `this` keyword:**

In JavaScript, the `this` keyword refers to the object that the function or method is a property of. The value of `this` depends on how the function or method is called. If the function or method is called as a standalone function, `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode). If the function or method is called as a method of an object, `this` refers to that object.

Here's an example:

```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

person.greet(); // Output: Hello, my name is John.
```

In this example, `this` refers to the `person` object because `greet` is a method of that object.


```javascript
const person = {
  name: "John",
  age: 25,
  greet: () => {
    console.log(`Hello, my name is ${this.name}.`); // `this` is undefined
  },
  celebrateBirthday: () => {
    this.age++; // `this` is undefined
    console.log(`Happy birthday! You are now ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is undefined.
person.celebrateBirthday(); // Output: Happy birthday! You are now NaN years old.
```

In this example, the `greet` and `celebrateBirthday` methods use arrow functions. However, arrow functions don't have their own `this` value, so `this` inside the arrow functions refers to the global object (in non-strict mode) or `undefined` (in strict mode), rather than the `person` object. As a result, the methods don't work as intended.

To fix this, you can use regular functions instead of arrow functions:

```javascript
const person = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday! You are now ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is John.
person.celebrateBirthday(); // Output: Happy birthday! You are now 26 years old.
```

In this updated example, the `greet` and `celebrateBirthday` methods use regular functions, which have their own `this` value that refers to the `person` object. As a result, the methods work as intended.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

When using arrow functions as methods within an object, there can be some issues related to the `this` keyword. In arrow functions, `this` does not have its own binding and instead captures the value of `this` from the surrounding context lexically. This means that the value of `this` in an arrow function is not determined by how or where the function is called, but rather by where the function is defined.

Here are a few important points to consider when using arrow functions in objects:

1. Lexical binding: Arrow functions have lexical scoping for `this`, which means that `this` inside an arrow function refers to the `this` value of the enclosing scope, usually the nearest non-arrow function parent. This can be different from the traditional behavior of `this` in regular functions.

2. Global context: If an arrow function is defined within the global scope, `this` inside the arrow function will refer to the global object (`window` object in browsers or `global` object in Node.js).

3. No dynamic binding: Unlike regular functions, arrow functions do not have their own `this` binding. This means that you cannot use methods like `call()`, `apply()`, or `bind()` to change the value of `this` inside an arrow function.

4. Object methods: When using arrow functions as methods within objects, the value of `this` will not refer to the object itself. Instead, it will refer to the value of `this` from the surrounding context where the arrow function is defined.

Here's an example to illustrate these points:

```javascript
const obj = {
  name: "John",
  regularFunc: function() {
    console.log("Regular function:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow function:", this.name);
  }
};

obj.regularFunc(); // Output: Regular function: John
obj.arrowFunc(); // Output: Arrow function: undefined (referring to global object)

const anotherObj = {
  name: "Jane",
  regularFunc: obj.regularFunc,
  arrowFunc: obj.arrowFunc
};

anotherObj.regularFunc(); // Output: Regular function: Jane
anotherObj.arrowFunc(); // Output: Arrow function: undefined (referring to global object)
```

In this example, the `regularFunc` method uses a regular function, so `this.name` refers to the `name` property of the object it is called on (`obj` or `anotherObj`). However, the `arrowFunc` method uses an arrow function, so `this.name` refers to the value of `name` from the surrounding context lexically (which is undefined in this case).

It's important to be aware of these differences when using arrow functions as methods in objects. If you need access to the object's properties or want to manipulate `this`, it's generally recommended to use regular functions instead of arrow functions for object methods.


Another sample :

```js
const person = {
  name: 'Alice',
  printName: () => {
    console.log(this.name);  
  }
}

person.printName(); // prints empty string ""

```

The code snippet you provided uses an arrow function as the method `printName` of the `person` object. Arrow functions have a lexical `this` binding, which means that the value of `this` is determined by the surrounding scope.

In this case, since the arrow function is defined within the object literal itself, the surrounding scope is the global scope (or the scope in which the object is defined). In the global scope, `this` refers to the global object (e.g., `window` in a browser environment or `global` in Node.js).

However, in the global scope, there is no `name` property defined. Therefore, when `person.printName()` is called, it logs an empty string (`""`) to the console.

### **Conveying privacy in JavaScript methods:**

JavaScript doesn't have built-in support for private properties or methods, but you can use closures to achieve a similar effect. By defining variables or functions inside a constructor function or factory function, you can create private properties or methods that are inaccessible from outside the object.

Here's an example:

```javascript
function createPerson(name) {
  let age = 0; // Private property

  function incrementAge() { // Private method
    age++;
  }

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    celebrateBirthday: function() {
      incrementAge();
      console.log(`Happy birthday, ${name}! You are now ${age} years old.`);
    }
  };
}

const person = createPerson("John");
console.log(person.getName()); // Output: John
person.celebrateBirthday(); // Output: Happy birthday, John! You are now 1 years old.
console.log(person.getAge()); // Output: 1
```

In this example, the `createPerson` function returns an object with three methods: `getName`, `getAge`, and `celebrateBirthday`. The `age` variable and `incrementAge` function are defined inside the `createPerson` function, so they are inaccessible from outside the object. This allows us to create private properties and methods that can only be accessed through the public methods.

### Defining getters and setters in objects:

Getters and setters are special methods in JavaScript that allow you to define how properties are accessed and modified. Getters are used to retrieve the value of a property, while setters are used to set the value of a property. You can define getters and setters using the `get` and `set` keywords, respectively.

Here's an example:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Output: John Doe

person.fullName = "Jane Smith";
console.log(person.fullName); // Output: Jane Smith
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

In this example, we define a `fullName` property with a getter and a setter. The getter returns the concatenation of the `firstName` and `lastName` properties, while the setter splits a string into first and last names and assigns them to the corresponding properties.

### **Creating factory functions:**

A factory function is a function that returns an object. It's called a factory function because it creates and returns new objects based on some input or configuration. Factory functions are useful for creating objects with shared behavior or properties.

Here's an example:

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

const person1 = createPerson("John", 25);
const person2 = createPerson("Jane", 30);

person1.greet(); // Output: Hello, my name is John and I am 25 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 30 years old.
```

In this example, we define a `createPerson` factory function that takes a name and age as arguments and returns an object with those properties plus a `greet` method.

### Using destructuring techniques:

Destructuring is a technique in JavaScript that allows you to extract values from arrays or objects into separate variables. It's a shorthand way of assigning values to variables based on their position or property names.

Here's an example:

```javascript
const person = {
  name: "John",
  age: 25,
  profession: "Developer"
};

const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 25
```

In this example, we use destructuring to extract the `name` and `age` properties from the `person` object into separate variables with the same names.

You can also use destructuring with arrays:

```javascript
const myArray = [1, 2, 3, 4, 5];
const [a, b, ...rest] = myArray;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

You can use Destructuring for Function Parameters

```javascript
let truck = {  
  model: '1977 Mustang convertible',  
  maker: 'Ford',  
  city: 'Detroit',  
  year: '1977',  
  convertible: true  
};  
  
const printCarInfo = ({model, maker, city}) => {  
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);  
};  
  
printCarInfo(truck);  
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.
```

### privacy

Privacy in objects refers to the concept of controlling access to properties and methods, allowing certain data or functionality to be hidden or restricted from external access. In JavaScript, privacy can be achieved through various techniques, although the language does not provide built-in support for true private members in objects.

Here are a few commonly used techniques to convey privacy in objects:

1. **Naming conventions**: By convention, properties or methods that are intended to be private are prefixed with an underscore `_`. Although this does not enforce privacy, it signals to other developers that those members should not be accessed directly.
```js

function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n)
}

function isString(s) {
  return typeof s === 'string'
}


function dogFactory(name, breed, weight) {

  return {

    _name: name,
    _breed: breed,
    _weight: weight,

    get name() {
      return this._name
    },

    get breed() {
      return this._breed
    },

    get weight() {
      return this._weight
    },

    set name(n) {
      if(!isString(n)) {
        console.log('name and breed should be type string')
        return
      }

      this._name = n
    },

    set breed(n) {
      if(!isString(n)) {
        console.log('name and breed should be type string')
        return
      }

      this._breed = n
    },

    set weight(n) {
      if(!isNumber(n)) {
        console.log('weight should be number')
        return
      }
      this._weight = n
    },
   
    eatTooManyTreats() {
      this.weight += 1
    }
  }
}


const dog = dogFactory('paul', 'ok', 10)

dog.breed = 'strong and black bree
dog.breed = 101 // name and breed should be type string
console.log(dog.breed) // 'strong and black breed'

dog.eatTooManyTreats()
console.log(dog.weight) // 11
```

3. **Closure**: JavaScript closures can be used to create private variables and functions within an object. By defining variables or functions within a constructor function or a factory function, they become accessible only within the scope of that function, effectively creating private members.

   Here's an example using closure:

   ```javascript
   function createPerson(name) {
     let age = 25; // Private variable

     function getAge() { // Private function
       return age;
     }

     return {
       getName: function() {
         return name;
       },
       getAge: getAge
     };
   }

   const person = createPerson("John");
   console.log(person.getName()); // Output: John
   console.log(person.age); // Output: undefined (private member)
   console.log(person.getAge()); // Output: 25
   ```

   In this example, the `age` variable and `getAge` function are defined within the `createPerson` function scope. They are not directly accessible from outside the `createPerson` function, but can be accessed through the returned object's methods.

3. **Symbol-based privacy**: JavaScript Symbols can be used to create private property keys that are not easily accessible or enumerable. Symbols are unique and cannot be accessed without a reference to them.

   Here's an example using Symbols:

   ```javascript
   const _privateData = Symbol("privateData");

   const obj = {
     [_privateData]: "This is private data",
     publicData: "This is public data"
   };

   console.log(obj.publicData); // Output: This is public data
   console.log(obj[_privateData]); // Output: This is private data
   ```

   In this example, the `_privateData` Symbol is used as a private property key. It cannot be accessed directly using dot notation or bracket notation unless you have a reference to the Symbol itself.

It's important to note that these techniques provide a level of convention-based privacy, but they are not foolproof. JavaScript being a dynamic language, it is still possible to access and modify private members through various means. However, by using these techniques, you can convey the intention of privacy and discourage direct access to private members.

### Property value shorthand

Property value shorthand is a feature introduced in ECMAScript 2015 (ES6) that allows you to create object literals with a shorter syntax for defining property values. It automatically converts variables into key-value pairs, using the variable name as the property key and the variable value as the property value. This shorthand syntax can make your code more concise and readable.

Here's an example to illustrate property value shorthand:

```javascript
const name = "John";
const age = 25;

const person = {
  name, // property value shorthand
  age  // property value shorthand
};

console.log(person); // Output: { name: "John", age: 25 }
```

In this example, the variables `name` and `age` are used as property values in the object literal. Instead of explicitly specifying the property key-value pairs (`name: name` and `age: age`), you can use the shorthand syntax to automatically assign the variable names as the property keys and their corresponding values.

It's important to note that property value shorthand only works when the variable name matches the desired property key. If you want to use a different property key or a computed property key, you'll need to use the traditional syntax for defining properties.

Property value shorthand can be especially useful when you have multiple variables that you want to assign as properties in an object literal. It helps reduce repetition and makes your code more concise.

I hope this clarifies the concept of property value shorthand. Let me know if you have any further questions!

[1]: [ES6 Object Literal Property Value Shorthand in JavaScript](https://www.freecodecamp.org/news/es6-object-literal-property-value-shorthand/)
[2]: [Object Literal Property Value Shorthand - Stack Overflow](https://stackoverflow.com/questions/28633221/object-literal-property-value-shorthand)

### built-in methods

The `.hasOwnProperty()` and `.valueOf()` methods are both built-in methods in JavaScript that can be used with objects. Here's an explanation of each:

1. `.hasOwnProperty()`: This method is used to check whether an object has a specific property as its own property. It returns `true` if the object has the property, and `false` otherwise. The method takes a single parameter, which is the name of the property to be checked.

   Example usage:
   ```javascript
   const person = {
     name: "John",
     age: 25
   };

   console.log(person.hasOwnProperty("name")); // Output: true
   console.log(person.hasOwnProperty("gender")); // Output: false
   ```

   In this example, `person.hasOwnProperty("name")` returns `true` because the `person` object has the property `"name"` as its own property. However, `person.hasOwnProperty("gender")` returns `false` because the `person` object does not have the property `"gender"`.

   It's important to note that `.hasOwnProperty()` only checks for properties that are directly defined on the object and not inherited from its prototype chain.

2. `.valueOf()`: This method is used to get the primitive value of an object. It returns the primitive value representation of the object, which can be a string, number, boolean, etc., depending on the object type.

   Example usage:
   ```javascript
   const num = new Number(42);
   console.log(num.valueOf()); // Output: 42

   const str = new String("Hello");
   console.log(str.valueOf()); // Output: "Hello"
   ```

   In this example, the `.valueOf()` method is called on a `Number` object and a `String` object. It returns the primitive value of the objects, which is `42` for the `Number` object and `"Hello"` for the `String` object.

   The `.valueOf()` method is automatically called by JavaScript when a primitive value is expected, such as when using arithmetic operators or comparing values.

Please note that these explanations are based on general knowledge about these methods. For more detailed information and additional use cases, I recommend referring to the official documentation or reputable JavaScript resources.

[1]: [MDN - Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
[2]: [GeeksforGeeks - JavaScript hasOwnProperty() Method](https://www.geeksforgeeks.org/javascript-hasownproperty-method/)
[3]: [W3Source - JavaScript hasOwnProperty() Method](https://www.w3source.com/javascript/object-methods/hasownproperty.html)

Certainly! Here's an explanation of `Object.assign()`, `Object.entries()`, and `Object.keys()`, three commonly used methods in JavaScript for working with objects:

1. `Object.assign()`: This method is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.

   Example usage:
   ```javascript
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };

   const result = Object.assign(target, source);

   console.log(result); // Output: { a: 1, b: 4, c: 5 }
   ```

   In this example, the `Object.assign()` method is used to copy the values of the `source` object's properties `"b"` and `"c"` to the `target` object, overwriting the existing property `"b"`. The modified `target` object is returned and assigned to the `result` variable.

2. `Object.entries()`: This method is used to return an array of an object's own enumerable property `[key, value]` pairs, in the same order as that provided by a `for...in` loop. The array can be useful for iterating over an object's properties or converting an object to a Map.

   Example usage:
   ```javascript
   const person = {
     name: "John",
     age: 25,
     gender: "male"
   };

   const entries = Object.entries(person);

   console.log(entries);
   // Output: [ ["name", "John"], ["age", 25], ["gender", "male"] ]
   ```

   In this example, the `Object.entries()` method is used to return an array of `[key, value]` pairs for the `person` object's properties `"name"`, `"age"`, and `"gender"`. The resulting array is assigned to the `entries` variable.

3. `Object.keys()`: This method is used to return an array of an object's own enumerable property keys. The array can be useful for iterating over an object's properties or checking if a specific property exists.

   Example usage:
   ```javascript
   const person = {
     name: "John",
     age: 25,
     gender: "male"
   };

   const keys = Object.keys(person);

   console.log(keys); // Output: ["name", "age", "gender"]
   ```

   In this example, the `Object.keys()` method is used to return an array of the `person` object's property keys `"name"`, `"age"`, and `"gender"`. The resulting array is assigned to the `keys` variable.

These methods are just a few examples of the many built-in methods available in JavaScript for working with objects. For more detailed information and additional use cases, I recommend referring to the official documentation or reputable JavaScript resources.

[1]: [MDN - Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
[2]: [MDN - Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
[3]: [MDN - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)


### Bind

The `bind()` method in JavaScript is a method that allows you to create a new function with a specified `this` value and arguments. The `bind()` method returns a new function that, when called, will have its `this` keyword set to the provided value, and any arguments provided to `bind()` will be prepended to the arguments passed to the bound function when it is called.

While the `bind()` method can be used to set the `this` value of a function, it is not the same as using mixins. Mixins are a way to add functionality to a class by combining methods and properties from multiple sources, whereas `bind()` is used to create a new function with a specified `this` value.

In summary, while both mixins and `bind()` can be used to add functionality to a class or function, they serve different purposes and have different use cases.

The `bind()` method in JavaScript is used to create a new function with a specified `this` value and arguments. It returns a new function that, when called, has its `this` keyword set to the provided value.

Here's an example of using the `bind()` method in JavaScript:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

const p = {
	firstName: 'Paul',
	lastName: 'Capucin'
}

const boundDisplay = person.display.bind(p);

boundDisplay(); // Output: "Paul Capucin"
```

In this example, we have an object called `person` with properties `firstName`, `lastName`, and a method `display`. We use the `bind()` method to create a new function called `boundDisplay`, where the `this` value is set to the `p` object. When we call `boundDisplay()`, it invokes the `display` method with the `this` value set to `p`, resulting in the output "Paul Capcucin".

The `bind()` method is useful when you want to create a new function that has a specific `this` value and can be invoked later.

### review

- The object that a method belongs to is called the _calling object_.
- The `this` keyword refers to the calling object and can be used to access properties of the calling object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of `this` depends on where the `this` is being accessed from.
- We cannot use arrow functions as methods if we want to access other internal properties.
- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
- Setters and getter methods allow for more detailed ways of accessing and assigning properties.
- Factory functions allow us to create object instances quickly and repeatedly.
- There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
- As with any concept, it is a good skill to learn how to use the documentation with objects!
