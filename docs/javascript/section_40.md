---
title: Test your Code with Jest
description: Slim notes.
order: 40
---

### Jest 

When developing and testing in JavaScript, we can use a testing framework called [Jest](https://jestjs.io/docs/getting-started). While there are many testing frameworks out there, Jest focuses on simplicity. Jest provides the two key ingredients needed for testing:

1. An assertion library: an API of functions for validating a program’s functionality
2. A test runner: a tool that executes tests and provides outputted test summaries


Unit testing is a software testing method where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### arrange - act - assert

The "arrange - act - assert" pattern is a fundamental concept in unit testing that helps structure test cases in a clear and organized manner. It is also known as the "Given, When, Then" pattern.

1. **Arrange**: In this stage, the test is set up by preparing the necessary preconditions and inputs for the functionality being tested. This involves initializing variables, creating objects, and setting the conditions required for the test to be executed.

2. **Act**: This stage involves invoking the actual functionality or method that is being tested with the prepared inputs. The goal is to execute the specific behavior or functionality under test.

3. **Assert**: In the final stage, the outcome of the test is verified by making assertions about the expected behavior or output of the tested functionality. This is where the actual output is compared to the expected outcome using assertion functions.

The "arrange - act - assert" pattern provides a clear and structured approach to writing unit tests, making it easier to understand the purpose and flow of each test case.

```js
it("converts array of country data objects to array of countries", () => {

  //arrange
  const inputObject = [
    { name: "Argentina", capital: "Buenos Aires" },
    { name: "Belize", capital: "Belmopan" },
    { name: "Bolivia", capital: "Sucre" }
  ]

  const expectedValue = ["Argentina", "Belize", "Bolivia"]

  //act
  const actualValue = countryExtractor(inputObject)

  //assert
  expect(actualValue).ToEqual(expectedValue)
})
```

### Installation

First, you need to install Jest. Assuming you have `npm` installed, you can add Jest to your project with the following command:

```bash
npm install --save-dev jest
```

### Configuration

You can configure Jest by adding a `jest` section to your `package.json` or by creating a `jest.config.js` file in your project's root. For most projects, Jest should work out of the box without any configuration.

### Writing Tests

Jest looks for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

Here's an example of a simple test for a function `sum.js` that adds two numbers:

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Create a file named `sum.test.js` or `sum.spec.js`:

```javascript
// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```


>[!note]
> it() and test() are functionally equivalent in Jest; they can be used interchangeably.

### Writing Tests with Describe

In Jest, `describe` blocks are used to group together related tests. This is particularly useful for organizing your tests into sections that describe different aspects of the functionality being tested. Here's how you can use `describe` to structure your tests:

```javascript
describe('My Feature', () => {
  // Individual tests or nested describes go here
});
```


Imagine you have a `calculator` module with `add` and `multiply` functions. Here's how you might write tests using `describe` blocks:

```javascript
// calculator.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
```

Now, let's write some tests:

```javascript
// calculator.test.js
const calculator = require('./calculator');

// Main describe block for the calculator
describe('calculator', () => {

  // Nested describe for the add function
  describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds -1 + 2 to equal 1', () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });
  });

  // Nested describe for the multiply function
  describe('multiply', () => {
    test('multiplies 3 * 2 to equal 6', () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });

    test('multiplies 0 * 5 to equal 0', () => {
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });

});
```

### Before and After Hooks

You can also use `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` hooks within your `describe` blocks to run code before and after your tests or before and after all tests in a describe block.

```javascript
describe('calculator with hooks', () => {
  beforeEach(() => {
    // This will run before each test in this describe block
    console.log('Before each test');
  });

  afterEach(() => {
    // This will run after each test in this describe block
    console.log('After each test');
  });

  beforeAll(() => {
    // This will run once before all tests in this describe block
    console.log('Before all tests');
  });

  afterAll(() => {
    // This will run once after all tests in this describe block
    console.log('After all tests');
  });

  // ... your tests here ...
});
```

### Running Tests

Run your tests using:

```bash
npx jest
```

This will run Jest and execute any test files it finds.

### Assertions with Matchers functions

See [List of Assertions](https://jestjs.io/docs/expect)

You will use `expect()`.

Jest provides a rich set of assertion methods called "matchers" that allow you to test different things:

```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

Matcher functions in Jest are used to test values in different ways. Jest provides a variety of built-in matchers that allow you to make assertions about the values being tested. Some commonly used matchers include `toBe`, `toEqual`, `toContain`, `toBeNull`, `toBeTruthy`, and many more.

1. `.toBeDefined()` is used to verify that a variable is not `undefined`. This is often the first thing checked.
2. `.toEqual()` is used to perform deep equality checks between objects.
3. `.toBe()` is similar to .toEqual() but is used to compare primitive values.
4. `.toBeTruthy()` is used to verify whether a value is truthy or not.
5. `.not` is used before another matcher to verify that the opposite result is true
6. `.toContain()` is used when we want to verify that an item is in an array. In this case, since the `.not` matcher is used, we are verifying that `"Ice Cream"` is NOT in the array.

### Async Tests

Testing asynchronous code is easy with Jest. You can use `async/await`, `.then`, or `done`.

Example with `async/await`:

```javascript
test('the data is peanut butter', async () => {
  const data = await fetchData(); // assume this function fetches data
  expect(data).toBe('peanut butter');
});
```

In Jest, you can write asynchronous tests and set a maximum time for them to complete using the `test` function with `async/await` and the `timeout` parameter.

```javascript
test('async test with timeout', async () => {
  const result = await someAsyncFunction(); // Replace with your asynchronous function
  expect(result).toBe(expectedValue);
}, 5000); // 5000 milliseconds (5 seconds) timeout
```

The `5000` parameter sets a maximum timeout of 5000 milliseconds (5 seconds) for the test to complete. If the test takes longer than the specified timeout, it will fail.

### Test callbacks

Here's an example of testing an asynchronous function that uses callbacks and how to use `done()` to handle the asynchronous nature of the code:

```javascript
// Asynchronous function with callback
function fetchData(callback) {
    callback('data');
}

// Test for the asynchronous function using Jest with done()
test('fetchData returns data', (done) => {
  // arrange
  const expectedValue = 'data';

  // act
  function callback(data) {
    // assert
    try {
      expect(response).toBe(expectedValue);
      done()
    } catch (error) {
      done(error)
    }
  }

  fetchData(callback);
});
```

### Mocking

Jest provides ways to mock functions, allowing you to test the interactions between different parts of your code in isolation.

Example of mocking a function:

```javascript
// users.js
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;
```

To test this without actually hitting the API (and thus creating a unit test), you can mock the axios module:

```javascript
// users.test.js
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
```

Why we use mocks?

Testing with the real REST API is not ideal for a few reasons:

- We aren’t concerned about whether the third-party API works. Instead, we only care about whether or not the function that performs the API call works.
- Incorporating REST API calls into our tests can create fragile tests that may fail simply due to network issues.
- If we were interacting with a production-grade database, we could accidentally alter official data.

> [!warning]
> Don't Test on the Production API! Use Mocks instead!

A safer and more efficient way to write our tests would be to create a **mock** function that bypasses the API call and returns values that we control instead

We want to mock `countryListLookup `. We see that we will need to mock `httpRequest` function.

```js
// language_spoken.js
const countryListLookup = async (alpha2Code) => {
  try {
      const res = await httpRequest(alpha2Code)
      return countryExtractor(res.data)
  } catch (error) {  
    return undefined;  
  }
}

// http-request.js
import axios from "axios"
import "regenerator-runtime/runtime.js";

const httpRequest = async (alpha2Code) => {

  const result = await axios.get(`https://restcountries.com/v2/lang/${alpha2Code}`)

  if (result.status) {
      console.log(`REST API call status: ${result.status}`)
  }
  return result
}

export default httpRequest;
```

First we create a mock in `__mocks__/` that will have the same file name and the same function name.

```js
// __mocks__/http-request.js
const httpRequest = jest.fn(() => {

  return Promise.resolve({
    status: "",
    data:{}
  });
})

export default httpRequest;

```

The `jest.fn()` function in Jest is used to create a mock function for testing purposes. When called, `jest.fn()` returns a new, empty mock function. You can then provide custom implementations or behavior for this mock function as needed in your tests.

Here's a brief summary of `jest.fn()` based on the search results:

1. `jest.fn()` creates a mock function that can be used to replace actual functions or modules during testing.

2. If no implementation is provided, the mock function will return `undefined` when invoked.

3. Mock functions created with `jest.fn()` can be used to assert how they were called, what they were called with, and how many times they were called during tests.

You create a file for test `language_spoken.js` where we will test the function `countryListLookup`.

```js
// TODO: Import and mock httpRequest
import httpRequest from './http-request';

/* This means that when the code being tested imports http-request, it will receive the mock implementation instead of the actual module. */
jest.mock('./http-request')

it("correctly fetches a list of countries",  async () => {

  //arrange
  const inputLanguageCode = "jest";
  const expectedValue ="CodeLand";
  const resolvedValue = {
    status: 'MOCK',
    data: [
      { name: "CodeLand", capital: "Codecademy" },
    ]
  };

  // TODO: Mock the first resolved value of httpRequest
  httpRequest.mockResolvedValueOnce(resolvedValue)

  //act
  const actualValue = await countryListLookup(inputLanguageCode);

  //assert
  expect(actualValue).toContain(expectedValue);
});
```

### Continuous Integration

If you're using a CI/CD system, you can integrate Jest so that your tests run automatically. For example, if you're using GitHub Actions, you can add a step in your workflow configuration to run Jest.

Jest is powerful and has many more features and options. This guide covers the basics to get you started, but be sure to check the [Jest documentation](https://jestjs.io/docs/getting-started) for more detailed information and advanced usage.
### Coverage

By default, each test produces the terminal output that we saw in the previous exercise. Jest allows us to customize this output by using command line flags. Though there are many [command-line flags](https://jestjs.io/docs/cli#reference), one of the most commonly used is the `--coverage` flag:

```
npm test -- --coverage
```

Make sure to note the double dash between the `npm test` and `--coverage`. This is to separate the arguments from the test command itself. This `--coverage` flag allows us to get a report of which lines of our code were actually tested. In addition to being outputted in the terminal, this report becomes available in a directory named **coverage/** that is created at runtime.

![jest coverage report](https://static-assets.codecademy.com/Courses/jest/jest_3_1.png)

This report can help us ensure our code has been thoroughly tested. From the report, we can see that there are four categories of our code that are being analyzed:

- **Statement** coverage analyzes the percentage of the program’s statements that have been executed.
- **Branch** coverage analyzes the percentage of the program’s edge cases that have been executed.
- **Function** coverage analyzes the percent of the program’s functions that have been called during testing.
- **Line** coverage analyzes the percentage of the program’s executable lines in the source file that have been executed.




