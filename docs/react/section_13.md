---
title: useMemo
description: Slim notes.
order: 13
---

Here's an example that demonstrates the usage of the `useMemo` hook to memoize a value and optimize performance:

```javascript
import React, { useState, useMemo } from 'react';

const ExampleComponent = () => { 
	
	const [count, setCount] = useState(0);
	
	// doubleCount is saved
	// doubleCount need to be recalculated only if count is updated.
	const doubleCount = useMemo(() => { 
		// this statement cost a lot of processor. 
		return count * 400000000000; 
	}, [count]);
	
	return (
		<div>
			<p>Count: {count}</p>
			<p>Double Count: {doubleCount}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default ExampleComponent;
```

In this example, we have an `ExampleComponent` that manages a count state using the `useState` hook. The component renders the current count value, the double of the count value (calculated using the `doubleCount` variable), and a button to increment the count.

The `doubleCount` value is calculated using the `useMemo` hook. It takes a callback function as the first argument, which calculates the double of the count value. The second argument to `useMemo` is an array of dependencies (`[count]`), indicating that the `doubleCount` value should be recalculated whenever the `count` state changes.

By using `useMemo`, the `doubleCount` value is memoized and only recalculated when the dependencies (`count` in this case) change. If the `count` value remains the same, the memoized `doubleCount` value is returned from the previous calculation, preventing unnecessary re-computation.

Using `useMemo` can optimize performance when dealing with expensive calculations or complex transformations on values that are used within a component. By memoizing the value, you can avoid re-computation on every render if the dependencies haven't changed.

In this example, the `doubleCount` value is only re-calculated when the `count` state changes, ensuring that the value is up to date while avoiding unnecessary calculations on each render.

In summary, the `useMemo` hook is useful when you want to memoize a value and optimize performance by preventing unnecessary re-computation of that value unless its dependencies change.
