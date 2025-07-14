---
title: Fetch
description: Slim notes.
order: 44
---

When working with web APIs, the Fetch API is commonly used to make HTTP requests from JavaScript. It provides a modern and flexible way to interact with servers and retrieve or send data. 

The `fetch()` function:

- Creates a request object that contains relevant information that an API needs.
- Sends that request object to the API endpoint provided.
- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

```javascript
// with fetch
fetch('https://api.example.com/users')

	.then(response => {
	
		if(response.ok) {
			return response.json();
		}
	
		throw new Error('Request Failed!');
		
	}, networkError => console.log(networkError.message))

.then(jsonResponse => {
	// code to execute with jsonResponse
}).catch(error => {
	// error
})

// with await - async
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');

	if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
  
  } catch (error) {
    console.error(error);
  }
}
```

Here are some examples of how to use the Fetch API with different HTTP methods:

1. GET Request:
```javascript
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```
In this example, a GET request is made to retrieve a list of users from the `https://api.example.com/users` endpoint. The response is converted to JSON format and the retrieved data is logged to the console.

2. POST Request:
```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```
In this example, a POST request is made to create a new user by sending JSON data in the request body. The `Content-Type` header is set to `application/json` to indicate the content type of the request body.

3. DELETE Request:
```javascript
fetch('https://api.example.com/users/123', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      // User deleted successfully
      console.log('User deleted');
    } else {
      // Handle errors
      console.error('Error deleting user');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```
In this example, a DELETE request is made to delete a user with the ID `123`. The response status is checked, and if it is `ok` (in the range of 200-299), it indicates that the user was deleted successfully.

4. PUT Request:
```javascript
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Updated Name',
    age: 35
  })
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```
In this example, a PUT request is made to update a user with the ID `123`. The request body contains the updated user data in JSON format.

These examples demonstrate how to use the Fetch API with different HTTP methods (GET, POST, DELETE, PUT) to interact with a web API. Remember to handle the responses and errors accordingly.


With async and await:

```js
const getSuggestions = async () => {

  const wordQuery = inputField.value;  
  const endpoint = `${url}${queryParams}${wordQuery}`;  
  
  try{  
	const response = await fetch(endpoint, {cache: 'no-cache'});  
  
	if(response.ok){  
      const jsonResponse = await response.json()  
    }  
  }  
  catch(error){  
    console.log(error)  
  }  
}
```
