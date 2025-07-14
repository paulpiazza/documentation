---
title: Modules
description: Slim notes.
order: 32
---

### Common Export

In JavaScript, modules are a way to organize code into separate files or modules, making it easier to manage and maintain large codebases. Modules allow developers to encapsulate code, hide implementation details, and only expose the necessary functionality to the outside world.

The most common way to use modules in JavaScript is by using the `export` and `import` statements. The `export` statement is used to export functions, objects, or values from a module, while the `import` statement is used to import them into another module.

Here's an example of using `export` and `import` in JavaScript:

**Module 1:**

```javascript
// Define a function to be exported
function add(a, b) {
  return a + b;
}

// Export the function
export { add };
```

**Module 2:**

```javascript
// Import the add function from Module 1
import { add } from './module1.js';

// Use the add function
console.log(add(2, 3)); // Output: 5
```

In this example, we have two modules. Module 1 exports a function called `add` using the `export` statement. Module 2 imports the `add` function from Module 1 using the `import` statement and uses it to add two numbers together.

To import a module, we use the `import` statement followed by the name of the module or file we want to import from. We can then use the imported functions or objects in our code.

To export a module, we use the `export` statement followed by the functions, objects, or values we want to export. We can then import these exports into other modules using the `import` statement.

Modules are a powerful feature of modern JavaScript that allow developers to write modular, maintainable code.

### Default Export

If you want to export the selected text as a default export, you can do so by wrapping it in an object and using the `export default` syntax. Here's an example:

```javascript
const selectedText = `It's important to note that the \`require\` function is specific to Node.js environments and is not part of the ECMAScript standard. In modern JavaScript environments that support ES Modules (ESM), such as modern browsers or when using tools like webpack or Babel, the recommended way to import modules is using the \`import\` statement.`;

export default selectedText;
```

By using `export default`, you make the selected text the default export of the module. This means that when importing this module in another file, you can choose any name to assign to the imported value.

For example, when importing the module with the default export:

```javascript
import myText from './module.js';

console.log(myText); // Output: The selected text
```

In this example, the exported default value is assigned to the variable `myText` when importing the module.

Note that only one default export is allowed per module.

To export the `resources` object as the default export, you can use the `export default` syntax in JavaScript. Here's an example:

```javascript
const resources = {
  valueA,
  valueB
};

export default resources;
```

In this example, we have an object called `resources` that contains two properties: `valueA` and `valueB`. By using `export default`, we make the `resources` object the default export of the module. This means that when importing this module in another file, you can choose any name to assign to the imported value.

For example, when importing the module with the default export:

```javascript
import myResources from './module.js';

console.log(myResources.valueA); // Output: the value of valueA
console.log(myResources.valueB); // Output: the value of valueB
```

In this case, the exported default `resources` object is assigned to the variable `myResources` when importing the module. You can access the properties of the `resources` object using dot notation.

You can also use the destructuring syntax.

```javascript
import { valueA, valueB } from './module.js';

console.log(valueA); // Output: the value of valueA
console.log(valueB); // Output: the value of valueB
```


### Import module with script tag

To import a module in the browser using the `<script>` tag, you can make use of the `type` attribute with the value set to `"module"`. This allows you to use the ES Modules (ESM) syntax directly in your JavaScript code.

Here's an example of importing a module in the browser using the `<script>` tag:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Module Import</title>
  </head>
  <body>
  
	  <!-- html body -->
   
	<script type="module">
    
      import { greet } from './module.js';
      greet();
      
    </script>
  </body>
</html>
```

```javascript
// module.js
export function greet() {
  console.log('Hello, world!');
}
```

In this example, we have an HTML file (`index.html`) that includes a `<script>` tag with the `type` attribute set to `"module"`. Inside the script, we use the `import` statement to import the `greet` function from a separate module file called `module.js`. We can then call the imported `greet` function.

When loading the HTML file in a browser that supports ES Modules, it will treat the script as a module and execute it accordingly. The browser will fetch and execute the imported module (`module.js`) before executing the script that imports it.

It's important to note that when using ES Modules in the browser with the `<script>` tag, you might encounter CORS (Cross-Origin Resource Sharing) restrictions. Ensure that the module file is hosted on the same domain or configure appropriate CORS headers if it's hosted on a different domain.

### Rename Import avoiding collision (As)

When importing modules, it's possible to rename the imported values to avoid naming collisions with existing variables in your code. This can be useful when importing multiple modules that have the same name for their exports or when importing a module that has a name that conflicts with a reserved keyword in JavaScript.

To rename an imported value, you can use the `as` keyword followed by the new name you want to use. Here's an example:

```javascript
import { someExport as myExport } from './module.js';

console.log(myExport);
```

In this example, we're importing the `someExport` value from the `./module.js` module and renaming it to `myExport`. We can then use the new name to refer to the imported value in our code.

You can also use the renaming feature when importing the entire module as a namespace. Here's an example:

```javascript
import * as myModule from './module.js';

console.log(myModule.someExport);
```

In this example, we're importing all exports from the `./module.js` module and assigning them to the `myModule` object. We can then use the dot notation to access the exported values through the `myModule` object.

Renaming imports can help you write more maintainable code and avoid naming collisions. However, it's important to use descriptive and meaningful names when renaming imports to make your code more readable.

### Require

There is an alternative way to import modules in JavaScript using the `require` function. The `require` function is commonly used in Node.js environments to import modules. It follows the CommonJS module system syntax.

> [!Note]
It's important to note that the `require` function is specific to Node.js environments and is not part of the ECMAScript standard. 


```javascript
// Importing a module using require
const fs = require('fs');

// Using the imported module
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```


In modern JavaScript environments that support ES Modules (ESM), such as modern browsers or when using tools like webpack or Babel, the recommended way to import modules is using the `import` statement.

If you're working in a Node.js environment and prefer to use the `import` statement, you can enable ECMAScript module support by using tools like Babel with appropriate configurations.
