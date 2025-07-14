---
title: useEffect
description: Slim notes.
order: 10
---

Certainly! In React, `useEffect` is a hook that allows you to perform side effects in your functional components. Side effects can include things like fetching data, subscribing to events, or manually manipulating the DOM. The `useEffect` hook is similar to the lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

The basic syntax of the `useEffect` hook is as follows:

```javascript
useEffect(() => {
  // Side effect code here
  // This code will run after every render
  // You can also return a cleanup function from here
}, [dependencies]);
```

The first argument to `useEffect` is a function that contains the side effect code you want to execute. This function will run after every render of the component. The side effect code can include any asynchronous or synchronous operations.

The second argument to `useEffect` is an optional array of dependencies. It determines when the effect should be re-run. If the dependencies array is empty, the effect will only run once, after the initial render. If the array contains variables or props, the effect will be re-run whenever any of those dependencies change.

By using `useEffect`, you can integrate side effects into your functional components and manage their execution based on the component's lifecycle and dependencies.

Here are some common use cases of the `useEffect` hook:

1. Fetching data: You can use `useEffect` to make API calls and update the component's state with the fetched data.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    setData(data);
  };

  fetchData();
}, []);
```

2. Subscribing to events: You can use `useEffect` to subscribe to events such as mouse movements or keyboard presses.  Each time that our component renders, our effect is called, adding another event listener. With just a few clicks and rerenders, we have attached a lot of event listeners to the DOM! We need to clean up after ourselves! Update our effect so that it returns a cleanup function that will remove our last event listener from the DOM.

```javascript
useEffect(() => {
  const handleMouseMove = (event) => {
    console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Cleanup function
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);
```

3. Cleaning up effects: If your effect requires cleanup, such as unsubscribing from an event or cancelling a timer, you can return a cleanup function from the effect.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);
```

Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.

If our effect returns a function, then the `useEffect()` Hook always treats that as the cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.

It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to `useEffect()` as the second argument. This second argument is called the **dependency array**.


```js
useEffect(() => {
	alert("component rendered for the first time");
	return () => {
		alert("component is being removed from the DOM");
	};
}, []);

import React, { useState, useEffect } from 'react';
```

Type your full name in the text input field. See how the timer seems to stop counting while you are typing? That’s not what we want!

What is going on here? We are creating a new interval after each render, that interval will call our state setter to update `time` exactly one second after each render. When we type in the input field, our component keeps re-rendering, cleaning up old intervals, and starting new ones… but our state setter never gets called until one second after we are done typing!

```js
export default function Timer() {

	const [time, setTime] = useState(0);
	const [name, setName] = useState('');
	
	const handleChange = ({target}) => setName(target.value);
	
	useEffect(() => {
	
		const intervalId = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000)
		
		return () => {
			clearInterval(intervalId);
		}
	
	}) // add the dependency array here!
	
	return (
		<>
			<h1>Time: {time}</h1>
				<input onChange={handleChange} type="text" value={name} />
			<p>{name}</p>
		</>
	);
}

```

Packaging data together can also add complexity to the code responsible for managing that data. Therefore, it is a good idea to separate concerns by managing different data with different Hooks.

### Review

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