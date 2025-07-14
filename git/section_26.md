---
title: Git Checkout
description: Slim notes.
order: 26
---

The `git checkout` command in Git is used to switch between different branches or restore files from a specific commit.

Here are a few common use cases of `git checkout`:

1. Switching to a branch:
   To switch to an existing branch in your repository, you can use the `git checkout <branch>` command. This command updates your working directory to reflect the state of the specified branch.

   ```
   $ git checkout main
   ```

2. Creating and switching to a new branch:
   To create a new branch and switch to it in one step, you can use the `git checkout -b <new-branch>` command. This command creates a new branch based on the current branch and switches to it.

   ```
   $ git checkout -b feature-branch
   ```

3. Restoring files from a specific commit:
   If you want to restore specific files from a previous commit, you can use the `git checkout <commit> -- <file>` command. This command replaces the file in your working directory with the version from the specified commit.

   ```
   $ git checkout abcdef1234567890 -- index.html
   ```

Remember to replace `<branch>`, `<new-branch>`, `<commit>`, and `<file>` with the appropriate branch name, new branch name, commit hash, and file name, respectively.
