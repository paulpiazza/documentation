---
title: Component Lifecycle Methods
description: Slim notes.
order: 14
---

see [resume](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

The lifecycle of a component:
1. _Mounting_, when the component is being initialized and put into the DOM for the first time. We saw that the `constructor`, `render()`, and `componentDidMount()` are called during this phase.
2. _Updating_, when the component updates as a result of changed state or changed props. We saw that `render()` and `componentDidUpdate()` are called during this phase.
3. _Unmounting_, when the component is being removed from the DOM. We saw that `componentWillUnmount()` was called here, which was a good time to clean things up.

_In general, when a component produces a side-effect, you should remember to clean it up._

Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You will get this error :

```
Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the undefined component.
```

You should stop the setInterval:

```javascript
import React from 'react';

export class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		return <div>{this.state.date.toLocaleTimeString()}</div>;
	}

	componentDidMount() {
		const oneSecond = 1000;
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, oneSecond);
	}
	
	// will stop the side-effect. No error will be displayed.
	componentWillUnmount() {
		clearInterval(this.intervalID);
	};
}
```

An update is caused by changes to props or state. Every time you’ve called `setState()` with new data, you’ve triggered an update. Every time you change the props passed to a component, you’ve caused it to update.

When a component updates, it calls [several methods](https://reactjs.org/docs/react-component.html#updating), but only two are commonly used: `render()` and `componentDidUpdate()`

Even though the data changes many times a second, it’s only being updated and re-rendered once a second. 

We’d like the clock to update more frequently in precise mode. Instead of updating every second, we’d like it to update 10 times a second (every 100 milliseconds instead of every 1000).

```javascript
import React from 'react';

export class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	
	render() {
		return (
			<div>
				{this.props.isPrecise
					? this.state.date.toISOString()
					: this.state.date.toLocaleTimeString()}
			</div>
		);
	}
	
	componentDidMount() {
		const oneSecond = 1000;
			this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, oneSecond);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	
	componentDidUpdate(prevProps) {
		let delay = 100;
		if (this.props.isPrecise === prevProps.isPrecise) {
			return;
		}
	
		clearInterval(this.intervalID);
		
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, delay);
	}
}
```

see this video:

![[component-react.webm]]

### Unmounting Lifecycle Method

```javascript
 componentWillUnmount(prevProps, prevState) {
	 clearInterval(this.interval);
}
```

React supports one unmounting lifecycle method, `componentWillUnmount`, which will be called right before a component is removed from the DOM.

`componentWillUnmount()` is used to do any necessary cleanup (canceling any timers or intervals, for example) before the component disappears.

Note that the `this.setState()` method should not be called inside `componentWillUnmount()` because the component will not be re-rendered.

### Component Mount

A React component _mounts_ when it renders to the DOM for the first time. If it’s already mounted, a component can be rendered again if it needs to change its appearance or content.

### Component Mounting Phase

A component “mounts” when it renders for the first time. When a component mounts, it automatically calls these three methods, in the order of:

1. `constructor()`
2. `render()`
3. `componentDidUpdate()`

### Lifecycle Phases

There are three categories of lifecycle methods: mounting, updating, and unmounting.

A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called.

The first time that a component instance renders, it does not update. Starting with the second render, a component updates every time that it renders.

A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.


