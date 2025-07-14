---
title: Global Objects In JS
description: Slim notes.
order: 9
---

The text refers to the standard built-in objects in programming. These are pre-defined objects that are available in a programming language without the need for additional libraries or modules to be imported. 

These objects are fundamental to the language and provide basic functionality that can be used to build more complex programs. Examples of standard built-in objects include strings, numbers, lists, dictionaries, and functions. 

These objects are typically defined by the programming language itself and are available for use in any program written in that language.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

### Number

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

### String Object

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### String Concatenation

In JavaScript, there are multiple ways to concatenate strings. The most commonly used method is using the `+` operator. You can simply use the `+` operator to concatenate two or more strings together. Here's an example:

```javascript
const str1 = 'Hello';
const str2 = 'World';
const result = str1 + ' ' + str2;
console.log(result); // Output: Hello World
```

Another method is using the `concat()` method. The `concat()` method joins two or more strings and returns a new string without modifying the existing strings. Here's an example:

```javascript
const str1 = 'Hello';
const str2 = 'World';
const result = str1.concat(' ', str2);
console.log(result); // Output: Hello World
```

Both methods achieve the same result, but the choice between them depends on personal preference and coding style. It's worth noting that the `concat()` method can concatenate multiple strings in a single call, whereas the `+` operator requires separate concatenation for each string.

These are just a few ways to concatenate strings in JavaScript. Depending on your specific use case, there might be other methods or techniques that could be more suitable.


### Date

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


