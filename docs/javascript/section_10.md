---
title: Global Object
description: Slim notes.
order: 10
---

See [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)

The global object in JavaScript is an object that exists in the global scope and provides access to various variables and functions that are available anywhere in your code. The global object has different names depending on the environment in which JavaScript is running. In a browser environment, it is typically referred to as the `window` object, while in Node.js, it is referred to as the `global` object. Other environments may have their own names for the global object.

The global object serves as a container for global variables and functions. When you declare a variable or function without explicitly specifying a scope, it becomes a property of the global object. For example, if you declare a variable using the `var` keyword in a browser environment, it becomes a property of the `window` object.

Here's an example:

```javascript
var greeting = "Hello, world!";

console.log(window.greeting); // Output: Hello, world!
```

In this example, the variable `greeting` becomes a property of the `window` object, and you can access it using `window.greeting` or simply `greeting`.

It's worth noting that with the introduction of ES6, the `let` and `const` keywords were introduced, which have block scope rather than being automatically added to the global object.

For more detailed information about the global object and its properties and methods, you can refer to the official documentation:

- [The Modern JavaScript Tutorial](https://javascript.info/global-object)[1]
- [MDN Web Docs - Standard Built-in Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)[2]

I hope this explanation helps! Let me know if you have any further questions.
