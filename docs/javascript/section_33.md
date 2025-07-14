---
title: Software Testing
description: Slim notes.
order: 33
---

**Testing methodologies** are specific strategies for testing all of the pieces of your software to make sure it behaves as expected. These strategies include many ways to [test software](https://www.codecademy.com/resources/docs/general/software-testing), such as unit testing, integration testing, performance testing, and more. In this article, we’ll take a closer look at testing practices that use a test-first approach to software development.

* It reduces the likelihood of regression.

* It increases the confidence that the application works as expected.

* It helps improve documentation on how the code works.

### Why Use Software Testing Methodologies?

There are many reasons that organizations adopt software testing methodologies:

- Software errors can cost companies resources such as money and users.
- Testing results in better reliability.
- Testing can provide a better [end-user](https://www.codecademy.com/resources/docs/uiux/user-and-end-user) experience.
- Failing tests help indicate which part of the software is not working when bugs occur

Overall, the primary goal of testing is to make software development more efficient, reliable, and future-proof.

### Different types of methodologies

Some software testing methodologies prioritize writing test cases before writing the code those test cases will validate. Those types include:

- Test-driven Development (TDD)
- Behavior-driven Development (BDD)
- Specification by Example (SBE)
- Acceptance Test-driven Development (ATDD)

These methodologies are particularly relevant for teams that use an agile, or iterative, approach to software development. Teams don’t have to pick one testing solution and stop there — several approaches can be used by the same team at different stages of development. The following sections take a closer look at TDD and BDD and where they fit into the development cycle to give some more context on testing methodologies in practice.

### Test-driven development

Testing doesn’t necessarily have to occur after code has been written. **Test-driven development** is a methodology that flips the order, where tests are written before the functioning code is written. By writing tests in this order, test cases can start with the definition of their purpose, or use case.

Those use cases define the specification and documentation on what actions are to be supported by new code. TDD tests look at the _components_ of code, like [functions](https://www.codecademy.com/resources/docs/general/function) and [classes](https://www.codecademy.com/resources/docs/general/class), as the smallest unit to test.

In practice, TDD can accelerate software development since it dictates short development cycles with direct test cases. There are many other benefits of test-driven development:

- Developers can better understand the requirements of code, before writing the code.
- Code that will never be executed won’t be added to the codebase.
- The scope of development is reduced.
- Code is written with testability in mind.

TDD is not the only testing methodology that takes a test-first approach to software development.

### Behavior-driven development

Another testing methodology that uses the strategy of writing test cases before code is **behavior-driven development**, or BDD. It is extremely similar to TDD in terms of process. Where these two methodologies differ is in why or when tests are written, what an individual unit is considered to be, and how the language of the test is composed.

Since BDD tests are driven by behavior, the language of the test cases are simplified and written via collaboration between engineers, product owners, and other stakeholders, to ensure the specified behaviors make sense from a user perspective.

It can be said that BDD is more specific than TDD. Changes to the code base, such as changing the design of the code, will not occur unless there is a relevant change in the product. Since those changes are feature-related, the unit of tests is called a “feature.” Test cases are related to whether or not the feature works, rather than if the individual functions or classes you are writing to develop features work. Altogether, the tests are about how the product behaves — not the nitty-gritty technical details.
### Testing Types

There are several kinds of software testing with varying degrees of specificity, including the following:

- Usability tests can be performed on one or a combination of tasks to see how the programming functions in different user-based scenarios.
- Acceptance testing involves checking to make sure the several functions of a system work as expected.
- Regression testing assesses the impact of new features and helps engineers adjust how each feature affects with the program overall.
- Integration testing aims to figure out how well different components of the app work with each other.
- [Unit testing](https://www.codecademy.com/resources/docs/general/unit-testing) attempts to see how different units of code perform in isolation from the rest of the program.
- Through functional testing, engineers can see how software accomplishes specific, intended purposes.
- Stress tests accesses the performance of programs during worst-case scenarios to understand if and how it breaks.
- Performance testing reveals how the program will perform in more common, real-world scenarios.

### Testing Strategies

Two specific techniques are used to assess the stability and performance of software: black-box and white-box testing. Each offers a different perspective into how well the source code holds up.

- Black-box testing involves testing software without looking inside — the coding, systems, and dependencies.
- White-box testing aims to examine the structure within the application, or the inner workings of the app, as opposed to its overall functionality.
