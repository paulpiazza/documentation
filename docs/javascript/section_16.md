---
title: The nullish coalescing assignment operator (`??=`)
description: Slim notes.
order: 16
---

The nullish coalescing assignment operator (`??=`) is a logical operator in JavaScript that combines the nullish coalescing operator (`??`) with the assignment operator (`=`). It is used to assign a value to a variable only if the variable is `null` or `undefined`. If the variable already has a value, the operator does nothing.

Here is an example usage of the nullish coalescing assignment operator in JavaScript:

```javascript
let myVariable = null;
myVariable ??= "Default Value";
console.log(myVariable); // Output: "Default Value"
```

In this example, the `myVariable` variable is assigned the value "Default Value" because it was originally `null`.

It's important to note that the nullish coalescing assignment operator is a relatively new addition to JavaScript, and may not be supported in all browsers or environments. It was introduced in ECMAScript 2021, and is supported in modern browsers and Node.js versions 15.0.0 and later [1].

I hope this helps! Let me know if you have any further questions.


