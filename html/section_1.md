---
title: Headings
description: Slim notes.
order: 1
---

In HTML, there are six heading elements, `<h1>` - `<h6>`. The heading elements decrease in importance and size as the heading number increases. This means that an `<h1>` carries a higher rank than an `<h6>`.

Heading elements in HTML accomplish several things:

- they create structure, dividing your page into groups of increasingly specific content
- they create visual contrast, with lower-numbered headers like `h1` displaying in a larger and more striking format
- they provide navigation and contextual information to web browsers, plugins, and assistive technologies like screen readers.

As an added benefit, having a keyword in an `h1` tag will typically impact search results more than having the same keyword in a `p` tag, because it is assumed that words used in your main heading are very important to the topic of your entire website.

Heading elements should be used in order and it is considered best practice not to skip heading elements when possible.

Let’s take a look at an example:

```html
<h1>Main Site Header</h1>
<section>  
	<h2>Section Header</h2>
</section>
<section>  
	<h2>Section Header</h2>
	<h3>Section Sub-Header</h3>
</section>  
<footer>  
	<h2>Footer Header</h2>
</footer>
```

In this example, we have one main site heading. This content uses the `<h1>` element and is assigned the highest rank as it is the most important. 

> [!Note]
Each web page should only contain one `<h1>` element.

This `<h1>` is considered the label for the entire document and it should clearly define the purpose of the web page. After that, we use the `<h2>` element to assign the same level of importance to each sibling section.

This provides our users with a clean and consistent level of hierarchy when viewing our websites and also conforms to today’s web standards by providing a clear content outline.
