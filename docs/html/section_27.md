---
title: Accessibility
description: Slim notes.
order: 27
---

See [Codecademy](https://www.codecademy.com/article/what-is-digital-accessibility)
See [webaim](https://webaim.org/resources/contrastchecker/)
See [CheckList](https://www.a11yproject.com/checklist/)
See [MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)

Web accessibility refers to the practice of designing and developing websites, tools, and technologies in a way that makes them usable by as many people as possible, including those with disabilities. This includes making sure that people with disabilities can perceive, understand, navigate, and interact with web content. In addition to people with disabilities, web accessibility also benefits other groups such as those using mobile devices or those with slow network connections.

There are various guidelines and standards available to help ensure web accessibility, such as the Web Content Accessibility Guidelines (WCAG) developed by the World Wide Web Consortium (W3C). These guidelines provide a framework for making web content more accessible to people with disabilities, and include recommendations for things like text alternatives for non-text content, keyboard accessibility, and color contrast.

Ensuring web accessibility is important for a number of reasons. Not only is it a legal requirement in many countries, but it also helps to ensure that websites are usable by the widest possible audience, regardless of their abilities or circumstances.

[1]: [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
[2]: [ADA.gov](https://www.ada.gov/pcatoolkit/chap5toolkit.htm)
[3]: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)

### Contrast

Contrast is an important aspect of web accessibility. It refers to the difference in visual properties, such as color and brightness, between two elements on a web page. Good contrast is important for ensuring that text and other content is readable and distinguishable for users with visual impairments.

The Web Content Accessibility Guidelines (WCAG) provide specific recommendations for contrast ratios between text and background colors. The minimum contrast ratio for normal text is 4.5:1, while the minimum for large text (18pt or 14pt bold) is 3:1. These ratios ensure that text is readable for people with low vision or color blindness.

To check the contrast ratio of text and background colors, there are various online tools available. Some web browsers also have built-in tools for checking contrast ratios.

In addition to color contrast, other aspects of visual design can also affect accessibility, such as font size and spacing. It's important to consider these factors when designing and developing websites to ensure that they are usable by as many people as possible.

### Font

#### Real text vs text within images

Using real text instead of text within graphics provides a website with several key benefits:

- screen readers can transform the text into a voice-over
- users can scale or magnify the text for better legibility without losing image quality
- it’s less taxing on the browser to load real text versus requesting large image assets from a server.

#### Contrasting colors

Text is much easier to read when there is a high level of contrast between the text and the text’s background color. According to the Web Content Accessibility Guidelines, a ratio of at least 4.5:1 should be used on all standard text sizes. This means the lighter color must have four and a half times the luminance of its paired darker color.

Readability can be preserved with less contrast for larger font sizes, 24 pixels or larger. A ratio of at least 3:1 should be used for larger text sizes.

Interested in testing a set of colors to see if they pass the WCAG’s guidelines? Head over to [WebAIM](https://webaim.org/resources/contrastchecker/) and use their color contrast checker.

#### Font sizes

Lastly, we need to consider setting proper font sizes on our websites. The standard font size for most modern web browsers is 16 pixels. This allows users to scan your website and consume information without straining their eyes. While smaller type sizes can be used, they should be reserved for nonessential content or design aesthetic only.

### Colors

When using color in our designs, it’s important to note the contrast between elements in the foreground and those in the background.

Sufficient color contrast can improve the usability of your site for users with low vision or color blindness.

For instance, using the combination of black (`#00000`) as a foreground color and white (`#ffffff`) as a background color provides maximum contrast.

While this is a fairly common color combination for text on a page, the high contrast can also cause glare that will increase strain on the user’s eyes over time.

On the other hand, using colors that are too similar, or lacking adequate contrast, can hinder users from being able to comprehend the content on the screen.

### Color Blindness

A user with color blindness has a reduced ability to differentiate between colors. In general, about 8% of men and 0.5% of women have a color vision deficiency.

Designing color combinations for color-blind users can enhance the overall impact it will have on everyone visiting your site.

There are many forms of color blindness. The most common is red-green color blindness, where those two colors are often indistinguishable. For instance, if a red-green colorblind user is looking at the color purple, it may appear blue as they do not perceive the red pigment.

People can also have blue-yellow color vision deficiency, and total color blindness, however, these affect a much smaller percentage of the population.

Here are some practical steps you can take to improve the color accessibility of your design:

- Choosing highly contrasting colors (opposite from each other on a [color wheel](https://en.wikipedia.org/wiki/Color_wheel)) will aid users with partial color blindness.
- Using a color scheme with multiple shades of brightness for a single color will create contrast for users with partial or total color blindness. Think about how it would look in grayscale: light blue would still be differentiable from dark blue.
- Pairing color with other forms of conveying information (text, icons, etc) is the most general solution. For example, an invalid entry in a form on a website should not just turn the entry field red, it should also display text that explains the error.

Color is a valuable tool for conveying information, but it should never be the only tool that your site uses to communicate any essential content.

[Toptal](https://www.toptal.com/designers/colorfilter) has created a colorblind web page filter tool to test your designs with different types of color blindness.

### Text Overlaid on Images

White text overlaid on an image is a popular design trend. However, it doesn’t adhere to standards as the contrast is often too low. Adding a dark transparent overlay on top of the image could increase the contrast and provide better legibility.

### Removing Input Labels

Another trend often seen in web design is the removal of labels above input fields, sometimes relying on placeholder text instead to identify the input field.

While this enhances the aesthetic quality of a design in some instances, it can hinder a user’s ability to identify which input they are attempting to fill out. This is particularly true for low vision users because the placeholder text is often light gray and low contrast. This also creates problems for users employing screen readers, because the form’s placeholder text is not always narrated.

### Buttons and Links

There has been a trend towards [flat and minimal design](https://www.nngroup.com/articles/flat-design/) in recent years. This trend has improved usability in some ways, as it has encouraged designers to remove visual effects that are not contributing to the usability of their site.

However, minimalism can go too far, especially if it obscures how users should navigate the site. Visual contrast is especially important for buttons and links because these are the tools our users employ to navigate. Color alone should not be used to indicate clickability, as this will cause challenges for low vision and color-blind users.

Taking into consideration color choices, contrast, and font legibility will help you evaluate new design trends, and reduce the chance of new designs introducing accessibility barriers.

### ARIA Roles

See [generic list of roles](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties)

ARIA (Accessible Rich Internet Applications) roles are attributes that can be added to HTML elements to provide additional information about their purpose and function. ARIA roles are particularly useful for making dynamic web applications more accessible to users with disabilities. Examples of ARIA roles include `role="button"`, `role="menu"`, `role="progressbar"`, and `role="tablist"`.

Here's an example of how to use ARIA roles in HTML:

```html
<button role="button" aria-label="Open Menu">Menu</button>

<ul role="menu">
  <li role="menuitem"><a href="#">Item 1</a></li>
  <li role="menuitem"><a href="#">Item 2</a></li>
  <li role="menuitem"><a href="#">Item 3</a></li>
</ul>

<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>

<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab">Tab 2</button>
  <button role="tab">Tab 3</button>
</div>
```

In this example, ARIA roles are used to provide additional information about the purpose and function of various HTML elements. The `role="button"` attribute is added to a `<button>` element, while `role="menu"` and `role="menuitem"` attributes are added to a ``<ul>`` element and its child ``<li>`` elements, respectively. The `role="progressbar"` attribute is added to a `<div>` element to indicate its purpose as a progress bar, while `role="tablist"` and `role="tab"` attributes are added to a `<div>` element and its child `<button>` elements, respectively, to create a tabbed interface.

### ARIA Properties

ARIA properties are attributes that can be added to HTML elements to provide additional information about their state or value. ARIA properties are particularly useful for making dynamic web applications more accessible to users with disabilities. Examples of ARIA properties include `aria-checked`, `aria-disabled`, `aria-expanded`, and `aria-hidden`.

Here's an example of how to use ARIA properties in HTML:

```html
<input type="checkbox" id="myCheckbox" aria-checked="false" aria-labelledby="myLabel">

<label for="myCheckbox" id="myLabel">My Checkbox Label</label>

<button id="myButton" aria-disabled="true">Disabled Button</button>

<div id="myAccordion" role="region" aria-labelledby="myHeading">
  <h2 id="myHeading">Accordion Heading</h2>
  <div>Accordion Content Goes Here...</div>
</div>
```

In this example, ARIA properties are used to provide additional information about the state or value of various HTML elements. The `aria-checked` attribute is added to an `<input type="checkbox">` element, while `aria-disabled` is added to a `<button>` element. The `aria-labelledby` attribute is used to associate a label with an input element. The `role="region"` attribute is added to a container element to indicate its purpose as a region containing related content.

### alt Attributes

The `alt` attribute is used to provide alternative text for images in case they cannot be displayed or if the user is using a screen reader. The `alt` text should describe the content or function of the image in a concise and accurate manner.

Here's an example of how to use the `alt` attribute in HTML:

```html
<img src="image.jpg" alt="A red apple on a white background">
```

In this example, the `alt` attribute provides alternative text for an image of a red apple on a white background. If the image cannot be displayed or if the user is using a screen reader, the `alt` text will be read aloud instead.

It's important to note that the `alt` attribute should not be used for decorative images that do not convey any important information or function. In such cases, an empty `alt` attribute (`alt=""`) can be used instead.
