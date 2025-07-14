---
title: Image Alts
description: Slim notes.
order: 10
---

Some HTML elements have a built-in attribute called `alt` that works like `aria-label` but has additional functionality.

The `alt` attribute is used to describe an image (or several other elements). A screen reader will read the value of the `alt` attribute out loud. However, if the element cannot be visually seen — whether it is because the user is visually impaired, an incorrect source is referenced, or the page is being accessed over a slow connection — the `alt` attribute will be displayed in its place.

On the other hand, the value of `aria-label` will never be displayed on the screen and is a better choice for elements that do not support the `alt` attribute.

```html
<img src="#" alt="a kitten snuggling a puppy"/>
```

In the example above, a screen reader will read out loud “image: a kitten snuggling a puppy” to the user. If the image doesn’t load properly, the browser will display this text as a tooltip.

When using the `alt` attribute, you should adhere to these conventions:

1. In general, the value of `alt` should concisely describe the image.
2. For images that are also `<a>` elements, the `alt` attribute should describe the source that the link targets.
3. If an image conveys no information (such as a decorative border), the `alt` attribute should be empty, but should never be omitted.
4. If an image is described by text near the image, do not duplicate the description in the `alt` attribute. Use an empty `alt` attribute instead.
5. The value of an `alt` attribute should be no more than 150 characters.
