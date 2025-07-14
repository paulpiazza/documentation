---
title: Pull request
description: Slim notes.
order: 28
---

Pull requests allow for collaborator review and feedback on proposed code changes before they are merged on the main branch.

A pull request is a proposal to merge a set of changes from one branch into another. In a pull request, collaborators can review and discuss the proposed set of changes before they integrate the changes into the main codebase. Pull requests display the differences, or diffs, between the content in the source branch and the content in the target branch.

See [GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
See [Atlassian](https://www.atlassian.com/git/tutorials/making-a-pull-request)

### How To Make a Good Pull Request

Creating a pull request to present your work for feedback can be intimidating. We will dive into how to structure a pull request in a clear way that makes it easier for the author and the reviewers to discuss code changes.

![A screenshot of "Open a pull request page" on GitHub.](https://static-assets.codecademy.com/Courses/learn-git-github/what-makes-good-pull-request/pull-request.png)

#### Follow a Pull Request Structure – What, Why, and How?

Concisely explain the purpose of the pull request in the title. If the pull request adds a new feature, go for something like “Add frontend component for settings page”. If it’s to fix a typo, be specific and say “Fix name typos on the Contact Us page”.

The description is where all the juicy details are. You want the reviewers to know the thought process behind code changes and the options you have considered. It also helps to embed screenshots, GIFs, or even videos of your application so reviewers can anticipate what the code change in the pull request looks like.

Some developers even have preconfigured templates or checklists on their repositories to ensure all pull requests contain just the relevant information. Following these guidelines help speed up collaborative critiques so the code can get merged faster!

### Make Commit Messages Clear and Use Comments

Even having self-explanatory commit messages and comments in the code makes reviewers’ jobs much easier. Consider the commit message, “OMG! It finally worked” versus the message, “Fix typos: add missing @ symbols in emails”. Moreover, adding comments in the code is always a good practice to help other developers understand the function of specific lines. It helps the reviewer in this case!

One feature of GitHub pull requests on the web interface is the ability to add discussion comments to any single line of code or chunk of code. This allows separation of concerns over multiple discussions.

![A comment by a reviewer on a line of code: "Let's make these variables lower-cased & snake-cased"](https://static-assets.codecademy.com/Courses/learn-git-github/what-makes-good-pull-request/comment.png)

### Keep Pull Requests Small and Fast

Reduce the size of pull requests and respond to reviews quickly. Splitting big features into smaller parts is the best way to speed up review time. Not only does it result in less wasted work if the pull request gets rejected, but it will be easier to merge and review more thoroughly. Quickly respond to any feedback or requested changes. You want to ship code fast and make sure reviewers aren’t stuck discussing an open pull request for ages!

### Checklist

- [ ]  All writings are my own.
- [ ]  My entry follows the Codecademy Docs style guide.
- [ ]  My changes generate no new warnings.
- [ ]  I have performed a self-review of my own writing and code.
- [ ]  I have checked my entry and corrected any misspellings.
- [ ]  I have made corresponding changes to the documentation if needed.
- [ ]  I have confirmed my changes are not being pushed from my forked `main` branch.
- [ ]  I have confirmed that I'm pushing from a new branch named after the changes I'm making.

See [Example of doc](https://github.com/Codecademy/docs)
See [Example of pull request](https://github.com/Codecademy/gamut/pull/1598)
See [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
See [CodeCademy Gamut](https://github.com/Codecademy/gamut)
