---
title: The `<html>` Tag
description: Slim notes.
order: 13
---

The `<!DOCTYPE html>` declaration provides the browser with two pieces of information (the type of document and the HTML version to expect), but it doesn’t actually add any HTML structure or content.

To create HTML structure and content, we must add opening and closing `<html>` tags after declaring `<!DOCTYPE html>`:

```html
<!DOCTYPE html>
<html>

</html>
```

Anything between the opening `<html>` and closing `</html>` tags will be interpreted as HTML code. Without these tags, it’s possible that browsers could incorrectly interpret your HTML code.
