---
title: Displaying Differences with Git Diff
description: Slim notes.
order: 8
---

The `git diff` command is used to display differences between different states of your repository. It shows changes that have been made to files, including added, modified, or deleted lines.

```bash
$ git diff
diff --git a/index.html b/index.html
index 1234567..abcdefg 100644
--- a/index.html
+++ b/index.html
@@ -1,4 +1,4 @@
<html>
-<title>Old Title</title>
+<title>New Title</title>
<body>
 <h1>Hello, world!</h1>
</body>
```
