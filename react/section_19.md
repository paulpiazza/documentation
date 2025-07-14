---
title: Routing with React-Router v5
description: Slim notes.
order: 19
---

### What is routing?

_Routing_ is the process by which a web application uses the current browser URL (**U**niform **R**esource **L**ocator) to determine what content to show a user. For example, a user visiting wikipedia’s [`/wiki/Node.js`](https://en.wikipedia.org/wiki/Node.js) page would expect to see something different from the [`/wiki/React_(JavaScript_library)`](https://en.wikipedia.org/wiki/React_(JavaScript_library)) page.

By organizing an application’s content and displaying only what the user has requested to see, routing allows for rich, engaging, and clear user experiences.

Before we dive into the lesson, let’s briefly go over the basic structure of URLs. Consider this URL:

![URL breakdown](https://static-assets.codecademy.com/Courses/Learn-Node/http/url-dark.png)

Every URL is essentially a request for some resource and each component of the URL serves to specify which resource is desired. URLs consist of several components, some of which are mandatory and some of which are optional:

1. The scheme (eg. `HTTP`, `HTTPS`, `mailto`, etc), which specifies what [protocol](https://www.codecademy.com/articles/http-requests) should be used to access the resource.
2. The domain (eg. `codecademy.com`), which specifies the website that hosts the resource. The domain serves as the entry point for your application.
3. The path (eg. `/articles`), which identifies the specific resource or page to be loaded and displayed to the user. This is where routing begins!
4. The optional query string (eg. `?search=node`), which appears after a ‘?’ and assigns values to parameters. Common uses of query strings include search parameters and filters.

Depending on the kind of application you build, there are different ways to handle the requests coming into your server.

url : `/users/5`
path: `/users/:userid`
optional path : `/users/:userid?`

See the docs: [react Router](https://reactrouter.com/en/main/start/tutorial)
Be carefull of [your versions](https://stackoverflow.com/questions/72687496/link-is-not-working-in-react-router-dom-in-version-5-3-0-please-anyone-resolve)

react-router-dom is A library that provides navigational components for React Developers to create single-page applications (SPAs) with dynamic, client-side routing.

### Basic Routing with `<Route>`

With the `Router` component in place, we can begin defining the different views, or _routes_, that our application will render for various URL paths. For example, we might want to render an `About` component for the `/about` path and a `SignUp` component for the `/sign-up` path.

To do this, we must use the `Route` component provided by the `react-router-dom` package. This component can be imported alongside the `BrowserRouter` like so:

```js
import { BrowserRouter as Router, Route } from `react-router-dom`
```

The `Route` component is designed to render (or not render) a component based on the current URL path. Each `Route` component should:

1. be rendered inside a `Router`.
2. have a `path` prop indicating the URL path that will cause the route to render.
3. wrap the component that we want to display in the event that the `path` prop matches.

For example, the following `Route` renders the `About` component when the URL path matches `/about`:

```js
<Router>  
	<Route path='/about'>    
		<About />  
	</Route>
</Router>
```

If your router includes a `Route` with no `path` prop, then that route will always match and render. You can leverage this fact to make your application render components that you want your user to see regardless of the current route, such as sidebars and navigation bars.

```js
<Router>  
	{/* Renders when the URL matches '/about' */  }
	<Route path='/about'>      
		<About />  
	</Route>   
			
	{/* Always renders */}  
	<Route> 
		<Sidebar />
	</Route>

</Router>
```

Whereas other routing paradigms are static (eg. routes are predefined prior to and separate from the process of rendering), [React Router’s philosophy](https://reactrouter.com/web/guides/philosophy) is declarative and dynamic. This means that routes come into being when they are rendered. While this might seem more complicated than configuring our routes statically, it’s also more flexible. As you’ll see throughout this lesson, our application’s route structure can evolve based on user interactions and changing state.

### Linking to Routes

In the last exercise, you used the URL bar to navigate to a path that matched one of your application’s routes. But how do you navigate from within the app itself?

When building a website using HTML, the anchor (`<a>`) tag can be used to create links to other pages, however, this causes the page to reload which can distract our users from the immersive experience of our smooth React application!

React Router offers two solutions for this: the [`Link`](https://reactrouter.com/web/api/Link) and [`NavLink`](https://reactrouter.com/web/api/NavLink) components which can be imported from `react-router-dom` on their own or alongside the other components we’ve already imported.

```js
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
```

Both `Link` and `NavLink` components work much like anchor tags:

- They have a `to` prop that indicates the location to redirect the user to (similar to the anchor tag’s `href` attribute)
- They wrap some HTML to use as the display for the link

```js
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>
```

The two links above will generate anchor (`<a>`) tags with the text “About” and which take the user to the `/about` page when clicked. However, the default behavior of an anchor tag – refreshing when the page loads – will be disabled!

So, what’s the difference between a `Link` and a `NavLink`? When the URL path matches a `NavLink` component’s `to` prop, the link will automatically have an `'active'` class applied to it. This can be quite useful for building navigation menus, as we can define CSS styles for the `.active` class name to differentiate between active and inactive links, enabling a user to quickly see which content they are viewing.

`NavLink` components also accept an optional `activeClassName` prop which can specify an additional class or set of classes that will be applied when the URL path matches their `to` prop.

> [Info]: Though the simplest way to specify the `to` location is as a string, React Router also allows you to provide this location as a [function](https://reactrouter.com/web/api/Link/to-function) or [object](https://reactrouter.com/web/api/Link/to-object). These approaches aren’t covered in this lesson but you may find it interesting to read about them if you need to programmatically generate the `to` location.

**Link:** The `Link` component is used to create navigation links in your React application. It renders an `<a>` element in the DOM, providing a way to navigate to a specific URL without refreshing the page. Instead of reloading the entire HTML document, React Router updates the component tree to render the appropriate components based on the URL.

The `to` prop of the `Link` component specifies the target URL or the route you want to navigate to. It can be a string representing the path or an object with additional route information.

Example usage:
```js
import { Link } from 'react-router-dom';

const MyComponent = () => (   
	<div>     
		<Link to="/about">Go to About</Link>
	</div>
);
```

In the above example, clicking on the "Go to About" link will navigate to the "/about" route, rendering the corresponding component.

**NavLink:** The `NavLink` component is a special version of `Link` that provides additional functionality for styling navigation links based on the current active route. It is particularly useful for indicating which link is currently active or highlighting the active link in the navigation menu.

The `NavLink` component accepts an additional prop called `activeClassName`, which specifies the class name to be applied to the link when it matches the current URL.

Example usage:

```js
import { NavLink } from 'react-router-dom'; 

const Navigation = () => (
	<nav>
		<ul>
			<li>
				<NavLink exact to="/" activeClassName="active">Home</NavLink>
			</li>
			<li>
				<NavLink to="/about" activeClassName="active">About</NavLink>
			</li>
		</ul>
	</nav>
);
```

In the above example, the `exact` prop is used to indicate that the link should be considered active only if the URL is an exact match. The `activeClassName` prop specifies the class name "active" that will be applied to the active link, allowing you to style it according to your design.

When the current URL matches the link's `to` prop, React Router will add the `activeClassName` class to the rendered element, providing a visual indication of the active link.

These are the basic functionalities of `NavLink` and `Link` components in React Router. They are essential for creating navigation links and managing the routing behavior in your React applications.

### Dynamic Routes

So far, all the routes we’ve covered have been static, which means they match a single unique path. This works for certain types of routes, but not all.

For example, imagine in a tech news site where every article is accessible at the path `'/articles/' + someTitle` where `someTitle` is different for each article. Specifying a unique route for every article would not only be verbose and time-consuming, it would require an impractical amount of maintenance should the path structure ever change.

Instead, we would rather express the pattern at a high level with a single route that can match any path of the form `'/articles/' + someTitle` and still know which article to render. React Router allows us to do this by using _URL parameters_ to create _dynamic routes_.

URL parameters are dynamic segments of a URL that act as placeholders for more specific resources the URL is meant to display. They appear in a dynamic route as a colon (`:`) followed by a variable name, like so:

```js
<Route path='/articles/:title'>
	<Article />
</Route>
```

Let’s break down this short, yet powerful demonstration of URL parameters:

- In this example, the path `'/articles/:title'` contains the URL parameter `:title`.
- This means that when the user navigates to pages such as `'/articles/what-is-react'` or `'/articles/html-and-css'`, the `<Article />` component will render.
- When the `Article` component is rendered in this way, it can access the actual value of that `:title` URL parameter (`what-is-react` or `html-and-css`) to determine which article to display (more on this in the next exercise).

A single route can even have multiple parameters (eg. `'/articles/:title/comments/:commentId'`) or none (eg. `'/articles'`).

To make a URL parameter optional, you can append a `'?'` to the end of the URL parameter’s name (eg. `'/articles/:title?'`). In this case, the child component of the `Route` will render when the URL matches either `/articles/what-is-react` or just `/articles`.

### useParams

It is common to use the value of URL parameters to determine what is displayed in the component that a dynamic route renders. For example, the `Article` component might need to display the title of the current article.

React Router provides a hook, `useParams()`, for accessing the value of URL parameters. When called, `useParams()` returns an object that maps the names of URL Parameters to their values in the current URL.

For example, consider the `Articles` component below which is rendered when by a route with the dynamic URL `'/articles/:title'`. Suppose the user visits `/articles/objects`:

```js
import { Link, useParams } from 'react-router-dom';
// Rendered when the user visits '/articles/objects'

export default function Article() {   
	let { title } = useParams();  
	// title will be equal to the string 'objects'   
	// The title will be rendered in the <h1>  
	return (
		<article>      
			<h1>{title}</h1>
				// ...   
		</article>
	);
}
```

Let’s break down the example above.

- First, the `useParams()` hook is imported from `react-router-dom`.
- Then, inside the `Article` component, `useParams()` is called which returns an object.
- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is then used to extract the value of the URL parameter from that object, storing it in a variable named `title`.
- Finally, this `title` value is used to display the name of the article in the `<h1>` element.

### `<Switch>` and exact

Renders the first (and only the first) of its children.

By design, a `Router` will render _all_ the `Routes` whose paths match the current URL. This allows us to compose layouts in which multiple components should appear or disappear based on the current URL (for example, an application in which the sidebar and main display respond to changes in the current URL). But sometimes, this design choice can produce unintended results.

Consider the following (relatively common) setup:

```js
<Router>
	<div>
		<Route path='/articles/new'>
			<NewArticle />
		</Route>
		<Route path='/articles/:title'>
			<Article />
		</Route>
		<Route path='/articles'>
			<Articles />
		</Route>
	</div>
</Router>
```

What should happen when the user navigates to `'articles/new'`? The `NewArticle` component should appear, right?

What actually happens is that ALL routes match:

- `/articles/new` matches exactly
- `/articles/:title` will match `new` to the URL parameter `:title`
- `/articles` will match because both begin with `/articles`.

Because all routes match, the application will render the `NewArticle`, `Article`, and `Articles` components simultaneously.

React Router provides several mechanisms for preventing this sort of unintended rendering. The first is the `Switch` component:

```js
import { Switch } from 'react-router-dom';
```

When wrapped around a collection of routes, `Switch` will render the first of its child routes whose `path` prop matches the current URL.

```js
<Switch>
	<div>
		<Route path='/articles/new'>
			<NewArticle />
		</Route>
		<Route path='/articles/:title'>
			<Article />
		</Route>
		<Route path='/articles'>
			<Articles />
		</Route>
	</div>
</Switch>
```

Because the `Switch` checks routes sequentially, the order in which Routes are rendered matters. Consider a similar example but with the order of the routes reversed:

```js
<Switch>
	<div>
		<Route path='/articles/:title'>
			<Article />
		</Route>
		<Route path='/articles/new'>
			<NewArticle />
		</Route>
		<Route path='/articles'>
			<Articles />
		</Route>
	</div>
</Switch>
```

Now imagine that a user navigates to `'/articles/new'`. The `Switch` renders the first route with a matching path, `'/articles/new'` matches `'/articles/:title'`, since `:title` is a dynamic segment. With the routes listed in this order, the `NewArticle` component will never render. In general, you can avoid this problem by listing routes from most- to least-specific.

Sometimes you may want to leverage React Router’s composability and render multiple routes simultaneously (this would prevent you from using a `Switch` component) while also ensuring your router distinguishes between static paths and paths including URL parameters. Consider the following example:

```js
<Router>
	<div>
		<Route path='/'>
			<Home />
		</Route>
		<Route path='/sign-up'>
			<SignUp />
		</Route>
	</div>
</Router>
```

Any path will match first route, so the the `Home` component will be rendered whether the user is at `'/'` or `'/sign-up'`. This might be ideal behavior if the component rendered by the `'/'` route should display regardless of the current route.

But what if you only want the `Home` component to be visible to users on the home page and not to those who have navigated to `/sign-up`? By using React Router’s `exact` prop on the first route, you can ensure that the route will match _only if the current URL is an exact match_.

```js
<Route exact path='/'>
	 <Home />
</Route>
```

Now, when a user visits `/`, the `Home` component will render. But when a user visits `/sign-up`, only the second route will match and only the `SignUp` component will render.

React Router provides a couple of additional props—[`strict`](https://reactrouter.com/web/api/Route/strict-bool) and [`sensitive`](https://reactrouter.com/web/api/Route/sensitive-bool)—on the `Route` component for fine-tuning when a particular route should match, however, these are used far less frequently than the `exact` prop.

The `exact` prop is used in React Router's `Route` component to ensure that the specified route is matched exactly and not partially. It is often used in conjunction with the `path` prop to define the URL pattern that should trigger the rendering of a specific component.

Here's an explanation of how the `exact` prop works:

When you define a route using the `Route` component, React Router checks the URL against the `path` prop of each `Route` to determine which component to render. By default, React Router performs a partial match, meaning that if the URL contains the `path` as a prefix, the corresponding component will be rendered.

For example, consider the following routes without using the `exact` prop:

```js
import { Route } from 'react-router-dom';  

<Route path="/" component={Home} /> 
<Route path="/about" component={About} />
```

With the above routes, if the current URL is "/about", both the `Home` and `About` components will be rendered. This is because "/about" partially matches the `path` "/".

To make sure that the matching is exact, you can use the `exact` prop:

```js
import { Route } from 'react-router-dom';

<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
```

Now, with the `exact` prop added, if the current URL is "/about", only the `About` component will be rendered because "/about" exactly matches the `path` "/about". The `Home` component will only be rendered if the URL is exactly "/".

In summary, the `exact` prop in React Router's `Route` component is used to ensure an exact match between the URL and the `path` prop. It is useful when you want to render a specific component only when the URL matches exactly, without partial matches triggering rendering.

### Nested Routes

Up to this point, we have been working with routers that are small enough to be rendered entirely in a single file. But as an application grows in scope, it can be useful to split up the router and write `Route`s nearer to where the related UI logic is written.

Let’s return to our tech article website example, and imagine that the engineering team is building out a `Categories` feature that will organize tech news articles by their category – front end, back end, mobile development, etc. In addition to a `Categories` component (which will render links to each individual category), the team has created a `Category` view that will display all the articles for a given category.

Previously, we might have written a router like this:

```js
// In the top level App component
<Router>  
	<Route path={'/categories/:categoryName'}>
	<Category />  
</Route>  
<Route path={'/categories'}>    
	<Categories />  
</Route>  
{/* Other Routes */}
</Router>
```

There’s nothing wrong with this way of routing, but as soon as you start to introduce more features into your application, you may find that having all the routes contained in a single router becomes a bit unwieldy. The way around this is to get comfortable with rendering routes from components nested within your app.

For example, consider the `Categories` component, which iterates through a list of categories and creates `Link`s for each category:

```js
function Categories ({ categories }) { 
	return (    
		<ul>
		   { categories.map(category => 
			   <li>
				   <Link to={`/categories/${category}`}>{category}</Link>
	          </li>)
	        }
	     </ul>
	  );
};
```

Clicking on a link rendered by this component will cause the URL to change, for example, to `/categories/html`. According to our previously defined `Router`, the route `'/categories/:categoryName'` will then match and the `Category` component will render.

Notice that the code for the `Categories` component doesn’t indicate which component will be rendered when the user clicks on one of the category links (it’s the `Category` component). We have to navigate back to the top-level `App` component file where the `Router` is defined in order to see that the `Category` component will be rendered when the URL changes to `/categories/html`. This separation of cause and effect is not ideal.

Because React Router handles routing dynamically (eg. routes exist when they are rendered), you can render a `Route` anywhere within your application. In this case, we can relocate the `Route` that renders an individual `Category` component to within the `Categories` component where the links to that route are defined:

```js
import { Link, Route } from 'react-router-dom'; 

function Categories ({ categories }) {  
	return ( 
		<div>      
			<ul>
				{ categories.map(category => <li><Link to={`/categories/${category}`}>{category}</Link></li>)}
			</ul>
		<Route path={'/categories/:categoryName'}>
			<Category />
		</Route>
	</div>
  )
}
```

As a result, the top-level router can be simplified:

```js
// In the top level App component<Router>   
{/* The Category route has been removed. */}   
<Route path={'/categories'}>    
	<Categories />  
</Route>   
{/* Other Routes */}</Router>
```

Rewriting your routes this way makes it very obvious what will happen when the user clicks on a link. It also allows us to clean up our top-level router by removing the route for an individual category. Splitting routes up this way also makes an application more efficient since `Route`s are not always rendered. Instead, `Route`s are only rendered when the UI logic requires them to be.

### useRouteMatch

In the previous exercise, we created a nested `Link` and `Route` in the `Categories` component.

```
// Ex: Create a link for the '/categories/html' page<Link to={`/categories/${category}`}>  {category}</Link> ... // Ex: When the user visits `/categories/html`, a Category component is rendered<Route path={'/categories/:categoryName'}>  <Category /></Route>
```

Route nesting improves the organization of `Link` and `Route` components in our application. As in the `Categories` component, it is common that nested `Link` and `Route` components stem from the same base URL (in this case, the `/categories` URL).

Instead of writing out the full URL path, it would be much more flexible if we could create relative paths based on the `/categories` URL. React Router provides a hook, `useRouteMatch()`, that makes it incredibly easy to do this.

Below, you can see the basic usage in a component called `BandPage` that gets rendered by the route `'/bands/:band/'`. Suppose that the user visits the page `/bands/queen/`. This page should render a list of relative `Link`s based on the various songs by the band [Queen](https://en.wikipedia.org/wiki/Queen_(band)). A `Route` is also created to render a `SongPage` for any chosen song:

```
import { useRouteMatch, Link, Route } from 'react-router-dom';import { SongPage } from '../SongPage.js' function BandPage ({ songs }) {  let { path, url } = useRouteMatch();   // path = '/band/:band'  // url = '/band/queen'    // Render a list of relative Links and a Route to render a SongPage  return (    <div>      <ul>        {          songs.map(songName =>            <li>              <Link to={`${url}/song/${songName}`}>                 {category}              </Link>            </li>          )        }       </ul>        <Route path={`${path}/song/:songName`}>         <SongPage />       </Route>     </div>  )}
```

Let’s break this down.

- `useRouteMatch()` should be called inside a component and returns an object with a `url` and a `path` property. This object is sometimes referred to as the `match` object:
- The `path` property contains the dynamic path pattern with URL parameters (eg. `/bands/:band`) and should be used for creating relative `path` props for `Route` components (eg. `/bands/:band/songs/:songName`)
- The `url` property has the values of URL parameters filled in (eg. `/bands/queen`) and should be used for creating relative `to` props for `Link` components (eg. `/bands/queen/songs/we_are_the_champions`).

Let’s see how we can use these values within the `Categories` component to create relative routes to the `Category` component:

```
import { Link, Route, useRouteMatch } from 'react-router-dom' function Categories ({ categories }) {  let { path, url } = useRouteMatch();   // path = '/categories'  // url = '/categories'    // Even though path and url are the same in this case, use path for relative Routes and url for relative Links  return (    <div>      <ul>        {          categories.map(category =>            <li>              <Link to={`${url}/${category}`}>                {category}              </Link>            </li>          )        }       </ul>        <Route path={`${path}/:category`}>        <Category />       </Route>     </div>  )}
```

Using the relative `url` and `path` values to generate the `Link` and `Route` components ensures that they accurately route the user to the correct URL regardless of the route that caused the `Categories` component to render.

Here's an example of how you can use it:

`import { useRouteMatch } from 'react-router-dom';  function MyComponent() {   const match = useRouteMatch('/users/:id');    if (match) {     // Route matches '/users/:id'     const userId = match.params.id;      // Render component based on the matched route     return <UserProfile userId={userId} />;   }    // Route doesn't match '/users/:id'   return <div>Invalid URL</div>; }`

In the example above, we're using `useRouteMatch` to check if the current route matches the pattern '/users/:id'. If it does, we extract the 'id' parameter from the match object and pass it to the `UserProfile` component.

Note that `useRouteMatch` can be used with both exact and dynamic routes. The returned `match` object contains various properties such as `path`, `url`, and `params` that provide information about the matched route.

The `useRouteMatch` hook is useful in various scenarios where you need to access and manipulate the current route information within a component. Here are a few situations where `useRouteMatch` can be particularly interesting to use:

1. Conditional Rendering: You can use `useRouteMatch` to conditionally render different components or UI elements based on the current route. By checking the `match` object returned by `useRouteMatch`, you can determine if the route matches a specific pattern and customize the rendering accordingly.
    
2. Parameter Extraction: If your route contains dynamic parameters (e.g., '/users/:id'), `useRouteMatch` allows you to extract those parameters from the route's `params` property. This is useful when you need to retrieve information from the URL and pass it to child components or use it in API calls.
    
3. Active Link Styling: When building navigation menus or link components, you can use `useRouteMatch` to determine if the current route matches a specific URL pattern. This allows you to apply active styling to the corresponding link, indicating the user's current location within the application.
    
4. Programmatic Navigation: In certain scenarios, you may need to programmatically navigate to a different route based on certain conditions or user interactions. `useRouteMatch` provides access to the `history` object, which allows you to push, replace, or go back in the navigation history programmatically.
    
5. URL Validation: If you want to validate the current URL against specific patterns or constraints, you can use `useRouteMatch` to check if the route matches a desired pattern. This can be helpful for enforcing URL structure or handling edge cases where you need to restrict access to certain routes.
    

These are just a few examples of when `useRouteMatch` can be beneficial. React Router provides a flexible routing system, and `useRouteMatch` helps you leverage the routing functionality within your components to create dynamic and interactive user experiences.


Yes, with `useRouteMatch` and React Router, you can create a dynamic routing architecture that includes different routes and their access type authorizations. Here's an example of how you can achieve this:

First, create a separate file (let's call it `routes.js`) where you define all your routes along with their access type authorizations:

jsxCopy code

`const routes = [   {     path: '/',     component: Home,     access: ['admin', 'superadmin', 'user'],   },   {     path: '/dashboard',     component: Dashboard,     access: ['admin', 'superadmin'],   },   {     path: '/admin',     component: AdminPanel,     access: ['admin', 'superadmin'],   },   // Add more routes as needed ];  export default routes;`

In this example, each route object contains the `path` for the route, the corresponding `component` to render, and an `access` array that specifies the authorized user roles for accessing that route.

Next, in your main component or routing component, you can use `useRouteMatch` to dynamically render the routes based on the user's access type:

jsxCopy code

``import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'; import routes from './routes';  function App() {   const match = useRouteMatch();    return (     <Switch>       {routes.map((route, index) => {         if (route.access.includes(userRole)) { // userRole can come from user authentication           return (             <Route               key={index}               path={`${match.path}${route.path}`}               exact               render={(props) => <route.component {...props} />}             />           );         } else {           return null; // Route not accessible for the current user role         }       })}       <Redirect to="/" /> // Redirect to a default route if no matching route is found     </Switch>   ); }``

In the above code, we iterate over the `routes` array and dynamically render `Route` components based on the user's role (`userRole`). If the user's role is included in the `access` array of a route, the corresponding component is rendered. If the user's role is not authorized for a specific route, it is skipped.

Note that you can adjust the logic for handling unauthorized access based on your requirements. In the example above, unauthorized routes are simply excluded from rendering. You could also show an access denied message or redirect the user to a different route.

By using `useRouteMatch` and dynamically rendering routes based on access type authorizations, you can create a flexible and customizable routing architecture that adapts to different user roles and their permissions within your application.

### `<Redirect>`

see `Navigate` in v6.

If you take anything away from this lesson, it should be that React Router treats everything as a component. To get fully comfortable using React Router in your code, you have to embrace this idea and the declarative coding style that follows from it. For the most part, this is pretty intuitive, but it can feel a bit counterintuitive when it comes to redirecting users.

To appreciate the declarative pattern, consider a common case for redirecting a user: a user wants to access a `/profile` page that requires authentication but is not currently signed in.

The `Redirect` component provided by React Router makes this easy! Like a `Link` or `NavLink`, the `Redirect` component has a `to` prop. However, once the `Redirect` is rendered, the user will immediately be taken to the location specified by the `to` prop:

```js
import { Redirect } from 'react-router-dom'

const UserProfile = ({ loggedIn }) => { 
	if (!loggedIn) {
		return (
			<Redirect to='/' />
		)
	}
	
	return (    /* ... user profile contents here */  )  
}
```

In this example, when the `UserProfile` component renders, if the `loggedIn` prop is `false`, then the `Redirect` component will be returned and then rendered, sending the user to the `/` page. Otherwise, the component will render normally.

### useHistory

see `useNavigate` in v6.

In the previous exercise you learned how to redirect declaratively by rendering a `Redirect` component that updates the browser’s current location. Though this approach follows React Router’s declarative coding style, it does introduce a few extra steps in the React rendering lifecycle:

1. The `Redirect` component must be returned
2. The `Redirect` is then rendered
3. The URL is then updated
4. And finally the appropriate route is rendered.

React Router also provides a mechanism for updating the browser’s location imperatively: the `Router`‘s [`history`](https://reactrouter.com/web/api/history) object which is accessible via the `useHistory()` hook.

```
import { useHistory } from 'react-router-dom';
```

The `history` object that `useHistory()` returns has a number of methods for imperatively redirecting users. The first and most straightforward is `history.push(location)` which redirects the user to the provided `location`.

Consider this example which immediately triggers a redirect back to the `/` page after a user successfully submits a `<form>`:

```
import { useHistory } from `react-router-dom` export const ExampleForm = () => {   const history = useHistory()   const handleSubmit = e => {    e.preventDefault();    history.push('/')  }   return (    <form onSubmit={handleSubmit}>      {/* form elements */ }    </form>  )}
```

By enabling imperative updates to the browser location, the `history` object allows you to respond immediately to user input without having to wait.

You might be wondering how the `history` object works. Internally, the `BrowserRouter`‘s `history` object uses the [html5 history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). In brief, browser `history` is a stack that stores the URLs visited by the user and maintains a pointer to the user’s current location. This `history` API allows you to navigate through a user’s session history and alter the history stack if necessary.

In addition to `history.push()`, the `history` object has a few more useful methods for navigating through the browser’s history:

- `history.goBack()` which navigates to the previous URL in the history stack
- `history.goForward()` which navigates to the next URL in the history stack
- `history.go(n)` which navigates `n` entries (where positive `n` values are forward and negative `n` values are backward) through the history stack

Below, we can see how the `.goBack()` method is used to create a “Go Back” button:

```js
import { useHistory } from `react-router-dom`

export const BackButton = () => {  
	const history = useHistory()   
	return (    
		<button onClick={() => history.goBack()}>Go Back</button>
	)
}
```

### Query Parameters

Query parameters appear in URLs beginning with a question mark (`?`) and are followed by a parameter name assigned to a value. They are optional and are most often used to search, sort and/or filter resources.

For example, if you were to visit the URL below…

```
https://www.google.com/search?q=codecademy
```

… you would be taken to Google’s `/search` page displaying results for the search term `codecademy`. In this example, the name of the query parameter is `q`.

React Router provides a mechanism for grabbing the values of query parameters: the `useLocation()` hook. When called, `useLocation()` returns a [`location`](https://reactrouter.com/web/api/location) object with a `search` property that is often directly extracted with destructuring syntax. This `search` value corresponds to the current URL’s query string.

Consider this example of a `SortedList` component:

```js
import { useLocation } from 'react-router-dom' // Rendered when a user visits "/list?order=DESC"

export const SortedList = (numberList) => {  
	const { search } = useLocation();
	console.log(search); // Prints "?order=DESC"
};
```

While we could parse this `search` string on our own to get the query parameter value (`'DESC'`), the native [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) constructor is often used to do this for us:

```
import { useLocation } from 'react-router-dom' // Rendered when a user visits "/list?order=DESC"export const SortedList = (numberList) => {  const { search } = useLocation();  const queryParams = new URLSearchParams(search);  const order = queryParams.get('order');  console.log(order); // Prints 'DESC'};
```

Let’s break down this example:

- First, we import `useLocation()` and call it within `SortedList` to get the `search` query parameter string `'?order=DESC'`
- Next, we pass the `search` string into the `new URLSearchParams()` constructor which returns an object, often called `queryParams`. This object has a `.get()` method for retrieving query parameter values.
- Finally, to get the value of a specific query parameter, we pass in the name of the query parameter whose value we want to obtain as a string (`'order'`) to the `queryParams.get()` method. The value (`'DESC'`) is then stored in the variable `order`.

Let’s expand the `SortedList` example so that the component uses the `order` value to render a list of data either in ascending order, in descending order, or in its natural order.

```
import { useLocation } from 'react-router-dom' // Rendered when a user visits "/list?order=DESC"export const SortedList = (numberList) => {  const { search } = useLocation();  const queryParams = new URLSearchParams(search);  const sortOrder = queryParams.get('order');   if (sortOrder === 'ASC') {    // render the numberList in ascending order  } else if (sortOrder === 'DESC') {    // render the numberList in descending order  } else {    // render the numberList as is  }}
```

Now, if the user were to visit `/list?order=DESC`, the value `'DESC'` would be extracted and we can render the `SortedList` component in descending order. Likewise, visiting `/list?order=ASC` will render the list in ascending order. Finally, since query parameters are optional, if we were to visit `/list`, the `SortedList` component would render in its natural order.

### Review

Great work! You’ve learned everything you need to know to add front-end routing to your React applications using [React Router](https://reactrouter.com/)! To recap, you can now:

- Install `react-router-dom` to add it to your React applications
- Enable routing by wrapping your application’s contents in the `BrowserRouter` component
- Make your code more concise by aliasing `BrowserRouter` component to `Router`
- Use the `Route` component to add routes to your application
- Use the `Route` component’s path prop to specify static routes (those without URL parameters, eg. `/users`) and dynamic routes (those with URL parameters, eg `/users/:userId`)
- Access the values of URL parameters using React Router’s `useParams` hook
- Declaratively redirect users by rendering React Router’s `Redirect` component
- Imperatively redirect users by accessing the `history` object via the `useHistory` hook and calling its `goForward`, `goBack`, and `push` methods.
- Access the value of query parameters using React Router’s `useLocation` hook
