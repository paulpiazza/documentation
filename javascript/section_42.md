---
title: Asynchronous Code
description: Slim notes.
order: 42
---

Synchronous actions happen sequentially, one after the other. Whereas, asynchronous actions can happen at the same without one action blocking the other.

JavaScript is a programming language that can only execute one task at a time, meaning it is a single-threaded language.

This means that if there is a long-running task, it will block the execution of other tasks until it completes. However, JavaScript has a mechanism called the event loop that allows it to perform asynchronous tasks without blocking the main thread.

Asynchronous tasks are tasks that can be executed independently from the main thread and do not require waiting for other tasks to complete before they can be run. This allows JavaScript to perform multiple tasks simultaneously without blocking the execution of other tasks.

### Concurrency

Concurrency in JavaScript refers to the ability of JavaScript to handle multiple tasks or computations simultaneously. It allows different parts of a program to execute independently and make progress concurrently. 

Usually when we think about concurrency in programming, it means that two or more procedures are executed at the same time on the same shared resources (e.g. threads, processes, CPU cores). JavaScript is single-threaded and can’t run that way, but we can emulate concurrency with the event loop. Code will always execute synchronously, but asynchronous code can be pushed to web APIs and directed back into the stack via the event queue and event loop.

JavaScript achieves concurrency through its event-driven, non-blocking nature. It utilizes an event loop, which is a mechanism that continuously checks for events and executes associated callbacks. This event loop allows JavaScript to handle asynchronous operations efficiently, such as making network requests or processing user interactions, without blocking the execution of other tasks.

One common example of concurrency in JavaScript is the use of asynchronous functions and callbacks. Asynchronous functions allow long-running tasks, such as fetching data from a server or reading a file, to be executed in the background while other parts of the program continue to run. Callback functions are used to handle the results or errors of these asynchronous tasks once they are completed.

JavaScript also provides other mechanisms for managing concurrency, such as Promises, async/await syntax, and Web Workers. Promises allow for more structured handling of asynchronous operations, while async/await syntax provides a more synchronous-looking way to write asynchronous code. Web Workers enable running JavaScript code in the background on separate threads, further enhancing concurrency capabilities.

It's important to note that JavaScript concurrency is different from parallelism. Concurrency focuses on managing multiple tasks within a single thread, while parallelism involves executing multiple tasks simultaneously across multiple threads or processes.

### Event loop

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)

The event loop is a fundamental concept in JavaScript that enables it to handle asynchronous operations efficiently. JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 

The event loop operates by maintaining a queue of tasks that need to be executed. When the JavaScript engine is idle, it checks this queue and processes the tasks one by one. This allows for the execution of code in a non-blocking fashion, ensuring that long-running tasks or operations do not block the main thread and cause unresponsiveness.

Here's a simple example to illustrate the event loop in action:

```javascript
console.log('Start script...');

setTimeout(() => {
  console.log('Delayed task executed!');
}, 2000);

console.log('End script...');
```

In this example, the `setTimeout` function is used to schedule a delayed task. The first argument is a callback function that will be executed after the specified delay (in this case, 2000 milliseconds or 2 seconds). The second argument is the delay duration.

When this code is executed, it will log 'Start script...' and 'End script...' immediately. After a delay of 2 seconds, the event loop will process the delayed task and log 'Delayed task executed!'. This demonstrates how the event loop allows for the execution of asynchronous tasks without blocking the main thread.

![[Pasted image 20231122195002.png]]

The _event loop_ is made up of these parts:

- Memory Heap
- Call Stack
- Event Queue
- Event Loop
- Node or Web APIs

Let’s take a closer look at each part before we put it all together.

#### The Heap

The _heap_ is a block of memory where we store objects in an unordered manner. JavaScript variables and objects that are currently in use are stored in the heap.

#### The Call Stack

The _stack_, or _call stack_, tracks what function is currently being run in your code.

When you invoke a function, a _frame_ is added to the stack. Frames connect that function’s arguments and local variables from the heap. Frames enter the stack in a _last in, first out_ (LIFO) order. In the code snippet below, a series of nested functions are declared, then `foo()` is called and logged.

#### The Event Queue

The _event queue_ is a list of messages corresponding to functions that are waiting to be processed. In the diagram, these messages are entering the event queue from sources such as various web APIs or async functions that were called and are returning additional events to be handled by the stack. Messages enter the queue in a first in, first out (FIFO) order. No code is executed in the event queue; instead, it holds functions that are waiting to be added back into the stack.

#### The Event Queue in Context

This event queue is a specific part of our overall event loop concept. Messages that are waiting in the event queue to be added back into the stack are added back via the event loop. When the call stack is empty, if there is anything in the event queue, the event loop can add those one at a time to the stack for execution.

1. First the event loop will poll the stack to see if it is empty.
2. It will add the first waiting message.
3. It will repeat steps 1 and 2 until the stack has cleared.

#### The Event Loop in Action

Now that we know all of the pieces of the event loop, let’s walk through some code to understand the event loop in action.

```js
console.log("This is the first line of code in app.js.");

function usingsetTimeout() {
	console.log("I'm going to be queued in the Event Loop.");
}

setTimeout(usingsetTimeout, 3000);

console.log("This is the last line of code in app.js.");
```

1. `console.log("This is the first line of code in app.js.");` is added to the stack, executes, then pops off of the stack. 2.`setTimeout()` is added to the stack.
2. `setTimeout()`’s callback is passed to be executed by a web API. The timer will run for 3 seconds. After 3 seconds elapse, the callback function, `usingsetTimeout()` is pushed to the Event Queue.
3. The Event Loop, meanwhile, will check periodically if the stack is cleared to handle any messages in the Event Queue.
4. `console.log("This is the last line of code in app.js.");` is added to the stack, executes, then pops off of the stack.
5. The stack is now empty, so the event loop pushes `usingsetTimeout` onto the stack.
6. `console.log("I'm going to be queued in the Event Loop.");` is added to the stack, executes, gets popped
7. `usingsetTimeout` pops off of the stack.

Describe in regard to the event loop what is happening when this code executes:

```js
const shopForBeans = () => {
	return new Promise((resolve, reject) => {
		const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
		
		setTimeout(() => {
			let randomIndex = Math.floor(Math.random() * beanTypes.length);
			
			let beanType = beanTypes[randomIndex];
			
			console.log(`2. I bought ${beanType} beans because they were on sale.`);
			
			resolve(beanType);
		}, 1000);
	});
}

async function getBeans() {
	console.log(`1. Heading to the store to buy beans...`);
	
	let value = await shopForBeans();
	
	console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
console.log("Describe what happens with this `console.log()` statement as well.");
```

The code will execute and log text in this order:

1. Heading to the store to buy beans…
2. I bought fava beans because they were on sale.
3. Great! I’m making fava beans for dinner tonight!

When the function `getBeans()` is called, `getBeans()` is added to the stack. The first `console.log()` statement is added to the stack, executes, and is popped off the stack. Next, the async function `shopForBeans()` is called and the return value is assigned to the variable `value`.

The response will be handled by the event queue and event loop and pushed back into the stack when it is cleared. The final log statement will then be added to the stack, log the argument, and pop off the stack.

The stack will be clear afterward, so the response event in the event queue will get added back to the stack and executed. The final two `console.log()` statements will then be added to the stack and popped off after logging their arguments.

### `setTimeout`

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Async task');
}, 2000);

console.log('End');
```

In this example, the `setTimeout` function is an asynchronous task that will execute after a delay of 2 seconds. While waiting for the `setTimeout` function to complete, the main thread will continue executing other tasks. Therefore, the output of this code will be:

```
Start
End
Async task
```

`setInterval()`, it is a built-in function in JavaScript that allows you to repeatedly execute a function at a specified time interval. The function will continue to execute until you clear the interval using `clearInterval()`. 

### `setInterval()`

It is considered asynchronous code because the supplied callback function is not blocked by other code — the callback function can be executed in parallel to other code being executed. The determining factor for when the callback function is executed is determined by the second argument provided.

```javascript
function printHello() {
  console.log('Hello');
}

setInterval(printHello, 1000);
```

In this example, the `printHello()` function will be executed every 1000 milliseconds (1 second) until you clear the interval using `clearInterval()`. 

### `addEventListener()`

The `addEventListener()` method is used in JavaScript to attach an event handler function to an element. It allows you to listen for a specific event on the target element and execute a function when that event occurs. This method is commonly used for handling user interactions such as clicks, mouse movements, and keyboard events.

Here's an example of using `addEventListener()` with an asynchronous function:

```javascript
const button = document.querySelector('#myButton');

button.addEventListener('click', async () => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
});
```

In this example, we have a button element with the id "myButton". We use `addEventListener()` to attach a click event handler to the button. The event handler function is defined as an asynchronous function using the `async` keyword.

Inside the event handler, we make an asynchronous request to an API using the `fetch()` function. We use the `await` keyword to wait for the response to be fetched and then parse it as JSON using `response.json()`. Finally, we log the retrieved data to the console.

The use of `async` and `await` in the event handler allows us to write asynchronous code in a more readable and sequential manner, making it easier to handle asynchronous tasks such as fetching data from an API.

### custom events

You can create a custom event handler in JavaScript. 

To create a custom event handler, you can make use of the `CustomEvent` constructor and the `dispatchEvent()` method. Here's an example:

```javascript
// Create a new custom event
const customEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Custom event triggered!' } });

// Add an event listener to handle the custom event
document.addEventListener('myCustomEvent', (event) => {
  console.log(event.detail.message);
});

// Dispatch the custom event
document.dispatchEvent(customEvent);
```

In this example, we create a new custom event using the `CustomEvent` constructor. The first argument is the name of the custom event ('myCustomEvent' in this case), and the second argument is an optional object that can contain additional information about the event (accessed via `event.detail`).

We then add an event listener using `addEventListener()` to listen for the custom event. When the custom event is triggered, the callback function will be executed, and we can access the additional information passed through `event.detail`.

Finally, we dispatch the custom event using `dispatchEvent()` on the target element (in this case, the `document` object). This will trigger the execution of the event listener and log the message to the console.

You can customize the name of the event, the additional data passed through `event.detail`, and the target element where you want to dispatch and listen for the custom event.

### Promises

A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous operations such as fetching data from a server or reading a file, without blocking the main thread. Promises are useful for handling asynchronous operations because they allow you to attach callbacks that will be executed when the operation is completed, whether it was successful or not.

The initial state of a Promise is "pending". When a Promise is created, it starts in the pending state, meaning that the asynchronous operation associated with the Promise has not yet been fulfilled or rejected.

While in the pending state, the Promise is neither resolved nor rejected. It is waiting for the asynchronous operation to complete and transition to either the fulfilled (resolved) or rejected state.

Once the asynchronous operation completes successfully and the Promise is ready to fulfill its intended purpose, it transitions to the fulfilled (resolved) state. At this point, any `then` callbacks attached to the Promise will be executed, and the resolved value will be passed as an argument to those callbacks.

On the other hand, if an error occurs during the asynchronous operation, the Promise transitions to the rejected state. In this case, any `catch` or `onRejected` callbacks attached to the Promise will be executed, and the error (or rejection reason) will be passed as an argument to those callbacks.

It's important to note that once a Promise transitions to either the fulfilled or rejected state, it becomes "settled". Once settled, a Promise cannot transition to any other state. Additionally, once settled, the Promise retains its settled state and the resolved or rejected value, even if additional `then` or `catch` callbacks are attached later.

Here's an example of creating a Promise that resolves after a delay of 3 seconds:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 3000);
});

myPromise.then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});


// second example
const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber % 2 === 0) {
    resolve(`Promise resolved with random number ${randomNumber}!`);
  } else {
    reject(`Promise rejected with random number ${randomNumber}!`);
  }
});

myPromise.then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});



// third sample

const inventory = {
  sunglasses: -1900,
  pants: 1088,
  bags: 1344
};

function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } else {
    reject('That item is sold out.')
  }
}

function orderSunglasses() {
  return new Promise(myExecutor)
}

// with then / catch
orderSunglasses().then((message) => {
  console.log(message)
}).catch((error) => {
  console.error(error)
})


// with await / async
async function help() {
  try {
    const message = await orderSunglasses()
    console.log(message);
  } catch(error) {
    console.error(error)
  }
}

help()


// again

const mpromise = (n) => { 
  return new Promise((resolve, reject) => {
    if(n === 0) resolve('paul')
    reject('error!')
  })
} 

mpromise(0).then(v => console.log(v), e => console.log(e))

mpromise(0)
  .then(v => {
    console.log(v)
  }).catch(e => {
    console.log(e)
  })

async function display(0) {
  try {    
    const a = await mpromise(0)
    console.log(a)
  } catch(e) {
    console.log(e)
  }
}

display(0)


```

In this example, we create a new Promise using the `Promise` constructor. The constructor takes a single argument, which is a function that will be called immediately with two arguments: `resolve` and `reject`. In this case, we use the `setTimeout` function to simulate an asynchronous operation that takes 3 seconds to complete. Once the operation is completed, we call `resolve` and pass in a value indicating that the Promise has been resolved successfully.

We then attach a callback to the Promise using the `then` method. This callback will be executed when the Promise is resolved successfully, and it will receive the resolved value as its argument. In this case, we simply log the resolved value to the console.

Finally, we attach a callback to handle errors using the `catch` method. This callback will be executed if the Promise is rejected (i.e., an error occurs during its execution), and it will receive the error as its argument.

Check another sample:

```js
// function return a Promise
const {checkInventory} = require('./library.js');

const order = [
	['sunglasses', 1], 
	['bags', 2]
];

function handleSuccess(resolve) {
  console.log(resolve)
}

function handleFailure(reject) {
  console.log(reject)
}

// original way
checkInventory(order).then(handleSuccess, handleFailure)

// separate concerns for better management
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)

// composition by chaining promises
checkInventory(order)
  .then((success) => {
	  return otherFunctionThatReturnsOnepromise(success)
  })
  .then((msg) => {
	  console.log(msg)
  })
  .catch((err) => {
	  console.log(err)
  })
```

In JavaScript, Promises have a `then()` method that allows you to attach callbacks to be executed when the Promise is settled (either resolved or rejected). The `then()` method takes two arguments: the success callback and the failure callback.

One way to write cleaner code is to follow a principle called _separation of concerns_. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. This process of chaining promises together is called _composition_.

### Promise.all

`Promise.all()` is a method in JavaScript that takes an array of Promises and returns a new Promise. This new Promise resolves when all the Promises in the input array have resolved, or rejects if any of the Promises in the array reject.

Here's an example to illustrate the usage of `Promise.all()`:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 1500);
});

const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });
```

In this example, we create three Promises (`promise1`, `promise2`, and `promise3`) that simulate asynchronous operations using `setTimeout()`. Each Promise resolves with a different message after a certain delay.

We store these Promises in an array called `promises`. Then, we pass this array to `Promise.all()`.

The `Promise.all()` method returns a new Promise. In the example, we attach a `then()` callback to this Promise to handle the case when all the Promises in the input array have resolved successfully. The `then()` callback receives an array of resolved values from each Promise as its argument. In this case, we log the resolved values to the console.

If any of the Promises in the input array reject (i.e., an error occurs), the `catch()` callback will be executed. It receives the rejection reason as its argument. In this case, we log an error message to the console.

Using `Promise.all()` allows us to wait for multiple Promises to resolve or reject together. It provides a convenient way to handle multiple asynchronous operations and ensures that we proceed only when all Promises have resolved successfully.

```js
// Define your function below:

async function matchPromises(p1, p2) {
  try {

    const results = await Promise.all([p1, p2]);
    [r1, r2] = results
    return r1 === r2 ? "match" : "no match"

  } catch (err) {
    return "error"
  }
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000)
})


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2')
  }, 1500)
})

matchPromises(p1, p2).then((v) => {
  console.log(v)
})


// other exemple function

async function matchPromises(pendingPromise1, pendingPromise2) {  
  try {
  
    let resolvedPromise1 = await pendingPromise1();
    let resolvedPromise2 = await pendingPromise2();
    
    if (resolvedPromise1  === resolvedPromise2){  
      return 'match';  
    } else if (resolvedPromise1 !== resolvedPromise2) {  
      return 'no match';  
    }

  } catch(error){
	   console.log(error);
	   return 'error';
   }
 }

// This code isn't necessary to pass the assessment, but provided to help you check the output of your function

const promiseOne = () => {
  return new Promise((resolve, reject) => {
	  resolve('done');
  });
};

const promiseTwo = () => {
  return new Promise((resolve, reject) => {
	 resolve('done');
  });
};

matchPromises(promiseOne, promiseTwo).then(result => console.log(result));
```

### Then

The `.then()` method always returns a new Promise.

In JavaScript, Promises are chainable, meaning that you can attach multiple `.then()` methods to a Promise one after another. Each `.then()` method returns a new Promise, allowing you to chain further `.then()` or `.catch()` methods.

The Promise returned by `.then()` represents the eventual result of the callback function that you pass to it. If the callback function returns a value, the Promise returned by `.then()` will be resolved with that value. If the callback function throws an error or returns a rejected Promise, the Promise returned by `.then()` will be rejected with that error or rejection reason.

This chaining behavior allows you to handle asynchronous operations in a more organized and readable way. You can perform sequential operations, transform values, or handle errors at different stages of the Promise chain.

Here's an example to illustrate the chaining behavior of `.then()`:

```javascript
const promise = new Promise((resolve, reject) => {
  resolve('Initial value');
});

promise
  .then((value) => {
    console.log('First callback:', value);
    return value.toUpperCase();
  })
  .then((value) => {
    console.log('Second callback:', value);
    throw new Error('Something went wrong');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

In this example, the initial Promise resolves with the value `'Initial value'`. The first `.then()` callback logs the value and returns its uppercase version. The second `.then()` callback logs the transformed value and throws an error.

The error is caught by the subsequent `.catch()` method, which logs the error message.

Each `.then()` method in the chain returns a new Promise, allowing you to continue the chain with further `.then()` or `.catch()` methods.

### async / await

Async/await is a feature in JavaScript that allows you to write asynchronous code that looks and behaves like synchronous code. It is a syntactic sugar that simplifies the use of promises. 

`async` function automatically returns a promise.

With async/await, you can write asynchronous code that looks like synchronous code, making it easier to read and write. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to resolve before continuing with the code execution.


```js
// with Promise
function nativePromise(){  
  return new Promise((resolve, reject) => {  
      resolve('yay!');  
  })  
}

// async function returns always promises
async function asyncPromise(){  
  return 'yay!';  
}
```

An `async` function will return in one of three ways:

- If there’s nothing returned from the function, it will return a promise with a resolved value of `undefined`.
- If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
- If a promise is returned from the function, it will simply return that promise

```js
// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  const meal = await brainstormDinner()
  console.log(`I'm going to make ${meal} for dinner.`)
}

announceDinner()
```

Here's an example of using async/await with multiple function calls in JavaScript:

```javascript
let cook = (min) => {
	return new Promise((resolve, reject) => {
		if(min > 0) return resolve('ok')
		return reject('nok')
	})
}

async function fetchData() {
  try {
    const result1 = await fetch('https://api.example.com/data1');
    const data1 = await result1.json();
    
    const result2 = await cook(10);
    
    // Perform additional operations with data1 and data2
    
    return { data1, data2 };
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// Call the async function
fetchData()
  .then(result => {
    console.log('Data:', result.data1, result.data2);
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

In this example, the `fetchData` function is defined as an asynchronous function using the `async` keyword. Inside the function, we make multiple asynchronous calls to fetch data from different URLs using the `fetch` function.

In JavaScript, you can handle errors in asynchronous functions using the `try/catch` block. Here's an example:

```javascript
async function myAsyncFunction() {
  try {
    // Perform asynchronous operations here
  } catch (error) {
    console.log('Error:', error);
    // Handle the error here
  }
}
```

In this example, we define an asynchronous function called `myAsyncFunction`. Inside the function, we use a `try/catch` block to handle any errors that may occur during the asynchronous operations.

If an error occurs, the `catch` block will be executed, and we can handle the error as needed. In this case, we simply log the error to the console, but you could also perform other actions like displaying an error message to the user or retrying the operation.

It's important to note that if an error is thrown inside an asynchronous function that is not caught, it will be propagated up the call stack until it is caught by a `try/catch` block or results in an unhandled rejection. To avoid unhandled rejections, it's a good practice to always catch errors in your asynchronous functions.


When handling independent promises in JavaScript, you have a few options:

1. Promise.all(): If you have multiple independent promises that you want to execute simultaneously and wait for all of them to resolve, you can use the `Promise.all()` method. It takes an array of promises as input and returns a new promise that resolves with an array of the resolved values from all the promises.

```javascript
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');
const promise3 = fetch('https://api.example.com/data3');

Promise.all([promise1, promise2, promise3])
  .then(results => {
    // Handle the results
    const [result1, result2, result3] = results;
    console.log('Result 1:', result1);
    console.log('Result 2:', result2);
    console.log('Result 3:', result3);
  })
  .catch(error => {
    // Handle the error
    console.log('Error:', error);
  });
```

2. Async/await: If you prefer a more synchronous-looking code, you can use async/await with independent promises. You can use the `await` keyword to wait for each promise to resolve individually.

```javascript
async function fetchData() {
  try {
    const result1 = fetch('https://api.example.com/data1');
    const result2 = fetch('https://api.example.com/data2');
    const result3 = fetch('https://api.example.com/data3');

    // Handle the results
    console.log(await result1, await result2, await result3);
    
  } catch (error) {
    // Handle the error
    console.log('Error:', error);
  }
}

fetchData();
```

By using `await` with each promise, the code execution will pause until each promise is resolved or rejected.

Here's an example of using `Promise.all()` and `await` to handle multiple independent promises in JavaScript:

```javascript
async function getDinnerMenu() {
  try {
    const vegetablePromise = fetch('https://api.example.com/vegetables');
    const starchPromise = fetch('https://api.example.com/starches');
    const proteinPromise = fetch('https://api.example.com/proteins');
    const sidePromise = fetch('https://api.example.com/sides');
    
    const [vegetable, starch, protein, side] = await Promise.all([vegetablePromise, starchPromise, proteinPromise, sidePromise]);
    
    return `Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// Call the async function
getDinnerMenu()
  .then(menu => {
    console.log(menu);
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

In this example, we define an asynchronous function called `getDinnerMenu`. Inside the function, we create four independent promises using the `fetch` function to retrieve data for vegetables, starches, proteins, and sides.

We use `Promise.all()` to wait for all promises to resolve. It takes an array of promises as input and returns a new promise that resolves with an array of the resolved values.

By using `await` with `Promise.all()`, we can wait for all promises to resolve and retrieve the results in the same order as the promises were passed.

Finally, we construct the dinner menu string using the resolved values and return it. If an error occurs during the asynchronous operations, it will be caught in the `catch` block and handled accordingly.

When calling the `getDinnerMenu` function, we use the `.then()` method to handle the successful result and `.catch()` method to handle any errors that occur.


