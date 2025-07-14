---
title: Tests Methods
description: Slim notes.
order: 34
---

At different stages of production for a particular project, you may encounter the opportunity for different types of tests, which can vary in scale and resource intensity, as well as serve different purposes.

![Testing levels art, demonstrating types of tests in a pyramid shape, smaller unit tests at the bottom, larger ent to end tests at the top](https://static-assets.codecademy.com/Courses/testing-concepts/testing-types-pyramid.svg)

### Unit Tests

A _unit test_ covers the smallest possible unit of testable code, such as a single function. In order to keep the scope of a unit test focused on the unit being tested, any data or behavior from other units or external sources that the unit relies on should be replaced with fake (_mock_) data or behavior.

For example, in a weather application, we might have a number of functions that each handle a small piece of computation, such as converting fahrenheit to celsius or formatting incoming weather data from an API. Unit tests would be written first to ensure that these functions can perform independently before we move on to testing how they work together. Any data that might come in from an external database or API would be mocked.

### Integration Tests

An _integration test_ covers how the units of a particular program work with one another. When testing integrations with external services, only the handling of incoming data is tested while the data itself remains mocked.

For example, in a weather application, integration tests would be written to ensure that weather data fetched from an API will be properly formatted to be displayed to the user. It would also ensure that delays, errors, or invalid data from the external service would be handled properly once they are introduced. The data itself would be mocked.

### End to End Tests

An _end to end test_ (sometimes referred to as a _UI layer test_ or _e2e_) automates user flow to test the application in the way that a real user would experience it. To closely match the end user’s experience, this type of testing would also test interactions with external services such as databases and APIs.

For example, in a weather application, end to end tests might be written to simulate a user searching for a particular location, selecting that location, choosing celsius or fahrenheit, and clicking through various aspects of the UI. In this test, the actual database and external API is used.

### How do these tests relate?

The order of tests in this article (unit -> integration -> end to end) represent an increase in resource intensity (time, computation, money) and the scope of the tests (amount of code being tested). Due to the increase in complexity, tests of these types may initially be written in this order. However, as an application is developed, new features may be tested using all three types simultaneously, with each providing different feedback to the developer or testing team.

A typical developer’s feedback loop using these various test types might be:

1. Make code changes
2. Make a pull request
3. The code change has tests run against it (unit, integration, sometimes e2e)
4. If there are any failures then the dev will work on fixes in their local development environment.
5. Repeat steps 1-4 until all tests pass.
6. The pull request is allowed to be merged.

### Setup, Exercise, and Verify

In this exercise you will be separating a test into _setup_, _exercise_, and _verify_ phases. This distinct and well-defined separation of steps makes your test more _reliable_, _maintainable_, and _expressive_.

The phases are defined as follows:

- _Setup_ - create objects, variables, and set conditions that your test depends
- _Exercise_ - execute the functionality you are testing
- _Verify_ - check your expectations against the result of the exercise phase. You can use the `assert` library here

Clear separation of each phase makes a test easier to read, change, and validate.

### Teardown

Add a _teardown_ step to the end of our tests. The teardown phase makes our tests _isolated_ by resetting the environment before the next test runs. This provides two key benefits:

- Changes to the environment caused by one test do not affect the other tests.
- Isolated tests can be executed in any order!

### Examples with Mocha-Chai 


**Unit Tests:**

1. Test the function that converts Fahrenheit to Celsius:
```javascript
describe('convertFahrenheitToCelsius', () => {
  it('should convert 32 degrees Fahrenheit to 0 degrees Celsius', () => {
    expect(convertFahrenheitToCelsius(32)).to.equal(0);
  });

  it('should convert 68 degrees Fahrenheit to 20 degrees Celsius', () => {
    expect(convertFahrenheitToCelsius(68)).to.equal(20);
  });
});
```

2. Test the function that formats incoming weather data from an API:
```javascript
describe('formatWeatherData', () => {
  it('should format weather data correctly', () => {
    const mockData = {
      temperature: 72,
      description: 'Sunny',
      windSpeed: 5,
      humidity: 60
    };
    const expectedOutput = {
      temperature: '72°F',
      description: 'Sunny',
      windSpeed: '5 mph',
      humidity: '60%'
    };
    expect(formatWeatherData(mockData)).to.deep.equal(expectedOutput);
  });
});
```

**Integration Tests:**

1. Test the integration between the function that fetches weather data from an API and the function that formats the data:
```javascript
describe('getWeatherData', () => {
  it('should fetch and format weather data correctly', async () => {
    const mockData = {
      temperature: 72,
      description: 'Sunny',
      windSpeed: 5,
      humidity: 60
    };
    const mockFetchWeatherData = sinon.stub().resolves(mockData);
    const expectedOutput = {
      temperature: '72°F',
      description: 'Sunny',
      windSpeed: '5 mph',
      humidity: '60%'
    };
    const actualOutput = await getWeatherData(mockFetchWeatherData);
    expect(mockFetchWeatherData.calledOnce).to.be.true;
    expect(formatWeatherData.calledWith(mockData)).to.be.true;
    expect(actualOutput).to.deep.equal(expectedOutput);
  });
});
```

**End-to-End Tests:**

1. Test the user flow of searching for a location and viewing the weather:
```javascript
describe('weather app', () => {
  it('should display weather data for a selected location', async () => {
    await page.goto('http://localhost:3000');
    await page.type('#location-input', 'New York');
    await page.click('#search-button');
    await page.waitForSelector('#weather-data');
    const temperature = await page.$eval('#temperature', el => el.innerText);
    const description = await page.$eval('#description', el => el.innerText);
    const windSpeed = await page.$eval('#wind-speed', el => el.innerText);
    const humidity = await page.$eval('#humidity', el => el.innerText);
    expect(temperature).to.match(/-?\d+°F/);
    expect(description).to.be.a('string');
    expect(windSpeed).to.match(/\d+ mph/);
    expect(humidity).to.match(/\d+%/);
  });
});
```

These are just a few examples of how unit tests, integration tests, and end-to-end tests can be applied to a weather application. The specific tests you write will depend on the requirements and features of your application.

 


### Characteristics of an Effective Test Suite

Keep these top-of-mind as you begin building and evaluating your own test suites. The MC-FIRE acronym (Maintainable, Complete, Fast, Isolated, Reliable, and Expressive) may be a helpful acronym to remember these characteristics as you work!
#### Fast

As you learn more about tests in the context of full-stack web applications, you will find that some types of tests, called unit tests, are fast, while other tests, called integration tests, are slower. If your test suite contains a large collection of integration tests, and few unit tests, you may end up waiting a few minutes or even hours for your test suite to execute.

A fast test suite will provide feedback more quickly, and thus, make the development process more efficient than a slow test suite. Often, a developer who is trying to fix a bug will need to run the test suite multiple times to see if their implementation addresses the issue. If they work on the bug for two hours, and need to run the test suite five times, a test suite that takes thirty seconds to run will save 22 minutes over a test suite that takes five minutes to run — the difference can be this significant.

#### Complete

A test suite that covers 100% of your codebase will catch any errors that arise from changing or adding code application. A complete test suite provides you with confidence that your software is working as expected. This characteristic can often run in conflict with building a fast test suite — as you investigate testing further, you will learn about strategies that help you optimize your test suite for speed and completeness.

#### Reliable

A reliable test suite is one that provides consistent feedback, regardless of changes that may occur outside the scope of a given test. An unreliable test suite may have tests that fail intermittently, with no helpful feedback about changes you’ve made to your application.

If a developer is trying to address a bug in their codebase, they will need to run their test suite a few times to see if they’ve addressed the issue. What if they run the test suite two times in-a-row and don’t change their implementation, but receive different sets of failing tests? This is a sign that the developer’s test suite is unreliable. It’s like trying to hit a moving target — they can’t trust if their implementation is wrong or if their test suite is unreliable.

#### Isolated

An isolated test suite contains tests that run without impacting other tests in the suite. This may require you to cleanup persisting data after you run a test in your suite.

For example, you may want to test whether your software properly writes to a database. You don’t want any changes to the database persisting outside of this test. If a change to the database does persist, it may cause unexpected behavior in a test that reads from the database.

#### Maintainable

A maintainable test suite is easy to manipulate — you should be able to add, change, or remove tests with ease. If you don’t know how to add tests to run against new features, your test suite may become incomplete and ineffective.

The best way to keep your test suite maintainable is to be organized, follow coding best practices, and develop a consistent process that works for you and your team.

#### Expressive

The easy-to-read nature of test suites make them a great form of documentation. You should always write code that is descriptive of the features you are testing.

You should try to build a test suite that is descriptive enough for another developer to read, and be able to fully understand the purpose of the web application. Also, because your test suite is part of your software, it is more likely to stay up-to-date than a README or documentation that isn’t a functional piece of the software.
