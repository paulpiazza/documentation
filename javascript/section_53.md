---
title: Build Tools
description: Slim notes.
order: 53
---

As you create more complex web apps, performance becomes very important. You’ll need to configure apps to work in different browsers or with a low internet speed. It’s not easy to do this by hand, but _build tools_ help automate this!

There are several types of build tools:

- _Package Managers_, such as [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/), are used to install and manage Node.js packages.
- _Bundlers_ are used to efficiently bundle assets such as JavaScript files, images, and fonts. A few examples of the more commonly used bundlers are [Webpack](https://webpack.js.org/), [esbuild](https://esbuild.github.io/), [Parcel](https://parceljs.org/), and [Vite](https://vitejs.dev/).
- _Task runners_, such as [Grunt](https://gruntjs.com/) and [Gulp](https://gulpjs.com/), are used to automate the process of running repetitive workflows.

Build tools can assist you with:

- Combining JavaScript modules and CSS into bundled files for production.
- Minifying files for improved performance.
- Running unit tests with one command.
- Automatically previewing changes to your application.

You could be already using build tools and might not even realize it! Many popular frameworks and libraries utilize build tools to automate processes. For example, [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) and [Gatsby](https://www.gatsbyjs.com/get-started/) utilize build tools to automate aspects of their development and deployment processes

![[Pasted image 20231228101015.png]]

### Web Development Ecosystem

![[Pasted image 20231228100632.png]]
Task runners automate certain development processes, such as compiling code from SCSS to CSS or Typescript to JavaScript. Commonly used task runners for JavaScript are [Grunt](https://gruntjs.com/) and [gulp.js](https://gulpjs.com/).

Bundlers package JavaScript files and other assets such as stylesheets, images, and fonts into bundled files. Bundlers remove unused and duplicated code, improving download speed. Commonly used bundlers include [Webpack](https://webpack.js.org/), [esbuild](https://esbuild.github.io/), [Parcel](https://parceljs.org/), and [Vite](https://vitejs.dev/).

The connections between assets need to be mapped by the bundler to produce an output containing everything the app needs. This process uses a data structure called a _dependency graph_.

### Improving Performance

A large and complex application can take a long time to download in the browser if not optimized. Build tools utilize processes such as code-splitting, minification, dead-code elimination, and tree-shaking to reduce the size of downloads.

_Code-splitting_ is a technique that allows you to split your code into multiple files or chunks that can be loaded as needed.

_Minification_ is a process that removes comments, whitespace, and other unneeded data from your code. References in the code can also be renamed so that the resulting bundle is smaller.

_Dead-code elimination_ aims to remove any code not actually used by the finished application.

_Tree-shaking_ is a type of dead-code elimination that searches included modules for files and functions that are not used.
