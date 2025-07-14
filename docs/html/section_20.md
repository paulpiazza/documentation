---
title: Linking to Same Page
description: Slim notes.
order: 20
---

In order to link to a target on the same page, we must give the target an id, like this:

```html
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
```

In this example, the `<p>` element is assigned an id of “top” and the `<h1>` element is assigned “bottom.” An id can be added to most elements on a webpage.

An id should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the # character and the target element’s id.

```html
<ol>
 <li><a href="#top">Top</a></li>
 <li><a href="#bottom">Bottom</a></li>
</ol>
```

In the example above, the links to `<p id="top">` and `<h1 id="bottom">` are embedded in an ordered list. 
