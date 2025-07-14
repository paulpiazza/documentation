---
title: Event Object
description: Slim notes.
order: 5
---

Because button is a html element, the fonction logger will have an event object in param.

```javascript
function Example() {  
  const logger = (param) => {  
    console.log(param);  // event object
  }  
  
  return <button onClick={this.logger}></button>;  
};
```

With non-html element, you should treat event.

```javascript
function Button({onClick, ...props}) {
	return <button onClick={onClick}>click</button>
}

function Example() {  
  const logger = (param) => {  
    console.log(param);  
  }  
  
  return <Button onClick={this.logger}></Button>;  
};
```
