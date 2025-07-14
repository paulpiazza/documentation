---
title: Building Apps with WebPack
description: Slim notes.
order: 55
---

### Definition

![[Pasted image 20231228102558.png]]
Webpack is a powerful and widely-used module bundler for JavaScript applications, but it's more than just a bundler. It's a tool that lets you compile JavaScript modules, also known as bundling, and it has many additional capabilities.

Here's a breakdown of what Webpack can do:

1. **Bundling**: Webpack processes your application by starting from one or more entry points and then tracking down all the dependencies to bundle them into one or more output files. This is especially useful when dealing with a large number of files that need to be combined into a smaller number of bundles to be served to a client.

2. **Loaders**: It uses loaders to handle different file types like CSS, images, HTML, and convert them into modules that can be included in your dependency graph.

3. **Plugins**: Webpack is highly extensible with plugins. These can be used to perform a wide range of tasks like bundle optimization, asset management, and injection of environment variables.

4. **Code Splitting**: One of Webpack's most powerful features is code splitting. It can split your codebase into chunks that are loaded on demand, which can significantly improve the performance of your application.

5. **Development Server**: Webpack can be configured to use a development server that provides live reloading. This is particularly useful during development as it can automatically refresh your application when you change any files.

6. **Tree Shaking**: This feature allows Webpack to remove unused code from the final bundle, resulting in smaller bundle sizes.

7. **Module Resolution**: Webpack resolves modules using a highly configurable set of rules to determine where to look for a given module.

8. **Optimization**: It offers a variety of optimization features, like minification, that help improve the performance of the final output.

Webpack plays a crucial role in modern web development workflows, particularly in complex front-end applications built with frameworks like React, Angular, or Vue.js. It helps developers manage dependencies, transform and bundle resources, and optimize the delivery of code to the browser.

### Alternatives

Yes, there are several alternatives to Webpack that you can consider for module bundling and build processes:

1. **Parcel**: Parcel is a web application bundler that offers a zero-configuration setup. It aims to provide out-of-the-box support for many development scenarios, requiring minimal setup to get started. Parcel automatically transforms modules using Babel, PostCSS, and PostHTML when needed and runs extremely fast by utilizing multi-core processing [3].

2. **Rollup**: Rollup is another module bundler for JavaScript which focuses on the efficiency of the final bundles. It's particularly good at tree-shaking, eliminating dead code from your bundles. Rollup is often used for bundling JavaScript libraries and applications and is known for producing smaller bundles [1].

3. **Browserify**: This tool brings Node.js-style `require()` to the browser, bundling up all of your dependencies. While it has been somewhat overshadowed by newer tools like Webpack and Parcel, it's still useful for simpler build setups [2].

4. **Gulp**: While not a module bundler in the traditional sense, Gulp is a task runner that can automate the build process. It can be used in combination with other tools to move files around, apply transformations with plugins, and more. It's stream-based and works well for more complex build processes that go beyond simple bundling [4].

5. **Snowpack**: Snowpack is a newer build tool that leverages JavaScript's native module system (ESM). It focuses on a faster development experience by not bundling the code during development, which leads to instant updates in the browser.

6. **Vite**: Developed by the same team behind Vue.js, Vite is a build tool that significantly improves the frontend development experience. It features a dev server with Hot Module Replacement (HMR) and uses Rollup for production builds.

7. **esbuild**: A relatively new entrant in the field, esbuild is a fast bundler and minifier written in Go. It compiles JavaScript and TypeScript at a very high speed and offers a simple plugin system.

Each of these tools has its own set of features and trade-offs, and the best choice depends on the specific needs of your project and your personal or team preferences.

### Webpack Project Setup

In this exercise, we will set up a Webpack project starting from an empty folder.

#### Set Up **package.json**

Webpack is a Node package. To use Node packages, we need a **package.json** which holds [important project metadata](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) about any Node project. We can initialize a Node project using `npm init` in the terminal to make a **package.json** file. We can use the `-y` flag to use the default values for the metadata fields:

```
npm init -y
```

#### Install Webpack and Webpack CLI

We need two packages, `webpack` and `webpack-cli`, to build our Webpack project with the command line. `webpack` contains the main functionality, but `webpack-cli` allows command-line access to Webpack. We want these tools to be developer dependencies because they will not be used when the final product is running. We use `npm install` and the `--save-dev` flag to save packages as developer dependencies.

```
npm install --save-dev webpack webpack-cli
```

**package.json** will list these packages under `devDependencies` for a local project.

#### Make an entry point

A Webpack project requires an _entry point_ where it will find the main file to bundle. Webpack will throw a long error indicating a problem with `main` if there are no files at the entry point. The default Webpack entry point is **index.js** in a **src** folder, although this can be [changed](https://webpack.js.org/concepts/entry-points/). If we want to use the default entry point, we should make an **src** folder with an **index.js** inside of it.

#### Define the Build Command

A `build` command is often defined in the `scripts` section of **package.json** for running Webpack. You can find more information on the [scripts section here](https://docs.npmjs.com/cli/v7/using-npm/scripts). Using a `build` command makes the way we build the project independent of what build tools we use. We define the build command like so:

```json
// package.json
"scripts": {
	"build": "webpack --watch",
},
```

The `webpack` of the command just runs Webpack, `--watch` tells Webpack to automatically look for updates to our file and rebuild if any changes occur. This will be important when we preview our site.

We run the build command in the terminal with:

```
npm run build
```

When we’ve set up the **package.json**, entry point, and build command, Webpack is ready to go!

### Packing JavaScript Files

Big files take longer to load. However, as projects get bigger and more complex, they require a lot of code. We could try to write code using as few characters as possible, but this can make it very hard to read. WebPack compile all files together and generates on file for fast to download but not easy to read.

Webpack will allow us to use `import` and `export` statements on all our front-end files, not just JavaScript.

### Creating a Config

See [WebPack](https://webpack.js.org/concepts/)

Creating a Webpack config involves setting up a `webpack.config.js` file in the root of your project. This file exports a configuration object that tells Webpack how to behave when you run it. 

If no config files is created, by default Webpack will compile ./src/index.js and output it to ./dist/main.js.

Below is a step-by-step guide to creating a basic Webpack configuration:

1. **Initialize Your Project**:
   If you haven't already, start by initializing a new `npm` project if you haven't done so:

   ```bash
   npm init -y
   ```

2. **Install Webpack**:
   Install Webpack and the Webpack CLI as development dependencies:

   ```bash
   npm install --save-dev webpack webpack-cli
   ```

3. **Create the Config File**:
   In the root of your project, create a file named `webpack.config.js`.

4. **Set Up the Configuration**:
   Open `webpack.config.js` and set up the basic configuration object. Here's an example of what that might look like:

   ```javascript
   const path = require('path');

   module.exports = {
     // The entry point file described above
     entry: './src/index.js',

     // The output property tells Webpack where to put the bundle it creates
     output: {
       // The name of the bundle file
       filename: 'bundle.js',
       
       // The directory where the bundle should be stored
       path: path.resolve(__dirname, 'dist'),
     },

     // Setting up the development server (optional)
     devServer: {
       contentBase: './dist',
     },

     // Setting up loaders and rules (optional)
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader',
           ],
         },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
       ],
     },

     // Setting up plugins (optional)
     plugins: [],

     // Enable source maps for debugging (optional)
     devtool: 'inline-source-map',

     // Configure how modules are resolved (optional)
     resolve: {
       extensions: ['.js', '.jsx'],
     },

     // Set the mode to development or production (optional)
     mode: 'development',
   };
   ```

5. **Add NPM Scripts**:
   In your `package.json`, add scripts to build and start your project using Webpack:

   ```json
   "scripts": {
     "build": "webpack",
     "start": "webpack serve --open"
   }
   ```


6. **Run Webpack**:
   With these scripts, you can now bundle your project by running:

   ```bash
   npm run build
   ```

   Or start the development server with:

   ```bash
   npm start
   ```

#### `webpack serve --open` 

webpack serve: This part of the command launches the Webpack development server, which is used for serving your application during development. It watches for changes in your source files and automatically recompiles the code and refreshes the browser to reflect those changes.

--open: This flag tells the Webpack development server to open the application in your default web browser as soon as the server starts running.

#### `webpack`

The term "build" in the context of Webpack refers to the process of compiling and bundling all of your application's assets, including JavaScript, CSS, images, and other resources, into a set of files that can be served to a browser. 

When you run a build command with Webpack, it performs several tasks:

1. **Dependency Graph Creation**: Webpack analyzes your project's entry points and resolves the dependencies between modules to create a dependency graph. This ensures that all the necessary files are included in the build [3].

2. **Module Bundling**: Based on the dependency graph, Webpack bundles all the modules into one or more bundled assets. This typically includes your JavaScript files, but it may also include other assets like CSS if you're using the appropriate loaders [4].

3. **Transformation and Compilation**: As part of the bundling process, Webpack uses loaders and plugins to transform and compile your code. For example, it can transpile ES6 JavaScript to ES5, convert SASS to CSS, or optimize your images [2].

4. **Output Generation**: The final step is outputting the bundled files to a specified directory, usually a `dist` folder. These are the files you would deploy to a server or serve to your clients [1].


### WebPack Dev server

To use Webpack Dev Server for your development environment, you'll need to follow these steps:

#### Step 1: Install Webpack Dev Server

First, you need to install `webpack-dev-server` if you haven't already. You can do this using npm or yarn:

```bash
npm install --save-dev webpack-dev-server
```

Or if you prefer yarn:

```bash
yarn add --dev webpack-dev-server
```

#### Step 2: Configure Webpack

Modify your `webpack.config.js` to include the dev server configuration. Here's a basic example:

```javascript
const path = require('path');

module.exports = {
  // ... other configurations ...
  // mode dev
  mode: 'development',
  
  devServer: {
    static: {
      // This tells webpack-dev-server to serve files from the 'dist' directory.
      directory: path.join(__dirname, 'dist'),
    },
    // This will open your default browser after the server starts.
    open: true,
    // Enable hot module replacement without page refresh as fallback in case of build failures.
    hot: true,
    // Specify a port number to listen for requests.
    port: 3000,
  },
};
```

#### Step 3: Add Scripts to package.json

Add a script in your `package.json` to easily start the dev server:

```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve"
}
```

#### Step 4: Run the Dev Server

Now you can start the server with the following command:

```bash
npm build # first 
npm start # launch the dev server
```

This will run Webpack in watch mode, and your application will be available at `http://localhost:3000` by default (or another port if you specified one). The `--open` flag in the npm script or the `open: true` option in the config will cause your default web browser to open and navigate to the server's address automatically.

Don't forget to add the distributed files in the HTMl file:

```html
<script src="./dist/main.js"></script>
```

Webpack Dev Server serves your static files and provides a development server that updates your browser automatically as you change your source code. It's a powerful tool that can significantly speed up development.

### WebPack rules

Webpack rules are a key part of a Webpack configuration that define how to handle different types of files and apply various loaders to them. Loaders are transformations that are applied on a source file in your application before it's added to the bundle or even before it's transformed by another loader.
#### Understanding Rules

- Rules are defined within the `module` key of the Webpack configuration object.
- Each rule is an object that must contain two properties: `test` and `use`.
- The `test` property is a condition that must be met for the rule to be applied. It's usually provided as a regular expression to match the filenames.
- The `use` property defines which loaders should be applied when the condition is met. It can be a string (for one loader) or an array of loaders.

#### Example of Webpack Rules

Below is an example of a `webpack.config.js` file with rules for handling JavaScript and CSS files:

```javascript
const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Module rules
  module: {
    rules: [
      {
        // Apply babel-loader for any JavaScript files
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Use style-loader and css-loader for CSS files
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM.
          'css-loader'    // Resolves CSS into CommonJS modules.
        ]
      },
      {
        // Use txt files as assets.
        test: /\.txt$/i,
        type: 'asset/source'
      },
      {
        // use images as assets.
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        // use fonts
        test: /\.ttf$/i,  
        type: 'asset/resource'  
      }
    ]
  },

  // Development mode
  mode: 'development'
};
```

In this example, there are two rules:

1. **JavaScript Rule**: The first rule targets `.js` files. It uses `babel-loader` to transpile ES6+ code down to ES5, making it compatible with older browsers. The `exclude` property is used to avoid transpiling code in the `node_modules` directory, which should already be in a compatible format.

2. **CSS Rule**: The second rule targets `.css` files. It uses two loaders:
    - `css-loader`: Processes `@import` and `url()` like `import/require()` and resolves them.
    - `style-loader`: Takes the CSS modules and injects them into the `<style>` tags in the HTML document.

Don't forget to add to your project the dependencies:

```shell
npm install --save-dev style-loader css-loader
```

By setting up these rules, you tell Webpack to process JavaScript and CSS files with specific loaders, allowing you to write modern JavaScript and CSS that works across all browsers and environments.

See [Assets type](https://webpack.js.org/guides/asset-modules/)

Import like that :

```js
// index.js
// Import the Image below this line:
import Banner from './Banner.png'
import './styles.css';
import Text from './soho_soup.txt';
const descriptionParagraph = document.getElementById('description');
descriptionParagraph.innerHTML = Text;
const imageElement = document.createElement('img');
imageElement.src = Banner
```

```css
/* style.css */
/* Add the font-face below this line */

@font-face {
  font-family: 'OpenSans';
  src: url('./OpenSans.ttf');
}


```

