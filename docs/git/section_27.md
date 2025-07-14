---
title: Workflow with GitHub
description: Slim notes.
order: 27
---

The basic workflow on GitHub typically involves creating a branch, committing changes, creating a pull request, reviewing the pull request, and finally merging and deleting the branch. Here's a step-by-step explanation of each stage along with an example:

### Introduction

In this lesson, we’ll discuss the flow of using GitHub with your code development process. When working on a project, things can scale rather quickly. Following a specific workflow allows the project to move in more orderly way.

Remember that Git is defined as a version control system that’s maintained on your local system. It helps you manage and record your source code history. GitHub, on the other hand, is a hosting service for repositories. Simply put, Git is the tool and GitHub is the service for projects that use Git.

In this lesson we’ll take a look at the basic workflow used with GitHub, which goes like this:

1. Create a branch
2. Commit changes
3. Create a pull request
4. Review pull request
5. Merge and delete branch

By sticking to that workflow, team members are able to isolate their work and avoid any conflicting code from being merged. In the following lesson, we’ll take a deeper look at each of these steps.

![[Pasted image 20231030095930.png]]
### Managing Branches

Whenever we’re working on a team creating multiple versions of a project code, it’s important to isolate each teammate’s work in order to avoid any conflicts. With Git, each teammate can create their own branch off of the main project in order to work on bug-fixes, new features, experimental code, etc.

A branch is essentially a divergence from the main project. ​​When you branch out, git is essentially making a new state of your current code, upon which you can work, without affecting the important main state of the code. One can create as many branches as they wish and even create branches off of other branches.

By using separate branches, the main project remains intact and unaffected before the changes are reviewed and merged into the project.

Each repository can have one or more branches. The main branch — the one where all changes eventually get merged back into, is called `main`. The `main` branch is usually the working version of a project and contains the production code, so it’s very important to only merge clean and correct code into it!

When someone wants to create a new feature, fix a bug, or just experiment, they should always create their own branch with a descriptive name.

Each team will adopt their own best practices when working together and figuring out naming conventions. For example, the branch name `carlos_feature_dashboard_notifications` includes the author, branch type, and short branch description. Other teams may pick branch names to correspond to ticket numbers from their project management tool.

### Adding and Committing Changes

Let’s assume you were recently assigned to a team to develop a feature for an app. You clone (download) the entire app repository from GitHub, create a new branch from the `main` branch for your feature, and begin coding a new file in your local Git environment.

After testing your code and ensuring that everything is running correctly, it’s time to commit the changes and push them to the remote repository!

As a refresher, the `git commit` command records changes to one or more files in your branch, assigning the commit a unique ID that identifies who created the changes, what changes were made, and _when_ the changes were committed.

Add a commit message describing your work and finally, push the commit to the remote GitHub repository.

### Creating a Pull Request

At this point, your work is ready to be reviewed before it’s integrated into the official project. You’ll start by opening a pull request.

Pull requests on GitHub allow collaborators to review and give feedback on proposed code changes before they are merged into the main branch. Through a process of discussion and potentially some extra code changes, the pull request can be ultimately approved, which means you can merge the changes into the official project on the `main` branch.

When creating pull requests, it’s imperative that you include as much relevant detail in the description as possible in order to save review time. Add any comments or images that might be useful for your reviewer.

It’s also essential to ensure that your code is running properly with the updated repository in order to prevent anything from crashing. Lastly, you don’t want to submit a pull request with 50 files containing a plethora of changes — instead, stick to smaller-sized pull requests since they’re easier and faster to review.


### Reviewing and Merging a Pull Request

Once you’ve created a pull request, other members in your team can review it up on GitHub.

The pull request should include a description and GitHub will display all the files with the changes created. Each line of code will have a clickable “+” button where you can add a comment in regards to the line.

While reviewing, it’s important to be constructive with feedback and be precise about what needs to be changed. Here are few best practices when reviewing code:

- Don’t only comment on _what_ should be changed, but _why_ it should be changed. Feel free to provide resources to make your point.
    
- Be as clear as possible with your comments and make sure to be clear as to what to modify.
    
- Look at the bigger picture and try to spot potential errors. Would the submitted code produce any obstacles if the project scales?
    

Once all the feedback is added, collaborators can click on “Submit Review” and wait for a response. If all goes well, the pull request will eventually be merged into `main`!

### Deleting a Branch and Review

Once changes are merged, in order to keep things organized and managed, it’s imperative to only keep active branches and delete the closed ones.

With that in place, this wraps up the flow of working on a project using Github. We explored:

- The importance of creating branches and isolating work from the `main` branch.
    
- Best practices of naming branches and making commits on branches.
    
- What a pull request is: a discussion page for a set of code changes between one branch and another.
    
- Merging a branch and delete it once it’s merged.
    

This covers the main steps of working with a team and managing the workflow using Github.

Github provides us with a number of useful tools that expand on Git functionality, especially if we’re collaborating with teammates!


### 1. Create a branch

Begin by creating a new branch to work on your changes. This helps keep your changes separate from the main branch (often called `main` or `master`). You can create a branch using the following command:

   ```
   $ git checkout -b my-branch
   ```

   In this example, a new branch named `my-branch` is created.

### 2. Commit changes

Make the desired changes to your code or files and commit them to the branch. Use the following commands to stage and commit your changes:

   ```
   $ git add .
   $ git commit -m "Add new feature"
   ```

   This example stages all changes (`git add .`) and commits them with a message (`git commit -m "Add new feature"`).

### 3. Create a pull request

Once you have committed your changes, push the branch to your remote repository on GitHub and create a pull request. This allows others to review and discuss your changes. The update you suggest must work fine. If any errors are found your project will be rejected by yours collaborators.

You can create a pull request using the GitHub web interface by navigating to your repository and clicking on the "New pull request" button.

To create a pull request from the command line, you can use the `git push` command to push your local branch to the remote repository and then open a pull request on the corresponding platform (e.g., GitHub, GitLab). Here's a general workflow to create a pull request from the command line:

1. First, make sure you have committed and pushed your changes to your local branch.

2. Use the `git push` command to push your local branch to the remote repository. For example, if your remote repository is named `origin` and your branch is named `my-branch`, you can use the following command:

   ```
   $ git push origin my-branch
   ```

   This command pushes your local branch `my-branch` to the remote repository named `origin`.

3. After pushing your branch, navigate to the web interface of your Git platform (e.g., GitHub, GitLab) and locate your repository.

4. On the repository page, you should see an option to create a new pull request. Click on that option.

5. Fill in the necessary details for the pull request, such as the source branch (`my-branch`) and the target branch (the branch you want to merge into).

6. Review the changes and provide any additional information or context required for the pull request.

7. Finally, submit the pull request.

Please note that the exact commands and steps may vary depending on the Git platform you are using. It is recommended to refer to the documentation of your specific platform for detailed instructions on creating pull requests from the command line.

### 4. Review pull request

After creating a pull request, other team members can review the changes, leave comments, and suggest modifications. Collaborators can also run tests or perform additional checks before approving the changes.

### 5. Merge and delete branch

If the pull request is approved and ready to be merged, you can merge the changes into the main branch. Once merged, you can delete the branch to keep your repository clean. This can typically be done through the GitHub web interface by clicking on the "Merge pull request" and "Delete branch" buttons.

To merge your changes locally and push them to the remote repository, you can use the `git merge` and `git push` commands. Here's a general workflow to merge your changes locally and push them to the remote repository:

1. First, make sure you have committed your changes to your local branch.

2. Use the `git checkout` command to switch to the branch you want to merge your changes into. For example, if you want to merge your changes from `my-branch` into `main`, you can use the following command:

   ```
   $ git checkout main
   ```

   This command switches your current branch to `main`.

3. Use the `git merge` command to merge your changes from the source branch (`my-branch`) into the target branch (`main`). For example:

   ```
   $ git merge my-branch
   ```

   This command merges the changes from `my-branch` into `main`.

4. After merging your changes, use the `git push` command to push your local changes to the remote repository. For example:

   ```
   $ git push origin main
   ```

   This command pushes your local changes in the `main` branch to the remote repository named `origin`.

Please note that there may be conflicts during the merge process that need to be resolved manually. It is recommended to review the changes carefully and test them thoroughly before pushing them to the remote repository.


### Work with Branches

Let’s take a moment to review the main concepts and commands from the lesson before moving on.

- Git _branching_ allows users to experiment with different versions of a project by checking out separate _branches_ to work on.

The following commands are useful in the Git branch workflow.

- `git branch`: Lists all a Git project’s branches.
- `git branch branch_name`: Creates a new branch.
- `git checkout branch_name`: Used to switch from one branch to another.
- `git merge branch_name`: Used to join file changes from one branch to another.
- `git branch -d branch_name`: Deletes the branch specified.


### The Main Branch

In Git, the main project is completed on the `main` branch. Making your first commit in a new git repository will automatically create a `main` branch. Create new branches from the `main` branch to develop new features for a project. These branches can be merged into `main` at a later time to incorporate the new features. You can use `git branch` to check what branch you’re on.

```shell
$ git init

Initialized empty Git repository in /home/ccuser/new-project/.git/

$ echo "Hello World!" >> hello.txt
$ git add hello.txt 
$ git commit -m 'initial commit'

[master (root-commit) bb0e565] initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt

$ git branch
* master

```


### Creating a New Branch and checkout

In Git, the `git branch branch-name` command is used to create a new branch called `branch-name`. Branches should be named something that describes the purpose of the branch.

Note that branch names can’t contain whitespace: `new-feature` and `new_feature` are valid branch names, but `new feature` is not.

![Run git branch new-feature to make a new branch called new-feature](https://static-assets.codecademy.com/Courses/Learn-Git/Review-Cards/learn-git-create-branch.png)

You can switch to the new branch with

```
git checkout branch_name
```

or with

```
git checkout -b branch_name
```

### Viewing the Current Branch

In Git, the `git branch` command will display all of the branches. The current branch will display `*` before its name.

![git branch displays the two branches "fencing" and "master".  "master" is preceded by an asterisk.](https://static-assets.codecademy.com/Courses/Learn-Git/Review-Cards/learn-git-branch.png)

### Deleting a Branch

In Git, the `git branch -d branch_name` command is used to delete the `branch_name` branch. It’s good practice to delete a branch after it has been merged into the `master` branch.

![git branch -d new-feature will delete the branch with the name "new-feature"](https://static-assets.codecademy.com/Courses/Learn-Git/Review-Cards/learn-git-remove-branch.png)

### Merging Branches

In Git, the `git merge branch-name` command will add the changes from `branch-name` into the current branch. Use this command when you have finished building a feature in a separate branch and want to bring those changes into your current branch.

![git merge resume-edits brings the changes from resume.txt into the master branch](https://static-assets.codecademy.com/Courses/Learn-Git/Review-Cards/learn-git-merge.png)
### Merge Conflicts

In Git, a merge conflict occurs when the same file is changed on the current branch and the branch that is being merged. An error will appear displaying: `CONFLICT (content): Merge conflict in [filename]`.

Git will automatically edit the file with the conflict to show where the conflict is. The current branch’s text will be between `<<<<<<< HEAD` and `=======`. The text from the branch that is being merged into the current branch will be between `=======` and `>>>>>>> branch-name`

To resolve a merge conflict, edit the file with the conflict, decide which parts of each branch’s edits should be kept, then add and commit the file.

```shell

PETE PAN

<<<<<<< HEAD

Address: No 31 Kensington Hill Park, London, England

=======

Address: 113 Gloucester Rd Patchway, Bristol, England

>>>>>>> resume-edits

-------------------
```


### Git Collaboration Workflow

A common Git collaboration workflow is:

1. Fetch and merge changes from the remote
2. Create a branch to work on a new project feature
3. Develop the feature on a branch and commit the work
4. Fetch and merge from the remote again (in case new commits were made)
5. Push branch up to the remote for review

Steps 1 and 4 are a safeguard against merge conflicts, which occur when two branches contain file changes that cannot be merged with the git merge command.

- A _remote_ is a Git repository that lives _outside_ your Git project folder. Remotes can live on the web, on a shared network or even in a separate folder on your local computer.
- The _Git Collaborative Workflow_ are steps that enable smooth project development when multiple collaborators are working on the same Git project.

We also learned the following commands

- `git clone`: Creates a local copy of a remote.
- `git remote -v`: Lists a Git project’s remotes.
- `git fetch`: Fetches work from the remote into the local copy.
- `git merge origin/master`: Merges `origin/master` into your local branch.
- `git push origin <branch_name>`: Pushes a local branch to the `origin` remote.

Git projects are usually managed on Github, a website that hosts Git projects for millions of users. With Github you can access your projects from anywhere in the world by using the basic workflow you learned here.

### List the Git Remotes

In Git, the `git remote -v` command returns a verbose list of remote repositories that the current project is tied to.

- Git lists the name of the remote repository as well as its locations.
- Git automatically names this remote `origin`, because it refers to the remote repository of origin. However, it is possible to safely change its name.
- The remote is listed twice: once for `(fetch)` and once for `(push)`.

```shell
$ git remote -v
origin  /home/ccuser/workspace/curriculum/science-quizzes/ (fetch)
origin  /home/ccuser/workspace/curriculum/science-quizzes/ (push)
```
### Pushing Branch Changes

In Git, the `git push origin branch-name` command pushes the branch, and all committed changes, to the remote. This branch can now be reviewed by collaborators.

In the example, the current branch containing the committed changes is called `bio-questions`.

```shell
$ git push origin bio-questions
Counting objects: 3, done.
Delta compression using up to 16 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 392 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To /home/ccuser/workspace/curriculum-a/science-quizzes
 * [new branch]      bio-questions -> bio-questions
```

### Cloning a Remote Repository

In Git, the `git clone remote_location clone_name` command creates a local copy of a remote repository.

- `remote_location` tells Git where to find the remote repository and can be a filepath or web address.
- `clone_name` is the name of the directory where the remote repository’s contents will be copied.

In the example, `my-quizzes` is a new directory created as a local copy of the `science-quizzes` Git project. Committing changes to `my-quizzes` will not impact `science-quizzes`.

```shell
$ ls
science-quizzes

$ git clone science-quizzes/ my-quizzes
Cloning into 'my-quizzes'...
done.

$ ls
my-quizzes  science-quizzes
```

### Fetching Remote Origin Changes

In Git, the `git fetch` command downloads objects from the `origin` remote repository. The changes, however, are not merged into the current `branch-name` branch. Instead, they are stored in the `origin/branch-name` branch, waiting to be merged.

In the provided example, using the [`git branch -a` command](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--a) to see the existing branches, we can see that fetched data has been stored in a new `origin/master` branch.

```shell
$ git branch -a
* master

$ git fetch
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 1), reused 0 (delta 0)
Unpacking objects: 100% (5/5), done.
From /home/ccuser/workspace/curriculum-a/science-quizzes
 * [new branch]      master     -> origin/master

$ git branch -a
* master
  remotes/origin/master
```
### Git Remote

A _remote_ is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations. Collaborators work on the project independently and merge changes together when they are ready to do so.

### Merging Fetched Changes

In Git, the `git merge origin/branch-name` command will merge fetched changes, stored in `origin/branch-name` to the current `branch-name` branch.

In the example, `master` is the name of the branch being merged.

```shell
$ git merge origin/master
Updating 2fd7d9b..3a29454
Fast-forward
 biology.txt | 4 ++++
 1 file changed, 4 insertions(+)
 create mode 100644 biology.txt
 ```
