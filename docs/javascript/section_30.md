---
title: JavaScript as Front-End
description: Slim notes.
order: 30
---

### Manipulate DOM with JS

HTML defines the structure of a web page by using page elements as the building blocks. However, HTML by itself can not produce web page interactivity, that’s where JavaScript comes in.

In web development, CSS provides the style to our HTML structure.

If HTML and CSS provide structure and style in this analogy, JavaScript provides interactivity, allowing our stick figure to move.

Web programmers use JavaScript to make web pages dynamic and interactive. This powerful scripting language is encapsulated in its own HTML element: the `<script>` element. You can think of this `<script>` element as the door to JavaScript for HTML. This lesson will dig deeper into what the `<script>` element can do for your websites and best practices on how and where to insert JavaScript in your HTML files.

### DOM

The DOM stands for Document Object Model. It is a programming interface for web documents, representing the structure and content of an HTML or XML document as a tree-like structure. The DOM provides a way for programs and scripts to access, manipulate, and update the elements, attributes, and text within a web page. The _DOM_ is a logical tree-like **M**odel that organizes a web page’s HTML Document as an Object.

![[Pasted image 20231029084136.png]]


Here are some key points about the DOM:

1. Tree-like Structure: The DOM represents the HTML or XML document as a hierarchical tree structure. Each element, attribute, and text node in the document is represented as a node in the tree. The nodes are connected to each other in a parent-child relationship, forming the DOM tree.

2. Access and Manipulation: With the DOM, you can programmatically access and manipulate the elements and content of a web page. You can traverse the tree, query elements by their IDs, classes, or tag names, modify attributes, change text content, add or remove elements, and more.

3. Platform- and Language-Neutral: The DOM is platform- and language-neutral, meaning it can be accessed and manipulated using various programming languages like JavaScript, Python, or Java. Different programming languages provide different APIs to interact with the DOM, but the underlying principles remain the same.

4. Event Handling: The DOM allows you to handle user interactions and events on web pages. You can attach event handlers to elements to respond to actions like clicks, key presses, form submissions, and more. Event handling enables interactivity and dynamic behavior in web applications.

5. Dynamic Updates: Since the DOM represents the live structure of a web page, any changes made to the DOM are immediately reflected in the rendered page. This enables dynamic updates, such as modifying content based on user input or updating elements in response to server data.

6. Performance Considerations: Manipulating the DOM can have performance implications, especially when dealing with large or complex web pages. Excessive DOM manipulations or frequent reflows can impact rendering performance. It is important to optimize DOM operations and consider techniques like batch updates or using document fragments to minimize performance bottlenecks.

Overall, the DOM provides a standardized way to interact with and manipulate the structure and content of web documents. It forms the foundation for dynamic web development and enables interactivity on the web.

### Parent Child Relationships in the DOM

In the Document Object Model (DOM), parent-child relationships refer to the hierarchical structure of elements within an HTML document. Each element in the DOM can have zero or more child elements, and each child element has a single parent element.

Here are some key points about parent-child relationships in the DOM:

- Parent Element: A parent element is an element that contains one or more child elements. It is higher in the hierarchy compared to its child elements.

- Child Element: A child element is an element that is contained within a parent element. It is lower in the hierarchy compared to its parent element.

- Sibling Elements: Sibling elements are elements that share the same parent. They are at the same level in the hierarchy and have the same parent element.

Understanding parent-child relationships is essential for navigating and manipulating the DOM using JavaScript or other programming languages. It allows you to traverse the DOM tree, access specific elements, and perform actions based on their relationships within the document.

For example, you can use DOM methods like `parentNode` to access the parent element of a given element, `childNodes` to access all child nodes of an element (including text nodes and comment nodes), or `children` to access only the child elements of an element (excluding text nodes and comment nodes).

It's worth noting that not all nodes in the DOM are elements. Text nodes, comment nodes, and other types of nodes can also exist in the DOM tree. However, when discussing parent-child relationships, we typically refer to the relationships between HTML elements.

![[Pasted image 20231029084252.png]]

### Loading the web page

Yes, HTML is the first step in loading a web page. Here are the general steps involved in loading a web page, with HTML being the initial step:

1. HTML Parsing: The browser starts by parsing the HTML code of the web page. It reads the HTML tags, attributes, and content to understand the structure and elements of the page.

2. DOM Construction: As the browser parses the HTML, it constructs the Document Object Model (DOM) tree. The DOM tree represents the hierarchical structure of the HTML elements, forming a logical representation of the web page's content.

3. CSS Parsing and Style Computation: While parsing the HTML, the browser also processes any linked CSS stylesheets or inline styles within the HTML. It constructs the CSS Object Model (CSSOM) tree, which represents the styles applied to the HTML elements.

4. Render Tree Construction: The browser combines the DOM tree and CSSOM tree to create a render tree. The render tree contains only the elements that are visible on the web page and their associated styles. This tree is used for rendering and layout calculations.

5. Layout (Reflow): The browser calculates the layout of each element in the render tree. It determines their size, position, and how they interact with each other. This process is also known as reflow or layout.

6. Painting: Once the layout is calculated, the browser proceeds to paint each element on the screen. It fills in pixels with colors, images, and other visual properties according to the calculated layout information.

7. Display: Finally, the painted elements are displayed on the screen, and the user can see and interact with the rendered web page.

It's important to note that during this process, if JavaScript code is encountered, it may pause or modify the loading sequence. JavaScript can manipulate the DOM, modify styles, and trigger additional rendering processes.

Overall, HTML serves as the foundation for loading a web page, with subsequent steps involving CSS processing, rendering, and display.

JavaScript is typically applied during the loading process of a web page after the HTML and CSS have been parsed. The exact timing of when JavaScript is executed can vary depending on the specific circumstances. 

In general, the browser starts loading the HTML content of the web page and constructs the Document Object Model (DOM) tree. As the browser encounters a `<script>` tag or external JavaScript file, it pauses the loading process and begins executing the JavaScript code. This behavior is known as "blocking" because the loading of the page is halted until the JavaScript code has finished executing. Once the JavaScript code has executed, the browser resumes loading the remaining HTML and CSS, as well as any other external resources like images or stylesheets.

It's important to note that JavaScript can also be executed asynchronously or deferred, allowing it to load and execute independently from the main HTML parsing and rendering process. This can help improve the overall performance and responsiveness of the web page.

The specific placement of JavaScript code within the HTML document can also affect when it is applied. Placing JavaScript code at the top of the document can cause it to be executed earlier during the loading process, potentially before certain elements have been rendered. Placing JavaScript code at the bottom of the document, just before the closing `</body>` tag, allows the HTML content to be loaded and rendered before executing the JavaScript.

In summary, JavaScript is typically applied after the HTML and CSS have been parsed, but the exact timing can vary depending on factors such as script placement and whether it is loaded synchronously or asynchronously.

Additionally, scripts are loaded sequentially, so if one script depends on another script, they should be placed in that very order inside the HTML file.

### Nodes and Elements

In the context of the Document Object Model (DOM), a node refers to an object that represents an element, attribute, text, or other types of entities within an HTML or XML document. Nodes are the building blocks of the DOM tree, forming a hierarchical structure that represents the structure and content of the document.

Here are some common types of nodes in the DOM:

1. Element Node: Represents an HTML element, such as `<div>`, `<p>`, or `<a>`. Element nodes can have child nodes and attributes.

2. Text Node: Represents the text content within an element. For example, the text between `<p>` and `</p>` tags would be represented as a text node.

3. Attribute Node: Represents an attribute of an HTML element. For instance, the `href` attribute of an anchor (`<a>`) element would be represented as an attribute node.

4. Comment Node: Represents a comment within an HTML document. Comments are not rendered on the page but can provide additional information or annotations.

5. Document Node: Represents the entire HTML or XML document. It serves as the root of the DOM tree.

6. DocumentFragment Node: Represents a lightweight container that can hold multiple nodes. It is useful for manipulating groups of nodes before appending them to the main DOM tree.

These are just a few examples of node types in the DOM. There are additional specialized node types, such as processing instructions and CDATA sections, depending on the specific requirements of XML documents.

Each node type has its own properties and methods for accessing and manipulating its content, attributes, and relationships with other nodes in the DOM tree.

In the context of the Document Object Model (DOM), the terms "node" and "element" have distinct meanings.

A node is a generic term that represents any object within the DOM hierarchy. It can refer to different types of entities, including elements, attributes, text, comments, and more. Nodes form a tree-like structure, with each node having a parent and zero or more child nodes.

On the other hand, an *element* is a specific type of node that represents an HTML or XML element. Elements are the building blocks of a web page's structure and content. They correspond to tags in HTML, such as `<div>`, `<p>`, or `<a>`. Elements can have attributes, child nodes (which can be other elements or text nodes), and other properties.

In summary, while all elements are nodes, not all nodes are elements. Nodes encompass a broader range of entities within the DOM, while elements specifically represent HTML or XML elements.

In the Document Object Model (DOM), there are various elements that represent different HTML tags and XML elements. Here are some commonly used HTML elements:

- `<div>`: Represents a division or section of the document.
- `<p>`: Represents a paragraph of text.
- `<a>`: Represents an anchor or hyperlink.
- `<img>`: Represents an image.
- `<ul>`: Represents an unordered list.
- `<li>`: Represents an item in a list.
- `<h1>` to `<h6>`: Represents heading levels from 1 to 6.
- `<span>`: Represents an inline element used for grouping and applying styles to a specific section of text.
- `<input>`: Represents an input field, such as a text input or checkbox.

These are just a few examples of HTML elements. There are many more elements available, each serving a specific purpose in structuring and presenting web content.

It's important to note that the list of elements is not fixed and can be extended through custom elements or new HTML specifications.

### Script tag

To use JavaScript in your HTML files, you can utilize the `<script>` element. The `<script>` element serves as the doorway to embed or reference JavaScript code within your HTML document. Here's an explanation of how to use the `<script>` tag:

1. Inline JavaScript:
   You can directly include JavaScript code within the `<script>` tags directly in your HTML file. Here's an example:

   ```html
   <script>
     // Inline JavaScript code goes here
     console.log("Hello, world!");
   </script>
   ```

   In this case, the JavaScript code is placed directly between the opening `<script>` and closing `</script>` tags. When the browser encounters this script block, it will execute the JavaScript code.

2. External JavaScript file:
   Alternatively, you can link an external JavaScript file using the `src` attribute of the `<script>` tag. This allows you to separate your JavaScript code into separate files for better organization and reusability. Here's an example:

   ```html
   <!-- index.html -->
   <script src="path/to/script.js"></script>
   ```

   In this example, the `src` attribute specifies the path to the external JavaScript file. The browser will fetch and execute the code from that file. By default, `src="./srcipt.js"` will search the file in the same folder as `index.html`

3. Best Practices:
   Here are some best practices for using the `<script>` tag:

   - Place the `<script>` tag in the `<head>` section: By default, browsers execute scripts as they encounter them. Placing scripts in the `<head>` section may delay rendering of the page content. To mitigate this, you can use techniques like asynchronous loading or deferred execution.
   
   - Use `async` or `defer` attributes: These attributes can be added to the `<script>` tag to control how scripts are loaded and executed. `async` allows the script to be downloaded asynchronously while not blocking HTML parsing. With the `async` attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded.  `defer` allows the script to be downloaded asynchronously and executed **after HTML parsing** is complete.

   ```html
   <script src="path/to/script.js" async></script>
   <script src="path/to/script.js" defer></script>
   ```

   - Place scripts at the end of the body: Placing scripts just before the closing `</body>` tag ensures that the HTML content is loaded first. This helps improve page load performance.

   ```html
   <body>
     <!-- HTML content here -->
   
     <script src="path/to/script.js"></script>
   </body>
   ```

Remember to include valid JavaScript code between the opening and closing `<script>` tags or in external JavaScript files.

The order of the scripts tags is very important!

```html
<!DOCTYPE html>

<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <script id="blue" src="turnBlue.js" defer></script>
  </head>

  <body>    
    <p class="centered" id="logo">Codecademy</p>
    <script id="yellow" src="turnYellow.js"></script>
  </body>

</html>
```

1. the logo codecademy starts with yellow color and after turn to blue.
2. if defer is not applied, the logo will be in blue and after in yellow.

### Attributes of Element Node

Nodes in the Document Object Model (DOM) have different types, and each type of node may have different attributes. Here are the common attributes associated with some types of nodes:

1. Element Node Attributes:
   - `tagName`: Returns the tag name of the element (e.g., "div", "p", "a").
   - `id`: Returns or sets the value of the "id" attribute of the element.
   - `className`: Returns or sets the value of the "class" attribute of the element.
   - `innerHTML`: Returns or sets the HTML content within the element, including child elements.
   - `textContent`: Returns or sets the text content within the element, excluding child elements.
   - `attributes`: Returns a collection of all attributes of the element.

2. Text Node Attributes:
   - `nodeValue`: Returns or sets the value of the text node.

3. Attribute Node Attributes:
   - `name`: Returns the name of the attribute.
   - `value`: Returns or sets the value of the attribute.

4. Comment Node Attributes:
   - `nodeValue`: Returns or sets the value of the comment node.

5. Document Node Attributes:
   - `documentElement`: Returns the root element of the document.
   - `body`: Returns the body element of the document.
   - `doctype`: Returns the DocumentType node representing the document type declaration.

These are just a few examples of attributes associated with different types of nodes in the DOM. The specific attributes available depend on the node type and can be accessed and manipulated using appropriate properties and methods provided by DOM APIs.
### The Document Keyword

See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)

The Document Object Model (DOM) is an essential part of web development and JavaScript. It represents the structure and content of an HTML or XML document as a tree-like structure. The DOM provides a way to interact with and manipulate the elements, attributes, and text within a web page.

In JavaScript, the `Document` object represents the entire HTML or XML document. It serves as the entry point to access and modify various elements and properties within the document. The `Document` object provides methods and properties that allow developers to traverse the DOM tree, create new elements, modify existing elements, handle events, and more.

By using the `Document` object, you can perform tasks such as selecting elements, changing their content, adding or removing elements dynamically, modifying CSS styles, and responding to user interactions.

Here are a few examples of how you can work with the `Document` object in JavaScript:

- Selecting an element by its ID:
  ```javascript
  const myElement = document.getElementById('myElementId');
  ```

- Creating a new element and appending it to an existing element:
  ```javascript
  const newElement = document.createElement('div');
  newElement.textContent = 'Hello, World!';
  document.body.appendChild(newElement);
  ```

- Modifying the content of an existing element:
  ```javascript
  const myElement = document.getElementById('myElementId');
  myElement.innerHTML = '<h2>New Content</h2>';
  ```

These are just a few examples of how you can use the `Document` object in JavaScript to interact with the DOM. The `Document` object provides a wide range of methods and properties that enable you to manipulate the structure and content of a web page.
### Access to Element properties and attributes

In JavaScript, element properties allow you to access and manipulate various aspects of an element without explicitly using attributes. Here are some commonly used element properties:

1. `textContent` - Gets or sets the text content of an element.
```javascript
const myElement = document.getElementById('myElementId');
const textContent = myElement.textContent; // Get the text content of the element
myElement.textContent = 'New Text Content'; // Set a new text content for the element
```

2. `innerHTML` - Gets or sets the HTML content of an element.
```javascript
const myElement = document.getElementById('myElementId');
const innerHTML = myElement.innerHTML; // Get the HTML content of the element
myElement.innerHTML = '<h2>New HTML Content</h2>'; // Set a new HTML content for the element
```

3. `value` - Gets or sets the value of an input element.
```javascript
const myInput = document.getElementById('myInputId');
const value = myInput.value; // Get the current value of the input
myInput.value = 'New Value'; // Set a new value for the input
```

4. `checked` - Gets or sets the checked state of a checkbox or radio input.
```javascript
const myCheckbox = document.getElementById('myCheckboxId');
const isChecked = myCheckbox.checked; // Get the checked state of the checkbox
myCheckbox.checked = true; // Set the checkbox to be checked
```

5. `src` - Gets or sets the source URL of an image or media element.
```javascript
const myImage = document.getElementById('myImageId');
const src = myImage.src; // Get the source URL of the image
myImage.src = 'new-image.jpg'; // Set a new source URL for the image
```

These are just a few examples of commonly used element properties. The specific properties available depend on the type of element you are working with. You can access and modify these properties to manipulate various aspects of an element in JavaScript.


1. Using `getAttribute()`:
```javascript
const myElement = document.getElementById('myElementId');
const attributeValue = myElement.getAttribute('attributeName');
console.log(attributeValue);
```
In this example, replace `'myElementId'` with the ID of the element you want to target, and `'attributeName'` with the name of the attribute you want to retrieve. The value of the attribute will be logged to the console.

2. Using `setAttribute()`:
```javascript
const myElement = document.getElementById('myElementId');
myElement.setAttribute('attributeName', 'attributeValue');
```
In this example, replace `'myElementId'` with the ID of the element you want to target, `'attributeName'` with the name of the attribute you want to set, and `'attributeValue'` with the desired value for that attribute. This will set the attribute on the element.

3. Using `removeAttribute()`:
```javascript
const myElement = document.getElementById('myElementId');
myElement.removeAttribute('attributeName');
```
In this example, replace `'myElementId'` with the ID of the element you want to target, and `'attributeName'` with the name of the attribute you want to remove. This will remove the specified attribute from the element.

Remember to replace `'myElementId'` with the actual ID of the element you want to work with, and `'attributeName'` with the name of the attribute you want to manipulate.

### Select Elements

In JavaScript, you can select HTML elements using various methods provided by the Document Object Model (DOM). Here are some commonly used methods to select elements:

1. `getElementById()` - Selects an element based on its ID attribute.
```javascript
const myElement = document.getElementById('myElementId');
```

2. `getElementsByClassName()` - Selects elements based on their class name.
```javascript
const myElements = document.getElementsByClassName('myClassName');
```

3. `getElementsByTagName()` - Selects elements based on their tag name.
```javascript
const myElements = document.getElementsByTagName('div');
```

4. `querySelector()` - Selects the first element that matches a CSS selector.
```javascript
const myElement = document.querySelector('#myElementId .myClassName');
```

5. `querySelectorAll()` - Selects all elements that match a CSS selector.
```javascript
const myElements = document.querySelectorAll('div.myClassName');
```

In all of these methods, replace the arguments with the appropriate selector or ID to target the desired element(s). Once you have selected an element, you can perform various operations on it, such as modifying its content, attributes, or properties, adding or removing classes, and more.

Here's an example of selecting an element by ID and changing its text content:
```javascript
const myElement = document.getElementById('myElementId');
myElement.textContent = 'New Text Content';
```

These are just a few examples of how to select HTML elements in JavaScript. The specific method you choose depends on your use case and the element you want to target.

### Traversing the DOM

Traversing the DOM means moving up, down, and sideways through the tree-like structure of HTML elements to locate specific elements or perform operations on them. In JavaScript, you can traverse the DOM using various methods provided by the Document Object Model (DOM). Here are some commonly used methods to traverse the DOM:

1. `parentNode` - Returns the parent node of an element.
```javascript
const myElement = document.getElementById('myElementId');
const parentElement = myElement.parentNode;
```

2. `childNodes` - Returns a collection of child nodes of an element.
```javascript
const myElement = document.getElementById('myElementId');
const childNodes = myElement.childNodes;
```

3. `firstChild` - Returns the first child node of an element.
```javascript
const myElement = document.getElementById('myElementId');
const firstChild = myElement.firstChild;
```

4. `lastChild` - Returns the last child node of an element.
```javascript
const myElement = document.getElementById('myElementId');
const lastChild = myElement.lastChild;
```

5. `nextSibling` - Returns the next sibling node of an element.
```javascript
const myElement = document.getElementById('myElementId');
const nextSibling = myElement.nextSibling;
```

6. `previousSibling` - Returns the previous sibling node of an element.
```javascript
const myElement = document.getElementById('myElementId');
const previousSibling = myElement.previousSibling;
```

In all of these methods, replace `'myElementId'` with the ID of the element you want to traverse from. Once you have located an element or a collection of elements, you can perform various operations on them, such as modifying their content, attributes, or properties, adding or removing classes, and more.

Here's an example of traversing the DOM to locate a specific element and changing its text content:
```javascript
const parentElement = document.getElementById('parentElementId');
const targetElement = parentElement.querySelector('.targetClass');
targetElement.textContent = 'New Text Content';
```

These are just a few examples of how to traverse the DOM in JavaScript. The specific method you choose depends on your use case and the element(s) you want to target.

### Styling

You can apply styles to HTML elements using the `style` property in JavaScript. Here's an example:
```javascript
const myElement = document.getElementById('myElementId');
myElement.style.color = 'red';
myElement.style.fontSize = '20px';
```
In this example, `myElement` is an HTML element selected using the `getElementById()` method, and the `style` property is used to apply the `color` and `fontSize` styles.

You can also add or remove classes from an element using the `classList` property in JavaScript. Here's an example:
```javascript
const myElement = document.getElementById('myElementId');
myElement.classList.add('myClass');
myElement.classList.remove('otherClass');
```
In this example, `myClass` and `otherClass` are classes defined in your CSS.

### DOM manipulation

To create and insert elements into the DOM (Document Object Model) using JavaScript, you can use various methods such as `createElement()`, `appendChild()`, `insertBefore()`, `replaceChild()`, and `removeChild()`. Here's an explanation of each method:

1. `createElement()`:
The `createElement()` method is used to create a new HTML element. You can specify the element type as an argument. For example:
```javascript
const newElement = document.createElement('div');
```
This code creates a new `<div>` element and assigns it to the `newElement` variable.

2. `appendChild()`:
The `appendChild()` method is used to insert an element as the last child of a parent element. For example:
```javascript
const parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);
```
This code appends the `newElement` as the last child of the element with the ID `'parent'`.

3. `insertBefore()`:
The `insertBefore()` method is used to insert an element before a specified reference element within a parent element. For example:
```javascript
const referenceElement = document.getElementById('reference');
parentElement.insertBefore(newElement, referenceElement);
```
This code inserts the `newElement` before the `referenceElement` within the `parentElement`.

4. `replaceChild()`:
The `replaceChild()` method is used to replace an existing child element with a new element within a parent element. For example:
```javascript
const existingElement = document.getElementById('existing');
parentElement.replaceChild(newElement, existingElement);
```
This code replaces the `existingElement` with the `newElement` within the `parentElement`.

5. `removeChild()`:
The `removeChild()` method is used to remove a child element from its parent element. For example:
```javascript
parentElement.removeChild(existingElement);
```
This code removes the `existingElement` from its parent, `parentElement`.

These methods allow you to dynamically create, insert, replace, and remove elements within the DOM using JavaScript.

### Efficient DOM manipulation

To create efficient DOM manipulation, you can use the `createDocumentFragment()` method in JavaScript. A document fragment is a lightweight container that allows you to manipulate multiple DOM elements without directly impacting the main document. It can be particularly useful when you need to make multiple changes to the DOM at once.

Here's how you can use `createDocumentFragment()` for efficient DOM manipulation:

1. Create a document fragment using `document.createDocumentFragment()`:
```javascript
const fragment = document.createDocumentFragment();
```

2. Manipulate the fragment by appending elements to it:
```javascript
const element1 = document.createElement('div');
element1.textContent = 'Element 1';
fragment.appendChild(element1);

const element2 = document.createElement('div');
element2.textContent = 'Element 2';
fragment.appendChild(element2);
```

3. Once you have made all the necessary changes, append the fragment to the main document:
```javascript
const container = document.getElementById('container');
container.appendChild(fragment);
```
In this example, replace `'container'` with the ID of the element where you want to append the fragment.

By using a document fragment, you can perform multiple DOM manipulations without causing multiple reflows or repaints, which can improve performance. The changes made within the fragment are only applied to the main document when you append the fragment, reducing the number of layout calculations.

Using `createDocumentFragment()` can be especially beneficial when you need to make a large number of DOM manipulations at once.

### Review

See [GeeksForGeeks](https://www.geeksforgeeks.org/javascript-dom-tips-and-tricks/)

### DOM events

See [Events](https://developer.mozilla.org/en-US/docs/Web/Events?locale=en)

You can add DOM events to HTML elements using JavaScript. There are several ways to do this, but one common method is to use the `addEventListener()` method. Here's an example:

```javascript
const myButton = document.getElementById('myButtonId');

myButton.addEventListener('click', function() {
  // Code to execute when the button is clicked
});
```

In this example, replace `'myButtonId'` with the ID of the button element you want to target. The `addEventListener()` method adds a click event listener to the button, which executes the code inside the anonymous function when the button is clicked.

You can also use other event types, such as `'mouseover'`, `'keydown'`, or `'submit'`, depending on your needs.

Alternatively, you can add event listeners directly to HTML elements using event attributes. Here's an example:

```html
<button onclick="myFunction()">Click me</button>
```

In this example, the `onclick` attribute is used to add a click event listener to the button. When the button is clicked, the `myFunction()` function will be executed.

Note that using event attributes can make your HTML code less readable and harder to maintain, especially when dealing with multiple events or complex code.


The `element.onclick` property allows you to assign a function that will be executed when the specified element is clicked. Here's a sample code snippet using the provided text:

```javascript
let element = document.querySelector('button');

function turnButtonRed() {
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;
```

In this example, the `element` variable is assigned the first button element found in the document using `document.querySelector('button')`. Then, a function named `turnButtonRed()` is defined, which changes the background color, text color, and inner HTML of the button to make it appear red.

Finally, the `element.onclick` property is set to the `turnButtonRed` function, so when the button is clicked, the function will be executed, resulting in the button turning red.

Sure, here's a list of some commonly used events in JavaScript:

1. `click`: The `click` event is fired when an element is clicked.
2. `submit`: The `submit` event is fired when a form is submitted.
3. `keydown`: The `keydown` event is fired when a key on the keyboard is pressed down.
4. `keyup`: The `keyup` event is fired when a key on the keyboard is released.
5. `mouseover`: The `mouseover` event is fired when the mouse pointer enters an element.
6. `mouseout`: The `mouseout` event is fired when the mouse pointer leaves an element.
7. `load`: The `load` event is fired when a page or an image finishes loading.
8. `unload`: The `unload` event is fired when a page is unloaded or the browser window is closed.
9. `resize`: The `resize` event is fired when the browser window is resized.
10. `scroll`: The `scroll` event is fired when an element's scrollbar is scrolled.

These are just a few examples of the many events available in JavaScript. You can find a more comprehensive list of events in the MDN Web Docs.

### remove events

To remove an event handler that was previously attached to an element using `addEventListener()`, you can use the `removeEventListener()` method. Here's an example:

```javascript
const myElement = document.getElementById('myElementId');

function myEventHandler(event) {
  // Code to execute when the event is triggered
  console.log('Event triggered:', event.type);
}

myElement.addEventListener('click', myEventHandler);

// Later, remove the event handler
myElement.removeEventListener('click', myEventHandler);
```

In this example, replace `'myElementId'` with the ID of the element you want to target. The `addEventListener()` method is used to attach a `click` event handler named `myEventHandler()` to the element. The same function is passed as an argument to the `removeEventListener()` method to remove the event handler from the element.

It is important to note that the function passed as an argument to `removeEventListener()` must be the same function that was passed to `addEventListener()`. If you pass a different function or an anonymous function, the event handler will not be removed.

Please note that if you are using `onkeydown` or other similar properties to assign event handlers, you can directly set the property to `null` to remove the handler. Here's an example:

```javascript
const myElement = document.getElementById('myElementId');

function myEventHandler(event) {
  // Code to execute when the event is triggered
  console.log('Event triggered:', event.type);
}

myElement.onkeydown = myEventHandler;

// Later, remove the event handler
myElement.onkeydown = null;
```

In this example, replace `'myElementId'` with the ID of the element you want to target. The `onkeydown` property is set to the `myEventHandler()` function to attach a keydown event handler to the element. To remove the event handler, simply set the property to `null`.

Other sample :

```js
let fortunes = [
	"A beautiful, smart, and loving person will be coming into your life.",
	"A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  button.removeEventListener('click', showFortune)
}

button.addEventListener('click', showFortune);
```


### Event object

The Event Object in JavaScript provides properties and methods that give details and allow manipulation of an event. When an event occurs, such as a click or key press, a corresponding event object is created with information about the event. The properties of the Event Object can be accessed to retrieve information such as the type of event, the target element, and additional data related to the event.

Here are some commonly used properties of the Event Object:

1. `event.type`: Returns the type of the event, such as "click" or "keydown".
2. `event.target`: Returns the element that triggered the event.
3. `event.currentTarget`: Returns the element that the event handler is attached to.
4. `event.keyCode` or `event.key`: Returns the key code or key value associated with a keyboard event.
5. `event.clientX` and `event.clientY`: Returns the horizontal and vertical coordinates of the mouse pointer relative to the viewport.
6. `event.pageX` and `event.pageY`: Returns the horizontal and vertical coordinates of the mouse pointer relative to the document.
7. `event.timeStamp`: get the timestamp when the event has been fired.
8. `event.preventDefault()`: Prevents the default action associated with the event from occurring.
9. `event.stopPropagation()`: Stops the event from propagating further to other elements.

Here's an example that demonstrates accessing some of these properties within an event handler:

```javascript
function handleClick(event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Current element:", event.currentTarget);
}

const myElement = document.getElementById('myElementId');
myElement.addEventListener('click', handleClick);
```

In this example, when a click event occurs on the `myElement` element, the `handleClick` function is called with the corresponding event object. The function logs the type of event, the target element that was clicked, and the current element to the console.

It's important to note that different events may have different properties available on their respective Event Objects. You can refer to the documentation for specific events to find out which properties are applicable.
### prevent default

The `event.preventDefault()` method is used to prevent the default action associated with an event from occurring. When an event is triggered, such as clicking on a link or submitting a form, there is often a default action that takes place. By calling `event.preventDefault()`, you can stop this default action from happening.

For example, when you click on a link, the default action is for the browser to navigate to the URL specified in the link's `href` attribute. However, if you call `event.preventDefault()` within the click event handler for that link, the navigation to the URL will be prevented.

Here's an example that demonstrates the usage of `event.preventDefault()`:

```html
<a href="https://example.com" id="myLink">Click me</a>

<script>
  const myLink = document.getElementById('myLink');

  myLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Link click prevented");
  });
</script>
```

In this example, when the link is clicked, the event handler function is called. Inside the function, `event.preventDefault()` is called to prevent the default navigation behavior. Instead, the message "Link click prevented" will be logged to the console.

It's important to note that not all events are cancelable and may not have a default action associated with them. In such cases, calling `event.preventDefault()` will have no effect.

### bubbling

See [js-info](https://javascript.info/bubbling-and-capturing)

In JavaScript, event bubbling refers to the propagation of an event through the DOM tree. When an event occurs on an element, such as a click or mouseover, it can trigger the same event on its parent elements all the way up to the root of the document.

During the event bubbling phase, the event is first triggered on the innermost element where it originated, then it propagates upward through its parent elements. This means that if you have nested elements, such as a button inside a div inside another div, a click event on the button will also trigger click events on the inner div and the outer div.

Event bubbling allows you to handle events at different levels of the DOM hierarchy. For example, you can attach a click event handler to a parent element and have it handle click events for all its child elements without explicitly attaching event handlers to each child element.

To stop the event from further propagation during bubbling, you can use the `event.stopPropagation()` method. This prevents the event from triggering event handlers on ancestor elements.

Event delegation is a technique that leverages event bubbling. Instead of attaching event handlers to individual elements, you can attach a single event handler to a common ancestor element and use event.target to determine which specific element triggered the event. This can be useful when dealing with dynamically added or removed elements.

In summary, event bubbling is the process of propagating an event from the innermost element where it originated to its parent elements in the DOM tree. It allows for handling events at different levels of the hierarchy and can be controlled using `event.stopPropagation()`.

```html
<form onclick="alert('form')">
	<div onclick="alert('div')">
		<p onclick="alert('p')">p</p>
	</div>
</form>
```

![[Pasted image 20231029120102.png]]

### stop propagation

The `event.stopPropagation()` method is used to stop the propagation of an event to other elements in the DOM tree. When an event is triggered on an element, it can also trigger the same event on parent elements and other descendant elements. This is known as event propagation or bubbling. By calling `event.stopPropagation()`, you can prevent the event from propagating further to other elements.

Here's an example that demonstrates the usage of `event.stopPropagation()`:

```html
<div id="outer">
  <div id="inner">
    <button id="myButton">Click me</button>
  </div>
</div>

<script>
  const myButton = document.getElementById('myButton');
  const innerDiv = document.getElementById('inner');
  const outerDiv = document.getElementById('outer');

  myButton.addEventListener('click', function(event) {
    console.log("Button clicked");
    event.stopPropagation();
  });

  innerDiv.addEventListener('click', function(event) {
    console.log("Inner div clicked");
  });

  outerDiv.addEventListener('click', function(event) {
    console.log("Outer div clicked");
  });
</script>
```

In this example, when the button is clicked, the click event handler for the button is called. Inside the function, `event.stopPropagation()` is called to prevent the click event from propagating further to the inner and outer divs. As a result, only the message "Button clicked" will be logged to the console.

It's important to note that stopping event propagation can have unintended consequences and should be used with caution. In some cases, it may be more appropriate to allow the event to propagate and handle it appropriately on parent elements.


### HTML forms

In JavaScript, you can create and manipulate HTML forms using the Document Object Model (DOM) API. Here's a basic overview of how a form in JavaScript works:

1. Creating the Form: You can create an HTML form using the `<form>` tag in your HTML code. You can then access the form element in your JavaScript code using the `document.forms` property or by using the `getElementById()` method.

2. Accessing Form Elements: Once you have access to the form element, you can access its child elements (i.e., form controls) using the DOM API. You can access form controls by their name, ID, or index using methods such as `getElementsByTagName()` or `querySelector()`.

3. Event Handling: You can attach event listeners to form controls and the form itself to handle user input and form submission. Common events used with forms include `submit`, `reset`, `change`, and `input`. You can use these events to validate user input, update form data, or perform other actions.

4. Submitting the Form: When the user submits the form, the form data is sent to the server for processing. You can intercept the form submission using JavaScript to perform additional validation or to modify the data before it is sent to the server. To submit a form programmatically, you can call the `submit()` method on the form element.

5. Form Validation: You can use JavaScript to validate user input on the client side before submitting the form to the server. This can help improve data accuracy and reduce server load by preventing unnecessary requests. You can use built-in validation methods or write custom validation functions to validate form data.

In summary, a form in JavaScript works by creating an HTML form element, accessing its child elements using the DOM API, attaching event listeners to handle user input and submission, validating user input on the client side, and submitting the form data to the server for processing.

In JavaScript, working with forms involves accessing and manipulating form elements and handling form submissions. Here's a sample code snippet that demonstrates how a form can be handled in JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Example</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Submit</button>
  </form>

  <script>
    // Access the form element
    const form = document.getElementById('myForm');

    // Handle form submission event
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Access form input values
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');

      // Perform form validation
      if (nameInput.value === '') {
        alert('Please enter your name.');
        return;
      }

      if (emailInput.value === '') {
        alert('Please enter your email.');
        return;
      }

      // Form is valid, proceed with submission
      alert('Form submitted successfully!');
      // You can also submit the form to a server using AJAX or other techniques.
    });
  </script>
</body>
</html>
```

In this example, we have a simple form with two input fields (name and email) and a submit button. The JavaScript code accesses the form element using its ID and attaches an event listener to the form's submit event.

When the user clicks the submit button or presses Enter while focused on an input field, the submit event is triggered. The event listener function is then executed, where you can perform form validation and handle the form submission.

In this case, we validate that both the name and email fields are not empty. If any validation fails, an alert is displayed to the user. If the form is valid, an alert indicating successful submission is displayed.

You can customize the validation logic based on your specific requirements and perform additional actions such as sending the form data to a server or updating the UI.

### Input elements

The `<input>` element is one of the most commonly used form elements in HTML. It is used to create a variety of form controls, including text fields, checkboxes, radio buttons, and more. Here are some of the most commonly used attributes for the `<input>` element:

- `type`: Specifies the type of input control to be created. Some common values include:
  - `text`: Creates a single-line text input field.
  - `password`: Creates a password input field where the entered text is masked.
  - `checkbox`: Creates a checkbox input field.
  - `radio`: Creates a radio button input field.
  - `submit`: Creates a submit button that submits the form.
  - `reset`: Creates a reset button that resets the form.
- `name`: Specifies the name of the input control, which is used to identify the input when the form is submitted.
- `value`: Specifies the initial value for the input control.
- `placeholder`: Specifies a short hint that describes the expected value of the input control.
- `required`: Specifies that the input control must be filled out before the form can be submitted.
- `disabled`: Specifies that the input control should be disabled and cannot be interacted with.
- `readonly`: Specifies that the input control is read-only and cannot be edited by the user.

Here are some examples of how to use the `<input>` element with different attributes:

```html
<!-- A text input field -->
<input type="text" name="username" placeholder="Enter your username" required>

<!-- A password input field -->
<input type="password" name="password" placeholder="Enter your password" required>

<!-- A checkbox input field -->
<input type="checkbox" name="agree" value="yes" required>
<label for="agree">I agree to the terms and conditions</label>

<!-- A radio button input field -->
<input type="radio" name="gender" value="male" required>
<label for="male">Male</label>

<input type="radio" name="gender" value="female" required>
<label for="female">Female</label>

<!-- A submit button -->
<input type="submit" value="Submit">

<!-- A reset button -->
<input type="reset" value="Reset">
```



1. `<datalist>`: The `<datalist>` element provides a predefined list of options for an input field. It works in conjunction with the `<input>` element and its `list` attribute. The user can select an option from the list or enter a custom value.

Example:
```html
<label for="browser">Select a browser:</label>
<input type="text" id="browser" name="browser" list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

In this example, when the user types in the input field with the `id` of "browser", a dropdown list will appear with the options specified in the `<datalist>` element. The user can either select one of the options or enter a custom value.

2. `<select>` (Dropdown List): The `<select>` element is used to create a dropdown list of options. It allows the user to select one or multiple options from the list.

Example:
```html
<label for="color">Select your favorite color:</label>
<select id="color" name="color">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
</select>
```

In this example, the user can select their favorite color from the dropdown list. The selected option will be submitted when the form is submitted.

3. `<textarea>`: The `<textarea>` element is used to create a multi-line text input field. It allows the user to enter and edit multiple lines of text.

Example:
```html
<label for="message">Enter your message:</label>
<textarea id="message" name="message" rows="4" cols="30"></textarea>
```

In this example, the user can enter their message in the textarea field. The `rows` and `cols` attributes determine the initial size of the textarea.

These elements provide different ways to capture user input in HTML forms. You can customize them further using additional attributes and JavaScript to enhance their functionality.

### submit

To submit a form in HTML, you can use either a submit button or JavaScript. Here are two methods:

1. Submit Button:
   - Add a `<button>` element with the `type` attribute set to "submit" within the `<form>` element.
   - When the user clicks the submit button, the form will be submitted.

Example:
```html
<form action="/submit-form" method="POST">
  <!-- form fields here -->

  <button type="submit">Submit</button>
</form>
```

In this example, when the user clicks the "Submit" button, the form will be submitted to the specified `action` URL using the specified `method` (in this case, POST).

2. JavaScript:
   - Add an event listener to the form's submit event using JavaScript.
   - In the event listener function, you can perform additional actions or validations before submitting the form using the `submit()` method.

Example:
```html
<form id="myForm" action="/submit-form" method="POST">
  <!-- form fields here -->
</form>

<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform additional actions or validations

    // Submit the form
    form.submit();
  });
</script>
```

In this example, when the user submits the form by clicking a submit button or pressing Enter, the form's submit event is triggered. The event listener function prevents the default form submission using `event.preventDefault()`. You can perform additional actions or validations as needed, and then submit the form programmatically using `form.submit()`.

Remember to specify the `action` attribute in the `<form>` element to determine where the form data will be sent, and the `method` attribute to specify the HTTP method for the form submission (e.g., GET or POST).

Choose the method that suits your needs based on whether you require additional logic or validations before submitting the form.


### HTML Forms Validation

See [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

See [Formik](https://formik.org/docs/guides/validation)
See [just-validate](https://www.npmjs.com/package/just-validate)
See [Parsley](https://parsleyjs.org/)

Validating forms in JavaScript is important for several reasons:

1. Data Accuracy: Form validation ensures that the data entered by the user is accurate and meets the required format. It helps to prevent users from submitting incorrect or incomplete data, which can lead to errors or issues in the application.

2. Improved User Experience: JavaScript form validation provides immediate feedback to users when they enter invalid data. Instead of waiting for the form to be submitted and validated on the server side, JavaScript validation allows for real-time validation, providing faster feedback and a better user experience.

3. Reduced Server Load: By validating forms on the client side using JavaScript, you can reduce the number of unnecessary requests sent to the server. This helps to optimize server performance and reduces the load on the server resources.

4. Enhanced Security: Form validation can help prevent malicious input or attacks, such as SQL injection or cross-site scripting (XSS). By validating user input on the client side, you can detect and block potentially harmful data before it is sent to the server.

While server-side validation is essential for data integrity and security, JavaScript form validation complements it by providing immediate feedback and reducing the need for round trips to the server.

- Modern websites require a lot of information from their users and they collect a lot of this information through HTML forms.

- It’s essential to validate the data submitted through forms to keep websites secure and to make sure they function correctly.

- Regular expressions are sequences of characters that define patterns to look for in text. They are an important tool used in validating input.

- Modern HTML comes with useful built-in methods for form validation.

- Custom and complicated client-side validation can be accomplished with JavaScript.

- Asynchronous requests to the server can perform back-end validations before a form has been submitted.

- A final back-end validation of all data is required to ensure an application’s security and sanitize all data.


### Required

The `required` attribute is an HTML attribute that can be added to form elements to indicate that a particular field must be filled out before the form can be submitted. It is primarily used for form field validation on the client-side.

When the `required` attribute is added to an input, select, or textarea element, the browser will automatically validate the field and prevent form submission if it is left empty or contains invalid data.

Examples:

1. Text Input Field:
```html
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>
```
In this example, the "Name" input field is marked as required. The user will be prompted to fill in this field before they can submit the form.

2. Select Dropdown:
```html
<label for="country">Country:</label>
<select id="country" name="country" required>
  <option value="">Select a country</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
  <option value="canada">Canada</option>
</select>
```
In this example, the "Country" dropdown is marked as required. The user must select an option from the dropdown before submitting the form. The default option with an empty value acts as a placeholder.

3. Textarea:
```html
<label for="message">Message:</label>
<textarea id="message" name="message" required></textarea>
```
In this example, the "Message" textarea is marked as required. The user must enter some text in the textarea before submitting the form.

Using the `required` attribute helps ensure that important form fields are not left empty. It provides a simple way to perform basic client-side validation without requiring additional JavaScript code. However, it's important to note that client-side validation should always be supplemented with server-side validation for robust and secure form handling.

### min and max

When using the `input` element with the `type="number"`, you can specify the minimum and maximum values that are allowed for user input. The `min` and `max` attributes are used to define these constraints.

Here is an example of how to use the `min` and `max` attributes with the `input` element of type `number`:

```html
<label for="quantity">Quantity (between 1 and 5):</label>
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

In this example, the user can enter a number between 1 and 5 in the "Quantity" input field. The `min` attribute specifies the minimum value allowed (1 in this case), while the `max` attribute specifies the maximum value allowed (5 in this case).

The browser will automatically enforce these constraints and prevent the user from entering a value outside the specified range. Additionally, browsers may provide UI controls such as stepper arrows to increment or decrement the value within the specified range.

It's important to note that while the `min` and `max` attributes provide client-side validation, server-side validation should also be implemented to ensure data integrity and security.

### minlength and maxlength

The `minlength` and `maxlength` attributes in HTML are used to define the minimum and maximum length of input that a user can enter into an `<input>` or `<textarea>` element.

- `minlength`: It specifies the minimum number of characters required for the input value. If the entered value is shorter than the specified `minlength`, the form will not be considered valid. The `minlength` attribute must have an integer value of 0 or higher.

- `maxlength`: It defines the maximum number of characters allowed for the input value. If the entered value exceeds the specified `maxlength`, the input will be truncated or prevented from accepting further characters. The `maxlength` attribute must have an integer value of 0 or higher.

Example usage:

```html
<label for="username">Username (3 to 15 characters):</label>
<input type="text" id="username" name="username" minlength="3" maxlength="15">
```

In this example, the "Username" input field must have a minimum length of 3 characters and a maximum length of 15 characters. If the user enters a value that does not meet these requirements, the form will not be considered valid.

It's important to note that while these attributes provide client-side validation to enforce input length restrictions, server-side validation should also be implemented to ensure data integrity and security.

[1]: [W3Schools - HTML input minlength Attribute](https://www.w3schools.com/html/html_form_attributes.asp)
[2]: [MDN Web Docs - HTML attribute: minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength)
[3]: [MDN Web Docs - HTML attribute: maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength)

### matching pattern

The `pattern` attribute in HTML is used to specify a regular expression that an `<input>` element's value must match in order to be considered valid. This attribute is useful for enforcing specific input formats, such as phone numbers, email addresses, or credit card numbers.

The regular expression pattern is specified as a string within the `pattern` attribute. The browser will automatically validate the input value against the specified pattern and prevent the form from being submitted if the value does not match.

Here's an example of how to use the `pattern` attribute to enforce a specific input format:

```html
<label for="phone">Phone Number:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
```

In this example, the "Phone Number" input field must match the regular expression pattern `[0-9]{3}-[0-9]{3}-[0-9]{4}`. This pattern enforces the format of a typical US phone number with three digits followed by a hyphen, then three more digits, another hyphen, and finally four more digits.

If the user enters a value that does not match this pattern, the form will not be considered valid and will not be submitted. The `required` attribute is also added to ensure that the user enters a value before submitting the form.

It's important to note that while client-side validation can be useful for providing immediate feedback to users, server-side validation should also be implemented to ensure data integrity and security.



