---
title: Mocking
description: Slim notes.
order: 38
---

Mocking is a technique primarily used in unit testing to isolate the behavior of an object being tested by replacing its dependencies with mock objects that simulate the behavior of the real objects. 

This is useful when the real objects are impractical to incorporate into the unit test. Mocking can provide deeper insight into code by showing when functions were called, how many times they were called, and what arguments were passed to them. However, it is important to use mocking sparingly as it can lead to violations of the DRY (Don't Repeat Yourself) principle, make refactoring harder, and reduce the simplicity of the design.

![[Pasted image 20231121203018.png]]

Mocking tests can provide several benefits:
1. **Isolation**: Mocking allows you to isolate the component being tested from its external dependencies, ensuring that any failures or issues are solely related to the component itself and not influenced by the behavior of external systems.
2. **Control**: Mocks give you control over the behavior and responses of the external dependencies, allowing you to simulate different scenarios and edge cases that may be difficult to reproduce with real systems.
3. **Speed**: Mocking can speed up the execution of integration tests by eliminating the need to interact with real external systems, which may involve network calls or time-consuming operations.

### Integration test

Mocking in integration tests refers to the practice of using mock objects to simulate the behavior of external dependencies or services during the execution of integration tests. Integration tests aim to test the collaboration and interaction between different components or systems, including external dependencies such as databases, APIs, or third-party services.

### Unit test

Mocking in unit testing involves replacing a real object or dependency with a mock object that simulates its behavior. This allows the unit test to focus on testing the behavior of the unit in isolation, without relying on the behavior of external systems.

Here's an example of how mocking can be used in a unit test:

Suppose you have a function called `getUsers` that retrieves a list of users from a database. The function relies on a database connection object to perform the query. To test this function, you could create a mock database connection object that simulates the behavior of the real object.

Here's how you could create a mock database connection object using the Jest testing framework:

```javascript
// Define a mock database connection object
const dbConnection = {
  query: jest.fn()
};

// Use the mock object in the unit test
test('getUsers returns a list of users', () => {
  // Set up the mock behavior
  dbConnection.query.mockReturnValueOnce([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);

  // Call the function being tested
  const users = getUsers(dbConnection);

  // Assert that the function returns the expected result
  expect(users).toEqual([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);

  // Assert that the mock object was called with the correct arguments
  expect(dbConnection.query).toHaveBeenCalledWith('SELECT * FROM users');
});
```

In this example, we define a mock database connection object `dbConnection` that has a `query` method. We then set up the mock behavior using `dbConnection.query.mockReturnValueOnce`, which specifies that the first time `dbConnection.query` is called, it should return an array of user objects.

We then call the `getUsers` function with the mock database connection object and assert that it returns the expected result. Finally, we use `expect(dbConnection.query).toHaveBeenCalledWith` to assert that the mock object was called with the correct arguments.

By using a mock object for the database connection, we can test the behavior of `getUsers` in isolation without relying on the behavior of a real database connection. This allows us to control the behavior and responses of the dependency and ensure that the unit being tested behaves correctly under different scenarios.


