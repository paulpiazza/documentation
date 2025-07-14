---
title: Git Rebase
description: Slim notes.
order: 29
---

Git Rebase is a command in Git that allows you to take all the changes from one branch and apply them onto another branch. This can be useful for integrating changes from one branch to another while maintaining a linear project history. When you rebase a branch, you are essentially moving its base to a different commit.

For example, if you have a feature branch where you've been working on some changes, and you want to incorporate the latest changes from the main branch into your feature branch, you can use rebase to move your changes on top of the latest changes from the main branch.

Here's an example:
```bash
$ git checkout feature_branch
$ git rebase main_branch
```

This will take all the changes from the main branch and reapply the commits from the feature branch on top of them, resulting in a linear history.

We can visualize this in the image below:

![A diagram showing that before rebase, branch commits stick out from the main line of development.](https://static-assets.codecademy.com/Courses/learn-git-github/git-rebase/before-rebase.svg)

If we want to bring the updated changes from `main` into `new_feature` one could use the `merge` command, but with `rebase` we can keep the Git commit history clean and easy to follow. By “rebasing” the `new_feature` branch onto the `main` one, we move all the changes made from `new_feature` to the front of `main` and incorporate the new commits by rewriting its history. We can see how this is done below:

![A diagram showing that after rebase, commits over multiple branches get flattened into a single line.](https://static-assets.codecademy.com/Courses/learn-git-github/git-rebase/after-rebase.svg)

We can see above that the new “base” of our `new_feature` branch is the updated `main` branch with the previous changes from the bug fix implemented.

### Merge vs Rebase

Although `git rebase` is an extremely useful tool to keep a Git repository clean and easy to follow, it doesn’t mean that one should _always_ stick to that command when integrating code changes. Let’s go over the definitions of `rebase` and `merge` one more time:

- Git rebase: Reapplies commits on top of another base branch.
    
- Git merge: joins two or more development histories together (creating a new merge commit).
    

In other words, Git merge preserves history as it happened, whereas rebase rewrites it.

Generally, if one is dealing with numerous branches, and the commit graph becomes really difficult to read, it can be very useful to use rebase instead of merge. Since Git rebase creates a linear history, it can be a lot easier to visualize the changes made and get a cleaner graph.

![In the diagram, the history from only using Git merge shows lots of different paths representing different branches. Next to it, the path from using Git rebase is one straight line, with commits from a feature branch getting represented as a commit on the main branch.](https://static-assets.codecademy.com/Courses/learn-git-github/git-rebase/git-merge-vs-git-rebase.svg)

In the end, each team will develop their preferred method of integrating changes and preserving history. Generally, it’s useful to use `merge` whenever we want to add changes of a branch **back** into the base branch. And `rebase` is useful whenever we want to add **changes of a base branch** back to a branched out branch.

### Disadvantages of using rebase

As useful as Git rebase can be, it doesn’t come without risks. When using `git rebase` in our workflow it’s imperative to understand that rebase is a **destructive operation** and creates _new_ commits, which can make it complicated to track the context of any changes made. One common rule when using rebase is to only use it locally. That is to say, once something has been pushed then **do not** rebase it after that. Otherwise, things can get convoluted when rewriting history on a remote.

Since we’re rewriting history we will also have to solve more commit conflicts. When we merge a branch, we only need to solve the conflicts once straight into the merge commit. However, when using rebase we might end up having to solve similar conflicts in previous commits that are being rewritten because rebase practically cherry-picks each commit individually and attempts to merge it in. If a commit introduces a conflict, rebase will complain about it even if the conflict is fixed in subsequent commits. In order to reduce the number of merge conflicts, it’s suggested to rebase often and to also squash changes into one commit as much as possible.

Moreover, make sure that the branch we’re working on is not a shared branch. A shared branch meaning a branch that exists on the distant repository and that other people on our team could pull. Why should we avoid this? Well, remember that rebasing changes **commit history**. So if we share our commits publicly, and others start additional work based on those commits, our trees are no longer in sync after rebasing. As a golden rule, it’s important to only use rebase on a local branch that we’re working on individually.
