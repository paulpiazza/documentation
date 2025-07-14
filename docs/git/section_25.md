---
title: Head commit
description: Slim notes.
order: 25
---

The `git show HEAD` command is used to display detailed information about the latest commit, which is referenced by the HEAD pointer in Git. It shows the commit message, author, date, and the specific changes made in that commit.

Here's an example of using `git show HEAD`:

```bash
$ git show HEAD
commit abcdef1234567890
Author: John Doe <johndoe@example.com>
Date:   Mon Oct 25 10:00:00 2021 -0400

    Update index.html

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

In this example, `git show HEAD` displays information about the latest commit with the commit hash `abcdef1234567890`. It shows the author, date, commit message, and the specific changes made in that commit.

You can use `git show` with other commit references as well, such as branch names or specific commit hashes, to view information about different commits in your repository.
