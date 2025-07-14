---
title: .gitignore
description: Slim notes.
order: 30
---

What happens when our Git repository contains certain files we never want to commit to a shared or public codebase? We want to be careful that `git add` doesn’t accidentally move them to the staging area. That’s where a **.gitignore** file comes in. **.gitignore** is a plain text file that tells Git to intentionally ignore changes in certain files. This also ensures that no other contributor in the repository accidentally commits those files.

See [templates of gitignore](https://github.com/github/gitignore)

### Why use a .gitignore file?

Each line in **.gitignore** corresponds to a file, directory, or pattern we would like to ignore when staging. Using a **.gitignore** file results in cleaner staging areas and prevent files containing sensitive information from being committed. Some of the files or folders we should ignore include:

- Configuration files with API or secret keys such as **.env**
- Compiled binary files or production directories such as **build** or **dist**
- Log files
- Dependencies downloaded from a package manager such as **node_modules**
- System files such as **thumbs.db** on Windows or **.DS_Store** on macOS

### Patterns

See [patterns](https://git-scm.com/docs/gitignore#_pattern_format)

- Wildcard `*` to match 0 or more characters except for `/`. For example, adding `*.html` to **.gitignore** would ignore all files ending with the `.html` extension. `example*` would match any file starting with `example` such as `example.txt` or `exampleHtmlFile.html`.
- Negation `!` as a prefix to negate any file that would otherwise be ignored. For example,

```
index*!public/index.css
```

will ignore all files starting with `index` except for `src/index.css`. But, we cannot negate a file inside an ignored directory.

- Square brackets `[]` can be used to match a single character from a set of characters or a range of characters. Note that the range can be alphabetical: `[a-z]` or `[A-Z]`, numeric `[0-9]`, or a set of characters. If we added `index.[a-i]*` with both the square bracket and wildcard to **.gitignore**, we would ignore `index.css` and `index.html` but not `index.js`, since “j” is outside of the `[a-i]` range.
- Double asterisk `**` is used to match 0 or more directories. If we had a **temp** folder inside all of the folders in the root directory and we only wanted to match files with the `.log` extension, we could use the pattern `**/temp/*.log`.


