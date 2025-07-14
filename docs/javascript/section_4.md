---
title: Comments
description: Slim notes.
order: 4
---

There are two ways to write comments in JavaScript:

1. Single line comments:

```js
// This is a single line comment
```

Single line comments start with //. Any text after // on a line will be treated as a comment.

2. Multi-line comments: 

```js 
/* This is a 
multi-line comment
*/
```

Multi-line comments start with /* and end with */. Any text between /* and */ will be treated as a comment.

Here are some examples of using both:

```js
// This is a single line comment

/* This is a 
multi-line comment
spanning multiple
lines */

let x = 5; // Declare variable x

/*
Multi-line comment
to explain what this
code is doing
*/
function sum(a, b) {
  return a + b;
}
```

Comments are useful for leaving notes for other developers or your future self to understand sections of code. They are ignored by the JavaScript interpreter and don't have any effect on the code execution.

Some key points to remember about JavaScript comments:

- They start with // or /* and */
- They can span single or multiple lines 
- They are ignored by the interpreter
- Use them to explain sections of code
