---
title: Variables
description: Slim notes.
order: 11
---

In JavaScript, `var`, `let`, and `const` are all used to declare variables, but they have different scopes and behaviors. 

The let and const keywords were introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015. ES6 brought significant updates to JavaScript, including the addition of block-scoped variables.

Prior to ES6, JavaScript only had the var keyword, which has function scope. The introduction of let and const provided developers with more control over variable scoping.

The let keyword allows you to declare variables that are block-scoped, meaning they are only accessible within the block they are defined in. This helps prevent variable leakage and allows for more predictable code. The use of let is recommended over var in most cases.

The const keyword is also block-scoped and is used to declare constants. Once a variable is assigned using const, its value cannot be changed. This provides immutability and helps enforce data integrity in your code.

1. **var**: 
   - It is function-scoped, which means that a variable declared with `var` is available within the function it's declared in.
   - Variables declared with `var` are hoisted to the top of their scope.
   - You can redeclare the same variable multiple times.

   Example:
   ```javascript
   function exampleVar() {
     var x = 1;
     if (true) {
       var x = 2;  // Same variable!
       console.log(x);  // 2
     }
     console.log(x);  // 2
   }
   ```

2. **let**: 
   - It is block-scoped, meaning a variable declared with `let` is only available within the block it's declared in.
   - Variables declared with `let` are also hoisted to the top of their block, but they are not initialized until their definition is evaluated.
   - You cannot redeclare the same variable.

   Example:
   ```javascript
   function exampleLet() {
     let y = 1;
     if (true) {
       let y = 2;  // Different variable
       console.log(y);  // 2
     }
     console.log(y);  // 1
   }
   ```

3. **const**: 
   - Just like `let`, `const` is also block-scoped.
   - However, `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
   - Variables declared with `const` are also hoisted to the top of their block, but they are not initialized until their definition is evaluated.
   - You cannot redeclare the same variable.

   Example:
   ```javascript
   function exampleConst() {
     const z = 1;
     if (true) {
       const z = 2;  // Different variable
       console.log(z);  // 2
     }
     console.log(z);  // 1
   }
   ```

In general, you should always use `let` and `const` for variable declarations, and use `var` only when there is a specific reason to do so.

#### hoist

See [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

In JavaScript, hoisting is the default behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the actual execution of the code. This means that you can use variables and functions before they are declared in your code.

When a variable is hoisted, it means that the declaration of the variable is moved to the top of its scope, but not the initialization. The variable will be initialized at the point in the code where it was originally declared.

For example:
```javascript
console.log(x); // Output: undefined
var x = 10;
```
In the above code, even though `x` is logged before its declaration and initialization, it doesn't throw an error. This is because the variable declaration is hoisted to the top, resulting in `x` being `undefined` at that point.

It's important to note that hoisting only applies to variable and function declarations, not to their assignments or initializations. So, while the declarations are hoisted, the assignments remain in place.
