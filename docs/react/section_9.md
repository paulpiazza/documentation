---
title: useState
description: Slim notes.
order: 9
---

When we call the `useState()` function, it returns an array with two values:

- The _current state_: The current value of this state.
- The _state setter_: A function that we can use to update the value of this state.

To initialize our state with any value we want, we simply pass the initial value as an argument to the `useState()` function call.

```js

const [isLoading, setIsLoading] = useState(true);
```

There are three ways in which this code affects our component:

1. During the first render, the _initial state argument_ is used.
2. When the state setter is called, React ignores the initial state argument and uses the new value.
3. When the component re-renders for any other reason, React continues to use the same value from the previous render.

If we don’t pass an initial value when calling `useState()`, the current value of the state during the first render will be `undefined`. Often, this is perfectly fine for the computers running the code, but it can be unclear to the humans reading our code. So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first render, we can explicitly pass `null` instead of passively leaving the value as `undefined`.

However, React state updates are _asynchronous_. This means that there are some scenarios where portions of your code will run before the state is finished updating.

This is a good and a bad thing! Grouping the state updates together can improve performance in your application, but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, preventing accidental outdated values.

In React's `useState` hook, the callback function is used to update the state value when it depends on the previous state. This is important because React may batch multiple state updates for performance reasons, and the callback ensures that you are working with the most up-to-date state.

Here are a few reasons why using the callback function in `useState` is beneficial:

1. Avoiding stale state: When you update the state based on its previous value, it's crucial to use the callback function to ensure you have the latest state. If you were to rely on the current state directly, you might encounter issues with stale or outdated state values.

2. Handling concurrent updates: In situations where multiple state updates are triggered concurrently, using the callback function guarantees that you're working with the most recent state. React may batch state updates for efficiency, and the callback function helps prevent conflicts and inconsistencies between different updates.

3. Correct functional updates: The callback function also helps when the new state depends on the previous state. For instance, if you want to increment a counter by one, you can't rely on the current state alone because multiple state updates may be queued. Instead, using the callback function allows you to correctly calculate the next state based on the previous value.

Here's an example to illustrate the use of the callback function in `useState`:

```jsx
const [count, setCount] = useState(0);

// Incorrect usage without the callback
// const handleButtonClick = () => {
//   setCount(count + 1); // May produce stale state
// };

// Correct usage with the callback
const handleButtonClick = () => {
  setCount(prevCount => prevCount + 1); // Always based on the latest state
};

// Because our next value of state depends on the previous state value, this function should call the state setter with a callback function.
```

In the above example, using the callback function ensures that the state update is based on the latest value of `count`, avoiding any issues related to stale state.

By utilizing the callback function in `useState`, you can ensure that your state updates are reliable, consistent, and based on the most up-to-date values, especially in scenarios with concurrent updates or when the new state depends on the previous state.

In your state, you can have boolea, string, number, array, object. Arrays and Object are the most commons.

Once again, when updating the state with `setFormState()` inside a function component, we do not modify the same object. We must copy over the values from the previous object when setting the next value of a state. Thankfully, the spread syntax makes this super easy to do!

```js
export default function Login() {

	const [formState, setFormState] = useState({});
	
	const handleChange = ({ target }) => {
	
		const { name, value } = target;
		
		setFormState((prev) => 
			({ ...prev, [name]: value })
		);
	};
	
	  
	return (
		<form>
			<input value={formState.firstName} onChange={handleChange} name="firstName" type="text" />
			
			<input value={formState.password} onChange={handleChange} type="password" name="password" />
		</form>
	);

}
```

While there are times when it can be helpful to store related data in a data collection, like an array or object, it can also be helpful to create different state variables for data that change separately. Managing dynamic data is much easier when we keep our data models as simple as possible.

For example, if we had a single object that held state for a subject you are studying at school, it might look something like this:

```js
function Subject() { 
	// create separate hooks
	const [state, setState] = useState({ 
		currentGrade: 'B',    
		classmates: ['Hasan', 'Sam', 'Emma'],    
		classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};    
		exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);  
	});
```

This would work, but think about how messy it could get to copy over all the other values when we need to update something in this big state object.

Complex code like this is likely to cause bugs. It’s best to create multiple state variables based on which values tend to change together.

### Review

We can now build stateful function components using the `useState` React Hook!

Let’s review what we learned and practiced in this lesson:

- With React, we feed static and dynamic data models to JSX to render a view to the screen.
- Hooks are used to “hook into” the internal component state for managing dynamic data in function components.
- We employ the State Hook using the code below. The `currentState` references the current value of the state and `initialState` initializes the value of the state for the component’s first render.

```
const [currentState, stateSetter] = useState( initialState );
```

- State setters can be called in event handlers.
- We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.
- We use a state setter callback function when our next value depends on our previous value.
- We use arrays and objects to organize and manage related data that tend to change together.
- Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`.
- It’s best practice to have multiple, simpler states instead of having one complex state object.

