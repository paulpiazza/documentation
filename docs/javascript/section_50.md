---
title: CSS-in-JS
description: Slim notes.
order: 50
---

CSS-in-JS is a method of writing CSS code using JavaScript instead of traditional CSS files. It allows you to define styles directly in your JavaScript code and then inject them into your components.

Here's an example using the styled-components library in React:

```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function App() {
  return <Button>Click me</Button>;
}
```

In this example, the `Button` component is defined with its styles directly within the JavaScript code using the `styled` function from the `styled-components` library.

See [Styled-components](https://styled-components.com/)
See [Emotion](https://emotion.sh/docs/introduction)

#### Pros and cons

The use of CSS-in-JS libraries in React applications comes with its own set of advantages and disadvantages:

_Pros:_

1. **Component Scope**: CSS-in-JS ensures that styles are scoped to components, which reduces the risk of style conflicts and makes components more reusable.

2. **Dynamic Styling**: With CSS-in-JS, you can easily manipulate styles based on props, state, or global themes because you're using JavaScript to define your styles.

3. **JavaScript Power**: You can leverage the full power of JavaScript to create complex styles, use variables, functions, and manage themes, which can be particularly powerful for dynamic theming and complex applications.

4. **Maintenance**: It can be easier to maintain styles when they are colocated with the components they are styling, making it simpler to track which styles apply to which parts of your application.

5. **Dead Code Elimination**: Since styles are tied to components, it's easier for build tools to perform dead code elimination, removing unused styles from the production build.

_Cons:_

1. **Performance**: CSS-in-JS might introduce a performance overhead because JavaScript has to parse and apply the styles. This can potentially lead to slower rendering times compared to traditional CSS, especially in large applications.

2. **Learning Curve**: Developers need to learn the specifics of the CSS-in-JS library in use, on top of knowing both CSS and JavaScript, which can steepen the learning curve.

3. **Server-Side Rendering**: CSS-in-JS can complicate server-side rendering setups. Some libraries require additional configuration to extract and serve the correct styles on the server.

4. **Tooling**: While JavaScript tooling is robust, some developers may miss certain CSS-specific linting tools or capabilities that are not as mature in the CSS-in-JS ecosystem.

5. **Codebase Size**: Injecting styles via JavaScript can lead to a larger JavaScript bundle size, as styles are included with your JavaScript code instead of in separate CSS files.

In conclusion, whether to use CSS-in-JS or traditional CSS will depend on the specific needs of your project and the preferences of your development team. It's important to weigh these pros and cons in the context of your application's requirements, performance budget, and the skill set of your developers.
