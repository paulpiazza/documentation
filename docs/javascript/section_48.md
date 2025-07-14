---
title: JSX
description: Slim notes.
order: 48
---

### Syntax

JSX is a syntax extension for JavaScript that is used primarily with the React library for building user interfaces. It allows developers to write HTML-like code in their JavaScript files, which is then transformed into regular JavaScript code by a transpiler.

JSX stands for JavaScript XML, and it allows developers to write code that looks like a combination of HTML and JavaScript. JSX elements are treated as JavaScript _expressions_. Here's an example of what JSX code looks like:

```jsx
const element = <h1>Hello, world!</h1>;

const myTeam = {  
  center: <li>Benzo Walli</li>,  
  powerForward: <li>Rasha Loa</li>,  
  smallForward: <li>Tayshaun Dasmoto</li>,  
  shootingGuard: <li>Colmar Cumberbatch</li>,  
  pointGuard: <li>Femi Billon</li>  
};
```

In this example, we're using JSX to create an HTML-like element that displays the text "Hello, world!". This code is then transformed into regular JavaScript code by a transpiler, which looks something like this:

```javascript
const element = React.createElement("h1", null, "Hello, world!");
```

This JavaScript code creates a new React element using the `React.createElement()` function, which takes three arguments: the type of element to create (in this case, "h1"), any props to pass to the element (null in this case), and the content of the element ("Hello, world!").

JSX is not required to use React, but it can make writing React code more concise and readable. It allows developers to write code that looks like HTML, which can be easier to understand and maintain than traditional JavaScript code.

However, it's important to note that JSX is not HTML. It is a syntax extension for JavaScript that is designed to work with React. While the syntax may look similar to HTML, there are some key differences, such as using `className` instead of `class` to set CSS classes on elements.

Overall, JSX is a powerful tool for building user interfaces with React, and it has become a popular choice among web developers for building dynamic and interactive web applications.

### Attributes in JSX

In JSX, attributes are used to provide additional information to an element, such as its class, style, or event handlers. Attributes in JSX are similar to HTML attributes, but there are some differences in syntax and naming conventions.

To add an attribute to a JSX element, you can use the same syntax as HTML, by adding the attribute name and value inside curly braces. Here's an example:

```jsx
const element = <div className="my-class" onClick={handleClick}>Hello, world!</div>;
```

In this example, we're adding two attributes to a `div` element. The `className` attribute is used to set the CSS class of the element, and the `onClick` attribute is used to specify a function to be called when the element is clicked.

It's worth noting that in JSX, attributes are treated as JavaScript expressions, which means that you can use variables or other expressions in place of a hard-coded value. For example:

```jsx
const myClass = "my-class";
const handleClick = () => {
  console.log("Element clicked!");
};
const element = <div className={myClass} onClick={handleClick}>Hello, world!</div>;
```

In this example, we're using variables `myClass` and `handleClick` to set the `className` and `onClick` attributes of the `div` element, respectively.

It's also possible to add custom attributes to JSX elements, although the syntax for doing so can vary depending on the version of React you're using. In React 16 and later versions, you can add custom attributes to an element by simply including them in the JSX code. For example:

```jsx
const element = <div customAttribute="my-value">Hello, world!</div>;
```

In this example, we're adding a custom attribute named `customAttribute` with a value of `"my-value"` to a `div` element.

### Nested JSX

In JSX, you can nest elements inside other elements to create a tree-like structure that represents the structure of the UI. To nest elements, you simply include them inside the opening and closing tags of the parent element.

Here's an example of nested JSX:

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

In this example, we're creating a `div` element that contains two child elements: an `h1` element and a `p` element. The child elements are indented to make the structure more readable, but this is not required.

When nesting elements in JSX, it's important to remember that JSX expressions must have a single root element. This means that all of the nested elements must be wrapped in a single parent element. For example, this code is valid:

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

But this code is not:

```jsx
const element = (
  <h1>Hello, world!</h1>
  <p>This is a paragraph.</p>
);
```

In this case, we're trying to create two sibling elements (`h1` and `p`) without wrapping them in a parent element. This will result in a syntax error.

When working with nested JSX, it's also important to use proper indentation and formatting to make the code more readable. This can help make the structure of the UI more clear and make it easier to spot errors or issues with the code.

Overall, nested JSX is a powerful tool for building complex user interfaces in React, and it's essential for creating UIs that are easy to read and maintain.

### JSX Outer Elements

In JSX, there is a rule that requires a JSX expression to have exactly one outermost element. This means that all JSX code must be wrapped in a single parent element. The outermost element serves as the root of the JSX tree.

For example, this code is valid because the JSX expression has a single outermost element:

```jsx
const jsxElement = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

In this example, the `div` element acts as the outermost element, and the `h1` and `p` elements are nested within it.

However, this code is not valid because it has multiple outer elements:

```jsx
const jsxElement = (
  <h1>Hello</h1>
  <p>World</p>
);
```

In this case, there are two outer elements (`h1` and `p`) without a single parent element wrapping them. This will result in a syntax error.

To comply with the rule of having a single outer element, you can wrap the multiple elements in a single parent element. For example:

```jsx
const jsxElement = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

By wrapping the elements in a `div`, we provide a single parent element for the JSX expression.

It's important to note that the outermost element can be any valid JSX element, such as a `div`, `span`, or custom component.

Understanding and adhering to the rule of having a single outer element in JSX is crucial for writing valid JSX code and building complex user interfaces in React.

### Rendering JSX

To render JSX in a React application, you'll need to create a component that returns a JSX expression. Here's an example of a simple component that renders a `div` element with some text:

```jsx
import React from 'react';

function MyComponent() {
  return <div>Hello, world!</div>;
}

export default MyComponent;
```

In this example, we're importing the `React` library and defining a function component called `MyComponent`. The component returns a JSX expression that creates a `div` element with the text "Hello, world!". We then export the component using the `export default` syntax so that it can be used in other parts of our application.

To render the component in our application, we'll need to import it and include it in our JSX code. Here's an example of how to do this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

ReactDOM.render(<MyComponent />, document.getElementById('root'));

// another way
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');  
const root = createRoot(container);  
root.render(<h1>Hello world</h1>);

// passing variable
const toDoList = (  
  <ol>  
    <li>Learn React</li>  
    <li>Become a Developer</li>  
  </ol>  
);  
  
const container = document.getElementById('app');  
const root = createRoot(container);  
root.render(toDoList);
```

In this example, we're importing the `ReactDOM` library and our `MyComponent` component. We then use the `ReactDOM.render()` method to render our component to the DOM. The first argument to `ReactDOM.render()` is the JSX expression that creates our component, and the second argument is the DOM element where we want to render our component.

>[!info]
>One special thing about a React root’s `render()` method is that it _only updates DOM elements that have changed_.

### class / className

In React, the `class` attribute is a reserved keyword in JavaScript, so it cannot be used directly in JSX. Instead, you should use the `className` attribute to specify the CSS class for an element.

This is because JSX gets translated into JavaScript, and `class` is a reserved word in JavaScript.

When JSX is _rendered_, JSX `className` attributes are automatically rendered as `class` attributes.

In React 15 and earlier versions, the `class` attribute was ignored and caused a warning in the console. In React 16 and later versions, the `class` attribute is still supported, but it's recommended to use `className` instead.

Here's an example of using the `className` attribute in JSX:

```jsx
function MyComponent() {
  return <div className="my-class">Hello, world!</div>;
}
```

In this example, we're using the `className` attribute to specify the CSS class for a `div` element. The value of the `className` attribute is a string that contains one or more class names separated by spaces.

Overall, using `className` instead of `class` in JSX is a best practice in React and ensures that your code is compatible with all versions of React.

### self-closing tags

In JSX, you can use self-closing tags to create elements that don't have any children. Self-closing tags are similar to regular HTML tags that don't require a closing tag, such as the `img` tag.

Here's an example of using self-closing tags in JSX:

```jsx
function MyComponent() {
  return (
    <div>
      <img src="example.jpg" alt="Example" />
      <input type="text" name="example" />
    </div>
  );
}
```

In this example, we're using self-closing tags to create an `img` element and an `input` element. The `img` tag doesn't have any children, so we can use a self-closing tag to create it. The `input` tag is also self-closing because it doesn't have any children.

Self-closing tags are a convenient way to create elements that don't have any children and can help make your JSX code more concise and readable.

It's worth noting that not all HTML tags can be self-closing in JSX. For example, the `div` tag must always have a closing tag, even if it doesn't have any children.

### JS in JSX in JS

When writing JSX in your JavaScript code, you have the ability to include JavaScript expressions and logic within your JSX code. This allows you to dynamically generate content, perform calculations, and conditionally render elements based on variables or conditions.

For example, you can use JavaScript expressions within curly braces `{}` to include variables, perform calculations, or call functions inside your JSX code. Here's an example:

```jsx
function MyComponent() {
  const name = 'John Doe';
  const greeting = `Hello, ${name}!`;

  return <h1>{greeting}</h1>;
}
```

In this example, we're using JavaScript expressions within the JSX code. We define a variable `name` and concatenate it with a string to create the `greeting` variable. Then, we include the `greeting` variable inside the JSX expression using curly braces.

You can also use JavaScript logic such as conditional statements and loops within your JSX code. Here's an example using a conditional rendering:

```jsx
function MyComponent() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}
```

In this example, we're conditionally rendering different elements based on the value of the `isLoggedIn` variable. If `isLoggedIn` is true, the `<p>Welcome back!</p>` element is rendered; otherwise, the `<p>Please log in.</p>` element is rendered.

Using JavaScript expressions and logic within your JSX code gives you the flexibility to create dynamic and interactive components in React.

### Curly braces in JSX

In JSX, curly braces `{}` are used to include JavaScript expressions or variables within the JSX code. They serve as a special syntax to indicate that the content inside the curly braces should be interpreted as JavaScript instead of a string.

Here are a few key points about using curly braces in JSX:

1. JavaScript Expressions: You can use curly braces to embed JavaScript expressions directly within JSX. This allows you to include variables, perform calculations, call functions, attributes, and more. For example:

   ```jsx
const name = 'John';
return <h1>Hello, {name}!</h1>;

const sideLength = "200px";
const panda = (  
  <img  
    src="images/panda.jpg"  
    alt="panda"  
    height={sideLength}  
    width={sideLength} />  
);

   ```

   In this example, the variable `name` is included within the JSX expression using curly braces, and its value is dynamically rendered in the output.

2. Conditionals and Loops: Curly braces can also be used to include JavaScript logic such as conditional statements (`if`, `else`, `ternary operators`, `&&`) and loops (`for`, `map`) within JSX. This allows you to conditionally render elements or generate dynamic content based on certain conditions or data.

   ```jsx
const isLoggedIn = true;
const isBaby = true;
const list = [
  'Home', 'Shop', 'About'
];

return (
   <div>
	   
	   <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
	   
	   { isBaby && <p>Arheu!</p> }

		{ list.length > 0 && (
			<ul>
				{ list.map(item => <li key={item.id}>{item.text}</li>) }
			</ul>
		)}
   </div>
);
```

   In this example, the conditional expression is evaluated within the curly braces, and the corresponding message is rendered based on the value of the `isLoggedIn` variable.

3. Object Destructuring: Curly braces can also be used for object destructuring in JSX. This allows you to extract specific properties from an object and use them directly within the JSX code.

   ```jsx
   const person = { name: 'John', age: 30 };
   return <p>{person.name} is {person.age} years old.</p>;
   ```

   In this example, the properties `name` and `age` are extracted from the `person` object using object destructuring within the curly braces.

Using curly braces in JSX provides a way to incorporate JavaScript expressions, logic, and variables directly into your JSX code, making it more dynamic and flexible.

### Event Listeners in JSX

In React, you can add event listeners to JSX elements just like you would with HTML elements. You can create an event listener by giving a JSX element a special attribute that corresponds to the event you want to listen for.

Here's an example of adding an `onClick` event listener to a JSX element:

```jsx
function handleClick() {
  console.log('Button clicked!');
}

function MyComponent() {
  return <button onClick={handleClick}>Click me!</button>;
}
```

In this example, we're adding an `onClick` event listener to a `button` element. The `onClick` attribute specifies the function `handleClick` to be called when the button is clicked.

You can also use arrow functions to define event handlers inline within the JSX code:

```jsx
function MyComponent() {
  return <button onClick={() => console.log('Button clicked!')}>Click me!</button>;
}
```

In this example, we're defining an arrow function inline within the `onClick` attribute to log a message when the button is clicked.

React supports a wide range of events such as `onChange`, `onSubmit`, `onMouseOver`, and more. You can find a full list of supported events in the React documentation.

When adding an event listener to a JSX element, you can pass the event object as a parameter to the function that handles the event.

Here's an example of passing the event parameter to a function:

```jsx
function handleClick(event) {
  console.log('Button clicked!', event);
}

function MyComponent() {
  return <button onClick={handleClick}>Click me!</button>;
}
```

In this example, we're passing the `event` parameter to the `handleClick` function. The `event` object contains information about the event that was triggered, such as the target element, the type of event, and any additional data.

You can then use the `event` object to perform additional actions or access additional information about the event. For example, you can prevent the default behavior of a form submission by calling the `preventDefault()` method on the `event` object:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log('Form submitted!', event);
}

function MyComponent() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="example" />
      <button type="submit">Submit</button>
    </form>
  );
}
```


In React, the `event` object provides various properties and methods that allow you to interact with and handle events. Here are some common things you can do with the `event` object:

1. Access Event Properties: The `event` object contains properties that provide information about the event that occurred. For example, you can access the `target` property to get a reference to the element that triggered the event, or the `type` property to determine the type of event that occurred.

2. Prevent Default Behavior: By calling the `preventDefault()` method on the `event` object, you can prevent the default behavior associated with the event. For example, you can prevent a form from being submitted or prevent a link from navigating to its default URL.

3. Stop Event Propagation: The `event` object also has a method called `stopPropagation()` that allows you to stop the event from further propagating through the DOM. This can be useful when you have nested elements with event listeners and you want to prevent the event from triggering on parent elements.

4. Access Event Data: Some events, such as mouse events or keyboard events, provide additional data that can be accessed through properties of the `event` object. For example, you can access the coordinates of a mouse click or the key code of a pressed key.

5. Modify Event Handling: In certain cases, you may need to modify how an event is handled. For example, you can use the `event.persist()` method to remove the synthetic event from memory, allowing you to access event properties asynchronously.

### Key

In React, a "key" is a special attribute that you need to include when creating lists of elements. It is used to identify each item in the list and helps React efficiently update and re-render the list when changes occur.

The key serves as a unique identifier for each element in the list. When React renders a list of components, it uses the keys to keep track of which items have changed, been added, or been removed. This enables React to optimize the rendering process by only updating the necessary components instead of re-rendering the entire list.

It's important to note that the key should be a stable and unique identifier for each item in the list. It is recommended to use a unique ID or a combination of properties that uniquely identify each item. Avoid using the index of the item as the key, as it can cause issues when the list order changes or items are added/removed.

Here's an example of using keys in a list of components:

```jsx
function MyComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

In this example, we're mapping over an array of `items` and rendering a list item for each item. The `key` attribute is set to `item.id`, assuming that `item.id` is a unique identifier for each item.

### React.createElement

`React.createElement` is a method in React that allows you to create React elements using JavaScript instead of JSX. It takes three arguments: the type of element to create (such as a `div` or `span`), the element's properties (such as its `className` or `style`), and the element's children (such as text or other elements). The method returns a new React element that can be rendered to the DOM.

Here are some resources that explain how to use `React.createElement` in more detail:

- The official React documentation on `React.createElement`:
- A tutorial on using `React.createElement` to write React without JSX:
- An article on the use of `React.createElement` with syntax, arguments, and examples: 

In general, most developers prefer to use JSX to create React elements, as it is more concise and easier to read. However, there may be situations where using `React.createElement` is necessary or more appropriate.


### Review

- React is a modular, scalable, flexible, and popular front-end framework.
- JSX is a syntax extension for JavaScript which allows us to treat HTML as expressions.
    - They can be stored in variables, objects, arrays, and more!
- JSX elements can have attributes and be nested within each other, just like in HTML.
- JSX must have exactly one outer element, and other elements can be nested inside.
- `createRoot()` from `react-dom/client` can be used to create a React root at the specified DOM element.
- A React root’s `render()` method can be used to render JSX on the screen.
- A React root’s `render()` method only updates DOM elements that have changed using the virtual DOM.
- React applications are made up of **components**.
- Components are responsible for rendering pieces of the user interface.
- To create components and render them, `react` and `reactDOM` must be imported.
- React components can be defined with Javascript functions to make **function components**.
- Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.
- Function components must return some React elements in JSX syntax.
- React components can be exported and imported from file to file.
- A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
- Rendering a React component requires using `.createRoot()` to specify a root container and calling the `.render()` method on it.

 