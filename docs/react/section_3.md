---
title: Stateless Components Inherit From Stateful Components
description: Slim notes.
order: 3
---

Design pattern: Parent component passes down an _event handler_ to a stateless, child component. Expand version: a child component updates its parent’s state, and the parent passes that state to a _sibling_ component.

In React, a stateful component, also known as a class component, is a component that manages its own state using the `state` object. It typically includes a `render()` method and has access to the lifecycle methods provided by React.

On the other hand, a stateless component, also known as a functional component, is a component that does not have its own internal state. It receives data and displays it, usually through the `props` object, and it does not have access to lifecycle methods or manage any state of its own.

When we say "stateless components inherit from stateful components," we are referring to a design pattern where a stateful component wraps or contains one or more stateless components. The stateful component manages the state and passes the necessary data to the stateless components through props.

By using this pattern, we can separate the concerns of managing state and rendering UI. The stateful component takes care of managing the application's state, performing any necessary calculations or data fetching, and passing down the relevant data to the stateless components as props. The stateless components then focus solely on rendering the UI based on the received props.

This approach provides several benefits:

1.  **Separation of concerns**: The stateful component is responsible for state management, while the stateless components focus on presentation and UI rendering.

2.  **Reusability**: Stateless components are highly reusable since they are decoupled from specific state or data. They can be easily used in different parts of the application.

3.  **Testability**: Stateless components are easier to test since they primarily rely on the props they receive. You can pass different props to simulate various scenarios and verify the expected output.

4.  **Performance**: Stateless components can be optimized more effectively since they don't have their own state. React can better handle updates and re-rendering, resulting in better performance.

In summary, stateless components inherit from stateful components by receiving data and behavior through props. This pattern promotes a modular and maintainable codebase by separating state management from UI rendering.
