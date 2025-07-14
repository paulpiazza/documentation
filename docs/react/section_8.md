---
title: React Hooks
description: Slim notes.
order: 8
---

See [the full list](https://react.dev/reference/react) in the React docs.

Hooks are functions that enable developers to add state and side effects to functional components.

Here's an explanation of the most commonly used React Hooks:

1.  useState: `useState` allows functional components to have their own internal state. It returns a state variable and a function to update that variable. This hook is used when you need to manage and update state within a component.

2.  useEffect: `useEffect` is used to perform side effects in functional components. It accepts a callback function that runs after the component renders. You can use it to fetch data, subscribe to events, modify the DOM, or perform any other side effect. It can also specify dependencies to control when the effect runs.

3.  useContext: `useContext` enables components to access the value of a context. It takes a context object created by `React.createContext` and returns the current value provided by the nearest context provider up the component tree.

4.  useReducer: `useReducer` is an alternative to `useState` for managing complex state in functional components. It accepts a reducer function and an initial state, returning the current state and a dispatch function to update it. It is useful when state changes are determined by multiple factors or involve complex logic.

5.  useCallback: `useCallback` returns a memoized version of a callback function. It is used to optimize performance by preventing unnecessary re-creation of callback functions, particularly when passing callbacks as props to child components.

6.  useMemo: `useMemo` allows you to memoize the result of a function so that it is cached and only recomputed when its dependencies change. It is used to optimize performance by avoiding unnecessary re-computation of expensive calculations.

7.  useRef: `useRef` returns a mutable ref object that can persist across re-renders. It is commonly used to access or store references to DOM elements, manage focus, or cache values that do not trigger re-rendering.

8.  useLayoutEffect: `useLayoutEffect` is similar to `useEffect`, but it runs synchronously after the DOM is updated but before the browser paints. It is useful for performing DOM measurements or accessing layout-related information.

9.  useImperativeHandle: `useImperativeHandle` is used in conjunction with `forwardRef` to customize the instance value that is exposed to parent components when using the `ref` prop. It allows you to specify which properties and methods of a component instance are accessible through the ref.

10.  useDebugValue: `useDebugValue` is a custom hook used to display custom labels for custom hooks in React DevTools. It is primarily useful for debugging purposes to provide more meaningful labels for custom hooks in the DevTools.

These are some of the commonly used React Hooks, each serving a specific purpose to help manage state, perform side effects, optimize performance, or interact with the React component lifecycle. Using these Hooks, functional components can exhibit behavior similar to class components while keeping the code concise, readable, and maintainable.

There are two main rules to keep in mind when using Hooks:

1. **Only call Hooks at the top level.** 
	   When React builds the Virtual DOM, the library calls the functions that define our components over and over again as the user interacts with the user interface. React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition. For this reason, we always call our Hooks at the top level; we **never call hooks inside of loops, conditions, or nested functions**.
	   
2. **Only call Hooks from React functions.**
	   Secondly, Hooks can only be used in React Functions. We’ve been working with `useState()` and `useEffect()` in _function_ components, and this is the most common use. The only other place where Hooks can be used is within custom hooks.

Packaging data together can also add complexity to the code responsible for managing that data. Therefore, it is a good idea to separate concerns by managing different data with different Hooks.
