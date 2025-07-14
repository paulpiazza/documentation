---
title: Git Log
description: Slim notes.
order: 5
---

The `git log` command is used to display the commit history of a Git repository. The command has several flags that can be used to customize the output format and filter the results.

Here are some of the most common flags used with `git log`:

1. `--oneline`: Displays each commit on a single line, with the first seven characters of the commit hash and the commit message.

2. `--graph`: Draws a text-based graph of the commit history, showing the relationships between commits and branches.

3. `--decorate`: Adds additional information to each commit, such as branch and tag names.

4. `--author=<name>`: Filters the results to show only commits made by the specified author.

5. `--since=<date>`: Filters the results to show only commits made after the specified date.

6. `--until=<date>`: Filters the results to show only commits made before the specified date.

```
$ git log --oneline --graph --decorate --author="John Doe" --since="2022-01-01"
```
