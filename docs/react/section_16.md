---
title: Presentational Components
description: Slim notes.
order: 16
---

In this lesson, you will learn a programming pattern that will help organize your React code.

As you continue building your React application, you will soon realize that one component has too many responsibilities, but how do you know when you have reached that point?

_Separating container components from presentational components_ helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.

If you’d like to learn more about this pattern, here are some articles to start with:

- [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

In the context of React, the terms "presentational component" and "container component" are often used to describe two types of components based on their responsibilities.

1. **Presentational Component**: A presentational component focuses on how things look and present data. It receives data and callbacks as props, and its primary purpose is to render the UI.

```js
//Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
	return <button onClick={onClick}>{label}</button>;
};

export default Button;`
```

In this example, the `Button` component is a presentational component that receives a `label` prop for the button text and an `onClick` prop for the click event callback. Its main responsibility is to render a button element with the provided label and handle the click event by invoking the callback.

2. **Container Component**: A container component handles the logic and data flow. It is responsible for fetching and managing data, maintaining the component state, and passing the necessary data and callbacks to the presentational components.

```js
// ButtonContainer.js
import React, { useState } from 'react';
import Button from './Button';

const ButtonContainer = () => {
	const [count, setCount] = useState(0);
	const handleButtonClick = () => {
		setCount(count + 1);
	};
	
	return <Button label={`Clicked: ${count}`} onClick={handleButtonClick} />;
};

export default ButtonContainer;
```


In this example, the `ButtonContainer` is a container component that manages the state of the `count` variable using the `useState` hook. It also defines the `handleButtonClick` function to update the count state when the button is clicked. The container component renders the `Button` presentational component, passing the updated count as part of the label prop and the click event callback.

The separation of presentational and container components follows the principle of "separation of concerns" and helps improve code maintainability and reusability. Presentational components focus on UI rendering, while container components handle the logic and data management.

To display the `ButtonContainer` component from `App.js`, you need to import and render the `ButtonContainer` component within the `App` component.

Assuming the `ButtonContainer` component is defined in a separate file called `ButtonContainer.js`, you can follow these steps:

1. Create a new file `ButtonContainer.js` and define the `ButtonContainer` component as shown in the previous example.
    
2. Import the `ButtonContainer` component in `App.js`:
    

```js
// App.js
import React from 'react';
import ButtonContainer from './ButtonContainer';

const App = () => {
	return (
		<div>
			<h1>My App</h1>
			<ButtonContainer />
		</div>
	);
};

export default App;
```

In the example above, `ButtonContainer` is imported and rendered within the `App` component. The `ButtonContainer` component will be displayed as part of the `App` component's JSX.

By doing this, the `ButtonContainer` component will be rendered alongside other elements within the `App` component's JSX, such as the `<h1>` element in this case.

Ensure that the file paths in the import statements match the actual file locations of the components in your project.

With these changes, when you render the `App` component in your application, the `ButtonContainer` component will be displayed as part of the `App` component's UI.

The organization of files within a project depends on your preferred project structure and conventions. However, it is common to keep related components together in the same folder or directory.

In the case of the `Button` and `ButtonContainer` components, if they are closely related and have a parent-child relationship, you could consider placing them in the same folder. This way, it's easier to locate and maintain the related components.

Here's an example project structure:

```css
src/
	components/
	    Button/
		    Button.js
		    ButtonContainer.js
		App.js
		...
	styles/
	...
```

In this structure, the `Button` and `ButtonContainer` components are placed within the `components` folder. It's a common practice to group related components within their own folders to maintain a clean and organized project structure.

Please note that the specific project structure can vary depending on your project's requirements, size, and architectural preferences. It's important to choose a structure that makes sense for your project and promotes maintainability and readability.
