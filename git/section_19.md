---
title: git stash
description: Slim notes.
order: 19
---

The `git stash` command is used to temporarily save changes that are not ready to be committed. This command creates a stash, which can be reapplied later using the `git stash apply` command.

```bash
$ git stash
```

The `git stash pop` command is used to retrieve the most recently stashed changes and apply them to your working directory. This command removes the changes from the stash and applies them on top of your current working directory.


```
$ git stash pop
```

In this example, `git stash pop` retrieves the most recently stashed changes and applies them to the working directory.

Please note that if there are conflicts between the stashed changes and your current working directory, you may need to resolve them manually before the changes can be applied.
