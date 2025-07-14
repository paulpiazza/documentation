---
title: Spies with Sinon
description: Slim notes.
order: 39
---

In the context of software testing, a spy is a testing utility that allows you to observe and track certain behaviors of functions or objects during test execution. It can be used to verify that certain functions are called, how many times they are called, and with which arguments.

When it comes to spies in JavaScript testing, one popular library is Sinon.js. Sinon provides a feature called "spies" that allows you to create spies on functions or methods.

Here's an example of how to use spies with Sinon:

```javascript
const sinon = require('sinon');

// Create a spy on a function
const myFunction = sinon.spy();

// Call the function
myFunction('argument');

// Check if the function was called
console.log(myFunction.called); // Output: true

// Check how many times the function was called
console.log(myFunction.callCount); // Output: 1

// Check the arguments passed to the function
console.log(myFunction.args); // Output: [['argument']]
```

In this example, we create a spy using `sinon.spy()` and assign it to the `myFunction` variable. We then call the function and use various assertions provided by Sinon to check if the function was called (`myFunction.called`), how many times it was called (`myFunction.callCount`), and the arguments passed to it (`myFunction.args`).

```js
// other sample
const robot = {  
  greet(name){  // Unit being tested  
    return 'Hello ' + name;  
  }  
};  
  
test('greet should return hello codey', () => {  
  sinon.spy(robot, 'greet'); // Initialize the spy  
  robot.greet('codey'); // Call the method  
  expect(robot.greet.called).to.be.true;  
  expect(robot.greet.calledWith('codey')).to.be.true;  
  expect(robot.greet.returned('Hello codey')).to.be.true;  
  robot.greet.restore(); // Remove spy from wrapped method  
});
```

Spies can be useful in testing scenarios where you want to ensure that certain functions are being called correctly or to gather information about their usage during test execution.

Please note that Sinon.js provides many other features and utilities for testing, including stubs and mocks, which can be used in conjunction with spies for more advanced testing scenarios.

In summary, spies in the context of software testing are utilities that allow you to observe and track behaviors of functions or objects during test execution. Sinon.js is a popular JavaScript library that provides a feature called "spies" for creating spies and performing assertions on their usage during tests [1].

