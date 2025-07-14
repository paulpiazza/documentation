---
title: useContext
description: Slim notes.
order: 11
---

Certainly! `useContext` is a React hook that allows you to access the value of a context object within a functional component. Context provides a way to pass data through the component tree without having to pass props manually at every level.

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
