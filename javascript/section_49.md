---
title: React
description: Slim notes.
order: 49
---
### React Components

#### Components

In React, a component is an independent and reusable piece of code that serves a specific purpose in building user interfaces. Components in React can be thought of as building blocks that encapsulate functionality and UI elements. They are similar to JavaScript functions but work in isolation and return HTML or JSX (a syntax extension for JavaScript that allows writing HTML-like code).

React components can be classified into two types: class components and function components. Class components are defined using ES6 classes and extend the base `React.Component` class. Function components, on the other hand, are defined as JavaScript functions.

Components in React are designed to be modular and reusable, allowing developers to create complex UIs by composing smaller, self-contained components. This promotes code reusability, maintainability, and separation of concerns.

Here are a few key points about React components:

- Components can receive input data called "props" (short for properties) that allow them to be customized and configured.
- Components can maintain their own internal state using the `useState` hook or by extending the `React.Component` class.
- Components can render other components, creating a hierarchy of nested components.
- Components can handle user interactions and events by defining event handlers.

To summarize, React components are the building blocks of a React application, allowing developers to create reusable and modular UI elements.

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

In this example, we have a simple function component called `Greeting`. It takes in a `props` object as an argument, which allows us to pass data to the component from its parent. In this case, we're expecting a `name` prop.

The component returns JSX, which is a syntax extension for JavaScript that allows us to write HTML-like code. In this case, we're returning an `<h1>` element that displays a greeting with the value of the `name` prop.

To use this component in another part of our application, we can import and render it:

```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
```

In this example, we import the `Greeting` component and render it twice, passing different names as props. This will result in two `<h1>` elements displaying "Hello, John!" and "Hello, Jane!".

Please note that this is just a basic example to illustrate the concept of a React component. In real-world applications, components can be much more complex and can have additional features like state management, event handling, and lifecycle methods.

You can also use the `render`

```js
import React from 'react';  
import ReactDOM from 'react-dom/client';  
  
function MyComponent() {  
  return <h1>Hello world</h1>;  
}  

const container = document.getElementById('app') 
const root = ReactDOM.createRoot(container)

root.render(<MyComponent />);
```

Here's an example of a React class component:

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

In this example, we have a class component called `Counter` that extends the `Component` class from React. It has an initial state with a `count` property set to 0.

The component has a method called `incrementCount`, which uses the `setState` method to update the `count` state by incrementing it by 1.

The `render` method is responsible for rendering the component's UI. It displays the current count value using `this.state.count`, and a button that triggers the `incrementCount` method when clicked.

To use this component in another part of our application, we can import and render it:

```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

In this example, we import the `Counter` component and render it within the `App` component. This will display the counter UI with an initial count of 0, and clicking the "Increment" button will update the count accordingly.

Class components are useful when you need to manage state, handle lifecycle methods, or have more complex logic within your components.

#### Review

In this lesson, you’ve learned about a foundational React concept: components.

Before you go, here’s a recap:

- React applications are made up of **components**.
- Components are responsible for rendering pieces of the user interface.
- To create components and render them, `react` and `reactDOM` must be imported.
- React components can be defined with Javascript functions to make **function components**.
- Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.
- Function components must return some React elements in JSX syntax.
- React components can be exported and imported from file to file.
- A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
- Rendering a React component requires using `.createRoot()` to specify a root container and calling the `.render()` method on it.


### Component Lifecycle Methods

see [resume](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

The component lifecycle has three high-level parts:

1.  _Mounting_, when the component is being initialized and put into the DOM for the first time
2.  _Updating_, when the component updates as a result of changed state or changed props
3.  _Unmounting_, when the component is being removed from the DOM

![[component-lifecycle-react.png]]


The lifecycle of a component:
1. _Mounting_, when the component is being initialized and put into the DOM for the first time. We saw that the `constructor`, `render()`, and `componentDidMount()` are called during this phase.
2. _Updating_, when the component updates as a result of changed state or changed props. We saw that `render()` and `componentDidUpdate()` are called during this phase.
3. _Unmounting_, when the component is being removed from the DOM. We saw that `componentWillUnmount()` was called here, which was a good time to clean things up.

_In general, when a component produces a side-effect, you should remember to clean it up.
_

Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You will get this error :

```
Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the undefined component.
```

You should stop the setInterval:

```javascript
import React from 'react';

export class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		return <div>{this.state.date.toLocaleTimeString()}</div>;
	}

	componentDidMount() {
		const oneSecond = 1000;
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, oneSecond);
	}
	
	// will stop the side-effect. No error will be displayed.
	componentWillUnmount() {
		clearInterval(this.intervalID);
	};
}
```

An update is caused by changes to props or state. Every time you’ve called `setState()` with new data, you’ve triggered an update. Every time you change the props passed to a component, you’ve caused it to update.

When a component updates, it calls [several methods](https://reactjs.org/docs/react-component.html#updating), but only two are commonly used: `render()` and `componentDidUpdate()`

Even though the data changes many times a second, it’s only being updated and re-rendered once a second. 

We’d like the clock to update more frequently in precise mode. Instead of updating every second, we’d like it to update 10 times a second (every 100 milliseconds instead of every 1000).

```javascript
import React from 'react';

export class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	
	render() {
		return (
			<div>
				{this.props.isPrecise
					? this.state.date.toISOString()
					: this.state.date.toLocaleTimeString()}
			</div>
		);
	}
	
	componentDidMount() {
		const oneSecond = 1000;
			this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, oneSecond);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	
	componentDidUpdate(prevProps) {
		let delay = 100;
		if (this.props.isPrecise === prevProps.isPrecise) {
			return;
		}
	
		clearInterval(this.intervalID);
		
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, delay);
	}
}
```

see this video:

![[component-react.webm]]

#### Unmounting Lifecycle Method

```javascript
 componentWillUnmount(prevProps, prevState) {
	 clearInterval(this.interval);
}
```

React supports one unmounting lifecycle method, `componentWillUnmount`, which will be called right before a component is removed from the DOM.

`componentWillUnmount()` is used to do any necessary cleanup (canceling any timers or intervals, for example) before the component disappears.

Note that the `this.setState()` method should not be called inside `componentWillUnmount()` because the component will not be re-rendered.

#### Component Mount

A React component _mounts_ when it renders to the DOM for the first time. If it’s already mounted, a component can be rendered again if it needs to change its appearance or content.

#### Component Mounting Phase

A component “mounts” when it renders for the first time. When a component mounts, it automatically calls these three methods, in the order of:

1. `constructor()`
2. `render()`
3. `componentDidUpdate()`

#### Lifecycle Phases

There are three categories of lifecycle methods: mounting, updating, and unmounting.

A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called.

The first time that a component instance renders, it does not update. Starting with the second render, a component updates every time that it renders.

A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

### Components and advance JSX

#### React Fragment

In React, `<>` and `</>` are shorthand syntax for a React fragment. A React fragment is a way to group a list of children without adding extra nodes to the DOM.

Here's an example:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </>
  );
}

export default MyComponent;
```

In this example, we've used the `<>` and `</>` syntax to create a React fragment that contains two child elements: an `h1` element and a `p` element. The fragment allows us to group these elements together without adding an extra node to the DOM.

Before the introduction of fragments, you had to wrap your child elements in an extra element (e.g., a `div`) to group them together. This could lead to unnecessary nesting and styling issues.

Fragments provide a cleaner way to group child elements without introducing extra nodes to the DOM. They are especially useful when you have a list of child elements that need to be rendered together.

Note that you can also use the long-form syntax for fragments, which looks like this:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
}

export default MyComponent;
```

Both syntaxes are equivalent and achieve the same result.

#### Use Multiline JSX in a Component

Here's an example of how to use multiline JSX in a React component:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a multiline JSX example.</p>
      <img
	      alt="my image"
	      src="./test.png"
		/>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  );
}

export default MyComponent;
```

In this example, we have a function component called `MyComponent` that returns a multiline JSX expression. The expression is wrapped in parentheses to span multiple lines, and each line is indented for readability.

The expression contains multiple HTML elements, including an `<h1>` heading, a `<p>` paragraph, and an unordered list (`<ul>`) with three list items (`<li>`).

#### Use a Variable Attribute in a Component

In React, you can use a variable attribute in a component by using curly braces `{}` to enclose the JavaScript expression. Here's an example:

```jsx
import React from 'react';

function MyComponent() {
  const text = 'Hello, world!';
  const attribute = 'color';

  return (
    <div>
      <h1 {attribute}="blue">{text}</h1>
    </div>
  );
}

export default MyComponent;
```

In this example, we have a function component called `MyComponent`. Inside the component, we have two variables: `text` and `attribute`. The `text` variable holds the value `'Hello, world!'`, and the `attribute` variable holds the value `'color'`.

Within the JSX expression, we can use the `attribute` variable as an attribute name by enclosing it in curly braces `{}`. In this case, we set the `color` attribute of the `<h1>` element to `'blue'`.

#### Putting Logic in a Function Component

In React, you can put logic in a function component by using JavaScript within the component's body. Here's an example:

```jsx
import React from 'react';

function MyComponent() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

export default MyComponent;
```

In this example, we have a function component called `MyComponent`. Inside the component, we have a variable `isLoggedIn` that represents the user's login status.

We can use JavaScript logic, such as an `if` statement, to conditionally render different JSX based on the value of `isLoggedIn`. If `isLoggedIn` is `true`, the component will render a `<h1>` element with the text "Welcome back!". Otherwise, it will render a `<h1>` element with the text "Please log in."

#### Event Listener and Event Handlers in a Component

In web development, event listeners and event handlers are used to handle user interactions with the interface. An event listener is a function or piece of code that waits for a specific event to occur, such as a button click or mouse hover, and then triggers the associated event handler.

An event handler, also known as an event callback, is the function that gets executed when the specified event occurs. It contains the logic or actions that should be performed in response to the event.

In React components, event listeners and event handlers can be added to elements using JSX syntax. For example, you can attach an event listener to a button's `onClick` attribute and provide an event handler function that will be called when the button is clicked.

Here's an example of how to use an event listener and event handler in a React component:

```jsx
import React from 'react';

function MyComponent() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default MyComponent;
```

In this example, we have a function component called `MyComponent`. Inside the component, we define an event handler function called `handleClick` that logs a message to the console when the button is clicked. The `handleClick` function is then passed as the `onClick` attribute of the `<button>` element.

When the button is clicked, the `handleClick` function will be executed, and the message "Button clicked!" will be logged to the console.

It's important to note that in React, event names are camel-cased (e.g., `onClick`, `onMouseOver`) and the event handler functions are passed as references without parentheses.

Event listeners and event handlers are essential for creating interactive web applications and handling user interactions. They allow you to respond to user actions and update the UI accordingly.

#### Review 

Here’s a short recap of the concepts introduced in this lesson:

- Function components can return multiple JSX lines by nesting the elements in a parent element.
- Variable attributes can be used inside of a React component with JavaScript injections.
- React components support logic by putting the logic statements above the return statements.
- Components can conditionally return JSX elements by putting conditional statements inside of the components.
- Components can respond to events by defining event handlers and passing them to the JSX elements.



### Props

In React, `props` (short for "properties") are a way to pass data from a parent component to a child component. Props are read-only, meaning that the child component cannot modify the props it receives from its parent.

Props are passed down the component tree as a single object and can be accessed in the child component using the `props` keyword. Here's an example of how to use props in a React component:

```jsx
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default MyComponent;
```

In this example, we have a function component called `MyComponent`. The component accepts a `props` object as an argument, which contains two properties: `name` and `age`.

We can access the `name` and `age` properties of the `props` object inside the JSX expression using curly braces `{}`. This allows us to dynamically render the component based on the values of the props.

To use this component in another part of our application, we can import and render it:

```jsx
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent name="Alice" age={25} />
      <MyComponent name="Bob" age={30} />
    </div>
  );
}

export default App;
```

In this example, we import the `MyComponent` component and render it twice within the `App` component. We pass different values for the `name` and `age` props to each instance of the component.

Using props allows you to create reusable components that can be customized based on their usage context. It also makes it easier to maintain and update your components since you can change the props passed down to them without modifying their code.

#### Event Handler in prop

In React, you can pass an event handler as a prop to a child component. This allows the child component to trigger the event handler when a specific event occurs. Here's an example:

```jsx
import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick}>Click me</button>
  );
}

function App() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
```

In this example, we have two components: `Button` and `App`. The `Button` component receives a prop called `onClick`, which represents the event handler for the button's click event.

Inside the `Button` component, we attach the `onClick` prop to the button's `onClick` attribute. This means that when the button is clicked, the event handler function provided in the prop will be executed.

In the `App` component, we define the `handleClick` function as the event handler. We then pass this function as the `onClick` prop when rendering the `Button` component.

When the button is clicked, the `handleClick` function will be called, and the message "Button clicked!" will be logged to the console.

Passing event handlers as props allows you to create reusable components that can trigger specific actions when events occur. It provides a way to handle user interactions in child components while keeping the logic and state management in the parent component.

#### Children

In React, `props.children` is a special prop that allows you to pass components or elements as children to another component. It is used when you want to render content between the opening and closing tags of a component.

Here's an example to demonstrate the usage of `props.children`:

```jsx
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card>
        <h1>Hello, world!</h1>
        <p>This is a card component.</p>
      </Card>
    </div>
  );
}

export default App;
```

In this example, we have a `Card` component that renders a `<div>` element with a CSS class of "card". The content between the opening and closing tags of the `Card` component is accessed using `props.children`. In this case, the children are a `<h1>` element with the text "Hello, world!" and a `<p>` element with the text "This is a card component."

When we use the `Card` component in the `App` component and provide child elements, those elements will be rendered inside the `Card` component as its children. This allows us to create flexible and reusable components that can wrap and display different content.

You can pass any valid JSX elements or components as children to a component using `props.children`. This makes it easy to compose complex UI structures and nest components within each other.

#### Default value to props

In React, you can provide default values to props by using the `defaultProps` property. This allows you to specify default values for props in case they are not explicitly provided when the component is used.

Here's an example of how to give default values to props using `defaultProps`:

```jsx
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

MyComponent.defaultProps = {
  name: 'Guest',
  age: 18
};

export default MyComponent;
```

In this example, we have a function component called `MyComponent`. Inside the component, we access the `name` and `age` props using `props.name` and `props.age`, respectively.

We set default values for the `name` and `age` props using the `defaultProps` property of the component. If the `name` or `age` props are not provided when using the component, these default values will be used instead.

To use this component in another part of our application, we can import and render it:

```jsx
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent name="Alice" age={25} />
      <MyComponent />
    </div>
  );
}

export default App;
```

In this example, we render two instances of the `MyComponent` component. The first instance provides values for the `name` and `age` props, while the second instance does not provide any props.

As a result, the first instance will render "Hello, Alice! You are 25 years old.", while the second instance will render "Hello, Guest! You are 18 years old." This is because the default values specified in `defaultProps` are used for the second instance.

Using `defaultProps` allows you to provide fallback values for props and ensure that your components behave as expected even if certain props are not provided.

#### Destructuring Props

Destructuring props in React is a technique that allows you to extract specific properties from the `props` object and assign them to individual variables. This can help make your code more readable and reduce the need to repeatedly reference `props.propName` when accessing props in your component.

There are multiple ways to destructure props in React. One common approach is to destructure the props directly in the function signature of your component. For example:

```jsx
import React from 'react';

function MyComponent({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default MyComponent;
```

In this example, the `name` and `age` props are destructured directly in the function signature of the `MyComponent` component. This allows you to use `name` and `age` as variables within the component without explicitly referencing `props.name` and `props.age`.

Another approach is to destructure the props inside the function body using assignment syntax. For example:

```jsx
import React from 'react';

function MyComponent(props) {
  const { name, age } = props;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default MyComponent;
```

In this example, the `name` and `age` variables are assigned using destructuring assignment within the function body. This achieves the same result as the previous example.

Destructuring props can make your code more concise and easier to read, especially when you have multiple props being passed into a component. It provides a convenient way to extract only the properties you need from the `props` object.

#### Prop types

If you are not using TypeScript but still want to type your props in React, you can use a dependency like PropTypes. PropTypes is a runtime type-checking library that allows you to define the expected types for props and validate them during development.

To use PropTypes, you need to install it as a dependency in your project. You can do this by running the following command:

```
npm install prop-types
```

Once you have PropTypes installed, you can define the expected types for your props using the `propTypes` property of your component. Here's an example:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MyComponent;
```

In this example, we import PropTypes from the 'prop-types' package and use it to define the expected types for the `name`, `age`, and `onClick` props of the `MyComponent` component. The `propTypes` property is assigned an object that specifies the expected types using the PropTypes API.

By defining propTypes, you can catch type errors during development and get warnings in the console if the expected types are not provided or do not match. The `isRequired` modifier is used to indicate that a prop is required.

Using PropTypes provides a way to add some level of type checking to your React components without using TypeScript. It helps ensure that the props passed to your components adhere to the specified types and improves code reliability.


#### Review

That completes our lesson on props! Here are some of the skills that you’ve learned:

- Passing a prop by giving an _attribute_ to a component instance.
- Accessing a passed-in prop via `props.propName`.
- Displaying a prop.
- Using a prop to make decisions about what to display.
- Defining an event handler in a function component.
- Passing an event handler as a prop.
- Receiving a prop event handler and attaching it to an event listener.
- Naming event handlers and event handler attributes according to a convention.
- Accessing `props.children`.
- Assigning default values to props.


### Hooks

In React, hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 as a way to write reusable and stateful logic without using class components.

Hooks provide a more concise and intuitive way to manage component state, handle side effects, and access React's lifecycle methods. Some commonly used hooks include:

1. `useState`: This hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

2. `useEffect`: This hook is used for handling side effects in functional components. You can perform actions such as fetching data, subscribing to events, or manipulating the DOM inside the `useEffect` function.

3. `useContext`: This hook allows you to access the value of a React context within a functional component. It provides a way to share data across multiple components without prop drilling.

4. `useReducer`: This hook is an alternative to `useState` and is useful for managing complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state.

5. `useCallback` and `useMemo`: These hooks are used for performance optimization. `useCallback` memoizes a function, while `useMemo` memoizes the result of a computation, preventing unnecessary re-renders.

These are just a few examples of the hooks available in React. Hooks allow you to write more modular and reusable code by separating concerns into smaller custom hooks.

Using hooks can make your code easier to understand, test, and maintain. They promote functional programming practices and eliminate the need for class components in many cases.

It's important to note that hooks can only be used within functional components or other custom hooks. They cannot be used in regular JavaScript functions or class components prior to React 16.8.

#### useState

##### principle

The `useState` hook is one of the most commonly used hooks in React. It allows you to add state to functional components. With `useState`, you can declare and manage state variables within your component.

Here's an example of how to use the `useState` hook:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

In this example, we import `useState` from the 'react' package. Within the `Counter` component, we use the `useState` hook to declare a state variable called `count` with an initial value of 0.

The `useState` function returns an array with two elements: the current value of the state variable (`count`) and a function (`setCount`) to update the state. We use array destructuring to assign these values to `count` and `setCount` respectively.

Inside the component, we render the current value of `count` and a button. When the button is clicked, the `increment` function is called, which uses `setCount` to update the value of `count` by incrementing it.

Whenever the state is updated using `setCount`, React will re-render the component, reflecting the new value of `count` in the UI.

The `useState` hook simplifies state management in functional components by providing a straightforward way to declare and update state variables.

##### functional update form

When using the `useState` hook in React, the correct way to update the state using the setter function is to use the functional update form. This is especially important when the new state value depends on the previous state value. The correct syntax for updating the state using the functional form is as follows:

```jsx
setMyValue((prev) => {
  // Calculate the new state value based on the previous state (prev)
  return /* new state value */;
});
```

In this syntax:
- `setMyValue` is the setter function returned by the `useState` hook.
- `(prev)` is a parameter representing the previous state value.
- The arrow function is used to calculate and return the new state value based on the previous state value.

Here's an example of how you might use this syntax in a functional component:

```jsx
import React, { useState } from 'react';

function ExampleComponent() {
  const [myValue, setMyValue] = useState(initialValue);

  // Update myValue using the functional form of setState
  const handleButtonClick = () => {
    setMyValue((prev) => {
      // Calculate the new state value based on the previous state (prev)
      return /* new state value */;
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Update Value</button>
      {/* Render myValue or use it in other ways */}
    </div>
  );
}
```

This approach ensures that you are correctly updating the state based on its previous value, especially in cases where multiple state updates may occur in rapid succession.


##### arrays and objects in state

In React, you can use arrays and objects as state variables with the `useState` hook. This allows you to manage more complex data structures within your components.

Here's an example of how to use arrays and objects in state:

```jsx
import React, { useState } from 'react';

function Example() {
  const [list, setList] = useState([]);
  const [person, setPerson] = useState({ name: '', age: 0 });

  const handleAddItem = () => {
    setList([...list, 'New Item']);
  };

  const handleUpdatePerson = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleUpdatePerson}>Update Age</button>
    </div>
  );
}

export default Example;
```

In this example, we have a `list` array and a `person` object as state variables. We use `useState` to initialize them with empty array and object respectively.

To add an item to the `list` array, we define the `handleAddItem` function which uses the spread operator (`...`) to create a new array with the existing items along with the new item. We then update the state using `setList`.

To update the `age` property of the `person` object, we define the `handleUpdatePerson` function. It creates a new object by spreading the existing properties of `person` and updating the `age` property. We then update the state using `setPerson`.

In the component's return statement, we render the items in the `list` array as list items using the `map` function. We also display the `name` and `age` properties of the `person` object.

When the "Add Item" button is clicked, a new item is added to the `list` array, and React re-renders the component with the updated list. When the "Update Age" button is clicked, the `age` property of the `person` object is incremented, and React re-renders the component with the updated age.

Using arrays and objects in state allows you to manage more complex data structures and update specific properties within them.

##### Seperate states

When working with multiple state variables in a React component, it is generally recommended to use separate `useState` hooks for each state. This approach allows you to manage and update each state independently.

Here's an example of using separate hooks for separate states:

```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default Example;
```

In this example, we have two separate state variables: `count` and `name`. We use two separate `useState` hooks to declare and initialize each state.

The `handleIncrement` function updates the `count` state by incrementing its value when the button is clicked.

The `handleNameChange` function updates the `name` state by capturing the value from the input element and setting it using `setName`.

By using separate hooks, we can manage and update each state independently. React will handle the re-rendering of the component with the updated state values.

Separating hooks for separate states improves code organization and makes it easier to reason about and maintain your component's state management.

##### Review on useState

- With React, we feed static and dynamic data models to JSX to render a view to the screen.
- Hooks are used to “hook into” the internal component state for managing dynamic data in function components.
- We employ the State Hook using the code below. The `currentState` references the current value of the state and `initialState` initializes the value of the state for the component’s first render.

```js
const [currentState, stateSetter] = useState( initialState );
```

- State setters can be called in event handlers.
- We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.
- We use a state setter callback function when our next value depends on our previous value.
- We use arrays and objects to organize and manage related data that tend to change together.
- Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`.
- It’s best practice to have multiple, simpler states instead of having one complex state object.


#### useEffect

##### principle

The `useEffect` hook in React allows you to perform side effects in functional components. Side effects can include fetching data, subscribing to events, manipulating the DOM, and more. The `useEffect` hook is similar to lifecycle methods in class components.

There are three key moments when the Effect Hook can be utilized:

1. When the component is first added, or _mounted_, to the DOM and renders.
2. When the state or props change, causing the component to re-render.
3. When the component is removed, or _unmounted_, from the DOM.

Here's an example of how to use the `useEffect` hook:

```jsx
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetcher;
```

In this example, we have a `DataFetcher` component that fetches data from an API using the `fetch` function inside the `useEffect` hook. The fetched data is stored in the `data` state variable using the `setData` function.

The `useEffect` hook takes two arguments: a callback function and an optional dependency array. In this case, we provide an empty dependency array `[]`, which means the effect will only run once when the component mounts.

Inside the callback function, we make the API request and update the state with the fetched data using `setData`. If there is an error during the fetch, we log it to the console.

In the component's return statement, we conditionally render either the fetched data as a list or a "Loading..." message based on the value of `data`.

Now let's see an example of a custom hook that uses other hooks:

```jsx
import React, { useState, useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

In this example, we have a custom hook called `useDocumentTitle` that updates the document title based on a provided title value. It uses the `useEffect` hook to set the document title whenever the `title` dependency changes.

Inside the `MyComponent` component, we declare a state variable called `count` and use the `useDocumentTitle` custom hook to update the document title with the current count value.

By creating custom hooks, you can encapsulate reusable logic and share it across multiple components.

##### clean up effects

When using the `useEffect` hook in React, it's important to clean up any effects that you have set up to avoid memory leaks and ensure proper behavior of your component. The cleanup function allows you to perform any necessary cleanup operations before the component unmounts or before the next effect is executed.

To clean up effects in React, you can return a function from the effect function. This returned function will be called by React when the effect is no longer needed. You can use this function to unsubscribe from event listeners, cancel timers, close connections, or perform any other necessary cleanup operations.

Here's an example to illustrate the cleanup function in `useEffect`:

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform side effect here
    // Fetch data, subscribe to events, etc.
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));

    // Return a cleanup function if needed
    return () => {
      // Cleanup operations here
      // Unsubscribe from events, close connections, etc.
    };
  }, []);

  return (
    <div>
      {/* Render component */}
    </div>
  );
}

export default Example;
```

In this example, we have an effect that fetches data and updates the state using `setData`. We return a cleanup function from the effect by defining a function after the `return` statement. Inside this cleanup function, you can perform any necessary cleanup operations, such as unsubscribing from events or closing connections.

The empty dependency array (`[]`) as the second argument of `useEffect` indicates that the effect should only run once, when the component is mounted. This means that the effect will not be re-triggered if any dependencies change.

React will automatically call this cleanup function when the component unmounts or when the dependencies change.

To clean up the event listener, we return a cleanup function from the effect. Inside the cleanup function, we remove the event listener using `removeEventListener` and passing in the same event type (click) and event handler (handleClick) that were used to add the event listener.

```js
useEffect(() => {  
  alert("component rendered for the first time");  
  return () => {  
    alert("component is being removed from the DOM");  
  };  
}, []);


useEffect(()=>{  
  document.addEventListener('keydown', handleKeyPress);  
  // Specify how to clean up after the effect:  
  return () => {  
    document.removeEventListener('keydown', handleKeyPress);  
  };  
})
```

Using the cleanup function in `useEffect` is important to ensure that any resources or subscriptions created in the effect are properly cleaned up, preventing memory leaks and maintaining the integrity of your component.

##### FetchData

If you want to fetch data inside this `useEffect`, you can include the necessary code within the effect function. For example:

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      /* Process the fetched data.
       You will mostly modify the state with useState hook by adding the 'data'.
       */
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return () => {
    // Cleanup operations, if any
  };
}, []);
```

In this modified example, a `fetchData` function is defined within the effect. It uses `fetch` to make an asynchronous request to an API endpoint and processes the fetched data. You can customize this code to fit your specific data fetching needs.

##### signal as dependency useEffect

When using the `useEffect` hook in React, the dependency array is an optional second argument that determines when the effect should be re-run. If the dependency array is not empty, it signals to the `useEffect` hook that it should only re-run the effect when one or more values in the dependency array have changed.

Here's an example to illustrate how a non-empty dependency array works:

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
    // Perform side effect based on count
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example;
```

In this example, the effect inside `useEffect` will only be re-run if the `count` state variable changes. The non-empty dependency array `[count]` specifies that the effect depends on the `count` variable.

When the "Increment" button is clicked, the `count` state is updated, causing a re-render of the component. Since the `count` value has changed, the effect will be re-run, and the message "Effect ran" will be logged to the console.

If the dependency array were empty (`[]`), the effect would only run once when the component mounts and would not be re-run even if the `count` value changes.

Using a non-empty dependency array allows you to control when the effect should be re-run based on specific variables or state values. This can be useful for scenarios where you want to perform certain actions or side effects only when specific dependencies change.

##### Rules of Hooks

The rules of Hooks in React are designed to ensure that Hooks are used correctly and consistently. The two main rules to keep in mind when using Hooks are:

1. Only call Hooks at the top level: Hooks should not be called inside loops, conditions, or nested functions. Instead, they should be used at the top level of your React function component, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. This is important for React to correctly associate stateful values with their respective Hooks.

2. Only call Hooks from React functions: Hooks should only be called from within React function components or custom Hooks. They should not be called from regular JavaScript functions or class components. This rule ensures that Hooks are used within the appropriate React context and that the React component lifecycle is properly managed.

Following these rules helps maintain the consistency and predictability of your React components when using Hooks.

##### Separate Hooks for Separate Effects

When working with multiple effects in a React component, it is generally recommended to use separate hooks for each effect. This practice helps to keep the code organized and makes it easier to understand and maintain.

By using separate hooks for separate effects, you can isolate the logic and dependencies of each effect, making the code more modular and reusable. It also allows you to control the dependencies and conditions for each effect independently.

Here's an example to illustrate this concept:

```jsx
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // Effect 1: Perform some action
    // Dependencies for Effect 1

    return () => {
      // Cleanup for Effect 1
    };
  }, [/* Dependencies for Effect 1 */]);

  useEffect(() => {
    // Effect 2: Perform another action
    // Dependencies for Effect 2

    return () => {
      // Cleanup for Effect 2
    };
  }, [/* Dependencies for Effect 2 */]);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

export default Example;
```

In this example, two separate `useEffect` hooks are used to define two different effects. Each effect has its own function body and dependency array, allowing you to specify the dependencies and cleanup logic for each effect independently.

By using separate hooks for separate effects, you can have better control over when each effect is executed, what dependencies trigger their re-run, and how they are cleaned up.

This approach helps to improve code readability, maintainability, and makes it easier to reason about the behavior of each effect in your React component.

##### Review useEffect

In this lesson, we learned how to write effects that manage timers, manipulate the DOM, and fetch data from a server. With the Effect Hook, we can perform these types of actions in function components with ease!

Let’s review the main concepts from this lesson:

- We can import the `useEffect()` function from the `'react'` library and call it in our function components.
- _Effect_ refers to a function that we pass as the first argument of the `useEffect()` function. By default, the Effect Hook calls this effect after each render.
- The _cleanup function_ is optionally returned by the effect. If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted.
- The _dependency array_ is the optional second argument that the `useEffect()` function can be called with in order to prevent repeatedly calling the effect when this is not needed. This array should consist of all variables that the effect depends on.

The Effect Hook is all about scheduling when our effect’s code gets executed. We can use the dependency array to configure when our effect is called in the following ways:

|Dependency Array|Effect called after first render & …|
|---|---|
|undefined|every re-render|
|Empty array|no re-renders|
|Non-empty array|when any value in the dependency array changes|

Hooks gives us the flexibility to organize our code in different ways, grouping related data as well as separating concerns to keep code simple, error-free, reusable, and testable!





#### useContext

`useContext` is a React hook that allows you to access the value of a context object within a functional component. Context provides a way to pass data through the component tree without having to pass props manually at every level.

To use `useContext`, you need to follow these steps:

1. Create a Context:
   Start by creating a context using the `createContext` function from React. You can do this in a separate file, for example, `MyContext.js`:

   ```jsx
   import React from 'react';

   const MyContext = React.createContext();

   export default MyContext;
   ```

2. Provide the Context:
   Wrap the component tree that needs access to the context with a `Provider` component. The `Provider` component is responsible for passing down the context value to its child components. The context value can be any data you want to share, such as state, functions, or objects.

   ```jsx
   import React from 'react';
   import MyContext from './MyContext';

   const App = () => {
     const contextValue = 'Hello, useContext!';

     return (
       <MyContext.Provider value={contextValue}>
         {/* Your component tree goes here */}
       </MyContext.Provider>
     );
   };

   export default App;
   ```

   In the above example, we wrap the component tree in the `App` component with the `Provider` component of `MyContext`. The `value` prop of the `Provider` component is set to the `contextValue` variable, which can be any value you want to share.

3. Consume the Context:
   In the functional component where you want to access the context value, import the `useContext` hook from React and the context you created. Use the `useContext` hook to access the context value.

   ```jsx
   import React, { useContext } from 'react';
   import MyContext from './MyContext';

   const MyComponent = () => {
     const contextValue = useContext(MyContext);

     return <p>{contextValue}</p>;
   };

   export default MyComponent;
   ```

   In the above example, we import the `useContext` hook and the `MyContext` we created. We then call `useContext(MyContext)` to access the value provided by the `Provider` component. The `contextValue` variable will now hold the value passed down from the context.

By using `useContext`, you can easily access the value of the context without manually passing props through multiple levels of components. It provides a convenient way to share data and state across different parts of your React application.

Remember to import and use the same `MyContext` object in both the provider and consumer components so that they are connected to the same context.


### Signals

>[!todo]

See [builder](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks)
See [preact](https://preactjs.com/blog/introducing-signals/)
### React Design Pattern: presentational and container components

The Presentational - Container Components pattern is a design pattern commonly used in React applications to separate concerns and improve code organization. This pattern helps to maintain a clear separation between components that are responsible for rendering the UI (presentational components) and components that manage the state and data of the application (container components).

Presentational components are typically pure functions that receive data and callbacks as props and are focused on rendering the UI based on that data. They don't have any knowledge of the application state or perform any logic related to data manipulation. These components are reusable and can be easily tested.

On the other hand, container components are responsible for managing the state and data of the application. They fetch data from APIs, handle user interactions, and pass data down to the presentational components as props. Container components are aware of the application state and may contain business logic.

The separation of concerns achieved by using this pattern makes the codebase more maintainable, scalable, and easier to understand. It allows for better reusability of presentational components and promotes a clearer distinction between UI rendering and application logic.

**Presentational Component Example:**
```jsx
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}
```

**Container Component Example:**
```jsx
class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <Button onClick={this.handleClick} label={`Clicked ${this.state.count} times`} />
    );
  }
}
```

In this example, the `Button` component is a presentational component that receives an `onClick` callback and a `label` prop. It simply renders a button with the provided label and triggers the `onClick` callback when clicked.

The `ButtonContainer` component is a container component that manages the state of the button's click count. It keeps track of the count in its internal state and passes it down to the `Button` component as a prop. It also defines the `handleClick` method to update the count when the button is clicked.

By separating the concerns of UI rendering and state management, we can easily reuse the `Button` component in different parts of our application without duplicating logic.

Here's an example of how the container component can update a CSS attribute in React using the Presentational - Container Components pattern:

```jsx
// Presentational Component
function Button({ onClick, label, color }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {label}
    </button>
  );
}

// Container Component
class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      color: prevState.color === 'blue' ? 'red' : 'blue',
    }));
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        label="Change Color"
        color={this.state.color}
      />
    );
  }
}
```

In this example, the `Button` component is a presentational component that receives an `onClick` callback, a `label` prop, and a `color` prop. It renders a button with the provided label and sets the background color of the button using the `color` prop.

The `ButtonContainer` component is a container component that manages the state of the button's color. It initializes the `color` state to `'blue'`. When the button is clicked, the `handleClick` method is triggered, which toggles the color between `'blue'` and `'red'`. The updated color state is then passed down to the `Button` component as a prop.

As a result, when you click the button rendered by the `ButtonContainer`, it will change its background color between blue and red based on the state managed by the container component.

Here are the steps we took:

- Identified that the original component needed to be refactored: it handled calculations/logic and presentation/rendering.
- Created a container component containing all the stateful logic.
- Created a function that calls the state setter method provided by `useState()`.
- Created and exported presentational components containing only JSX.
- Imported the presentational components into the container component.
- Used the presentational components in the return statement of the container component.
- Passed state and functions used to change state as props to the rendered presentational components.

### Styling React Apps

When styling React components, there are multiple approaches you can take. Here are a few common ways to style React components:

1. Inline Styling: You can apply styles directly to React elements using the inline style attribute. The value of the style attribute should be a JavaScript object that contains the CSS properties and their values. Here's an example:

```jsx
function MyComponent() {
  const myStyle = {
    color: 'red',
    fontSize: '16', // assume it is pixels 'px'
    fontWeight: 'bold',
  };

  return <div style={myStyle}>Hello, World!</div>;
}
```

In this example, the `div` element is styled with the `color`, `fontSize`, and `fontWeight` properties defined in the `myStyle` object.

2. CSS Stylesheets: You can also use traditional CSS stylesheets to style your React components. Simply create a separate CSS file and import it into your component. Apply class names to your elements and define the styles in the CSS file. Here's an example:

```jsx
// MyComponent.jsx
import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return <div className="my-component">Hello, World!</div>;
}
```

```css
/* MyComponent.css */
.my-component {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
```

In this example, the `div` element is assigned the class name `my-component`, and the corresponding styles are defined in the separate CSS file.

3. CSS Modules: CSS Modules provide a way to scope CSS styles to a specific component. This helps avoid class name collisions and keeps styles modular. With CSS Modules, you can import styles directly into your component and use them as local class names. Here's an example:

```jsx
// MyComponent.jsx
import React from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myComponent}>Hello, World!</div>;
}
```

```css
/* MyComponent.module.css */
.myComponent {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
```

In this example, the `styles` object is imported from the `MyComponent.module.css` file, and the `myComponent` class name is used as a local class name.

These are just a few ways to style React components. Each approach has its own advantages and considerations. You can choose the one that best suits your project requirements and coding preferences.


### Forms with React

React forms are used to handle user input and manage form data in a React application. They allow you to capture user input, perform validation, and submit the form data to a server or perform other actions.

Here's an example of how to create a basic form in React:

```jsx
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, we use the `useState` hook to create state variables for the `name` and `email` fields. The `handleNameChange` and `handleEmailChange` functions update the corresponding state variables as the user types into the input fields.

The `handleSubmit` function is triggered when the form is submitted. It prevents the default form submission behavior and performs any necessary logic, such as sending the form data to a server or performing validation. In this example, it simply logs the name and email values to the console.

Each input element is associated with its respective state variable using the `value` prop, which makes them controlled components. The `onChange` event handler updates the state variables as the user types into the input fields.

#### useRef Hook in Forms

You can modify the form by using the `useRef` hook to manage the input fields. Here's the modified code:

```jsx
import React, { useRef } from 'react';

function MyForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this modified code, the `useRef` hook is used to create references for the input fields, and the form submission logic accesses the input values through these references.

#### Controlled and Uncontrolled components

See [React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)


A controlled component is a React component where the value of an input element is controlled by React state. This means that the component's state is the single source of truth for the input value, and any changes to the input value are handled through event handlers that update the state. 

Uncontrolled form fields maintain their own state, while controlled form fields have their state managed by a parent component. Controlled components ensures that the component's state is the single source of truth for input values.

```jsx
import React, { useState } from 'react';

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
```

In this example, the `value` state variable is used to control the input element. The `handleChange` function updates the `value` state whenever the user types into the input field. The input element's `value` attribute is set to the `value` state, ensuring that it always reflects the current state.

On the other hand, an uncontrolled component is a React component where the value of an input element is managed by the DOM itself, rather than being controlled by React state. In this case, you rely on DOM ref to access the input value when needed. Here's an example:

```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the `inputRef` is created using the `useRef` hook. This allows us to access the input element directly using `inputRef.current`. When the form is submitted, the `handleSubmit` function logs the value of the input element using `inputRef.current.value`.

Uncontrolled components are useful in scenarios where you don't need to manage and track the input value in React state. They can be simpler to implement and may be beneficial in certain cases, such as when working with third-party libraries or handling large forms with many input fields.

Both controlled and uncontrolled components have their use cases, and choosing between them depends on your specific requirements and preferences.

> [!warning]
> A component is changing an uncontrolled input to be controlled.

This warning typically occurs when you have an uncontrolled input component in React, and then you attempt to convert it into a controlled input component by providing a `value` prop and an `onChange` event handler.

To resolve this warning, you have a few options:

1. Initialize the state variable used for the input value to a default value:
   
   ```jsx
   const [value, setValue] = useState(''); // Initialize with a default value
   ```

2. Use the `defaultValue` prop instead of `value` for the initial value of the input:
   
   ```jsx
   <input type="text" defaultValue={initialValue} onChange={handleChange} />
   ```

3. Ensure that the input component is consistently controlled or uncontrolled throughout its lifecycle.

The approach you choose depends on your specific use case and requirements. If you need to track and manage the input value in React state, using a controlled component is recommended. However, if you prefer to let the DOM handle the input value without tracking it in state, an uncontrolled component is suitable.

Remember to update your code accordingly to either initialize the state variable or use the appropriate prop (`value` or `defaultValue`) to avoid the warning.

### React Router

#### What is routing?

_Routing_ is the process by which a web application uses the current browser URL (Uniform Resource Locator) to determine what content to show a user. 

By organizing an application’s content and displaying only what the user has requested to see, routing allows for rich, engaging, and clear user experiences.

Before we dive into the lesson, let’s briefly go over the basic structure of URLs. Consider this URL:

![URL breakdown](https://static-assets.codecademy.com/Courses/Learn-Node/http/url-dark.png)

Every URL is essentially a request for some resource and each component of the URL serves to specify which resource is desired. URLs consist of several components, some of which are mandatory and some of which are optional:

1. The scheme (eg. `HTTP`, `HTTPS`, `mailto`, etc), which specifies what [protocol](https://www.codecademy.com/articles/http-requests) should be used to access the resource.
2. The domain (eg. `codecademy.com`), which specifies the website that hosts the resource. The domain serves as the entry point for your application.
3. The path (eg. `/articles`), which identifies the specific resource or page to be loaded and displayed to the user. This is where routing begins!
4. The optional query string (eg. `?search=node`), which appears after a ‘?’ and assigns values to parameters. Common uses of query strings include search parameters and filters.

Depending on the kind of application you build, there are different ways to handle the requests coming into your server.

url : `/users/5`
path: `/users/:userid`
optional path : `/users/:userid?`

See the docs: [react Router](https://reactrouter.com/en/main/start/tutorial)
See main Concepts: [React Router Main concepts](https://reactrouter.com/en/dev/start/concepts)
Be carefull of [your versions](https://stackoverflow.com/questions/72687496/link-is-not-working-in-react-router-dom-in-version-5-3-0-please-anyone-resolve)

See [Tuto Web Dev Simplified](https://youtu.be/Ul3y1LXxzdU?si=Hnyb6xzOVBp8tcQR)
See [private routes](https://gist.github.com/mjackson/d54b40a094277b7afdd6b81f51a0393f)

> [!info] 
> react-router-dom is A library that provides navigational components for React Developers to create single-page applications (SPAs) with dynamic, client-side routing.

#### React Router (v6)

See [React Router](https://reactrouter.com/en/main)

React Router is a popular library in the React ecosystem that allows you to handle routing and navigation in your React applications. It provides a declarative way to define routes and render different components based on the current URL.

#### Providing A Router

In the React Router paradigm, the different views of your application, also called _routes_ are just React components. To include them in your application, you will need to render them.

The first step is to make our router available to our entire application by using React Router’s `RouterProvider`.

```js
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter( /* application routes are defined here */ );

export default function App () {  
	return (
		<RouterProvider router={ router } />  
	);
}
```

`createBrowserRouter` will define a router that prevents URL changes from causing the page to reload. Instead, URL changes will allow the `router` to determine which of its defined routes to render while passing along information about the current URL’s path as props. We make our router available application-wide by providing it using `RouterProvider`at the root of our application.


#### Basic Routing with `<Route>`

With our `router` in place, we can begin defining the different views, or _routes_, that our application will render for various URL paths. For example, we might want to render an `About` component for the `/about` path and a `SignUp` component for the `/sign-up` path. React Router gives us two options to define routes: JSX or objects. In this lesson, we’ll be learning to implement routes using JSX notation. If you’re interested, you can learn more about object notation [here](https://reactrouter.com/en/main/route/route).

The `.createBrowserRouter` method accepts an array of `<Route>` objects, so we’ll need to use React Router’s `.createRoutesFromElements` method to configure our routes with JSX. We also need to use React Router’s `<Route>` component to define our routes. These components can be imported from the `react-router-dom` package, alongside the `.createBrowserRouter` method, like so:

```js
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from `react-router-dom`
```

The `<Route>` component is designed to render (or not render) a component based on the current URL path. Each `<Route>` component should include:

1. A `path` prop indicating the _exact_ URL path that will cause the route to render.
2. An `element` prop describing the component to be rendered.

For example, we can use `.createRoutesFromElements` to configure a `<Route>` that renders the `<About>` component when the URL path matches `'/about'`:

```js
import About from './About.js';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/about' element={ <About/> } />
	)
);
	
export default function App () {
	return (
		<RouterProvider router={ router } />
	);
}
```

In many cases, there may be certain components, like sidebars, navigation bars, and footers, that we want to render with every page view. We can achieve this by defining a root-level component that contains layout elements we want to render consistently. We can then nest the rest of our routes within this root-level component, like so:

```js
/* imports ... */

const router = createBrowserRouter(
	createRoutesFromElements( 
		<Route path='/' element={ <Root/> }>
		 // nested routes here will render along with the <Root/> component  
		 </Route>
	)
);
```

With this route configuration, whenever a user navigates to one of the nested routes, that view will render, along with any elements we’ve defined in our `<Root/>` component.

#### Linking to Routes

In the last exercise, you used the URL bar to navigate to a path that matched one of your application’s routes. But how do you navigate from within the app itself?

When building a website using HTML, we use the anchor (`<a>`) tag to create links to other pages. A side effect of the anchor tag is that it causes the page to reload. This can distract our users from the immersive experience of our smooth React application!

React Router offers two solutions for this: the [`Link`](https://reactrouter.com/en/main/components/link) and [`NavLink`](https://reactrouter.com/en/main/components/nav-link) components, both of which can be imported from the `react-router-dom` package.

```js
import { createBrowserRouter, createRoutesFromElement, Route, Link, NavLink } from 'react-router-dom';
```

Both `Link` and `NavLink` components work much like anchor tags:

- They have a `to` prop that indicates the location to redirect the user to, similar to the anchor tag’s `href` attribute.
- They wrap some HTML to use as the display for the link.

```js
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>
```

Both of the above links will generate anchor (`<a>`) tags with the text “About”, which take the user to the `/about` view when clicked. However, the default behavior of an anchor tag – refreshing when the page loads – will be disabled. Note that if we preface the path provided to our `to` prop with a forward slash, `/`, as we did in the example above, this path will be treated as an **absolute** path. That is, React Router will assume this path is navigating from the root directory. We’ll talk more about how to define paths that are **relative** to our current directory in upcoming exercises.

So, what’s the difference between a `Link` and a `NavLink`? When the URL path matches a `NavLink` component’s `to` prop, the link will automatically have an `'active'` class applied to it. This can be quite useful for building navigation menus, as we can define CSS styles for the `.active` class name to differentiate between active and inactive links, enabling users to quickly see which content they are viewing. We can also pass a function to `className` or `style` to further customize the styling of an active (or inactive) `NavLink`, like so:

```js
<NavLink 
		to="about" 
		className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
	> About </NavLink>
```

In the example above we pass a function to the `className` prop which applies the `activeNavLink` class if the `NavLink` is active and `inactiveNavLink` otherwise.

As we’ve seen in this exercise, `NavLink` and `Link` are great tools to use to help our users navigate our website.

#### Dynamic Routes

So far, all the routes we’ve covered have been static, which means they match a single unique path. This works for predetermined routes that render a consistent view. But what if we need to build a route that is more flexible?

For example, imagine a tech news site where each article is accessible from the path `'/articles/' + some-title` where `some-title` is unique for each article. Specifying a distinct route for every article would not only be verbose and time-consuming, but it would also require an impractical amount of maintenance should the path structure ever change or we need to add new articles.

It would be much more convenient to define a single route that can match any path with the pattern `'/articles/' + someTitle` and know exactly which component to render. React Router allows us to do this by using **URL parameters** to create **dynamic routes**.

URL parameters are dynamic segments of a URL that act as placeholders for more specific resources. They appear in a dynamic route as a colon (`:`) followed by a variable name, like so:

```js
const route = createBrowserRouter(
	createRoutesFromElement(
		<Route path='/articles/:title' element={ <Article /> } />
	)
)
```

Let’s break down this short, yet powerful demonstration of URL parameters:

- In this example, the path prop `'articles/:title'` contains the URL parameter `:title`.
- This means that when the user navigates to pages such as `'/articles/what-is-react'` or `'/articles/html-and-css'`, the `<Article />` component will render.
- When the `Article` component is rendered in this way, it can access the actual value of that `:title` URL parameter (`what-is-react` or `html-and-css`) to determine which article to display (more on this in the next exercise). A single route can even have multiple parameters (eg. `'articles/:title/comments/:commentId'`) or none (eg. `'articles'`).
#### useParams

It is common to use the value of URL parameters to determine what is displayed in the component that a dynamic route renders. For example, the `Article` component might need to display the title of the current article.

React Router provides a hook, `useParams()`, for accessing the value of URL parameters. When called, `useParams()` returns an object that maps the names of URL Parameters to their values in the current URL.

For example, consider the `Articles` component below which is rendered by a route with the dynamic URL `'/articles/:title'`. Consider the following `Article` component, that will render when a user visits `/articles/objects`:

```js
import { Link, useParams } from 'react-router-dom';

export default function Article() {
	let { title } = useParams();  
	// title will be equal to the string 'objects'  
	// The title will be rendered in the <h1>  
	return (    
		<article>      
			<h1>{title}</h1>    
		</article>
	  );
}
```

Let’s break down the example above.

- First, the `useParams()` hook is imported from `react-router-dom`.
- Then, inside the `Article` component, `useParams()` is called which returns an object.
- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is then used to extract the value of the URL parameter from that object, storing it in a variable named `title`.
- Finally, this `title` value is used to display the name of the article in the `<h1>` element.

#### Nested Routes

Up to this point, we’ve been working with routers that are relatively small. As our application grows and we add more features, we may want additional components to render within our defined views depending on user actions.

For example, suppose that we have an `About` page that will be rendered if we hit the path `/about`. We’d like to implement a new feature that will display a secret message in `About` if the path changes to `/about/secret`. We might try and do this:

```js
/* imports ... */
const router = createBrowserRouter(
	createRoutesFromElement([
		<Route path='/about' element={ <About/> }>  />,
		<Route path='/about/secret' element={ <Secret/> }>  />
	])
);
```

Since React Router matches paths _exactly_, if we go to the path `/about/secret`, it will only render `Secret` and not `About`. We’d like to render `About` when we hit `/about` and _also_ render `Secret` below `About` when we hit `/about/secret`. We can do this using **nested routes**.

A nested route, as the name suggests, is a `Route` within a `Route`. A `Route` containing one or more `Route`s nested within it is known as the **parent** route and a `Route` that is contained within another `Route` is known as the **child** route. When nesting `Route`s, the child `Route` `path` is _relative_ to the parent `Route`‘s `path` so we shouldn’t include the parent `path` in its `path` prop.

For example, we can create a nested route by refactoring the code above, like so:

```js
/* imports ... */

const router = createBrowserRouter(
	createRoutesFromElement(
		<Route path='/about' element={ <About/> }> 
		{/* About renders if path starts with /about */}
		<Route path='secret' element={ <Secret/> }>  />  
		{/* we can exclude /about from this path since it is relative to its parent */}  
		</Route>
	)
);
```

Using this nested route, the `About` component will render when the path starts with `/about`. If the path matches `/about/secret`, the `Secret` component will render in addition to the `About` component. Remember that a `Route` can be both a parent and child route if it is nested within a route and contains nested routes within it. The same parent/child properties would apply.

Our router is configured to render our nested route, but if we ran this code we still wouldn’t see `Secret` rendered below `About`. That’s because we haven’t told `About` _where_ to render its child route element. To do this we need to make use of the React Router `Outlet` component in the parent `About` component, like so:

```js
import { Outlet } from 'react-router-dom';

// Rendered when the user visits '/about'

export default function About() {
	return (
		<main>
			<h1>Lorem ipsum dolor sit amet.</h1>
			<Outlet/>
			  {/* renders child element when user visits /about/secret */}
		<main/>
     );
  }
```

Now when we visit `/about/secret` our router will render `About` and its child route component, `Secret`, wherever the `Outlet` component is defined in the parent. You can think of it as the router replacing `Outlet` with our defined child route.

When using nested routes we can also make use of **index** routes. An index route is a `Route` that uses the `index` prop instead of a `path` prop and is special because it renders on its parent’s `path`. For example:

```js
/* imports ... */
const router = createBrowserRouter(
  createRoutesFromElement(
    <Route path='/about' element={<About />}>
      {/* About renders if path starts with /about */}
      <Route index element={<IndexComponent />} />
      {/* Will render when the path is /about */}
      <Route path='secret' element={<Secret />} />
      {/* Will render when the path is /about/secret */}
    </Route>
  )
);
```

We can think of an index route as a **default** `Route` that will render in its parent’s `Outlet` when the path matches the parent `path` exactly so there’s some content in that space.

#### `<Navigate>` (redirect)

If you take anything away from this lesson, it should be that React Router treats everything as a component. To get fully comfortable using React Router in your code, you have to embrace this idea and the declarative coding style that follows from it. For the most part, this is pretty intuitive, but it can feel a bit counterintuitive when it comes to redirecting users.

To appreciate the declarative pattern, consider a common case for redirecting a user: a user wants to access a `/profile` page that requires authentication but is not currently signed in.

The `Navigate` component provided by React Router makes this easy! Like a `Link` or `NavLink`, the `Navigate` component has a `to` prop. However, where `Link` and `NavLink` must be clicked to navigate the user, once the `Navigate` component is rendered, the user will automatically be taken to the location specified by the `to` prop:

```js
import { Navigate } from 'react-router-dom';

const UserProfile = ({ loggedIn }) => {
	if (!loggedIn) {
	    return (
	          <Navigate to='/' />    
	     )
	 }
	 
	 return ( /* ... user profile content here */ )
}
```

In this example, when the `UserProfile` component renders, if the `loggedIn` prop is `false`, then the `Navigate` component will be returned and then rendered, sending the user to the `/` page. Otherwise, the component will render normally.

#### useNavigate

In the previous exercise, you learned how to redirect declaratively by rendering a `Navigate` component that updates the browser’s current location. Though this approach follows React Router’s declarative coding style, it does introduce a few extra steps in the React rendering lifecycle:

1. The `Navigate` component must be returned.
2. The `Navigate` component is then rendered.
3. The URL is updated.
4. And finally the appropriate route is rendered.

React Router also provides a mechanism for updating the browser’s location imperatively using the `useNavigate` hook.

```
import { useNavigate } from 'react-router-dom';
```

The `useNavigate()` function returns a `navigate` function that allows us to specify a path where we’d like to navigate.

Consider this example which immediately triggers a redirect back to the `/` page after a user successfully submits a `<form>`:

```js
import { useNavigate } from `react-router-dom`;

export const ExampleForm = () => {
	const navigate = useNavigate()
	const handleSubmit = e => {
		e.preventDefault();
		navigate('/')
	}
	
	return (
		<form onSubmit={handleSubmit}>
		{/* form elements */ }
		</form>  
	)
}
```

By enabling imperative updates to the browser location, the `navigate` function allows you to respond immediately to user input without having to wait.

The `useNavigate()` function also gives us the ability to programmatically navigate our users through their [history](https://developer.mozilla.org/en-US/docs/Web/API/Window/history) stack. Scenarios like enabling users to go forward or backward in an application, or redirecting users to their previous page after they’ve logged in, are great use cases for this functionality. To navigate a user through their history stack using `useNavigate()`, we’d pass in an integer to indicate where in the history we’d like to travel. A positive integer navigates forward and a negative integer navigates backward.

For example:

- `navigate(-1)` - navigate to the previous URL in the history stack.
- `navigate(1)` - navigate to the next URL in the history stack.
- `navigate(-3)` - navigate 3 URLs back in the history stack.

Below, we can see how the `navigate()` function is used to enable a “Go Back” button:

```js
import { useNavigate } from `react-router-dom`

export const BackButton = () => {
	const navigate = useNavigate()
	
	return (<button onClick={() => navigate(-1)}>Go Back</button>)
}
```

#### Query Parameters

Query parameters appear in URLs beginning with a question mark (`?`) and are followed by a parameter name assigned to a value. They are optional and are most often used to search, sort and/or filter resources.

For example, if you were to visit the URL below…

```
https://www.google.com/search?q=codecademy
```

… you would be taken to Google’s `/search` page displaying results for the search term `codecademy`. In this example, the name of the query parameter is `q`.

Query parameters can be useful in determining which content to display to our user and React Router provides a mechanism for grabbing query parameter values with the `useSearchParams()` hook. This hook returns a [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) object and a function we can use to update it.

Consider this example of a `SortedList` component:

```js
import { useSearchParams } from 'react-router-dom'; 
// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	const sortOrder = searchParams.get('order');
	console.log(sortOrder); // Prints "DESC"
};
```

Let’s break down this example:

- First, we import `useSearchParams()` and call it within `SortedList` to get the `URLSearchParams` object. This object has a `.get()` method for retrieving query parameter values.
- Finally, to get the value of a specific query parameter, we pass in the name of the query parameter whose value we want to obtain, as a string (`'order'`), to the `queryParams.get()` method. The value (`'DESC'`) is then stored in the variable `order`.

Let’s expand the `SortedList` example so that the component uses the `order` value to render a list of data either in ascending order, in descending order, or in its natural order.

```js
import { useSearchParams } from 'react-router-dom'
// Rendered when a user visits "/list?order=DESC"

export const SortedList = (numberList) => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	const sortOrder = searchParams.get('order');
	
	if (sortOrder === 'ASC') {
		// render the numberList in ascending order
	} else if (sortOrder === 'DESC') {
		// render the numberList in descending order
	} else {
	    // render the numberList as is
	 }
}
```

Now, if the user were to visit `/list?order=DESC`, the value `'DESC'` would be extracted and we can render the `SortedList` component in descending order. Likewise, visiting `/list?order=ASC` will render the list in ascending order. Finally, since query parameters are optional, if we were to visit `/list`, the `SortedList` component would render in its natural order.

Imagine we have a `List` component with a `sort` button that we wanted to use to update the URL to `/list?order=ASC`, then render `SortedList`. We can use the `setSearchParams()` function to do this. For example:

```js
import { useSearchParams } from 'react-router-dom';

// Rendered when a user visits "/list"

export const List = (numberList) => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	// render the numberList in ascending order
	<button click={ () => setSearchParams( {order: 'ASC'} ) }>
	    Sort
	</button>
}
```

When a user clicks on the `Sort` button we’ll update the path to `/list?order=ASC`, which will cause our `SortedList` component to render.

`useSearchParams` works great when we want to access the current path’s query parameters or alter them but what if we want to navigate to a path and include query parameters too? Well, for this scenario we’ll need to use the `createSearchParams()` utility function from `react-router-dom` with the `useNavigate` hook we learned about previously.

For example, if we wanted to directly navigate to `/list?order=ASC` from the root (`/`) path we’d do something like this:

```js
import { useNavigate, createSearchParams } from 'react-router-dom';

// get navigate function
const navigate = useNavigate();

// define an object where the key is is the query parameter name and value is query parameter value
const searchQueryParams = {  order: 'ASC'}

// use createSearchParams which takes an object and transforms it to a query string of the form order=ASC
const searchQueryString = createSearchParams(searchQueryParams);

// force a navigate by passing in an object with pathname indicating that path to navigate and search indicating the query parameters to append
navigate({  pathname:'/list',  search: `?${searchQueryString}`})
```

The important things to note about the example above are that we:

- Define an object representing the query parameters we want and call it `searchQueryParams`.
- Pass `searchQueryParams` to `createSearchParams` which will transform it from an object to a query string form.
- Call `useNavigate` and pass an object with `pathname` and `search` keys where `pathname` is a string indicating where to navigate to and `search` is a string indicating the query string to append to the path.

Note that we need to include the `?` which is why we use a template string here.

#### Review

Great work! You’ve learned everything you need to know to add front-end routing to your React applications using React Router! To recap, you’ve learned how to:

- Install `react-router-dom` and add it to a React application.
- Enable routing by using `RouterProvider` and providing a `router`.
- Creating a router using `createBrowserRouter()`.
- Use `createRoutesFromElements()` to configure a router.
- Use the `Route` component to add static and dynamic routes to an application.
- Use `Link` and `NavLink` components to add links to an application.
- Access the values of URL parameters using React Router’s `useParams` hook.
- Create nested routes using `Route`, `Outlet`, and relative `path`s.
- Declaratively redirect users by rendering React Router’s `Navigate` component
- Imperatively redirect users via the `useNavigate` hook.
- Access and set the value of query parameters using React Router’s `useSearchParams` hook.


### Redux

#### Core Concepts

In Redux, there are several core concepts that you should understand. These concepts include reducers, actions, action creators, and the store. Let me explain each of these concepts briefly:

1. Reducers: In Redux, a reducer is a pure function that takes the current state and an action as arguments, and returns a new state. Reducers are responsible for handling state transitions in your application. They specify how the application's state should change in response to different actions. It's important to note that reducers should not mutate the state directly, but instead create a new state object for each action.[2]

2. Actions: Actions are plain JavaScript objects that represent an intention to change the state of your application. They describe what happened in your application and contain a type property that specifies the type of action being performed. Actions can also include additional data that is needed to update the state.[1]

3. Action Creators: Action creators are functions that create and return action objects. They encapsulate the logic for creating actions and can also include additional parameters if needed. By using action creators, you can centralize the creation of actions in your application.[2]

4. Store: The store is the central hub of Redux applications. It holds the current state of your application and provides methods to update the state by dispatching actions. The store is created using the `createStore` function from Redux, and it allows you to subscribe to changes in the state and dispatch actions to modify the state.[2]

These core concepts work together to manage the state of your React application using Redux. By understanding these concepts, you can effectively manage and update the state of your application in a predictable and centralized manner.

- Redux is a library for managing and updating application state based on the Flux architecture
    
- Redux makes code more predictable, testable, and maintainable by consolidating state in a single object. Components are just given data to render and can request changes using events called actions.
    
- In a Redux application, _data flows in one direction_: from state to view to action back to state, and so on.
    
- _State_ is the current information behind a web application.
    
- An _action_ is an object describing an event in the application. It must have a `type` property and it typically has a `payload` property as well.
    
- A _reducer_ is a function that determines the application’s next state given a current state and a specific action. It returns a default initial state if none is provided and returns the current state if the action is not recognized
    
- A reducer must follow these three rules:
    
    1. They should only calculate the new state value based on the existing state and action.
    2. They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
    3. They must not do any asynchronous logic or other “side effects”.
- In other words, a reducer must be a _pure_ function, and it must update the state _immutably_.
    
- The _store_ is a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. Typically there is only one store in a Redux application.

#### State

_State_ in a web application represents the current information that drives the application’s behavior and appearance. It acts as a centralized source of data, storing the essential details of the application at any given moment.

```js
const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
```

#### Actions

In Redux, actions are represented as plain JS objects. Here’s what that action might look like:

```js
const action = {
	type: 'todos/addTodo',
	payload: 'Take selfies'
};
```

- Every action must have a `type` property with a string value. This describes the action.
- Typically, an action has a `payload` property with an object value. This includes any information related to the action. In this case, the payload is the to-do text.
- When an action is generated and notifies other parts of the application, we say that the action is _dispatched_.

#### Reducer

A **reducer**, or reducer function, is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state.
- It’s a plain JavaScript function
- It defines the application’s next state given a current state and a specific action
- It returns a default initial state if no action is provided
- It returns the current state if the action is not recognized


```javascript
const initialState = ['Print trail map', 'Pack snacks', 'Summit the mountain'];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo': {
      return [...state, action.payload];
    }
    case 'todos/removeAll': {
      return [];
    }
    default: {
      return state;
    }
  }
};
```

In this example, the `todoReducer` function is a reducer that manages the state of a todo list. The initial state is an array of three items: 'Print trail map', 'Pack snacks', and 'Summit the mountain'.
  
#### Rules of reducers

Reducers play a crucial role in Redux by managing the state updates in a predictable and controlled manner. To ensure the effectiveness and maintainability of reducers, there are several rules that should be followed:

1. Calculate the new state: Reducers should calculate the new state value based on the current state and the action that is dispatched. They should not directly modify the existing state, but instead create a new copy of the state with the necessary changes.

Break the rule 1: it does not use `action.payload` for adding an item in the state.

![[Pasted image 20231204200913.png]]

2. Immutable state updates: Reducers must update the state immutably, meaning they should not mutate the existing state directly. Instead, they should create a new copy of the state with the required modifications. This helps to avoid unintended side effects and ensures that the state changes are traceable and predictable.

Break the rule2: `state.push` does not keep the state immutable.

![[Pasted image 20231204201202.png]]


3. No asynchronous logic or side effects: Reducers should focus solely on updating the state based on the provided action. They should not contain any asynchronous logic or have side effects such as making API calls, modifying external resources, or generating random numbers. Keeping reducers pure and free from side effects helps maintain a clear separation of concerns and enhances testability and debugging.

break the rule3: there is a side effect here with `Math.random()`

![[Pasted image 20231204201507.png]]


#### Immutable Updates

In programming, the three rules of reducers in Redux can be described more broadly. These rules state that reducers must perform **immutable** updates and be **pure functions**.

When a function makes immutable updates to its arguments, it doesn’t directly modify the original argument. Instead, it creates a copy and modifies that copy. This process is referred to as _immutable_ updating because the function doesn’t alter or _mutate_ the original arguments.

This function mutates its argument:

```js
const mutableUpdater = (obj) => {
	obj.completed = !obj.completed;
	return obj;
}

const task = { text: 'do dishes', completed: false };
const updatedTask = mutableUpdater(task);

console.log(updatedTask); 
// Prints { text: 'do dishes', completed: true };

console.log(task); 
// Prints { text: 'do dishes', completed: true };
```

Meanwhile, this function “immutably updates” its argument:

```js
const immutableUpdater = (obj) => {
	return {
		...obj,
		completed: !obj.completed  
	}
}

const task = { text: 'iron clothes', completed: false };

const updatedTask = immutableUpdater(task);

console.log(updatedTask);
// Prints { text: 'iron clothes', completed: true };

console.log(task); 
// Prints { text: 'iron clothes', completed: false };
```

By copying the contents of the argument `obj` into a new object (`{...obj}`) and updating the `completed` property of the copy, the argument `obj` will remain unchanged.

Note that plain strings, numbers, and booleans are immutable in JavaScript, so we can just return them without making a copy:

```js
const immutator = (num) => num + 1;

const x = 5;

const updatedX = immutator(x);

console.log(x, updatedX);
// Prints 5, 6
```

#### Pure Functions

A pure function is a type of function in programming that has two main properties:

1. It always returns the same result for the same input arguments: A pure function produces a predictable output based solely on its input parameters. Given the same set of input arguments, a pure function will consistently return the same result.

2. It has no side effects: A pure function does not modify any external state or variables outside of its scope, nor does it perform any input/output operations. It solely relies on the input parameters to calculate the output and does not cause any observable changes outside of its own execution.


This is a combination of rules 1 and 3:

- Reducers should only calculate the new state value based on the state and action arguments.
- Reducers must not do any asynchronous logic or other “side effects”.

In this example, the function is not a pure function because its returned value depends on the status of a remote endpoint.

```js
const addItemToList = (list) => {
    let item;

    fetch('https://anything.com/endpoint')
        .then(response => {
            if (!response.ok) {
                item = {};
            }
            
            item = response.json();

        });
        
	return [...list, item];
};
```

The function can be made pure by pulling the `fetch()` statement outside of the function.

```js
let item;

fetch('https://anything.com/endpoint')
    .then(response => {
        if (!response.ok) {
            item = {};
        }

        item = response.json();

    });

const addItemToList = (list, item) => {
    return [...list, item];
};
```

#### Store

Redux uses a special object called the **store**. The store serves as a container for the state, and it is the centerpiece of your application and the single source of truth. The store is in charge of facilitating the dispatching of actions, and triggering the reducer when actions are dispatched. In most Redux applications, there is typically only one store.

Let’s rephrase the data flow using the new term:

1. The store initializes the state with a default value.
2. The view displays that state to the user.
3. When a user interacts with the view, such as clicking a button, an action is dispatched to the store.
4. The store’s reducer combines the dispatched action and the current state to determine the next state.
5. The view is updated to display the new state.

![[Pasted image 20231204203726.png]]

![[Pasted image 20231204203755.png]]

![[Pasted image 20231204203820.png]]


#### Example and links

- Use the Redux library
- Understand why and when to use Redux in a React app
- Know how to use Redux as middleware logic
- Write tests in Redux

If you are interested in learning more about these topics, here are some additional resources:

- Documentation: [React Redux](https://react-redux.js.org/api/connect)
- Resource: [Redux Learning Resources: Basic Introductions](https://redux.js.org/introduction/learning-resources#basic-introductions)
- Resource: [Using Redux with React](https://redux.js.org/introduction/learning-resources#using-redux-with-react)
- Article: [Exploring Redux Middleware](http://blog.krawaller.se/posts/exploring-redux-middleware/)
- Documentation: [Redux Toolkit: Quick Start](https://redux-toolkit.js.org/introduction/quick-start)
- Tutorial: [Introducing Redux Toolkit](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- Resource: [Awesome Redux](https://github.com/xgrommx/awesome-redux)
- Tutorial: [React-Redux: Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial)
- Tutorial: [Redux Essentials, Part 6: Performance and Normalizing Data](https://redux.js.org/tutorials/essentials/part-6-performance-normalization)
- Tutorial: [Live React: Hot Reloading](https://youtu.be/xsSnOQynTHs)
- Tutorial: [Writing Tests in Redux](https://redux.js.org/usage/writing-tests)
- Tutorial: [Redux Testing Step by Step: A Simple Methodology for Testing Business Logic](https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce)
- Article: [Testing Strategies for React and Redux](https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/)
- Tutorial: [How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test/)
- Video: [How to test Redux](https://www.youtube.com/watch?v=h7ukDItVN_o)
- 

```js
const initialWagonState = {
    supplies: 100, distance: 0, days: 0
}

const reducer = (state = initialWagonState, action) => {

    switch(action.type) {

      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        }
      }

      case 'travel': {

        const nbOfDaysToTravel = action.payload;

        return {
          ...state,
          supplies: state.supplies - nbOfDaysToTravel * 20,
          distance: state.distance + nbOfDaysToTravel * 10,
          days: state.days + nbOfDaysToTravel
        }
      }

      case 'tippedWagon': {

        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }

      default: {
        return state
      }
    }
  }

  let wagon = reducer(undefined, {})
  console.log(wagon)

  wagon = reducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon)

  wagon = reducer(wagon, {type: 'gather'})
  console.log(wagon)

  wagon = reducer(wagon, {type: 'tippedWagon'})
  console.log(wagon)
  
```


### Implementing the redux store from scratch

See Example [git ref](https://gitlab.com/paul.piazza.pro/codecademy-store.git)

#### Implement

To create a store using `createStore` from Redux, you can follow these steps:

1. Import the necessary dependencies: First, you need to import the `createStore` function from the Redux library. This function is used to create the store object.

2. Define a reducer function: Next, you need to define a reducer function that will handle state updates in your application. The reducer function takes two arguments: the current state and an action, and returns the updated state based on the action.

3. Create the store: Call the `createStore` function and pass in your reducer function as the first argument. Optionally, you can also provide an initial state as the second argument.

4. Access the store: Once you have created the store, you can access it and interact with its state using various methods provided by Redux, such as `getState`, `dispatch`, and `subscribe`.

Here's an example of how you can create a store using `createStore`:

```javascript
import { createStore } from 'redux';

// Define a reducer function
const reducer = (state = {}, action) => {
  // Handle different actions and update the state accordingly
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the store
export const store = createStore(reducer);

// Access the store's state
console.log(store.getState()); // Output: {}

// Dispatch actions to update the store
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: { count: 1 }

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // Output: { count: 0 }
```

In this example, we import the `createStore` function from Redux and define a simple reducer function that handles two actions: `INCREMENT` and `DECREMENT`. We then create the store by calling `createStore` and passing in the reducer function. Finally, we can access the store's state using `getState` and update it by dispatching actions using `dispatch`.

Please note that this example is a simplified demonstration of how to use `createStore`. In a real-world application, you would typically have more complex state structures and multiple reducers combined using Redux's `combineReducers` function.

#### Dispatch actions

To dispatch an action to the store, you can follow these steps:

1. Access the store: First, make sure you have access to the store object. This can be done by either creating the store using `createStore` from Redux or by connecting your components to the store using React Redux.

2. Define the action: An action is a plain JavaScript object that describes the type of update you want to make to the store. It typically has a `type` property and may include additional data relevant to the update.

3. Dispatch the action: To update the store, you need to dispatch the action to the store. This is done by calling the `dispatch` method on the store object and passing in the action as an argument.

In the previous example, we have a store created using `createStore` and a reducer function that handles two actions: `INCREMENT` and `DECREMENT`. We then dispatch actions to the store using `store.dispatch` by passing in an action object with a `type` property. The reducer function handles these actions and updates the store's state accordingly.

It's important to note that dispatching actions is just one part of the Redux workflow. To fully utilize Redux, you would typically combine it with React or another view library, use action creators to encapsulate action logic, and connect your components to the store using React Redux.

#### Action creator


In Redux, an action creator is a function that creates and returns an action object. It encapsulates the logic of creating an action and provides a convenient way to dispatch actions to the store. The action object typically has a `type` property that describes the type of update you want to make to the store, and may include additional data relevant to the update.

On the other hand, a reducer is a function that specifies how the application's state changes in response to actions. It takes the current state and an action as arguments, and returns the updated state based on the action.

Here's an example to illustrate the concept of an action creator with a reducer:

```javascript
// Action creator
const incrementCounter = () => {
  return {
    type: 'INCREMENT',
  };
};

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Create the store with the reducer
const store = createStore(counterReducer);

// Dispatch an action using the action creator
store.dispatch(incrementCounter());

// Access the updated state
console.log(store.getState()); // Output: 1
```

In this example, we have an action creator function `incrementCounter` that returns an action object with a `type` of `'INCREMENT'`. We also have a reducer function `counterReducer` that handles the `'INCREMENT'` action type and updates the state by incrementing it. The store is created using `createStore` with the `counterReducer`. Finally, we dispatch an action using the `incrementCounter` action creator, which triggers the reducer to update the state.

Using action creators helps to centralize and organize the creation of actions in your application. It provides a clear separation of concerns and makes it easier to maintain and test your code.

#### respond to State changes

To respond to state changes in Redux, you can use the `subscribe` method provided by the Redux store. The `subscribe` method allows you to register a callback function that will be called whenever the state in the store is updated. This can be useful for performing actions such as updating the UI or triggering side effects.

Here's an example of how you can respond to state changes using the `subscribe` method:

```javascript
import { createStore } from 'redux';

// Define a reducer function
const reducer = (state = {}, action) => {
  // Handle different actions and update the state accordingly
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  // Perform actions in response to state changes
  console.log('State changed:', store.getState());
});

// Dispatch actions to update the store
store.dispatch({ type: 'INCREMENT' }); // Output: State changed: { count: 1 }
store.dispatch({ type: 'DECREMENT' }); // Output: State changed: { count: 0 }

// Unsubscribe from state changes (optional)
unsubscribe();
```

In this example, we create a store using `createStore` and define a reducer function. We then subscribe to state changes by calling `store.subscribe` and passing in a callback function. Whenever an action is dispatched and the state is updated, the callback function will be called, allowing you to perform actions in response to the state changes. In this case, we simply log the updated state to the console.

Remember to unsubscribe from state changes when you no longer need to listen to them. The `subscribe` method returns a function that you can call to unsubscribe, as shown in the example above.

#### connect reducer to UI

To connect the Redux store to a UI, you can use the `connect` function provided by the `react-redux` library. This function creates a higher-order component that connects your component to the Redux store and provides access to the store's state and actions.

Here's an example of how you can use `connect` to connect a `Counter` component to the Redux store:

```javascript
import React from 'react';
import { connect } from 'react-redux';

// Define a Counter component
const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

// Define mapStateToProps function
const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

// Define mapDispatchToProps function
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

// Connect the Counter component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

In this example, we have a `Counter` component that displays a count value and two buttons to increment and decrement the count. We then define two functions: `mapStateToProps` and `mapDispatchToProps`. 

The `mapStateToProps` function maps the state from the Redux store to props that can be used by the `Counter` component. In this case, we map the `count` property from the store's state to the `count` prop.

The `mapDispatchToProps` function maps dispatch actions to props that can be used by the `Counter` component. In this case, we map the `INCREMENT` and `DECREMENT` actions to the `increment` and `decrement` props respectively.

Finally, we connect the `Counter` component to the Redux store using the `connect` function and passing in the `mapStateToProps` and `mapDispatchToProps` functions as arguments. This creates a new component that has access to the store's state and actions through its props.

Please note that this example assumes that you have already created a Redux store and defined a reducer function. If you haven't done so yet, please refer to the previous examples I provided on how to create a store and dispatch actions.


```js

// OTHER EXAMPLE


// index.js
// --------
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"
import { store } from "./store.js"

const root = createRoot(document.getElementById("app"));

// Store State Change Listener
const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
}

render();

// Subscribe to state changes
store.subscribe(render)


// App.js
// --------
import React from "react";
import { increment, decrement } from "./store";

function App({ state, dispatch}) {

  // Dispatch increment action
  const incrementerClicked = () => {
    dispatch(increment())
  }

  // Dispatch decrement action
  const decrementerClicked = () => {
    dispatch(decrement())
  }

  return(
    <main>
      <p id='counter'>{state}</p>
      <button id='incrementer' onClick={incrementerClicked}>+</button>
      <button id='decrementer' onClick={decrementerClicked}>-</button>
    </main>
  )
}
export default App;

// store.js
// ---------
import { createStore } from 'redux';

// Action Creators
export function increment() {
  return {type: 'increment'}
}

export function decrement() {
  return {type: 'decrement'}
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
      
    case 'decrement':
      return state - 1;
      
    default:
      return state;
  }
};  

export const store = createStore(countReducer);
  
```



#### Slices

In Redux, a slice is a concept introduced by Redux Toolkit to reduce the amount of boilerplate code required to define reducers and actions. A slice is essentially a collection of reducers and actions that operate on a specific portion of the overall Redux store state.

To create a slice, you can use the `createSlice` function provided by Redux Toolkit. The `createSlice` function takes an object as its argument, which should include the following properties:

- `name`: A string that represents the name of the slice.
- `initialState`: The initial state of the slice.
- `reducers`: An object that defines the reducers for the slice.

Here's an example of how you can create a slice for managing the state of a todo list:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
```

In this example, we define a slice called `todos` with an initial state of an empty array. We also define three reducers: `addTodo`, `toggleTodo`, and `deleteTodo`. Each reducer updates the state of the `todos` slice in response to an action.

Here's an example of how you can create multiple slices in Redux:

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Slice for managing todos
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

// Slice for managing user authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

// Combine the reducers from multiple slices
const rootReducer = {
  todos: todosSlice.reducer,
  auth: authSlice.reducer
};

// Create the Redux store with the combined reducers
const store = configureStore({
  reducer: rootReducer
});

// Export actions from each slice
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const { login, logout } = authSlice.actions;

export default store;
```

In this example, we have two slices: `todosSlice` for managing todos and `authSlice` for managing user authentication. Each slice has its own initial state, reducers, and actions.

We then combine the reducers from both slices into a root reducer called `rootReducer`. This combined reducer is passed to the `configureStore` function to create the Redux store.

Finally, we export the actions from each slice (`addTodo`, `toggleTodo`, `deleteTodo` from `todosSlice` and `login`, `logout` from `authSlice`) so that they can be used in components.

```js
// sample without toolkit

import { createStore } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

export const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    };
}

export const removeRecipe = (recipe) => {

    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe
    };
}

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    };
}

export const loadData = () => {

    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    };
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {

    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload
        default:
            return allRecipes;
    }
}
  
const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {

    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return searchTerm;
    }
}

// Create the initial state for this reducer.
const initialFavoriteRecipes = []
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {

    switch (action.type) {
        case 'favoriteRecipes/addRecipe':
            return [...favoriteRecipes, action.payload];

        case 'favoriteRecipes/removeRecipe':
            return favoriteRecipes.filter(element => element.id !== action.payload.id);

        default:
            return favoriteRecipes
    }
}
  
const rootReducer = (state = {}, action) => {

    const nextState = {
        allRecipes: allRecipesReducer(state.allRecipes, action),
        searchTerm: searchTermReducer(state.searchTerm, action),
        favoriteRecipes: favoriteRecipesReducer(state.favoriteReducer, action)
    }

    return nextState;
}

export const store = createStore(rootReducer);
```

#### Combine Reducers

`combineReducers` is a helper function provided by Redux that combines multiple reducers into a single reducer function. It takes an object as its argument, where each key is a slice name and each value is a reducer function. The resulting combined reducer function returns an object with the same keys as the input object, where each value is the state returned by the corresponding reducer.

Here's an example of how you can use `combineReducers` to combine multiple reducers:

```javascript
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

export default rootReducer;
```

In this example, we have two separate reducers: `todosReducer` and `counterReducer`. We use `combineReducers` to combine them into a single root reducer called `rootReducer`. The resulting `rootReducer` is an object with two keys: `todos` and `counter`, where each key corresponds to the state managed by the corresponding reducer.

> [!info] 
> Note that `combineReducers` is not required to use Redux, but it can be useful for organizing your reducers and managing different slices of your application's state.

Sure! Here's a full example of how you can use `combineReducers` to manage multiple slices of your application's state:

```javascript
import { createStore, combineReducers } from 'redux';

// Reducer for managing the state of the todo list
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

// Reducer for managing the state of the counter
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

// Dispatch actions to update the state
store.dispatch({ type: 'ADD_TODO', id: 1, text: 'Buy groceries' });
store.dispatch({ type: 'ADD_TODO', id: 2, text: 'Do laundry' });
store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
store.dispatch({ type: 'INCREMENT' });

// Log the current state of the store
console.log(store.getState());
```

In this example, we define two separate reducers: `todosReducer` and `counterReducer`. We then use `combineReducers` to combine them into a single root reducer called `rootReducer`.

We create the Redux store with the `rootReducer` using the `createStore` function. We then dispatch several actions to update the state of the store. Finally, we log the current state of the store using the `getState` method.

Note that in this example, we use plain objects to represent actions. In practice, it's recommended to use action creators to create actions that are more predictable and easier to manage.

#### Reducer Design Pattern

See [redux Ducks Pattern](https://github.com/erikras/ducks-modular-redux)
See [Redux Style](https://redux.js.org/style-guide?locale=en)

There are several design patterns commonly used with Redux to help organize and structure your code. Some of these patterns include:

1. Ducks: The Ducks pattern, popularized by the "ducks-modular-redux" repository you mentioned, promotes bundling related actions, reducers, and selectors into a single module. This approach simplifies the organization of Redux code by keeping related logic together.

2. Flux Architecture: The Flux architecture is a design pattern that serves as the foundation for Redux. It follows a unidirectional data flow, where actions are dispatched to modify the state, and the updated state triggers re-rendering of components. Redux builds upon this pattern by introducing reducers to manage state changes.

3. MVC (Model-View-Controller): MVC is a widely used design pattern that separates an application into three components: the model (data and business logic), the view (user interface), and the controller (handles user input and updates the model). While Redux doesn't strictly adhere to the MVC pattern, it shares some similarities in terms of managing state changes and updating views.

It's important to note that Redux itself doesn't enforce any specific design pattern, but rather provides a predictable state container. The choice of design pattern often depends on the complexity and requirements of your application.

If you're interested in learning more about Redux design patterns, I recommend checking out the official Redux documentation, which provides recommended patterns, best practices, and suggested approaches for writing Redux applications.

Here's an example of how you can organize your Redux code using the Ducks pattern:

```shell
src/
  store.js 
  modules/ # can be also called features...
    counter.js
    todos.js
```

In this example, we have a `store.js` file that creates the Redux store, and two separate modules: `counter.js` and `todos.js`. Each module follows the Ducks pattern by bundling related actions, reducers, and selectors into a single file.

Here's what the `counter.js` module might look like:

```javascript
// Actions
const INCREMENT = 'my-app/counter/INCREMENT';
const DECREMENT = 'my-app/counter/DECREMENT';

// Reducer
export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// Action creators
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

// Selectors
export function selectCount(state) {
  return state.counter;
}
```

In this module, we define two actions (`INCREMENT` and `DECREMENT`) and a reducer that manages the state of the counter. We also define action creators for each action and a selector that returns the current count.

Here's what the `todos.js` module might look like:

```javascript
// Actions
const ADD_TODO = 'my-app/todos/ADD_TODO';
const TOGGLE_TODO = 'my-app/todos/TOGGLE_TODO';
const DELETE_TODO = 'my-app/todos/DELETE_TODO';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

// Action creators
let nextTodoId = 0;

export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

// Selectors
export function selectTodos(state) {
  return state.todos;
}
```

In this module, we define three actions (`ADD_TODO`, `TOGGLE_TODO`, and `DELETE_TODO`) and a reducer that manages the state of the todo list. We also define action creators for each action and a selector that returns the current list of todos.

To use these modules in your application, you can import them into your components and use the `useSelector` and `useDispatch` hooks from the `react-redux` library to interact with the store.

Note that this is just one way to organize your Redux code using the Ducks pattern. There are many variations and opinions on how to structure your code, so it's important to choose an approach that works best for you and your team.


#### Passing the store

When using Redux with React, you can pass store data through the top-level component using the `Provider` component provided by the `react-redux` library. Here's an example of how you can do this:


```
src/
  index.js
  App.js
  store.js
  reducers/
    counter.js
    todos.js
```

In this example, the directory structure is organized as follows:

- `src/`: The root directory for your application's source code.
  - `index.js`: The entry point of your application where the React app is rendered and the Redux store is provided.
  - `App.js`: The top-level component of your application where you can access the Redux store data using the `useSelector` hook.
  - `store.js`: The file where you create and configure your Redux store.
  - `reducers/`: A directory where you can place your individual reducer files.
    - `counter.js`: The reducer file for managing the state of the counter.
    - `todos.js`: The reducer file for managing the state of todos.


1. Wrap your app component with the `Provider` component and pass the Redux store as a prop:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

In this example, we import the `Provider` component from `react-redux` and the `store` from your `store.js` file. We wrap the `<App />` component with the `<Provider>` component and pass the `store` as a prop.

2. Access the store data in your components using the `useSelector` hook from `react-redux`:

```javascript
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const counter = useSelector(state => state.counter);
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

In this example, we import the `useSelector` hook from `react-redux`. We can use this hook within our functional component to access specific parts of the store state. In this case, we're accessing the `counter` and `todos` data from the store.

By wrapping your app component with the `Provider` and using the `useSelector` hook, you can pass store data down to any component within your application and access it as needed.

In this example, we import the useSelector hook from react-redux to access the Redux store data. Inside the App component, we use the `useSelector `hook to retrieve the counter and todos data from the store.

The component renders a `<h1>` element displaying the current value of the counter. It also renders an `<ul>` element with a list of todos, mapping over the todos array from the store and rendering each todo as an `<li>` element.

You can use the `subscribe`:

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';
import { store } from './app/store.js'

const root = createRoot(document.getElementById('root'));

const render = () => {

  // Pass `state` and `dispatch` props to <App />
  root.render(
    <App
	    state={store.getState()}
	    dispatch={store.dispatch}
    />,
  )
}
render();

// Subscribe render to changes to the `store`
store.subscribe(render)
```




#### Review

Though the `redux` package provides the `createStore()` method for us, examining how this powerful object can be created using vanilla [JavaScript](https://www.codecademy.com/resources/docs/javascript) will help illuminate how Redux works under the hood. This article is for learners who want to solidify their understanding of the Redux store.

It is assumed that you have some familiarity with the following Redux-related terms and concepts:

- The one-way data-flow model (state → view → actions → state)
- Reducer functions
- Action objects
- The `createStore()` function (by the `redux` package)
- The `store` object and [its three main methods](https://redux.js.org/api/store)

Visit [our course on Redux](https://www.codecademy.com/learn/learn-redux) to learn about or refresh yourself with these terms and concepts.

##### Part 1: What is the Redux store and how is it used?

[Redux](https://redux.js.org/) is a state-management library centered around a single, powerful object called the `store`. This one object is responsible for holding the entire application’s state, receiving _action objects_ and then executing state changes based on the type of the action received, and informing (executing) _listener functions_ when such changes occur.

To help create this `store` object, the Redux library provides the `createStore()` function. This function accepts a reducer function as an argument and returns a `store` object with three essential methods:

- `store.getState()`: for retrieving the current state value held by the `store`
- `store.dispatch(action)`: for triggering changes to the state, given an action object
- `store.subscribe(listener)`: for registering listener functions to be called when state changes occur

All of this can be seen in the example below which implements a simple counting application:

```
import { createStore } from 'redux';const countReducer = (state = 0, action) => {  switch (action.type) {      case 'increment':        return state + 1;    case 'decrement':        return state - 1;    default:        return state;    }}const store = createStore(countReducer);const render = () => {  document.getElementById('count').text = store.getState(); // Display the current state.}render(); // Render once with the initial state of 0.store.subscribe(render); // Re-render on state changes.document.getElementById('plusButton').addEventListener('click', () => {    store.dispatch({ type: 'increment' }); // Request a state change.});
```

With this working knowledge of how to use the `createStore()` function and the `store` methods, we can begin to write the outline of this function:

```
const createStore = (reducer) => {  const getState = () => {};  const dispatch = () => {};  const subscribe = () => {};  return { getState, dispatch, subscribe };}
```

Above, we define `createStore()` simply as a function with a `reducer` argument that returns an object containing three methods: `getState()`, `dispatch()`, and `subscribe()`.

##### Part 2: Holding the current state of the application

Let’s now turn our attention to the primary responsibility of the `store`: to hold the current state of the application and to provide access to this value via the `store.getState()` method. Implementing this behavior is as simple as storing an encapsulated variable (we can call it `state`) within the function and returning it with `store.getState()`:

```
const createStore = (reducer) => {  let state;  const getState = () => state;  const dispatch = () => {};  const subscribe = () => {};  return { getState, dispatch, subscribe };}
```

Hiding the `state` behind the [API](https://www.codecademy.com/resources/docs/general/api) of the `store` avoids common dangers associated with having global variables:

- Polluting the global namespace increases the chances of naming collisions.
- Granting variable access to parts of an application while limiting it to others is impossible.
- Debugging is difficult when a variable is referenced in many parts of the application.

Redux solves these problems by requiring the programmer to use only the `store` methods to access the state.

##### Part 3: Managing listener functions

The state of the `store` will likely change many times and the features of the application must be notified when those changes occur. The `store.subscribe()` method allows you to subscribe callback functions, called _listeners_, to be executed when the state data changes. As in the first example, functions that render the view-layer are often subscribed to the `store` and use `store.getState()` to get the most up-to-date state data.

Any number of listeners may be subscribed to the `store` at once so an array is maintained by the `store` and the `subscribe()` method adds provided listeners to that array.

```
const createStore = (reducer) => {  let state;  let listeners = [];  const getState = () => state;  const dispatch = () => {};  const subscribe = (listener) => {    listeners.push(listener);    return () => {        listeners = listeners.filter(l => l !== listener)      }  };  return { getState, dispatch, subscribe };}
```

Also notice that the `subscribe()` method returns a function. If you no longer want the given listener to be executed in response to state changes, this function can be saved and called to _unsubscribe_ the given listener. For example:

```
const unsubscribe = store.subscribe(render); // Subscribes `render` to the store.// somewhere else in the program...unsubscribe(); // Unsubscribes `render` from the store.
```

##### Part 4: Handling incoming actions

Redux ensures that the state is maintained reliably by requiring the programmer to dispatch actions to the store if they wish to update the state. The `store.dispatch()` function accepts an `action` object as an argument and calculates the next `state` value by calling the `reducer()` with the current `state` and the `action`:

```
const createStore = (reducer) => {  let state;  let listeners = [];    const getState = () => state;  const dispatch = (action) => {    state = reducer(state, action);    listeners.forEach(listener => listener());  };  const subscribe = (listener) => {    listeners.push(listener);    return () => {        listeners = listeners.filter(l => l !== listener)      }  };    dispatch({});  return { getState, dispatch, subscribe };}
```

Each listener that has been subscribed to the `store` (stored in the `listeners` array) is then executed. Notice that the state is not passed directly to these listeners. It is up to each listener to use `store.getState()` to get the most up-to-date data.

Finally, notice that before the `store` object is returned, the function call `dispatch({})` is made. This initializes the `state` value with the default initial state value of the `reducer`.

Apart from a few details and edge cases, this is the full implementation of the `createStore()` method provided by the `redux` package. As you can see, the technology behind the Redux `store` is not particularly complicated, though the pattern it enforces is incredibly powerful.
### Redux Toolkit

See [git ref](https://gitlab.com/paul.piazza.pro/codecademy-store-toolkit.git)

#### Introduction

Redux Toolkit is a comprehensive toolset that simplifies the development of Redux-based applications. It provides a set of utilities and features that make common Redux use cases easier to handle. Some of the key features of Redux Toolkit include store setup, reducer creation, and immutable update logic. It also includes built-in support for commonly used Redux addons.

Here's an example of how Redux Toolkit can be used in a web development project:

```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Create the store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Dispatch actions
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement());

// Access state
console.log(store.getState().counter); // Output: 0 (initial state) + 1 - 1 = 0
```

In this example, we create a slice using `createSlice` from Redux Toolkit. The slice represents a portion of the application state related to the counter. We define two reducers (`increment` and `decrement`) that update the counter state. We then create the Redux store using `configureStore` and pass in the reducer from the counter slice. Finally, we can dispatch actions using the `store.dispatch` method and access the current state using `store.getState()`.

This is just a basic example, and Redux Toolkit provides many more features and utilities to simplify complex Redux workflows. I recommend exploring the official Redux Toolkit documentation for more in-depth information and examples.[1]

Let me know if you have any further questions or if there's anything specific you'd like to learn about Redux Toolkit!

```js

// WITH TOOLKIT

import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

/* Create your Slice object here. */
const options = {
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return [...state, action.payload]
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    }
  }
}

export const favoriteRecipesSlice = createSlice(options)

/* Do not delete the code below...*/
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


// WITHOUT ***************************

import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Reducer
const initialState = [];

export const favoriteRecipesReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...state, action.payload]
      
    case 'favoriteRecipes/removeRecipe':
      return state.filter(recipe => recipe.id !== action.payload.id)

    default:
      return state;
  }
}


// Action Creators

export function addRecipe(recipe) {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  }
}

// Selectors

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;
export const selectFilteredFavoriteRecipes = (state) => {

  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

```

#### Use Immer for writing immutable code

See [Immer](https://immerjs.github.io/immer/)

When working with Redux or managing state in general, it is often recommended to use immutable data structures to ensure predictable and reliable behavior. However, there are cases where you may need to write code that mutates data for performance reasons or due to specific requirements.

Immer is a JavaScript library that allows you to write "mutable" code while still preserving immutability. It provides a simple and intuitive API for working with immutable state in a more convenient way.

With Immer, you can write code that appears to directly mutate the state, but under the hood, Immer creates a new copy of the state with the necessary changes applied. This helps to keep your code clean and maintainable while still benefiting from the advantages of immutability.

To use Immer, you typically wrap your code inside a function called a "producer" function. Within this function, you can write code that directly modifies the state without worrying about immutability. Immer takes care of creating a new copy of the state with the changes applied.

```javascript
import produce from 'immer';

const originalState = {
  todos: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Write code with Immer', completed: false },
  ],
};

const newState = produce(originalState, (draftState) => {
  draftState.todos[0].completed = true;
});

console.log(newState.todos[0].completed); // Output: true
```

In this example, we have an original state object that contains an array of todos. We use the `produce` function from Immer to create a new state by applying changes within the producer function. In this case, we update the `completed` property of the first todo to `true`.

The `draftState` parameter represents a draft copy of the state that you can modify as if it were mutable. Immer takes care of creating an immutable copy of the state with the necessary updates.

It's important to note that Immer does not mutate the original state directly. Instead, it creates a new copy with the changes applied, which helps to ensure immutability.

#### Actions

When working with Redux Toolkit, you can use the `createSlice` function to generate reducers and actions automatically based on the initial state and a set of defined reducer functions. This can help simplify your code and reduce boilerplate.

To demonstrate how to use returned objects and auto-generated actions with Redux Toolkit, let's consider an example where we have a slice for managing a list of users.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
```

In this example, we define a slice using `createSlice` and provide the initial state object. Within the `reducers` object, we define two reducer functions: `addUser` and `removeUser`. These reducer functions take the current state and an action as parameters.

When you call `createSlice`, it automatically generates action creators for each defined reducer function. In this case, `addUser` and `removeUser` are the generated action creators.

To use these generated actions in your application, you can import them from the slice and dispatch them using the Redux store. For example:

```javascript
import { addUser, removeUser } from './userSlice';
import { useDispatch } from 'react-redux';

const UserComponent = () => {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = { id: 1, name: 'John Doe' };
    dispatch(addUser(newUser));
  };

  const handleRemoveUser = () => {
    const userId = 1;
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleRemoveUser}>Remove User</button>
    </div>
  );
};
```

In this example, we import the `addUser` and `removeUser` actions from the `userSlice`. We then use the `useDispatch` hook from `react-redux` to get access to the dispatch function. We can dispatch the actions by calling them with the necessary payload.

By using returned objects and auto-generated actions with Redux Toolkit, you can write cleaner and more concise code, reducing the amount of boilerplate typically associated with Redux development.

#### Returned Objects and Reducers

The `createSlice` function in Redux Toolkit returns an object that contains the reducer function, actions, and the name of the slice. The `reducer` field represents the comprehensive reducer function that combines all the case reducers associated with different actions. This is commonly known as the "slice reducer". When an action is dispatched, the `createSlice` function uses the reducer to check if the action type matches any of the case reducers defined in the `actions` field. If a match is found, the corresponding case reducer is executed, otherwise, the current state is returned.

Here's an example to illustrate this concept:

```javascript
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // Add logic to add a new todo to the state
    },
    toggleTodo: (state, action) => {
      // Add logic to toggle the completed status of a todo
    },
  },
});
 
/* Object returned by todosSlice */  
{  
	name: 'todos',  
	reducer: (state, action) => newState,  
	actions: {  
	   addTodo: (payload) => ({type: 'todos/addTodo', payload}),  
	   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})  
	},  
// case reducers field omitted  
}

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
```

In this example, `todosSlice.reducer` represents the slice reducer that combines the `addTodo` and `toggleTodo` case reducers. When an action with the type `'todos/addTodo'` is dispatched, the `todosSlice.reducer` function checks if there's a match with any of the case reducers. If a match is found, the corresponding case reducer function is executed to update the state.

The `addTodo` and `toggleTodo` actions are auto-generated by the `createSlice` function and can be used to dispatch the corresponding actions in your application.

By exporting the reducer from the slice and using it as the slice of state in your global store, you can manage and update the state specific to the `todos` slice of your application.

#### ConfigureStore

To convert your Redux store to use `configureStore()` from Redux Toolkit without using `combineReducers`, you can follow these steps:

Use `configureStore()` to create your store, passing in the individual reducers directly:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});

export default store;
```

In this example, we have two reducers: `todosReducer` and `userReducer`. We specify them as the values for the corresponding keys (`todos` and `user`) in the `reducer` object.

With these steps, you have converted your store to use `configureStore()` from Redux Toolkit without using `combineReducers`. The `configureStore()` function automatically combines the reducers internally, so you don't need to explicitly use `combineReducers`.

The `configureStore()` function provides additional features like enabling Redux DevTools Extension by default and automatically setting up middleware such as Redux Thunk for handling asynchronous actions.

You can now use the `store` in your application to manage and access the state.

Note: Make sure to update any references to the old store implementation in your application with the new `store` created using `configureStore()`.

#### review

- **R**edux **T**ool**k**it (RTK) contains packages and functions that build in suggested best practices, simplify most Redux tasks, prevent common mistakes, and make it easier to write Redux applications.
- RTK has a `createSlice()` function that will help us simplify our Redux reducer logic and actions.
- `createSlice()` has one parameter, a configuration object, which we call `options`. In this lesson, we covered three object properties: `name`, `initialState`, and `reducers`. The configuration object has more properties which will be covered in the following lessons.
- A case reducer is a method that can update the state and will be executed when the corresponding action type is dispatched. This is similar to a case in a switch statement.
- You can write code that “mutates” the state inside the case reducers passed to `createSlice()`, and Immer will safely and accurately return an immutably updated state.
- `createSlice()` returns an object with the following properties: `name`, `reducer`, `actions`, and `caseReducers`.
- We typically use a Redux community code convention called the “ducks” pattern when exporting the action creators and the reducer.
- RTK has a `configureStore()` function that simplifies the store setup process. `configureStore()` wraps around the Redux core `createStore()` function and the `combineReducers()` function, and handles most of the store setup for us automatically.
### Redux Middleware and thunks

In Redux, middleware is a mechanism that sits between the dispatching of an action and the processing of that action by the reducer. It allows you to intercept actions and perform additional logic or modifications before they reach the reducer. Middleware is a powerful tool for extending or customizing Redux's default behavior to meet the specific needs of your application.

![[Pasted image 20231208185514.png]]


Middleware in Redux can be used for various purposes, such as logging, caching, authentication, error reporting, routing, and making asynchronous requests for data. It provides a way to add extra functionalities to your Redux application by utilizing popular open-source middleware or creating your own middleware tailored to your application's requirements.

When an action is dispatched in Redux, it goes through the middleware before reaching the reducer. The middleware can perform tasks such as modifying the action, dispatching additional actions, or handling asynchronous operations. By intercepting actions, middleware enhances the flexibility and extensibility of Redux.

It's worth noting that Redux Toolkit, a popular Redux library, provides utility functions like `createAsyncThunk()` and options like `extraReducers` to simplify the process of working with middleware and handling asynchronous requests.

Here's an example of a custom middleware in Redux:

```javascript
const myCustomMiddleware = store => next => action => {
  // Perform some logic before the action reaches the reducer
  console.log('Action:', action);
  console.log('Current State:', store.getState());

  // You can modify the action or dispatch additional actions here
  // For example, conditionally dispatching an additional action
  if (action.type === 'SOME_ACTION') {
    const modifiedAction = { ...action, payload: 'Modified payload' };
    store.dispatch(modifiedAction);
  }

  // Pass the action along to the next middleware or the reducer
  const result = next(action);

  // Perform some logic after the action has been processed by the reducer
  console.log('New State:', store.getState());

  // Return the result of the next middleware or the reducer
  return result;
};

```

In this example, `myCustomMiddleware` is a function that takes the `store` object as an argument and returns a function that takes `next` as an argument. This second function then returns another function that takes `action` as an argument.

Inside the middleware function, you can perform any custom logic before and after the action is processed by the reducer. In this case, we log the action before it reaches the reducer, conditionally dispatch an additional action based on the original action, and log the new state after the action has been processed by the reducer.

To use this middleware in your Redux application, you can apply it when creating the store:

```javascript
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, "", applyMiddleware(myCustomMiddleware));

store.dispatch({ type: 'SOME_ACTION', payload: 10})
```

By applying the middleware using `applyMiddleware()` from Redux, it will be invoked for every dispatched action in your application.

Please note that this is a simplified example to demonstrate the structure of custom middleware. In practice, middleware can be more complex and handle a wide range of tasks based on your application's requirements.

#### thunk

A thunk is a higher-order function that wraps the computation we want to perform later. For example, this `add()` function returns a thunk that will perform `x+y` when called.

```js
const add = (x,y) => {
	return () => {
	    return x + y;
	}
}
```

Thunks are helpful because they allow us to bundle up bits of computation we want to delay into packages that can be passed around in code. Consider these two function calls, which rely on the `add()` function above:

```js
const delayedAddition = add(2,2);
delayedAddition() // => 4
```

Note that calling `add()` does not cause the addition to happen – it merely returns a function that will perform the addition when called. To perform the addition, we must call `delayedAddition()`.

```js
const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}

const remindMeLater = task => {
  return () => {
    return remindMeTo(task)
  }
}

const reminder = remindMeLater('get groceries')
console.log(reminder())
```

Thunks are a concept commonly used in Redux to handle asynchronous logic and side effects. They provide a way to delay the execution of a function and dispatch actions asynchronously. Thunks are typically used when you need to perform an asynchronous operation, such as making an API request, before dispatching an action to update the state.

In Redux, thunks are functions that are returned by another function. These returned functions can be dispatched like regular actions, and Redux middleware (such as Redux Thunk) intercepts them to handle their execution. Thunks have access to the Redux store's `dispatch` and `getState` functions, allowing them to dispatch multiple actions or access the current state if needed.

Thunks are useful when you need to perform complex asynchronous operations or when you need to dispatch multiple actions in a specific order. They provide a way to encapsulate asynchronous logic within a single function, making it easier to manage and test.

Here's an example of a thunk in Redux using the Redux Thunk middleware:

```javascript
// Action creator that returns a thunk
const fetchData = () => {
  return (dispatch, getState) => {
    // Perform asynchronous operation (e.g., API request)
    // You can access the current state using getState()

    dispatch({ type: 'FETCH_DATA_REQUEST' });

    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      const data = { /* fetched data */ };
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    }, 2000);
  };
};

// Dispatching the thunk
store.dispatch(fetchData());
```

In this example, `fetchData` is an action creator that returns a thunk. The thunk function receives `dispatch` and `getState` as arguments, allowing it to dispatch actions and access the current state if needed. Inside the thunk, you can perform asynchronous operations like making an API request. In this case, we simulate an asynchronous operation using `setTimeout` and dispatch actions to indicate the request's progress and result.


#### promise Lifecycle Actions

![[Pasted image 20231208191414.png]]

In Redux, you can create async functions using thunks to handle asynchronous actions. Here's an example of how you can define an async action using a thunk in Redux:

```javascript
// Action creator that returns an async thunk
const fetchUserData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_USER_DATA_REQUEST' });

      // Perform asynchronous operation (e.g., API request)
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();

      dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: error.message });
    }
  };
};

// Dispatching the async thunk
store.dispatch(fetchUserData());
```

In this example, `fetchUserData` is an action creator that returns an async thunk. The thunk function is defined as an async function, allowing you to use the `await` keyword to handle asynchronous operations, such as making an API request.

Inside the thunk, you can dispatch actions to indicate the progress and result of the async operation. In this case, we dispatch a `FETCH_USER_DATA_REQUEST` action before the API request, a `FETCH_USER_DATA_SUCCESS` action with the fetched data upon successful response, and a `FETCH_USER_DATA_FAILURE` action if an error occurs.

By using thunks, you can handle async operations in a more structured manner within your Redux application. Thunks allow you to perform async tasks, dispatch multiple actions, and access the Redux store if needed.

Please note that to use thunks in Redux, you need to set up middleware like Redux Thunk. The middleware intercepts the dispatched thunks and handles their execution.

I hope this example clarifies how you can create async functions with thunks in Redux! Let me know if you have any further questions.

#### createAsyncThunk

Certainly! `createAsyncThunk` is a utility function provided by Redux Toolkit that simplifies the process of creating async actions with thunks. Here's an example of how you can use `createAsyncThunk` to define async actions in Redux:

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk created using createAsyncThunk
const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Reducer that handles the async action state
const userReducer = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Dispatching the async thunk
store.dispatch(fetchUserData());
```

In this example, `createAsyncThunk` is used to create an async thunk called `fetchUserData`. The first argument to `createAsyncThunk` is a string that represents the type prefix for the generated action types.

Inside the async thunk, you can write your async logic using `async/await` or any other asynchronous pattern. In this case, we make an API request and return the data upon successful response. If an error occurs, we throw an error.

The `extraReducers` section in the reducer handles the different states of the async action. It listens to the pending, fulfilled, and rejected action types generated by `createAsyncThunk` and updates the state accordingly.

By using `createAsyncThunk`, you can streamline the process of creating async actions in Redux. It automatically generates the necessary action types and simplifies the reducer logic for handling async actions.

#### pass args

Here's an example of using `createAsyncThunk` with arguments:

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk created using createAsyncThunk with arguments
const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (args) => {
  try {
    const data = await fetch(args.url);
    const json = await data.json();
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Reducer that handles the async action state
const recipesReducer = createSlice({
  name: 'recipes',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Dispatching the async thunk with arguments
const url = 'https://api.example.com/recipes';
store.dispatch(fetchRecipes({ url }));
```

In this example, `createAsyncThunk` is used to create an async thunk called `fetchRecipes`. The second argument to `createAsyncThunk` is an async function that receives `args` as a parameter. `args` can be an object or any other data you want to pass to the thunk.

Inside the async thunk, you can access the passed arguments (`args`) and use them in your async logic. In this case, we assume that `args` contains a `url` property, which is used in the `fetch` request.

The `extraReducers` section in the reducer handles the different states of the async action, just like in the previous example.

To dispatch the async thunk with arguments, you can pass an object containing the desired arguments when calling `store.dispatch(fetchRecipes({ url }))`.

By using `createAsyncThunk` with arguments, you can pass dynamic data to your async thunks and customize their behavior based on the provided arguments.

Please note that you need to have Redux Toolkit installed to use `createAsyncThunk`.

#### Actions Generated by createAsyncThunk()

As you know, `createAsyncThunk` takes care of dispatching actions for each of the promise lifecycle states: pending, fulfilled, and rejected. But what exactly do these actions look like?

Building off the action type string you pass to it, `createAsyncThunk` produces an action type for each promise lifecycle states. If you pass the action type string `'resourceType/actionType'` to `createAsyncThunk`, it will produce these three action types:

- `'resourceType/actionType/pending'`
- `'resourceType/actionType/fulfilled'`
- `'resourceType/actionType/rejected'`

To use our earlier example:

```
import { createAsyncThunk } from '@reduxjs/toolkit'import { fetchUser } from './api'const fetchUserById = createAsyncThunk(  'users/fetchUserById', // action type  async (userId, thunkAPI) => { // payload creator    const response = await fetchUser(userId)    return response.data  })
```

When you pass `createAsyncThunk` the action type string `'users/fetchUserById'`, `createAsyncThunk` produces these three action types:

- `'users/fetchUserById/pending'`
- `'users/fetchUserById/fulfilled'`
- `'users/fetchUserById/rejected'`

If you need to access the individual pending/fulfilled/rejected action creators, you can reference them like this:

- `fetchUserById.pending`
- `fetchUserById.fulfilled`
- `fetchUserById.rejected`

You will have to handle these action types in your reducers if you want to reflect these promise lifecycle states in your app. In the next exercise, we will show you how to do that.

#### Using createSlice()

In Redux Toolkit, `createSlice()` is a function that allows you to generate a slice of the store, including action creators and action types, based on the provided configuration parameters. However, by default, `createSlice()` only responds to the action types generated by the reducers defined within it.

If you're using asynchronous action creators generated by `createAsyncThunk()`, such as `fetchUserById` in the example, the corresponding promise lifecycle action types (`'users/fetchUserById/pending'`, `'users/fetchUserById/fulfilled'`, and `'users/fetchUserById/rejected'`) may not have any effect on the slice generated by `createSlice()`.

To make the slice respond to these promise lifecycle action types, you can use the optional `extraReducers` property when calling `createSlice()`. This property allows you to define additional reducers that handle action types generated elsewhere.

In the example provided, the `extraReducers` property is used to handle the promise lifecycle action types for fetching a user. By including these additional reducers in the `extraReducers` property, the user's slice can respond to these actions and update its state accordingly.

Additionally, in the example, extra fields such as `isLoading` and `hasError` are added to the state object. These fields help track the promise lifecycle states, allowing for better handling of UI updates based on the pending or rejected states of the promise. When the promise is fulfilled, these fields are set to false, and the user data is added to the state.

Please note that the specific implementation of `createSlice()` and handling of async actions may vary depending on the version of Redux Toolkit and other libraries being used in your project.


```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../favoriteRecipes/favoriteRecipesSlice";

import { selectSearchTerm } from "../search/searchSlice";

export const loadRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {

    [loadRecipes.pending]: (state, action) => {

      // fill out function body
      state.isLoading = true;
      state.hasError = false;
    },

    [loadRecipes.fulfilled]: (state, action) => {

      // fill out function body
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },

    [loadRecipes.rejected]: (state, action) => {
      // fill out function body
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

  

export const allRecipesSlice = createSlice(sliceOptions);

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


export default allRecipesSlice.reducer;
```

#### review

- Learned about Redux middleware and wrote your own simple logging middleware
- Encountered thunks and learned about how valuable thunks are for deferring computation
- Learned the three _promise lifecycle actions_: pending, fulfilled, and rejected
- Learned how to use `createAsyncThunk()`, which abstracts the process of handling promise lifecycle states according to best practices/common design paradigms
- Imported `createAsyncThunk` from the Redux Toolkit:

```
import { createAsyncThunk } from '@reduxjs/toolkit';
```

- Created action creators using `createAsyncThunk()`.
- Made your reducers respond to pending/fulfilled/rejected promise lifecycle actions by supplying the `extraReducers` property to `createSlice()`.  



