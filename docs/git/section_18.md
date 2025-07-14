---
title: Git Reset Using SHA
description: Slim notes.
order: 18
---

To reset a Git repository to a previous commit using its SHA hash, you can use the `git reset <commit>` command. This command moves the HEAD pointer to the specified commit and discards any changes made after that commit.

```bash
$ git reset abcdef1234567890
```

