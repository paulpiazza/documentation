---
title: Checking the Status of a Git Repository
description: Slim notes.
order: 4
---

To check the status of a Git repository, you can use the `git status` command. It provides information about the current state of your repository, including any changes that have been made, files that are staged for commit, and untracked files. Running `git status` will display a summary of the repository's status.

```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
 (use "git add <file>..." to update what will be committed)
 (use "git restore <file>..." to discard changes in working directory)
	   modified:   index.html

Untracked files:
 (use "git add <file>..." to include in what will be committed)
	   newfile.html

no changes added to commit (use "git add" and/or "git commit -a")
```

