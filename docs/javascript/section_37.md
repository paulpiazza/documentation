---
title: Code coverage
description: Slim notes.
order: 37
---

Code coverage is a metric used to measure the degree to which a software application's source code is tested by automated test cases. It represents the percentage of code lines, statements, branches, or functions that are executed during testing. 

Code coverage helps developers to identify areas of code that have not been tested and may contain bugs or defects. It also helps to ensure that the tests are comprehensive and that all critical parts of the code are exercised.

For example, if your code has a function with 100 lines of code and your test suite only exercises 80 of those lines, your code coverage would be 80%. This means that there is 20% of the code that is not being tested by your current test suite.

There are different types of code coverage metrics, such as statement coverage, branch coverage, and path coverage. Statement coverage measures the percentage of executable statements that have been executed during testing. Branch coverage measures the percentage of decision points (such as if/else statements) that have been executed. Path coverage measures the percentage of all possible paths through the code that have been executed.

- _Function Coverage_: Has each function been called?
- _Statement Coverage_: Has each statement been executed?
- _Path Coverage_: Has every edge in the [control-flow graph](https://en.wikipedia.org/wiki/Control-flow_graph) been executed?
- _Condition Coverage_: Has each boolean sub-expression evaluated to be both true and false?

See [wiki](https://en.wikipedia.org/wiki/Code_coverage#Parameter_value_coverage)

By measuring code coverage and striving to achieve high coverage levels, developers can improve the quality and reliability of their software and reduce the likelihood of bugs or defects.

Code coverage is a metric used to measure how much of a codebase is covered by automated tests. It provides insight into the effectiveness of test suites by showing which parts of the code are exercised by tests and which parts are not.

There are several types of code coverage metrics, including statement coverage, branch coverage, and path coverage. Statement coverage measures the percentage of executable statements that are executed by the test suite. Branch coverage measures the percentage of decision points (such as if statements) that are executed by the test suite. Path coverage measures the percentage of possible execution paths through the code that are executed by the test suite.

Here's an example of how to measure code coverage using Mocha and Chai:

1. Install the necessary packages:
```
npm install --save-dev nyc mocha chai
```

2. Create a test file (`test.js`) with some sample tests:
```javascript
const { expect } = require('chai');

function add(a, b) {
  return a + b;
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
```

3. Add a script to run the tests with coverage:
```json
{
  "scripts": {
    "test": "mocha --exit",
    "coverage": "nyc --reporter=text mocha"
  }
}
```

4. Run the tests with coverage:
```
npm run coverage
```

This will run the Mocha tests with code coverage instrumentation provided by NYC. The `--reporter=text` flag specifies that the coverage report should be output in text format. The resulting report will show the percentage of code covered by the test suite, broken down by file and line number.

In summary, code coverage is a metric used to measure how much of a codebase is covered by automated tests. There are several types of code coverage metrics, including statement coverage, branch coverage, and path coverage. Mocha and Chai can be used in conjunction with NYC to measure code coverage in JavaScript projects.
