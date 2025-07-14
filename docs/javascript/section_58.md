---
title: Linear Structures
description: Slim notes.
order: 58
---

### Conceptual

See [Wiki Resource on Nodes](https://en.wikipedia.org/wiki/Node_(computer_science)#:~:text=A%20node%20is%20a%20basic,are%20often%20implemented%20by%20pointers)

In the context of Node.js (and programming in general), a linear data structure refers to a type of data organization where data elements are arranged sequentially, one after the other, in a linear order. 

Each element in the structure has a unique predecessor and a unique successor, except for the first and last elements. The most common examples of linear data structures are arrays, linked lists, and stacks.

The reason linear data structures exist and are widely used in programming is due to their simplicity, efficiency, and easy access to elements. Here are some key reasons why linear data structures are prevalent:

1. Sequential Access: Linear data structures provide sequential access to elements, which means accessing elements in the order they are stored. This makes it easy to traverse and process data in a linear manner, which is essential for many tasks.
    
2. Insertion and Deletion: Linear data structures allow efficient insertion and deletion operations. In arrays and linked lists, elements can be easily inserted or removed from the beginning, middle, or end of the structure.
    
3. Memory Allocation: Linear data structures typically use contiguous memory allocation, making it efficient to access elements using their indices (in the case of arrays) or pointers (in the case of linked lists).
    
4. Iteration: Iterating over a linear data structure is straightforward. For loops or recursive functions can be used to traverse and process each element sequentially.
    
5. Stack Operations: Stack data structure, which is a type of linear data structure, is used in various programming scenarios, such as managing function calls, expression evaluation, and undo/redo operations.
    
6. Queue Operations: Queue, another type of linear data structure, is used for managing tasks that need to be processed in a first-in-first-out (FIFO) order, like print jobs, task scheduling, etc.
    
7. Simplified Algorithms: Many algorithms and data processing techniques are built around linear data structures, which simplifies problem-solving and enhances code readability.
    

Overall, linear data structures play a fundamental role in organizing and managing data in many applications and algorithms. They offer a balance between simplicity and efficiency, making them suitable for a wide range of programming tasks. As a result, they are a critical part of the toolkit for developers working with Node.js or any other programming language

### Nodes conceptual

In the context of linear data structures, a "node" refers to an individual element or unit of data that makes up the structure. Nodes are the building blocks of various linear data structures, such as linked lists and trees.

In a linked list, a node is a data structure that contains two components:

1. Data: The actual value or information stored in the node. It can be any data type, such as an integer, string, object, etc.

2. Pointer: A reference or link to the next node in the sequence. In a singly linked list, each node has a pointer that points to the next node in the list. In a doubly linked list, each node has two pointers - one to the next node and one to the previous node.

Here's a simple example of a node in a singly linked list using JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node
  }
}

// Creating nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Connecting nodes to form a linked list
node1.next = node2;
node2.next = node3;
```

In this example, we created three nodes with data values 10, 20, and 30, respectively. We then connected these nodes to form a singly linked list, where `node1` points to `node2`, and `node2` points to `node3`.

Nodes are crucial in maintaining the sequence and structure of linear data structures. They allow for efficient traversal and manipulation of data in a linear manner. In linked lists, nodes enable dynamic memory allocation, which makes them suitable for situations where the size of the data structure may change during runtime.

#### Node Linking

Often, due to the data structure, nodes may only be linked to from a single other node. This makes it very important to consider how you implement modifying or removing nodes from a data structure.

If you inadvertently remove the single link to a node, that node’s data and any linked nodes could be “lost” to your application. When this happens to a node, it is called an _orphaned_ node.

![[nodes.png]]

#### Resume

- Contain data, which can be a variety of data types
- Contain links to other nodes. If a node has no links, or they are all `null`, you have reached the end of the path you were following.
- Can be orphaned if there are no existing links to them

```javascript

// template of node

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
	
	// must be type node or null
	setNextNode(node) {
		if(!(node instanceof Node || node === null)) {
			throw new Error('invalid argument')
		}
	
		this.next = node
	}
	
	getNextNode() {
		return this.next;
	}
}

const strawberryNode = new Node('Berry Tasty')
const vanillaNode = new Node('Vanilla')
const coconutNode = new Node('Coconuts for Coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)
coconutNode.setNextNode(null)

let currentNode = vanillaNode

while(currentNode) {
	console.log(currentNode.data)
	currentNode = currentNode.getNextNode()
}

module.exports = Node;
```


### Single Linked Nodes

A singly linked list is a linear data structure composed of a sequence of elements called nodes. Each node contains two parts: a data element and a reference (or pointer) to the next node in the list. The last node in the list points to null, indicating the end of the list.

Linked Lists:

- Are comprised of nodes
- The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
- Can be unidirectional or bidirectional
- Are a basic data structure, and form the basis for many other data structures
- Have a single head node, which serves as the first node in the list
- Require some maintenance in order to add or remove nodes
- The methods we used are an example and depend on the exact use case and/or programming language being used

Here's a step-by-step explanation of how to implement a singly linked list in JavaScript:

Step 1: Create a Node class
```javascript
class Node {
  constructor(data) {
    this.data = data; // Data element of the node
    this.next = null; // Reference to the next node (initially null)
  }
}
```

Step 2: Create the LinkedList class
```javascript
class LinkedList {
  constructor() {
	  // contains the first node of the linked list
    this.head = null; // The head of the linked list (initially null)
  }
}
```

Step 3: Implement the insert method to add nodes to the linked list
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = newNode;
    } else {
      // Find the last node and make it point to the new node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}
```

Step 4: Implement the display method to print the linked list elements
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    // ... (same as before)
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
```

Now you have a basic implementation of a singly linked list in JavaScript. You can use the `insert()` method to add elements to the list and the `display()` method to print its contents. Here's an example of how to use the linked list:

```javascript
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

list.display(); // Output: 10 20 30
```

In this example, we created a linked list with elements 10, 20, and 30 and displayed its contents. You can further extend the linked list with other methods like deleting nodes, searching for elements, or inserting at specific positions, depending on your requirements.

Common operations on a linked list include:

#### Adding Nodes

You can add nodes to a linked list in different ways:
   - Insertion at the beginning (head) of the list.
   - Insertion at the end (tail) of the list.
   - Insertion after a specific node.
   - Insertion before a specific node.

Adding a new node to the beginning of the list requires you to link your new node to the current head node. This way, you maintain your connection with the following nodes in the list.

#### Removing Nodes

You can remove nodes from a linked list in different ways:
   - Deletion from the beginning (head) of the list.
   - Deletion from the end (tail) of the list.
   - Deletion of a specific node based on its data value or position in the list.

If you accidentally remove the single link to a node, that node’s data and any following nodes could be lost to your application, leaving you with orphaned nodes.

To properly maintain the list when removing a node from the middle of a linked list, you need to be sure to adjust the link on the previous node so that it points to the following node.

Depending on the language, nodes which are not referenced are removed automatically. “Removing” a node is equivalent to removing all references to the node.

Look at the image to see the proper manner of removing a node.

In order to remove `node_b`, you must first link `node_a` to `node_c` (where `node_b` was linking).

Then you can remove `node_b`.

![[node-remove-method.png]]



#### Finding a Node

You can search for a specific node in the linked list based on its data value or any other criterion.

#### Traversing the Linked List

Traversing means moving through the linked list to access and process each node's data. There are two common ways to traverse a linked list:
   - Iteratively: Using a loop to move from one node to the next until the end of the list is reached.
   - Recursively: Using a recursive function to traverse the list.

#### Sample of a singly linked list:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteFromBeginning() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  findNode(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.display(); // Output: 10 20 30

list.insertAtBeginning(5);
list.display(); // Output: 5 10 20 30

list.deleteFromEnd();
list.display(); // Output: 5 10 20

const node = list.findNode(10);
console.log(node); // Output: Node { data: 10, next: Node { data: 20, next: Node { data: 30, next: null } } }
```

These are some of the fundamental operations you can perform on a singly linked list. By combining these operations, you can create more complex algorithms and solve various problems efficiently using linked lists.

#### Another Sample

```javascript

// linked list
const Node = require('./Node');

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	addToHead(data) {
		const newHead = new Node(data);
		const currentHead = this.head;
		this.head = newHead;
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}
	
	addToTail(data) {
		let tail = this.head;
		if (!tail) {
			this.head = new Node(data);
		} else {
			while (tail.getNextNode() !== null) {
				tail = tail.getNextNode();
			}
			tail.setNextNode(new Node(data));
		}
	}
	
	removeHead() {
		const removedHead = this.head;
		if (!removedHead) {
			return;
		}
		this.head = removedHead.getNextNode();
		return removedHead.data;
	}
	
	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}
}

module.exports = LinkedList;

//======
// Node.js

class Node {

	constructor(data) {
		this.data = data;
		this.next = null;
	}
	
	setNextNode(node) {
		if (node instanceof Node || node === null) {
			this.next = node;
		} else {
			throw new Error('Next node must be a member of the Node class.');
		}
	}
	
	getNextNode() {
		return this.next;
	}
}


module.exports = Node;

//======
// seasons.js
const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();
```

#### Swapping Elements in a Linked List

Given an input of a linked list, `data1`, and `data2`, the general steps for doing so is as follows:

1. Iterate through the list looking for the node that matches `data1` to be swapped (`node1`), keeping track of the node’s previous node as you iterate (`node1Prev`)
2. Repeat step 1 looking for the node that matches `data2` (giving you `node2` and `node2Prev`)
3. If `node1Prev` is `null`, `node1` was the head of the list, so set the list’s head to `node2`
4. Otherwise, set `node1Prev`‘s next node to `node2`
5. If `node2Prev` is `null`, set the list’s head to `node1`
6. Otherwise, set `node2Prev`‘s next node to `node1`
7. Set `node1`‘s next node to `node2`‘s next node
8. Set `node2`‘s next node to `node1`‘s next node

```javascript
const LinkedList = require('./LinkedList.js')

const testList = new LinkedList();

for (let i = 0; i <= 10; i++) {
	testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
	console.log(`Swapping ${data1} and ${data2}:`);

	if (data1 === data2) {
		console.log('Elements are the same - no swap to be made');
		return;
	}

	// Finding the Matching and Preceding Nodes
	
	let node1Prev = null;
	let node2Prev = null;
	let node1 = list.head;
	let node2 = list.head;

	while (node1 !== null) {
		if (node1.data === data1) {
			break;
		}
		node1Prev = node1;
		node1 = node1.getNextNode();
	}

	while (node2 !== null) {
		if (node2.data === data2) {
			break;
		}
		node2Prev = node2;
		node2 = node2.getNextNode();
	}

	// check node1 and node2

	if (node1 === null || node2 === null) {
		console.log('Swap not possible - one or more element is not in the list');
		return;
	}

	// Updating the Preceding Nodes’ Pointers

	if (node1Prev === null) {
		list.head = node2;
	} else {
		node1Prev.setNextNode(node2);
	}

	if (node2Prev === null) {
		list.head = node1;
	} else {
		node2Prev.setNextNode(node1);
	}

	// Updating the Nodes’ Next Pointers
	
	let temp = node1.getNextNode();
	
	node1.setNextNode(node2.getNextNode());
	
	node2.setNextNode(temp);

}
```

### Two-Pointer Linked List Techniques

Many common singly linked list problems can be solved by iterating with two pointers. This is sometimes known as the runner technique.

### A doubly linked list

A doubly linked list is a type of data structure in which each element (node) contains a value and two pointers: one pointing to the previous node and another pointing to the next node in the sequence. This bidirectional linkage allows for more efficient traversal in both directions compared to a singly linked list.

Like a singly linked list, a doubly linked list is comprised of a series of nodes. Each node contains data and two links (or pointers) to the next and previous nodes in the list. The head node is the node at the beginning of the list, and the tail node is the node at the end of the list. The head node’s previous pointer is set to `null` and the tail node’s next pointer is set to `null`.

Think of your daily commute on the subway as a real-world example of a doubly linked list. Your home is the head of the list, your place of work is the tail, and every stop in between is another node in the list. In the morning when you take the subway to get to work, you are traversing the list from the head to the tail, using the stop’s next pointer. While this can also be done using a singly linked list, a doubly linked list will also allow you to traverse back through the list easily, using the stop’s previous pointer. You will take the exact same route to get home, just in reverse.

Common operations on a doubly linked list may include:

- adding nodes to both ends of the list
- removing nodes from both ends of the list
- finding, and removing, a node from anywhere in the list
- traversing (or traveling through) the list

Here's a quick review of the main features and operations of a doubly linked list:

1. **Node Structure:**
   Each node in a doubly linked list contains three parts:
   - Value: The data or value stored in the node.
   - Previous Pointer: Points to the previous node in the list.
   - Next Pointer: Points to the next node in the list.

2. **Advantages:**
   - Bidirectional Traversal: You can traverse the list forwards and backwards with ease.
   - Efficient Insertions and Deletions: Adding or removing nodes requires updating fewer pointers compared to a singly linked list.
   - Tail Access: Direct access to the tail node for quick appending.

3. **Operations:**
   - Insertion:
     - Insert at the Beginning: Adjust pointers of the new node, the current head, and the previous head.
     - Insert at the End: Adjust pointers of the new node, the current tail, and the previous tail.
     - Insert at a Specific Position: Adjust pointers of the new node, its neighboring nodes, and their respective pointers.
   - Deletion:
     - Delete from the Beginning: Adjust pointers of the new head and the second node.
     - Delete from the End: Adjust pointers of the new tail and the second-to-last node.
     - Delete from a Specific Position: Adjust pointers of neighboring nodes.
   - Traversal: Traverse the list forwards or backwards by following the next or previous pointers.
   - Searching: Iterate through the list to find a specific value.
   - Reversing: Swap the next and previous pointers of each node to reverse the list.

4. **Use Cases:**
   - Doubly linked lists are useful when you need to frequently traverse a list in both directions.
   - They are often used in applications like text editors for efficient cursor movement and undo/redo operations.

Here's a simplified example of a doubly linked list in JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // ...insertion, deletion, traversal, and other operations...
}
```

Remember that while doubly linked lists offer advantages in certain scenarios, they also have higher memory overhead due to the additional pointers. For most use cases, a singly linked list may be sufficient, but a doubly linked list becomes valuable when bidirectional traversal or efficient insertions/deletions are critical.

![[doubly-list.png]]
#### Adding to the List

In a doubly linked list, adding to the list is a little complicated as we have to keep track of and set the node’s previous pointer as well as update the tail of the list if necessary.
#### Adding to the Head

When adding to the head of the doubly linked list, we first need to check if there is a current head to the list. If there isn’t, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to `null`. If the list is not empty, then we will:

- Set the current head’s previous pointer to our new head
- Set the new head’s next pointer to the current head
- Set the new head’s previous pointer to `null`

#### Adding to the Tail

Similarly, there are two cases when adding a node to the tail of a doubly linked list. If the list is empty, then we make the new node the head and tail of the list and set the pointers to `null`. If the list is not empty, then we:

- Set the current tail’s next pointer to the new tail
- Set the new tail’s previous pointer to the current tail
- Set the new tail’s next pointer to `null`

![[adding-tail-head.png]]
#### Removing from the Head and Tail

Due to the extra pointer and tail property, removing the head from a doubly linked list is slightly more complicated than removing the head from a singly linked list. However, the previous pointer and tail property make it much simpler to remove the tail of the list, as we don’t have to traverse the entire list to be able to do it.

#### Removing the Head

Removing the head involves updating the pointer at the beginning of the list. We will set the previous pointer of the new head (the element directly after the current head) to `null`, and update the head property of the list. If the head was also the tail, the tail removal process will occur as well.

#### Removing the Tail

Similarly, removing the tail involves updating the pointer at the end of the list. We will set the next pointer of the new tail (the element directly before the tail) to `null`, and update the tail property of the list. If the tail was also the head, the head removal process will occur as well.

![[removing-tail-head.png]]
#### Removing from the Middle of the List

It is also possible to remove a node from the middle of the list. Since that node is neither the head nor the tail of the list, there are two pointers that must be updated:

- We must set the removed node’s preceding node’s next pointer to its following node
- We must set the removed node’s following node’s previous pointer to its preceding node

There is no need to change the pointers of the removed node, as updating the pointers of its neighboring nodes will remove it from the list. If no nodes in the list are pointing to it, the node is orphaned.

![[removing.png]]
 
#### Doubly Linked Lists Review

see [ressources](https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-linear-data-structures/modules/wdcp-22-doubly-linked-lists/informationals/wdcp-practice-doubly-linked-lists)

Let’s take a minute to review what we’ve covered about doubly linked lists in this lesson. Doubly Linked Lists:

- Are comprised of nodes that contain links to the next and previous nodes
- Are bidirectional, meaning it can be traversed in both directions
- Have a pointer to a single head node, which serves as the first node in the list
- Have a pointer to a single tail node, which serves as the last node in the list
- Require the pointers at the head of the list to be updated after addition to or removal of the head
- Require the pointers at the tail of the list to be updated after addition to or removed of the tail
- Require the pointers of the surrounding nodes to be updated after removal from the middle of the list

Your browser history is another example of a doubly linked list. When you open your browser, the page that you land on is the head of your list. As you click on things and navigate to new pages, you are moving forward and adding to the tail of your list. If you ever want to go back to something you’ve already visited, you can use the “back” button to move backward through your list. Can you think of another computer use case for a doubly linked list?

#### Sample of doulby linked list 

```javascript
//index.js

const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');
const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');

subway.printList();


// DoublyLinkedList.js

const Node = require('./Node');

  

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;


// node.js

class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class')
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class')
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;

```
### Queues

A queue is a data structure that contains an ordered set of data that follows a FIFO (first in, first out) protocol for accessing that data.

Typically: traffic jam.
Different: dirty plates for being washing manually
 
A queue is a linear collection of nodes that exclusively adds (enqueues) nodes to the tail, and removes (dequeues) nodes from the head of the queue. They can be implemented using different underlying data structures, but one of the more common methods is to use a singly linked list, which is what you will be using for your JavaScript `Queue` class. Think of the queue data structure as an actual queue, or line, in a grocery store. The person at the front gets to leave the line first, and every person who joins the line has to join in the back.

In computer science, a queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the item that is added to the queue first will be the first one to be removed. Queues are commonly used to manage tasks or items in an ordered manner, such as handling tasks in a printer queue or processing tasks in a web application.

In JavaScript, you can implement a queue using arrays or using custom classes. Let's explore both approaches:

**Using Arrays:**
```javascript
const queue = [];

// Enqueue (add) items to the end of the queue
queue.push(1);
queue.push(2);
queue.push(3);

// Dequeue (remove) items from the front of the queue
const item1 = queue.shift(); // Removes 1
const item2 = queue.shift(); // Removes 2

console.log(item1); // Output: 1
console.log(item2); // Output: 2
console.log(queue);  // Output: [3]
```

**Using Custom Queue Class:**
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.size());    // Output: 1
```

In the custom queue class example, we create a `Queue` class with methods for enqueueing, dequeueing, checking if the queue is empty, and getting the size.

Queues have various applications, such as managing asynchronous tasks in a web application, implementing breadth-first search algorithms, or handling events in event-driven programming. They ensure that items are processed in the order they are added, which is often essential for maintaining the desired sequence of operations.

Let’s take a minute to review what we’ve covered about queues in this lesson.

Queues:

- Contain data nodes
- Support three main operations:
- Enqueue adds data to the back of the queue
- Dequeue removes and provides data from the front of the queue
- Peek provides data on the front of the queue
- Can be implemented using a linked list or array
- Bounded queues have a limited size.
- Enqueueing onto a full queue causes a queue overflow
- Queues process data First In, First Out (FIFO)

“Peeking” at the queue only returns the value from the front of the queue. It does not remove the value.

"Enqueue" is a fancy way of saying “add to a queue,” and that is exactly what we’re doing with the `.enqueue()` method.

We can add items to the tail of our queue, but we remove them from the head using a method known as `.dequeue()`, which is another way to say “remove from a queue.”

Our `.dequeue()` removes the current `head` and replaces it with the following node. The `.dequeue()` method should also return the value of the `head` node.

#### Bounded Queues

Some queues require limits on the number of nodes they can have, while other queues don’t. Queues that restrict the number of elements they can store are called _bounded queues._

Let’s make our queue a bounded queue. To account for this, we will need to make some modifications to our `Queue` class so that we can keep track of and limit size where needed.

We’ll be adding a new property to help us out here:

- `.maxSize`, a property that bounded queues can utilize to limit the total node count

In addition, we will add two new methods:

- `.hasRoom()` returns `true` if the queue has space to add another node
- `.isEmpty()` returns `true` if the `size` of a queue is `0`

There are two conditions when enqueuing and dequeuing that we should be aware of and avoid: _underflow_ and _overflow_.
#### Avoiding Underflow

Underflow occurs when we try to remove elements from an already empty queue – we cannot remove a node if it doesn’t exist. Underflow affects queues whether they are bounded or unbounded.

#### Avoiding Overflow

Overflow occurs when we add an element to a queue that does not have room for a new node.

This condition affects bounded queues because they have fixed sizes they cannot exceed. For unbounded queues, though they don’t have a size restriction, at some point the size of the queue will exceed the available memory we can use to store this queue.

#### Review: Queues in JavaScript

Great work! You have just implemented a queue data structure in JavaScript by creating a `Queue` class that:

- follows FIFO protocol with `.enqueue()` and `.dequeue()` methods
- gives you the option of creating bounded queues with a `.maxSize` property
- prevents queue overflow and underflow by keeping track of the queue size


```js

// Node.js

class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }


  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Next node must be a member of the Node class');
    }
    this.next = node;
  }


  setNext(data) {
    this.next = data;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;


// LinkedList.js

const Node = require('./Node');


class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const nextNode = new Node(data);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    output = output.concat("<tail>");
    console.log(output);
  }
}

module.exports = LinkedList;

// Queue.js

const LinkedList = require("./LinkedList");

class Queue {

  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;


// runway.js

const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3)
  flights.forEach(flight => {
    try {
     runway.enqueue(flight)
     console.log(`${flight} taxi to runway.`);
    } catch(ex) {
      console.log('Runway full!');
    }
  });
  return runway;
};

const clear = runway => {
  while(!runway.isEmpty()) {
    const cleared = runway.dequeue()
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };


// script.js

const runway = require('./runway');

const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567'
];

// Enqueue runway with planes
const departing = runway.load(flights);
// Clear each plane to takeoff
runway.clear(departing);

```

Use your foundational understanding of queues to explore more in-depth materials or even try some code challenges. These recommendations are **optional** but will help you hone your skills to become more prepared for the technical interview.

**Additional Resources**:

- [Visualizer: Queue](https://visualgo.net/en/list?slide=5)
- [Video: Queue Datastructure](https://www.youtube.com/watch?v=zp6pBNbUB2U)
- [Cheatsheet: Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)

**Code Challenges**:

- [Beginner - Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls)
- [Beginner - Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets)
- [Intermediate - Reveal Cards in Increasing Order](https://leetcode.com/problems/reveal-cards-in-increasing-order)
- [More Practice Problems](https://leetcode.com/problemset/all/?search=queue)

### Stacks

Stacks are another data structure with a perfectly descriptive name. Like a queue, a stack is a linear collection of nodes that adds (pushes) data to one end of the data structure (let’s say the top, for the purposes of this example). However, unlike a queue, a stack removes data (pops) from the same end of the data structure. Think of it as a stack of books, where you can only pick up the top book, and add a new book to the top.

Typically: dirty plates for being washing manually
Different: traffic jam.

Stacks are often thought of as a “First In, Last Out” (FILO) data structure — the first book you add to the stack won’t be removed until all other books are removed from the stack.

Queues on the other hand are thought of as a “First In, First Out” (FIFO) data structure — the first person in line will be the first person to leave the line.

A real-world computing example of a stack is a web browser’s back/forward function, which is something you will model with a project in JavaScript!

A stack is a data structure which contains an ordered set of data.

Stacks provide three methods for interaction:

- Push - adds data to the “top” of the stack
- Pop - returns and removes data from the “top” of the stack
- Peek - returns data from the “top” of the stack without removing it

Stacks can be implemented using a linked list as the underlying data structure because it’s more efficient than a list or array.

Depending on the implementation, the top of the stack is equivalent to the head node of a linked list and the bottom of the stack is equivalent to the tail node.

A constraint that may be placed on a stack is its size. This is done to limit and quantify the resources the data structure will take up when it is “full”.

Attempting to push data onto an already full stack will result in a _stack overflow_. Similarly, if you attempt to pop data from an empty stack, it will result in a _stack underflow_.

Stacks:

- Contain data nodes
- Support three main operations
    - Push adds data to the top of the stack
    - Pop removes and provides data from the top of the stack
    - Peek reveals data on the top of the stack
- Implementations include a linked list or array
- Can have a limited size
- Pushing data onto a full stack results in a stack overflow
- Stacks process data Last In, First Out (LIFO)

```js

// main.js

const Stack = require('./Stack');

// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6)

// 2. Add pizzas as they are ready until we fill up the stack
Array(6).fill(0).map((x,i) => pizzaStack.push(`Piazza #${++i}`))

// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push('Pizza #7')
} catch(e) {
  console.log(e)
}

// 4. Peek at the pizza on the top of stack and log its value
const pizza = pizzaStack.peek()
console.log(pizza)

// 5. Deliver all the pizzas from the top of the stack down
Array(6).fill(0).map((x,i) => pizzaStack.pop())

// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop()
} catch(e) {
  console.log(e)
}


// Stack.js

const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // Add helper methods below this line
  hasRoom() {
    return this.size < this.maxSize;
  }
  
  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

module.exports = Stack;



// LinkedList.js

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const nextNode = new Node(value);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(value) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(value));
    }
  }

  findNodeIteratively(comparator) {
    let current = this.head;
    while (current) {
      if (comparator(current.value)) {
        return current;
      }
      current = current.getNextNode();
    }
    return null;
  }


  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }

  get size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
}

module.exports = LinkedList;

// Node.sj

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Next node must be a member of the Node class');
    }
    this.next = node;
  }

  setNext(data) {
    this.next = data;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;

``` 


```js
const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();

// ------------------------------
// Initialization
// ------------------------------

const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Home Page";

// ------------------------------
// Helper Functions
// ------------------------------

showCurrentPage = (action) => {
  console.log(`\n{action}`);
  console.log("Current Page:", currentPage);
  console.log("Back Page:", backPages.peek());
  console.log("Next Page:", nextPages.peek());
}

newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("Display");
};

backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Back Page");
};


nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next Page");
};

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------

let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage("Start");

while (!finish) {
  let instructions = baseInfo;
  
  if (!backPages.isEmpty()) {
    instructions += (", " + backInfo);
    showBack = true
  }
  
  if (!nextPages.isEmpty()) {
    instructions += (", " + nextInfo);
    showNext = true
  }

  instructions += (', ' + quitInfo)

  console.log(instructions);

// ------------------------------
// User Interface Part 1
// ------------------------------
  const answer = prompt(question)
  lowerCaseAnswer = answer.toLowerCase()

  if(lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q') {
    newPage(lowerCaseAnswer)

  } else if(showBack && lowerCaseAnswer === 'b') {
    backPage()

  } else if(showNext && lowerCaseAnswer === 'n') {
    nextPage()

  } else if(lowerCaseAnswer === 'b') {
    console.log('Cannot go back a page. Stack is empty.');

  } else if(lowerCaseAnswer === 'n') {
    console.log('Cannot go next a page. Stack is empty.');

  } else if(lowerCaseAnswer === 'q'){
    finish = true

  }

}
```

Use your foundational understanding of stacks to explore more in-depth materials or even try some code challenges. These recommendations are **optional** but will help you hone your skills to become more prepared for the technical interview.

**Additional Resources**:

- [Visualizer: Stacks](https://visualgo.net/en/list?slide=4)
- [Video: Stacks and Queues](https://www.youtube.com/watch?v=1AJ4ldcH2t4)
- [Cheatsheet: Stacks](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)

**Code Challenges**:

- [Beginner - Baseball Game](https://leetcode.com/problems/baseball-game)
- [Beginner - Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
- [Intermediate - Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
- [More Practice Problems](https://leetcode.com/problemset/all/?search=stack)
