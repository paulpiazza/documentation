---
title: Test your Code with Testing-Library
description: Slim notes.
order: 41
---

see [copycat](https://gist.github.com/codecademydev/e724654da9418e3ef7d5ae2822565566)

### Principle

React testing library is a light-weight testing utility for React that allows you to test React components in a way that resembles how they are used by end users. Here are some key things to know about react-testing-library:

- It encourages writing tests that validate the rendered DOM output, rather than testing implementation details like state changes. This helps ensure your tests give you confidence that your components work as expected from a user's perspective.

- It provides light utility functions like `render`, `fireEvent`, and `screen` to make it easy to render components, simulate interactions, and assert on the rendered output.

- It avoids using wrapper components like shallow rendering and instead renders in a way that resembles a browser environment, giving tests that are more realistic.

- It aims to encourage good testing practices like avoiding over-mocking dependencies and testing components in isolation when possible.

- The guiding principle is that your tests should resemble how users interact with your components. This helps make tests give you more confidence your components work properly and makes it easier to refactor with less fragile tests.

So in summary, it's a handy utility for testing React components that focuses on testing what the user sees and interacts with rather than implementation details. Using react-testing-library for component tests can help make them faster to write and more maintainable.

### Installation

Installing react-testing-library is easy with npm.

To install it as a development dependency for a React project, run:

```
npm install --save-dev @testing-library/react
```


You'll also typically want to install jest as the test runner:

```
npm install --save-dev jest
```

Once installed, you can create test files with the .test.js extension (e.g. component.test.js) and import utilities from react-testing-library to start testing components!

### Jest-dom

jest-dom is a companion library that provides custom jest matchers for asserting on DOM nodes in tests. It makes tests more declarative and readable.

See [Jest-Dom](https://github.com/testing-library/jest-dom#custom-matchers)

To install:

**With npm**

```bash 
npm install --save-dev @testing-library/jest-dom
```

After installing, you need to import and configure jest-dom in your test setup file (often called `setupTests.js`):

```js
// setupTests.js
import '@testing-library/jest-dom';
```

This makes all the custom jest-dom matchers available in test files.

Some commonly used matchers:

- `toBeInTheDocument()` - Assert an element exists in document
- `toHaveTextContent()` - Assert element's text
- `toBeDisabled()` - Assert a form field is disabled
- `toBeChecked()` - Assert a checkbox or radio is checked
- `toBeEmptyDOMElement()` - Assert an element is empty

An example assertion:

```js
expect(getByText('Submit')).toBeInTheDocument(); 
```

### Render

This function renders the given React component into a containing DOM node that resembles a browser environment for testing 


```jsx
import { render } from '@testing-library/react'; 

test('renders learn react link', () => {

  const { getByText } = render(<App />);
  
  // make assertions after render
});
```

Component with props.

```js
import { render, screen } from '@testing-library/react';
import User from './User';

test('renders user data', () => {

  const user = {
    name: 'John Smith',
    email: 'john@example.com',
    joinedDate: '2021-01-01' 
  };
  
  render(<User user={user} />);

  // Assert name appears
  expect(screen.getByText(/John Smith/i)).toBeInTheDocument();

  // Assert email appears
  expect(screen.getByText(user.email)).toBeInTheDocument();

  // Assert joined date appears 
  expect(screen.getByText('Joined 01/01/2021')).toBeInTheDocument();

});

```
### Screen

This provides access to the rendered DOM output so you can make queries and assertions. It avoids needing to use the return value of render to scope queries.

```jsx 
import { screen } from '@testing-library/react';

test('displays heading', () => {

  render(<MainPage />);
  
  const heading = screen.getByRole('heading');
  
  expect(heading).toHaveTextContent('Welcome!'); 
}); 
```

### Screen Debug

The `screen.debug()` method in React Testing Library prints the rendered component HTML code to the console to help debug tests.

Using it looks like this:

```jsx
import { render, screen } from '@testing-library/react';

test('test debug', () => {
  render(<MyComponent />);
  
  screen.debug(); // print debug output
});
```

When it runs, it will print the entire rendered DOM of the component, something like:

```html
<div>
  <h1>
    My Component
  </h1>
  
  <p>
    Some paragraph text
  </p>
  
  <button>
    Submit
  </button>
</div>
```

Some ways this can be helpful:

- Inspect the actual rendered markup and structure
- Find the proper queries to select elements
- Ensure elements you expect are actually rendered
- See the effects of component state changes

The output can help uncover discrepancies between what you expect to be rendered and what React is actually rendering.

Some tips when using `screen.debug()`:

- Call it intermittently not after every test
- Use it alongside other assertions 
- Make sure to remove calls before committing code

So in summary, it's a handy debugging aide for inspecting and fine-tuning test behavior and assertions.
### FireEvents

The `fireEvent` functions in react-testing-library are used to simulate user events on rendered elements. This allows you to test how your React components respond to different interactions.

Here is an example test that uses `fireEvent` to simulate a click and test that it triggers an alert:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';

function Button() {
  function handleClick() {
    alert('Button clicked!'); 
  }

  return <button onClick={handleClick}>Test Button</button>;
}

test('clicking button triggers alert', () => {
  render(<Button />);
  
  // Get button element 
  const button = screen.getByText('Test Button');

  // Simulate click event
  fireEvent.click(button);

  // Assert alert was called  
  expect(window.alert).toHaveBeenCalledWith('Button clicked!');
});
```

In this example:

- We import `render`, `screen`, and `fireEvent` from react-testing-library
- We render the <Button /> component
- Use `screen.getByText()` to get the button element
- Call `fireEvent.click(button)` to simulate a click on it 
- Assert that click handler was called using a mock

Some other useful `fireEvent` methods are:

- `fireEvent.change()` for input change events 
- `fireEvent.keyDown()` for key presses
- `fireEvent.blur()` for losing focus  

### Querying

React Testing Library provides several methods to query elements from the rendered component DOM for making assertions in your tests.

Here are some commonly used querying methods:

- `getByText()` - Find an element by its text content. Useful for buttons, labels, etc.

```js
const button = getByText('Submit'); 
```

- `getByLabelText()` - Find an element by associated label text. Good for form elements.

```js 
const input = getByLabelText('Email');
```

- `getByPlaceholderText()` - Find by placeholder attribute.

- `getByRole()` - Find by ARIA role. Helpful for accessibility.

```js
const listbox = getByRole('listbox'); 
```

- `getByTestId()` - Find by a test ID attribute. Useful as an escape hatch if other queries don't work.

- `getAllBy*` - Return all matching elements, not just one.

- `queryBy*` - Return the element or null if not found. Won't throw errors.

- `findBy*` - Similar to query, but will retry waiting for element to appear.

The priority is to use the "ByRole" queries first as they test accessibility, then text-based queries, with test ID queries being more of a fallback.

Some key benefits of these methods are:

- They encourage well-structured tests that look for elements the way a user finds them.
- No need to deal with component instance or state.
- Tests not coupled to implementation details.

Overall, these querying methods help make UI testing intuitive and maintainable.

### Querying Async components

Here are a few approaches to test components that render asynchronously in React:

**1. Use findBy**

The `findBy` queries wait for elements to appear asynchronously.

```jsx
test('displays async data', async () => {

  render(<AsyncComponent/>);

  const data = await findByText(/fetched data/i);

  expect(data).toBeInTheDocument();
});
```

**2. Wait for component state change**

Wait for the component to update state after the async operation.

```jsx 
test('displays async data', async() => {

  const { getByText } = render(<AsyncComponent />);
  
  await waitFor(() => {
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  const data = await findByText(/fetched data/i);
  
  // Assertions  
});
```

**3. Resolve Promises**

Return promises from test and resolve once component updates.

```jsx
test('displays async data', () => {

  const {getByText} = render(<AsyncComponent />);

  return Promise.resolve()
    .then(() => expect(getByText(/loading/i)).toBeInTheDocument()))
    .then(() => expect(getByText(/fetched data/i)).toBeInTheDocument()));
  
});
```

So in summary, `findBy`, waitFor, and manually resolving promises are good approaches to test asynchronous rendering scenarios in React.

### Type of Queries

See [RTL](https://testing-library.com/docs/queries/about)

- Single Elements
    - `getBy...`: Returns the matching node for a query, and throw a descriptive error if no elements match _or_ if more than one match is found (use `getAllBy` instead if more than one element is expected).
    - `queryBy...`: Returns the matching node for a query, and return `null` if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use `queryAllBy` instead if this is OK).
    - `findBy...`: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use `findAllBy`.
- Multiple Elements
    - `getAllBy...`: Returns an array of all matching nodes for a query, and throws an error if no elements match.
    - `queryAllBy...`: Returns an array of all matching nodes for a query, and return an empty array (`[]`) if no elements match.
    - `findAllBy...`: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of `1000`ms.
        - `findBy` methods are a combination of `getBy*` queries and [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async#waitfor). They accept the `waitFor` options as the last argument (i.e. `await screen.findByText('text', queryOptions, waitForOptions)`)
### Mimicking User interactions

The `userEvent` library from Testing Library provides methods to simulate realistic user interactions like clicks, text entry, hovers etc. This allows testing components in a way that resembles actual usage.

Here is an example of using `userEvent` to mimic filling out and submitting a login form:

```jsx
import userEvent from '@testing-library/user-event';

test('submitting login form', async () => {

  render(<LoginForm />);
  
  // Get elements
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password'); 
  const submitBtn = screen.getByRole('button', {name: 'Submit'});

  // Simulate typing into inputs
  await userEvent.type(usernameInput, 'myuser');
  await userEvent.type(passwordInput, 'P4ssword!');

  // Simulate form submission
  await userEvent.click(submitBtn); 

  // Assertions 
  expect(mockApi.login).toHaveBeenCalledWith({
    username: 'myuser',
    password: 'P4ssword!' 
  })

})
```

Some key user interactions covered:

- Typing text into inputs
- Clicking buttons 
- Mouse movements
- Focusing elements

### WaitFor and user Events

The `waitFor` utility from React Testing Library allows you to wait for certain conditions to pass before continuing in your test. This is helpful for testing asynchronous behavior.

Here is an example test using `waitFor` to wait for an element to appear:

```jsx
import { waitFor, render, screen } from '@testing-library/react';  
import '@testing-library/jest-dom';  
import userEvent from '@testing-library/user-event';  
import { Header } from './heaader.js'  
  
it('should remove header display', async () => {  
  // Render Header  
  render(<Header/>)  
  // Extract button node  
  const button = screen.getByRole('button');  
  // click button  
  userEvent.click(button);  
  
  // Wait for the element to be removed asynchronously  
  await waitFor(() => {  
    const header = screen.queryByText('Hey Everybody');  
    expect(header).toBeNull()  
  })  
});
```

### Testing for Accessibility

One of the guiding principles of React Testing Library is to write “queries that reflect the experience of visual/mouse users as well as those that use assistive technology.” Usually, this means using the same text that the user would see, rather than the implementation details like class names or IDs.

Writing tests that adhere to this principle forces you to make your applications more accessible. If a test can find and interact with your elements by their text, it’s more likely that a user who uses assistive technology can as well.

One way we can write tests with accessibility concerns in mind is by sticking to querying with `ByRole` queries (`getByRole`, `findByRole`, `queryByRole`). The `ByRole` variant will be able to query any elements within the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree). If you are unable to query for the component you want to test, you may have just exposed a part of your application that is inaccessible.

Let’s see this in action. Suppose we’re testing an input form:

```
<input id="search" value="" />
```

If we try to use `getByRole`, it will not be able to query for this element. This exposes a component that is inaccessible. To fix it, we would have to make some modifications to the element by adding a `type` which provides a [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and `label` with an `htmlFor` attribute which provides an [accessible name](https://www.tpgi.com/what-is-an-accessible-name/) for an element. Note that how you assign accessible names differs based on the tag you’re using.

```html
<label htmlFor="search">
	<input type="search" id="search" value="" />
</label>
```

Then our query can be:

```js
screen.getByRole('searchbox', {name: /search/i})
```

Great! We’ve knocked out two birds with one stone here. We made our input more accessible, and we were able to narrow down what query to use.

While `ByRole` is a great default for accessibility, you can visit the [React Testing Library Playground](https://testing-playground.com/) for suggestions on accessible queries for more complex needs.

Including accessibility considerations in your testing process can help proactively identify and address potential accessibility issues. This not only ensures that your application is inclusive and usable by a wider range of users but also enhances the overall quality and user experience.

> Note: If you want to explore a bit more about accessibility, check out the [What is Digital Accessbility](https://www.codecademy.com/article/what-is-digital-accessibility) article, or even try your hand at using [screen readers](https://www.codecademy.com/article/how-to-setup-screen-reader) to assess how accessible your projects are!

