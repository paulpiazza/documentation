---
title: Forms
description: Slim notes.
order: 18
---

https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components

In React, when working with forms and inputs, there are two main approaches: controlled components and uncontrolled components. These approaches differ in how they handle the state and value of the input elements within a form.

1. Controlled Components:
   - Controlled components are components where the value of the input is controlled by the component's state.
   - To create a controlled component, you need to set the value of the input element explicitly and provide an event handler to update the state when the input changes.
   - When the user interacts with the input, the event handler updates the state, and the component re-renders with the updated value.
   - Here's an example of a controlled input component:

```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the submitted value
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In the above example, the `inputValue` state variable is used to control the value of the input element. The `handleChange` function updates the state whenever the input changes, and the `handleSubmit` function is called when the form is submitted, providing access to the current value of the input.

2. Uncontrolled Components:
   - Uncontrolled components are components where the value of the input is handled by the DOM itself, rather than by the component's state.
   - In uncontrolled components, you don't need to explicitly set the value or provide event handlers to update the state.
   - Instead, you rely on the DOM to handle the input's value, and you can access the value using references.
   - Here's an example of an uncontrolled input component:

```jsx
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the input value using the ref
    console.log(inputRef.current.value);
    // Do something with the submitted value
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In the above example, the `inputRef` is used to reference the input element. When the form is submitted, you can access the current value of the input using `inputRef.current.value`. Since the value is handled by the DOM, you don't need to explicitly update or track the state.

Controlled components provide more control and allow you to perform validations or apply additional logic before updating the state or submitting the form. On the other hand, uncontrolled components can be useful for simple forms where you don't need to track the state explicitly.

Both approaches have their advantages and disadvantages, and the choice depends on the specific requirements of your application and the complexity of your form.

### Review

Great work! You just wrote your first React form.

Here’s a review:

- The state of a React form is managed by the component, and updates are triggered by the `onChange` event.
- The `onChange` event uses an event handler to capture changes and determine what actions to take.
- A React form uses the State hook to store the value of the input field in the component’s state. The state can then be updated with the state setter.
- React components can be controlled or uncontrolled. Most React forms are controlled, as they control the input’s value with the state.

