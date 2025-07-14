---
title: react animations
description: Slim notes.
order: 24
---

### react transition on routes

To navigate between routes with react-router v6 and add an animated transition using a translate effect, you can follow these steps:

1. Install the required packages: First, make sure you have the necessary dependencies installed. You'll need `react-router-dom` version 6 or higher, as well as any animation libraries you want to use. In this example, we'll use `react-transition-group` for animations. You can install these packages using npm or yarn:

   ```shell
   npm install react-router-dom@next react-transition-group
   ```

2. Set up your routes: Define your routes using the `Route` component from `react-router-dom`. You'll also need to wrap your routes inside a `BrowserRouter` or `MemoryRouter` component. For example:

   ```jsx
   import { BrowserRouter, Route, Routes } from 'react-router-dom';

   const App = () => {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>
     );
   };
   ```

3. Create the animated transition component: We'll create a `Transition` component that wraps the content of each route. This component will handle the animation when navigating between routes. We'll use the `CSSTransition` component from `react-transition-group` to apply CSS transitions. Here's an example implementation:

   ```jsx
   import { CSSTransition } from 'react-transition-group';

   const Transition = ({ children, location }) => {
     return (
       <CSSTransition
         key={location.pathname}
         classNames="fade"
         timeout={300}
       >
         <div className="transition-container">{children}</div>
       </CSSTransition>
     );
   };
   ```

   In this example, we use the `fade` class to define our CSS transition. You can customize the CSS classes and animation styles according to your needs.

4. Apply the animated transition to route changes: Wrap your `Transition` component around the routes in your `App` component. The `location` prop provides the current location object, which includes information about the route being accessed. Here's an updated version of the `App` component:

   ```jsx
   import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
   import { TransitionGroup } from 'react-transition-group';

   const App = () => {
     const location = useLocation();

     return (
       <BrowserRouter>
         <TransitionGroup>
           <Transition location={location}>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
             </Routes>
           </Transition>
         </TransitionGroup>
       </BrowserRouter>
     );
   };
   ```

5. Style the animated transition: Finally, add CSS styles for the transition effect. You can define the CSS classes used in the `Transition` component and specify the animation styles. Here's an example CSS code:

   ```css
   .fade-enter {
     transform: translateX(100%);
     opacity: 0;
   }

   .fade-enter-active {
     transform: translateX(0%);
     opacity: 1;
     transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
   }

   .fade-exit {
     transform: translateX(0%);
     opacity: 1;
   }

   .fade-exit-active {
     transform: translateX(-100%);
     opacity: 0;
     transition: transform 300ms ease-in-out,
 ```

If you want to create a route transition without using any additional libraries, you can implement it using React's built-in features and CSS animations. Here's how you can achieve it:

1. Set up your routes: Define your routes using the `Route` component from `react-router-dom`, similar to the previous example:

   ```jsx
   import { BrowserRouter, Route, Routes } from 'react-router-dom';

   const App = () => {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>
     );
   };
   ```

2. Create a CSS transition: Define the CSS transition that you want to apply when navigating between routes. In this example, we'll use a translate effect. Here's an example CSS code:

   ```css
   .transition-container {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     transition: transform 0.3s ease-in-out;
   }

   .transition-enter {
     transform: translateX(100%);
   }

   .transition-enter-active {
     transform: translateX(0%);
   }

   .transition-exit {
     transform: translateX(0%);
   }

   .transition-exit-active {
     transform: translateX(-100%);
   }
   ```

   This CSS defines the transition effect using the `transform` property. You can customize the styles and animation duration according to your needs.

3. Create a custom route transition component: Create a custom component that wraps the content of each route and handles the route transitions. This component will listen to route changes and apply the transition effect based on the current and next route. Here's an example implementation:

   ```jsx
   import { Route, useLocation } from 'react-router-dom';

   const TransitionRoute = ({ element: Element, ...rest }) => {
     const location = useLocation();

     return (
       <Route {...rest}>
         <div className="transition-container">
           <Element key={location.pathname} />
         </div>
       </Route>
     );
   };
   ```

   The `TransitionRoute` component wraps the content of each route inside the `.transition-container` div. The `key` prop is used to trigger the animation when the route changes.

4. Update the routes: Replace the `Route` components in your `App` component with the `TransitionRoute` component:

   ```jsx
   import { BrowserRouter, Routes } from 'react-router-dom';

   const App = () => {
     return (
       <BrowserRouter>
         <Routes>
           <TransitionRoute path="/" element={<Home />} />
           <TransitionRoute path="/about" element={<About />} />
           <TransitionRoute path="/contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>
     );
   };
   ```

   Now, the `TransitionRoute` component will handle the route transitions with the specified CSS animation.

That's it! With these steps, you can achieve route transitions using CSS animations without any additional libraries. Remember to customize the CSS classes and animation styles according to your requirements.