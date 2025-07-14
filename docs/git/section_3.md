---
title: Setting Up Aliases
description: Slim notes.
order: 3
---

To set up a Git alias, you can use the `git config` command with the `--global` flag to create a global alias that can be used in all Git repositories on your system.

Here's an example of how to set up a Git alias:

```
$ git config --global alias.co checkout
```

In this example, `git config` creates a global alias named `co` for the `git checkout` command. You can now use `git co` instead of `git checkout` to check out a branch.

You can also create aliases for multiple Git commands by enclosing them in quotes and separating them with semicolons.

Example:
```
$ git config --global alias.lg "log --oneline --decorate --all --graph"
```

In this example, `git config` creates a global alias named `lg` for a custom `git log` command that displays a compact, decorated, and graphical commit history.

To view your existing Git aliases, you can use the `git config --list` command.

Here are some examples of Git alias commands:

1. `git config --global alias.co checkout`: Creates an alias for the `git checkout` command. You can now use `git co` instead of `git checkout`.

2. `git config --global alias.br branch`: Creates an alias for the `git branch` command. You can now use `git br` instead of `git branch`.

3. `git config --global alias.ci commit`: Creates an alias for the `git commit` command. You can now use `git ci` instead of `git commit`.

4. `git config --global alias.st status`: Creates an alias for the `git status` command. You can now use `git st` instead of `git status`.

5. `git config --global alias.lg "log --oneline --decorate --all --graph"`: Creates an alias for a custom `git log` command that displays a compact, decorated, and graphical commit history.

```
$ git config --global alias.unstage 'reset HEAD --'
```

This command creates an alias for the `git reset HEAD --` command, which unstages changes from the staging area. You can now use `git unstage <file>` to unstage changes from the specified file.

