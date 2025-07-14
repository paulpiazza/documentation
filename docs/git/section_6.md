---
title: Search in Git Logs
description: Slim notes.
order: 6
---

The `-s` flag in the `git log` command is used to display only commits that have a subject line. This flag is helpful when you want to filter out commits that do not have a subject line or are empty.

Here's an example of using `git log -S`:

```
$ git log -S "keyword"
```

This command will display the commit history, showing only the commits that have a subject line matches "keyword".

Please note that this flag is case-sensitive, and it filters based on the presence of a subject line rather than the content of the subject line itself.

Remember to refer to the Git documentation or use `git help log` for more information on specific flags and their usage.

