---
title: PropTypes
description: Slim notes.
order: 17
---

PropTypes is a feature in React, a popular JavaScript library for building user interfaces, that allows you to define the types of the props (short for properties) passed to a component. It helps you ensure that the data being passed to your components is of the expected type, which can help catch bugs and make your code more robust.

`propTypes` are useful for two reasons. The first reason is _prop validation_.

_Validation_ can ensure that your `props` are doing what they’re supposed to be doing. If `props` are missing, or if they’re present but they aren’t what you’re expecting, then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: _documentation_.

_Documenting_ `props` makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

```js
import PropTypes from 'prop-types';

function MyComponent(props) {
  // Component logic
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  children: PropTypes.node,
};
```
