---
title: Test your Code with Mocha - Chai
description: Slim notes.
order: 35
---

See [W3Resource](https://www.w3resource.com/mocha/getting-started.php)
See [Mocha](https://mochajs.org/)
See [Chai](https://www.chaijs.com/)

_Automated testing_ is the use of software to control the execution of tests and the comparison of actual behavior to expected behavior. All the testing you just did (and more) could be performed by a computer program.

Compared to manual testing, automated testing is

- Faster: it tests more of your product in less time.
- More reliable: it’s less prone to error than a human is .
- Maintainable: you can review, edit, and extend a collection of tests.

Rather than hire a testing team at the end of development, professional developers can run their automated tests after every change. The workflow might look like this:

1. Write code and corresponding tests
2. Enter a command into a terminal to run tests
3. If the app behaves as intended, all tests should pass. Development is complete.
4. If it does not behave as intended, at least one test should fail. Fix code and return to step 2.

Writing automated tests takes time, but the cost is outweighed by the benefits. Automated testing

- Increases confidence that your product works as expected (compared to manual testing)
- Improves upon documentation
- Reduces the likelihood of regression

![[Pasted image 20231119095532.png]]

### The Test Suite

Tests are written with code, just like the rest of your web app. You can refer to the code defining your app as _implementation code_, and the code defining your tests as _test code_.

A collection of tests for a web application is called a _test suite_. In the last exercise, you ran a test suite with `npm test`. In that case the test suite contained all tests for the application.

Test code is included with and structured similarly to implementation code. Often times changes to test code are associated with changes to implementation code and vice versa. Both are easier to maintain when they are stored in the same place.

For example, if implementation code is written in `index.js` then the corresponding test code may be written in `index-test.js`.

### Implement

To implement a test environment using Mocha and Chai, you can follow these steps:

1. Install the necessary dependencies:
   - Mocha: `npm install mocha --save-dev`
   - Chai: `npm install chai --save-dev`

2. Create a test file:
   - Create a new file with a `.test.js` extension (e.g., `example.test.js`) to indicate that it's a test file.
   - Import the necessary modules at the top of the file:
     ```javascript
     const chai = require('chai');
     const expect = chai.expect;
     ```
   - Write your test cases using the `describe` and `it` functions provided by Mocha. For example:
     ```javascript
     describe('Example Test Suite', () => {
       it('should perform a basic assertion', () => {
         const result = 42;
         expect(result).to.equal(42);
       });
     });
     ```

3. Run the tests:
   - Open your terminal or command prompt and navigate to the project directory.
   - Run the command `mocha` to execute the tests.
   - Mocha will automatically detect and run all the test files in your project.

 This tells npm to run the `mocha` command when you run `npm run test`.
 
   ```json
   // package.json
   "scripts": {
     "test": "mocha"
   }
   ```

Now you can run your tests by simply running `npm run test` in your terminal or command prompt. This will execute all the test files in your project that match the pattern `**/*.test.js`.

You can also pass additional options to the `mocha` command by adding them after `npm run test`. For example, to run tests in a specific file, you can use:

```
npm run test test/example.test.js
```

This will only run the tests in the `example.test.js` file.

That's it! You have set up a test environment using Mocha and Chai. You can add more test files and test cases as needed. Remember to use the various assertion methods provided by Chai, such as `expect`, `should`, or `assert`, to verify the expected behavior of your code.

### Unit Tests

Unit tests focus on testing individual units or components of your code in isolation. These tests verify that each unit behaves as expected and meets the specified requirements. Unit tests are typically written for small, independent functions or classes.

Here's an example of a unit test using Mocha and Chai:

```javascript
// Import necessary modules
const chai = require('chai');
const expect = chai.expect;

// Function to be tested
function addNumbers(a, b) {
  return a + b;
}

// Unit test
describe('addNumbers', () => {
  it('should return the sum of two numbers', () => {
    const result = addNumbers(2, 3);
    expect(result).to.equal(5);
  });

  it('should handle negative numbers', () => {
    const result = addNumbers(-5, 10);
    expect(result).to.equal(5);
  });
});
```

In this example, we define a function `addNumbers` that adds two numbers. We then write unit tests using Mocha's `describe` and `it` functions. We use Chai's `expect` assertion to verify the expected behavior of the `addNumbers` function.

### Functional tests

Functional tests, on the other hand, focus on testing the behavior of your code from the user's perspective. These tests simulate user interactions with your application and verify that it functions correctly as a whole. Functional tests are typically written for larger parts of your application, such as API endpoints or user workflows.

Here's an example of a functional test using Mocha and Chai along with a library like `supertest` for making HTTP requests:

```javascript
// Import necessary modules
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app'); // Assuming this is your Express app

// Functional test
describe('API endpoints', () => {
  it('should return a list of users', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(3);
        done();
      });
  });

  it('should create a new user', (done) => {
    request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com' })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('id');
        expect(res.body.name).to.equal('John Doe');
        expect(res.body.email).to.equal('john@example.com');
        done();
      });
  });
});
```

In this example, we have functional tests for an API that returns a list of users and creates a new user. We use `supertest` to make HTTP requests to our Express app and assert the expected responses using Chai's `expect` assertion.

These examples demonstrate how to write unit tests and functional tests using Mocha and Chai. Keep in mind that the specific implementation may vary depending on your project and testing needs.

### Common assertions

See [Nodejs asserts](https://nodejs.org/api/assert.html)

Mocha is a testing framework and does not provide built-in assertion methods. However, Mocha can be used in conjunction with various assertion libraries such as Chai, should.js, or Node.js assert module to perform assertions in your tests.

Here are some commonly used assertion methods from different assertion libraries that can be used with Mocha:

1. Chai:
   - `expect(value).to.be.equal(expected)`
   - `expect(value).to.be.true`
   - `expect(value).to.be.false`
   - `expect(value).to.be.null`
   - `expect(value).to.be.undefined`
   - `expect(value).to.be.an('array')`
   - `expect(value).to.include('element')`

2. should.js:
   - `value.should.equal(expected)`
   - `value.should.be.true`
   - `value.should.be.false`
   - `value.should.be.null`
   - `value.should.be.undefined`
   - `value.should.be.an.Array()`
   - `value.should.include('element')`

3. Node.js assert module:
   - `assert.equal(value, expected)`
   -  `assert.fail(value, expected)`
   - `assert.strictEqual(value, expected)`
   - `assert.deepEqual(value, expected)` (for objects and arrays - loosing comparison)
   - `assert.deepStrictEqual(value, expected)` (for objects and arrays - strict comparison)
   - `assert.ok(value)`
   - `assert.isNull(value)`
   - `assert.isUndefined(value)`
   - `assert.isArray(value)`
   - `assert.include(value, 'element')`

These are just a few examples of the assertion methods available in these libraries. You can refer to the documentation of each library for a complete list of assertion methods and their usage.

Remember to install the assertion library of your choice (e.g., Chai, should.js) and require it in your test files before using the assertion methods.

For example, with Chai, you would need to add the following line at the top of your test file:

```javascript
const chai = require('chai');
const expect = chai.expect;
```

This allows you to use Chai's `expect` assertion methods in your tests.

### Data provider

Mocha and Chai are two separate JavaScript testing frameworks, and Chai does not provide a built-in data provider feature like TestNG or Jest. However, you can still achieve similar functionality by using other libraries or techniques in conjunction with Mocha and Chai.

One popular approach is to use external libraries like `mocha-data-driven` or `mocha-param` that provide data-driven testing capabilities for Mocha. These libraries allow you to define test cases with different input values and expected results using a concise syntax.

Here's an example using `mocha-data-driven`:

```javascript
const dataDriven = require('mocha-data-driven');
const chai = require('chai');
const expect = chai.expect;

function addNumbers(a, b) {
  return a + b;
}

dataDriven([
  { a: 2, b: 3, expected: 5 },
  { a: -5, b: 10, expected: 5 },
  { a: 0, b: 0, expected: 0 }
]).it('should add numbers correctly', (data) => {
  const result = addNumbers(data.a, data.b);
  expect(result).to.equal(data.expected);
});
```

In this example, we use the `dataDriven` function from `mocha-data-driven` to define multiple sets of input values and expected results. The `it` block is used to define the test case, and the test case is executed for each set of data. Inside the test case, we use Chai's `expect` assertion to verify the expected behavior.

Alternatively, you can manually create an array of test data and use a loop or iteration to run the test cases with different data sets:

```javascript
const chai = require('chai');
const expect = chai.expect;

function addNumbers(a, b) {
  return a + b;
}

const testData = [
  { a: 2, b: 3, expected: 5 },
  { a: -5, b: 10, expected: 5 },
  { a: 0, b: 0, expected: 0 }
];

for (const data of testData) {
  it(`should add ${data.a} and ${data.b} correctly`, () => {
    const result = addNumbers(data.a, data.b);
    expect(result).to.equal(data.expected);
  });
}
```

In this example, we manually iterate over the `testData` array and define an `it` block for each set of input values and expected results. The test case is executed for each iteration using the corresponding data.

These approaches allow you to achieve data-driven testing in Mocha and Chai by providing multiple sets of input values and expected results for your test cases.


### Hooks

Mocha and Chai are popular JavaScript testing frameworks used for writing unit tests and integration tests. They provide various hooks that allow you to execute code before or after certain test cases or test suites.

In Mocha, the available hooks include:

1. `before`: This hook is executed once before all the test cases in a test suite. It can be used to set up any necessary preconditions or initialize resources.
2. `after`: This hook is executed once after all the test cases in a test suite. It can be used to clean up any resources or perform any necessary post-test actions.
3. `beforeEach`: This hook is executed before each individual test case in a test suite. It can be used to set up any necessary preconditions specific to each test case.
4. `afterEach`: This hook is executed after each individual test case in a test suite. It can be used to clean up any resources specific to each test case.

These hooks allow you to perform actions such as setting up a test environment, initializing test data, or cleaning up resources after tests have been executed.

Here's an example of how hooks can be used in Mocha and Chai:

```javascript
const { expect } = require('chai');

describe('MyTestSuite', () => {
  before(() => {
    // Code to execute before all test cases
  });

  after(() => {
    // Code to execute after all test cases
  });

  beforeEach(() => {
    // Code to execute before each test case
  });

  afterEach(() => {
    // Code to execute after each test case
  });

  it('should do something', () => {
    // Test case
    expect(true).to.be.true;
  });

  it('should do something else', () => {
    // Test case
    expect(2 + 2).to.equal(4);
  });
});
```

In this example, the `before` hook is used to set up any necessary preconditions before running the test cases in the `MyTestSuite` suite. The `after` hook is used to clean up any resources after all the test cases have been executed. The `beforeEach` hook is used to set up any necessary preconditions specific to each individual test case, and the `afterEach` hook is used to clean up any resources specific to each individual test case.

These hooks help in organizing and managing the setup and teardown process for your tests, making it easier to write and maintain test suites.

Please note that the usage of hooks may vary depending on the specific testing framework and version you are using. It's always a good idea to refer to the official documentation or resources specific to your chosen framework for more detailed information and examples.

### Tests as documentation

In Mocha Chai, tests can serve as documentation. Mocha is a feature-rich JavaScript test framework that allows you to organize your tests in separate files and automate the testing procedures. Chai is an expectation library for testing that provides an expressive language and readable style for writing tests.

To write tests that serve as documentation, you can use the BDD (Behavior-Driven Development) style provided by Chai. This style allows you to write tests in a natural language format that can be easily read and understood by developers and non-developers alike.

For example, you can use the `describe` function to group related tests together and provide a description of what the tests are testing. You can use the `it` function to define individual tests and provide a description of what the test is checking. By using descriptive language in your test descriptions, you can make your tests serve as documentation for your codebase.

### Regression

Regression testing in software development refers to the process of testing a modified or updated software application to ensure that the changes have not introduced new defects or caused unintended side effects in previously working functionality. It involves retesting the existing features, functionalities, and components of the software to verify their continued proper functioning after changes have been made.

During the development lifecycle, software undergoes various changes such as bug fixes, enhancements, new feature additions, or code refactoring. Regression testing helps ensure that these modifications do not negatively impact the overall stability and functionality of the software.

Running an automated test suite is fast and repeatable, which means you can run tests after every change to confirm that old features still work. If they have regressed, the test output should notify you.

The purpose of regression testing is to catch any potential issues or regressions that may arise due to changes made in the software. By rerunning previously executed test cases, regression testing aims to identify any unexpected failures or deviations from expected behavior.

Regression testing can be performed manually or using automated testing tools. Automated regression testing is often preferred as it allows for faster and more efficient execution of test cases. Test cases are typically selected based on their importance and relevance to the modified areas of the software.

By conducting regression testing, software development teams can maintain the quality and reliability of their applications, ensuring that any modifications do not introduce new defects or break existing functionality.


