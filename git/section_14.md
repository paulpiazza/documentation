---
title: Remove File from Staging
description: Slim notes.
order: 14
---

To remove a file from the staging area, you can use the `git reset HEAD <file>` command. This command unstages the specified file, leaving it in the working directory.

```bash
$ git reset HEAD index.html
```

You can remove the file "index.html" from the staging area using the following command:

```bash
git reset index.html
```

This command will unstage the changes for the file "index.html" while keeping the changes in the working directory.