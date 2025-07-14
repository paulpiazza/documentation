---
title: Semantic Elements
description: Slim notes.
order: 26
---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Semantic elements are HTML elements that convey meaning beyond their visual appearance. They provide information about the content they contain, making it easier for assistive technologies to interpret and navigate web pages. Examples of semantic elements include `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.

In semantic HTML, elements are used to reinforce the meaning of the information in webpages and web applications rather than merely to define its presentation or look. Semantic HTML is beneficial for search engines, screen readers, and other assistive technologies, as well as for developers maintaining the code.

Here's an example of how to use semantic elements in HTML:

```html
<header>
  <h1>My Website</h1>
  <nav>
    `<ul>`
      `<li>`<a href="#">Home</a></li>
      `<li>`<a href="#">About</a></li>
      `<li>`<a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
  </article>

  <aside>
    <h3>Related Links</h3>
    `<ul>`
      `<li>`<a href="#">Link 1</a></li>
      `<li>`<a href="#">Link 2</a></li>
      `<li>`<a href="#">Link 3</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2021 My Website</p>
</footer>
```

In this example, semantic elements are used to structure the content of a web page in a meaningful way. The `<header>` element contains the main heading and navigation links, while the `<main>` element contains the main content of the page, including an `<article>` element and an `<aside>` element for related links. The `<footer>` element contains copyright information.

### Header

The `<header>` element represents a container for introductory content or a set of navigational links. A header typically contains:

- one or more heading elements (`<h1>` - `<h6>`),
- logo or icon,
- authorship information,
- search forms,
- and any relevant links to sections of the site.

However, a `<header>` does not have to contain all of these elements; it could just contain a title.

The `<header>` element is not limited to the top of the document or section; it can be used in other contexts such as the header of an article or any section within the page. However, it's important to note that you shouldn't use the `<header>` element within a `<footer>`, `<address>`, or another `<header>` element.

Here's an example of a simple page header:

```html
<header>
  <h1>My Website</h1>
  <nav>
    <!-- Navigation goes here -->
  </nav>
</header>
```

### Nav

The `<nav>` element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

Not all groups of links on a page need to be in a `<nav>` element — the element is intended only for major block of navigation links. Breadcrumbs, pagination, and other secondary navigation aids are usually not placed within a `<nav>` element.

Here's an example of using the `<nav>` element:

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

In this example, the `<nav>` contains a list of links that lead to different sections of the site. The use of the `<ul>` (unordered list) and `<li>` (list item) elements helps define the structure of the navigation links semantically.

Remember, while these elements give structure and meaning to your documents, they should be used according to their semantic purpose and not for visual presentation. Visual styling should be handled with CSS (Cascading Style Sheets).

### Main

The `<main>` element in semantic HTML5 is used to represent the main content of the `<body>` of a document or application. The content inside the `<main>` element should be unique to the document and should not include content that is repeated across documents such as sidebars, navigation links, copyright information, headers, or footers.

The `<main>` element should be used only once per page and is meant to contain the core topic or the central functionality of the document. This helps screen readers and other assistive technologies to quickly identify the main content of the page.

Here's an example of how you might structure a simple web page using the `<main>` element:

```html
<body>
  <header>
    <!-- Site header content goes here -->
  </header>
  
  <nav>
    <!-- Navigation links go here -->
  </nav>

  <main>
    <article>
      <h1>Introduction to Semantic HTML</h1>
      <p>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look.</p>
      <!-- More content -->
    </article>
    
    <aside>
      <!-- Supplementary content like a sidebar goes here -->
    </aside>
  </main>

  <footer>
    <!-- Footer content goes here -->
  </footer>
</body>
```

### Footer

The `<footer>` element in semantic HTML5 represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its containing element such as:

- Authorship information
- Copyright notices
- Contact information
- Sitemap
- Back to top links
- Related documents

You can have several `<footer>` elements in one document, but only one `<footer>` per sectioning content or sectioning root.

Here's an example of how you might use a `<footer>` element:

```html
<footer>
  <p>Posted by: John Doe</p>
  <p>Contact information: <a href="mailto:someone@example.com">
    someone@example.com</a>.</p>
</footer>
```

In this example, the `<footer>` contains basic authorship information and a contact email, which would typically appear at the bottom of a section or article, or at the bottom of the entire page.

### Article

The `<article>` element in HTML5 is used to represent a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

Each `<article>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<article>` element.

Here's an example of an `<article>` element in use:

```html
<article>
  <h2>How to Bake Bread</h2>
  <p>Welcome to this tutorial on bread baking. Here you'll learn the basics of making sourdough bread.</p>
  <!-- Additional content like text, images, etc. -->
</article>
```

In this example, the `<article>` contains a tutorial on bread baking which is a standalone piece that could be shared or syndicated independently of the rest of the site.

### Section

The `<section>` element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Typically, a `<section>` should be a thematic grouping of content, often with its own heading.

`<section>` is broader than `<article>` and can be used to group together thematically-related content. When an element is needed just for styling purposes or as a convenience for scripting, developers are encouraged to use the `<div>` element instead.

Here's an example of how you might use the `<section>` element:

```html
<section>
  <h2>Chapter 1: The Basics of Bread Baking</h2>
  <p>Bread baking has a long history that dates back thousands of years...</p>
  <!-- Additional content like text, images, etc. -->
</section>

<section>
  <h2>Chapter 2: Advanced Techniques</h2>
  <p>Once you've mastered the basics, you can move on to advanced bread baking techniques...</p>
  <!-- Additional content like text, images, etc. -->
</section>
```

In this example, each `<section>` represents a different chapter of content, thematically distinct from each other.

It's important to note that `<article>` and `<section>` are both semantic elements that help define the structure of your document but they have different meanings. Use `<article>` for complete pieces of content that could stand alone and `<section>` for grouping together thematically-related content within a document.


### The Aside Element

The `<aside>` element in HTML represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars, call-out boxes, or inserts that contain supplementary information, related reading, or tangential details that don't fit into the main flow of the document.

Content within an `<aside>` is often related to the surrounding content but could be considered separate from that content. Such sections are often represented as sidebars in printed typography. The contents of an `<aside>` element should be indirectly related to the surrounding content, which means that if it were removed, the main content would still be coherent and understandable.

Here's an example of using the `<aside>` element:

```html
<article>
  <h1>The History of Bread Baking</h1>
  <p>Bread baking is an ancient culinary art. Archaeologists have found evidence of bread-making dating back over 30,000 years.</p>
  
  <!-- Main article content continues... -->

  <aside>
    <h2>Did You Know?</h2>
    <p>The world's oldest oven, believed to be over 6500 years old, was discovered in Croatia.</p>
  </aside>
</article>
```

In this example, the `<aside>` is used within an `<article>` to provide interesting but non-essential information. This could be a factoid or additional background that is related to the main topic (bread baking) but not necessary for the understanding of the article as a whole.

The use of `<aside>` helps with the semantic organization of a webpage, making it more accessible and understandable both for users and search engines. It also aids assistive technologies in identifying the supplementary content as separate from the main content of the page.

### Figure and Figcaption

The `<figure>` element in HTML is used to represent self-contained content, potentially with an optional caption, which is specified using the `<figcaption>` element. This content is often referenced as a single unit from the main flow of the document and can be moved to another part of the document or to an appendix without affecting the main flow.

A `<figure>` could be any of the following:

- Diagrams
- Illustrations
- Photos
- Code listings
- Etc.

The `<figcaption>` element is used as the first or last child of a `<figure>` element to provide a caption or legend for the rest of the content of the `<figure>` element, if that is relevant.

Here's an example of how you might use `<figure>` and `<figcaption>`:

```html
<figure>
  <img src="path-to-image.jpg" alt="A stunning view of the beach during sunset.">
  <figcaption>Figure 1: The beach as the sun sets over the horizon.</figcaption>
</figure>
```

In this example, an image of a beach at sunset is wrapped inside a `<figure>` element, and a `<figcaption>` provides a caption directly below the image. The caption helps users understand what they are looking at, especially if the image cannot be displayed for some reason (like if the user is using a screen reader or if the image fails to load).

### The Audio Tag

The `<audio>` element in HTML is used to embed sound content in a document, such as music or other audio streams. It can contain one or more audio sources, which are specified using the `src` attribute or nested `<source>` elements. The browser will choose the most suitable source to play based on the formats it supports.

Here are some common attributes used with the `<audio>` tag:

- `src`: Specifies the URL of the audio file.
- `controls`: If present, this attribute shows the browser's default play, pause, volume, and other controls.
- `autoplay`: Causes the audio to start playing as soon as it is ready, without waiting for user interaction.
- `loop`: When specified, the audio file will start over again every time it finishes.
- `muted`: This attribute can be set to mute the audio output.
- `preload`: Informs the browser whether or not the audio file should be loaded when the page loads. It can have values like `none`, `metadata`, or `auto`.
- `volume`: Sets the initial playback volume of the audio element.

### Examples of the Audio Tag

Here's a basic example of how to use the `<audio>` tag with the `controls` attribute:

```html
<audio controls>
  <source src="path-to-audio.mp3" type="audio/mpeg">
  <source src="path-to-audio.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>
```

In this example, two sources are provided for compatibility with different browsers. The browser will attempt to load the first source (`mp3`) and if it's not supported, it will try the second one (`ogg`). The text "Your browser does not support the audio tag." is displayed only if the browser doesn't support the `<audio>` element.

Here's how you might use some of the other attributes:

```html
<audio autoplay loop muted preload="auto" volume="0.5">
  <source src="background-music.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

In this more complex example, the audio is set to play automatically when the page loads, loop indefinitely, start muted, preload with the page, and begin at half volume.

Browsers have different rules regarding autoplaying media; many require a user interaction before allowing autoplay to ensure a user-friendly experience. Always consider these behaviors and best practices when designing a web page that includes media elements.

### The Video Element

The `<video>` element in HTML5 is used to embed video content within a document. It supports a range of video formats, and you can include multiple `<source>` elements to offer different video formats to different browsers, which the browser will select from based on compatibility.

Here are some common attributes of the `<video>` element:

- `src`: Specifies the source of the video file.
- `controls`: If set, the browser will offer controls to play, pause, adjust volume, etc.
- `autoplay`: Causes the video to start playing as soon as it is ready, without waiting for user interaction.
- `loop`: When specified, the video will start over again, every time it finishes.
- `muted`: Mutes the video's audio.
- `poster`: Specifies an image to be shown while the video is downloading, or until the user hits the play button.
- `preload`: Provides hints to the browser about what the author thinks will lead to the best user experience. It can have values like `none`, `metadata`, or `auto`.
- `width` and `height`: Set the width and height of the video player.

#### Example of the Video Element

```html
<video controls width="250">
  <source src="path-to-video.mp4" type="video/mp4">
  <source src="path-to-video.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

In this example, we have a `<video>` element with two sources for compatibility. The `controls` attribute is added so that users can play and pause the video.

### The Embed Element

The `<embed>` element is a void element in HTML that is used to embed external content at the specified point in the document. This could be multimedia content like a video or audio file, a Flash animation, or a page of a PDF document.

Here are some attributes associated with the `<embed>` element:

- `src`: Specifies the source of the embedded content.
- `type`: Specifies the MIME type of the embedded content.
- `width` and `height`: Set the size of the embedded resource.

#### Example of the Embed Element

```html
<embed src="path-to-movie.mp4" type="video/mp4" width="300" height="200">
```

In this example, an MP4 video is embedded into the page using the `<embed>` element. The dimensions of the embedded content are set by the `width` and `height` attributes. Note that unlike `<video>`, `<embed>` does not have a standardized way to provide fallback content or multiple sources for different formats. It's generally recommended to use `<video>` for embedding video content to provide better accessibility and user experience.

