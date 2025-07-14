---
title: Discard changes
description: Slim notes.
order: 11
---

To discard changes in the working directory and revert the files to their last committed state, you can use the `git checkout HEAD <file>` command. This command discards any modifications made to the specified file and replaces it with the version from the last commit.

```bash
$ git checkout HEAD index.html
```

In this example, the changes made to the `index.html` file in the working directory will be discarded, and the file will be reverted to its state in the last commit.

Please note that running this command will permanently discard any unsaved changes in the specified file. Make sure to use it carefully and only when you are certain that you want to discard the changes.
