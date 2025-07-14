---
title: Console
description: Slim notes.
order: 3
---

The console in JavaScript refers to the Console object that provides access to the browser's debugging console. It allows you to log messages and objects for debugging purposes.

The main methods and types of the console object are:

- console.log() - outputs a message to the console.

- console.info() - outputs an informational message.

- console.warn() - outputs a warning message.

- console.error() - outputs an error message. 

- console.debug() - outputs a message useful for debugging.

- console.assert() - tests an expression, logs message if false.

- console.clear() - clears the console.

- console.count() - logs number of times count() called.

- console.table() - displays data as table.

- console.time() - starts a timer.

- console.timeEnd() - stops timer, logs elapsed time.

- console.group()/groupEnd() - groups messages.

- console.trace() - prints stack trace.

The console also provides different styling options like %c for applying CSS to output.

The console output is displayed in the browser's debugging console which can be accessed in browser dev tools. It is useful for logging diagnostic information during development and debugging JavaScript code execution.

#### CSS in console

Here is an example of using the %c styling option in console.log() to style the output in the browser console:

```js
// Log a message with default styling
console.log("Default message"); 

// Log a message with custom styling
console.log("%cThis is a styled message", "color: blue; font-size: 18px; font-weight: bold");

// Log a warning message with custom styling
console.warn("%cThis is a warning!", "color: orange; font-size: 24px");
```

When you run this code, the browser console will show:

Default message 
This is a styled message
This is a warning!

The text for the second and third console messages will be styled according to the CSS rules passed in the second parameter to console.log() and console.warn() respectively.

Some other examples of styling that can be applied:

```js
// Log with red text
console.log("%cRed text", "color: red");

// Log with large blue text with background  
console.log("%cBig blue text", "font-size: 32px; background: blue; color: white");

// Log multi-line text
console.log("%cMulti\nline\ntext", "line-height: 1.5");
```

The %c allows formatting the console output with CSS to make certain messages stand out for debugging purposes.
