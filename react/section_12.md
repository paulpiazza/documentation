---
title: useCallback
description: Slim notes.
order: 12
---

Here's an example that demonstrates the usage of the `useCallback` hook to memoize a callback function and optimize performance:

```javascript

import React, { useState, useCallback } from 'react';

const ExampleComponent = () => {
	
	const [count, setCount] = useState(0);
	
	const incrementCount = useCallback(() => {
		setCount(prevCount => prevCount + 1);
	}, []);
	
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={incrementCount}>Increment</button>
		</div>
	);
};

export default ExampleComponent;
```

In this example, we have an `ExampleComponent` that manages a count state using the `useState` hook. The component renders the current count value and a button.

The `incrementCount` function is defined using the `useCallback` hook. It increments the count state by 1 when called. By providing an empty dependency array (`[]`), we ensure that the `incrementCount` function is memoized and only created once during the component's initial render.

Since the `incrementCount` function is memoized, it won't be recreated on each render unless the dependencies in the array change. This can help optimize performance, especially when passing callbacks as props to child components. Without `useCallback`, the function would be recreated on every render, potentially causing unnecessary re-renders in child components.

By using `useCallback`, we can ensure that the `incrementCount` function remains the same throughout the component's lifecycle, even if other parts of the component state change. This can help improve performance by preventing unnecessary re-rendering of child components that depend on the `incrementCount` callback.

In summary, the `useCallback` hook is useful when you want to memoize a callback function and optimize performance by preventing unnecessary re-creation of the function.

