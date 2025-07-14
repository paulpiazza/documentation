---
title: Search and Graph Search Algorithms
description: Slim notes.
order: 62
---

The context of this chapter is your array is already sorted.
- [Interactive: Searching Sorted List](https://www.cs.usfca.edu/~galles/visualization/Search.html)
- [Interactive: Binary Search Tree](https://visualgo.net/en/bst?slide=1)

- [Beginner - Binary Search](https://leetcode.com/problems/binary-search/)
- [Beginner - Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [Beginner - Convert Sorted Array to Bnary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
- [Beginner - Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/)
### Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

Here's how it works:

1. Find the middle element of the array.
2. If the middle element is equal to the target value, return the index.
3. If the target value is less than the middle element, repeat the search on the left half of the array.
4. If the target value is greater than the middle element, repeat the search on the right half of the array.
5. If the range is empty, the target is not in the array.

In each iteration, we are **cutting the list in half.** The time complexity is `O(log N)`.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = arr[mid];

    if (foundVal === target) {
      return mid; // Element found
    } else if (foundVal < target) {
      left = mid + 1; // Look in right half
    } else {
      right = mid - 1; // Look in left half
    }
  }

  return -1; // Element not found
}

// sorted list
const myArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
console.log(binarySearch(myArray, target)); // Output will be 4 (the index of the target)
```

### Binary Search Trees (BST)

A Binary Search Tree (BST) is a tree data structure in which each node has at most two children, referred to as the left child and the right child. For each node, all elements in the left subtree are less than the node's key value, and all elements in the right subtree are greater.

Here's how a BST supports operations:

- **Insertion**: To insert a new value, start at the root and compare it to the node's value. Go to the left child if it's less or to the right child if it's more. Repeat this process until you find an empty spot where you can insert the new value.
- **Search**: Searching works similarly to insertion. You start at the root and go left or right depending on whether the value you're looking for is less or more than the node's value.
- **Traversal**: To visit all nodes in a BST, you can use in-order traversal (left, root, right), which gives you sorted order of elements.

Here's a simple example of a BST class in JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);

const found = bst.search(bst.root, 7);
console.log(found); // Output will be Node with data 7
```

This example shows how to create a BST and perform basic operations like insertion and search. The `insert` function places a new value in its correct position in the tree, while `search` looks for a value and returns the node containing it.

### Traversing a binary

Traversing a binary tree involves visiting all the nodes in the tree in a specific order. There are several common strategies for tree traversal:

1. **In-Order Traversal**:
   - Visit the left subtree.
   - Visit the node.
   - Visit the right subtree.
   This results in visiting the nodes in ascending order for BSTs.

2. **Pre-Order Traversal**:
   - Visit the node.
   - Visit the left subtree.
   - Visit the right subtree.
   This is used to create a copy of the tree or to get a prefix expression on an expression tree.

3. **Post-Order Traversal**:
   - Visit the left subtree.
   - Visit the right subtree.
   - Visit the node.
   This is useful for deleting the tree or to get a postfix expression on an expression tree.

4. **Level-Order Traversal**:
   - Visit nodes level by level from top to bottom.
   This is often implemented using a queue and is useful for searching the tree as it searches all nodes at a present depth before moving on to the nodes at the next depth level.

Here's an example of how you might implement in-order, pre-order, and post-order traversals in JavaScript:

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}

// Example usage:
// Construct a binary tree:
//      1
//     / \
//    2   3
//   / \
//  4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log('In-Order Traversal:');
inOrderTraversal(root); // Outputs: 4, 2, 5, 1, 3

console.log('Pre-Order Traversal:');
preOrderTraversal(root); // Outputs: 1, 2, 4, 5, 3

console.log('Post-Order Traversal:');
postOrderTraversal(root); // Outputs: 4, 5, 2, 3, 1
```

For each of these traversal methods, we're using a recursive approach that makes it easy to visit all nodes in the desired order. The `console.log` statements are where we "visit" each node and print its value. In a real-world application, you might do something more complex at each visit, such as processing data or building a new data structure.

Example of in-order traversing.

For this lesson, we will implement the inorder option. The advantage of this option is that the data is displayed in a sorted order from the smallest to the biggest.

To illustrate, let’s say we have a binary tree that looks like this:

```pseudo
           15
     /------+-----\
    12            20
   /   \         /   \   
 10     13     18     22
 / \   /  \    / \   /  \
8  11 12  14  16 19 21  25
```

We begin by traversing the left subtree at each level, which brings us to `8`, `10` and `11` reside. The [inorder traversal](https://www.codecademy.com/resources/docs/general/binary-search-tree/inorder-traversal) would be:

```pseudo
8, 10, 11
```

We ascend one level up to visit root node `12` before we descend back to the bottom where the right subtree of `12`, `13`, and `14` resides. Inorder traversal continues with:

```pseudo
12, 12, 13, 14
```

We again ascend one level up to visit root node `15` before we traverse the right subtree starting at the bottom level again. We continue with the bottom leftmost subtree where `16`, `18` and `19` reside. The inorder traversal continues with:

```pseudo
15, 16, 18, 19
```

We ascend one level up to visit root node `20` before we descend back to the bottom where the rightmost subtree of `21`, `22` and `25` resides.

Traversal finishes with:

```pseudo
20, 21, 22, 25
```

The entire traversal becomes:

```pseudo
8, 10, 11, 12, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 25
```

Notice that all the values displayed are sorted in ascending order.

### Graph search BFS and DFS

**Additional Resources**:

- [Interactive: Graph Traversal](https://visualgo.net/en/dfsbfs?slide=1)

**Code Challenges**:

- [Beginner - Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)
- [Beginner - Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/)    
- [Intermediate - Clone Graph](https://leetcode.com/problems/clone-graph/)


Using [graphs](https://www.codecademy.com/resources/docs/general/graphs) to model complex networks is pretty swell, but one way that graphs can really come in handy is with _graph search_ algorithms. You can use a graph search [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) to traverse the entirety of a graph data structure in search of a specific vertex value.

There are two common approaches to using a graph search to progress through a graph:

- depth-first search, known as _DFS_ follows each possible path to its end
- breadth-first search, known as _BFS_ broadens its search from the point of origin to an ever-expanding circle of neighboring vertices


The performance of depth-first search (DFS) and breadth-first search (BFS) can be analyzed in terms of time complexity and space complexity:

#### Time Complexity:

For both DFS and BFS, the time complexity is determined by the number of vertices (V) and the number of edges (E) in the graph.

- **DFS Time Complexity**: O(V + E)
  DFS visits every vertex once and examines every edge in the graph once (in the case of an adjacency list representation), so the time complexity is O(V + E).

- **BFS Time Complexity**: O(V + E)
  Like DFS, BFS also visits every vertex once and examines every edge once when the graph is represented by an adjacency list, leading to the same time complexity of O(V + E).

#### Space Complexity:

The space complexity depends on how much memory the algorithm uses.

- **DFS Space Complexity**: O(V)
  In the worst case, DFS will need to store all the vertices in the stack (either the system call stack due to recursion or an explicit stack), which happens when all vertices are connected in a line. So, the space complexity is O(V).

- **BFS Space Complexity**: O(V)
  BFS uses a queue to store all the vertices on the current level, and in the worst-case scenario, this could be all the vertices if they are all connected to a central node. Therefore, BFS also has a space complexity of O(V).

#### Practical Considerations:

- **DFS**:
  - DFS can be more space-efficient than BFS, as it's possible that it doesn't need to store all vertices at once if the graph has a lot of depth and less breadth.
  - DFS can be preferred for scenarios where solutions are likely to be far from the root, or if you want to visit every node in the graph.
  - It can get trapped in deep paths that don't lead to a solution (or the target node) if not implemented with cycle detection.
  - Use Stacks

- **BFS**:
  - BFS can use more memory if the graph has a lot of breadth (e.g., a shallow tree with many leaves).
  - BFS is generally better for finding the shortest path on unweighted graphs because it explores all neighbors at a given depth before moving on to the next level.
  - It can be slower than DFS if the target node is deeper because it explores all neighbors level by level.
  - Use Queues
  - Typically used for GPS - google map!

Both algorithms are complete, meaning they will find a solution if one exists, but neither is inherently optimal unless additional constraints are added (like in an unweighted graph for BFS). Their performance can also vary based on the data structure used for representing the graph (e.g., adjacency matrix vs. adjacency list) and specific characteristics of the graph like density, connectivity, and whether it contains cycles.


#### Traversal Order


To enable searching, we add vertices to a list, _visited_. This list is pretty important because it keeps the search from visiting the same vertex multiple times! This is particularly vital for cyclical graphs where you might otherwise end up in an infinite loop.

Well, it turns out that in addition to path-finding, depth-first search is pretty adept at organizing vertices (or vertex values) with a clear order of visitation from beginning to end. There are three main traversal orders that you’ll come across for graph traversal:

- _Preorder_, in which each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack
- _Postorder_, in which each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack
- Reverse Post-Order (also known as _Topological Sort_), which returns an output list that is exactly the reverse of the post-order list

A pre-order DFS traversal would come in handy and we might end up with the following list. (We’ll assume here that this [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) prefers visiting things in alphabetical order if there is a choice.):

```
["Lasers", "Lava", "Snakes", "Spikes", "Piranhas"]
```

Now, let’s say we want the same values, but with each value only added to the list once its vertex has been popped from the stack. In this case, our post-order DFS traversal would result in a list that looked like:

```
["Spikes", "Snakes", "Lava", "Piranhas", "Lasers"]
```

You may notice that the post-order list is not the reverse of the pre-order list. A reverse post-order list would still begin with “Lasers”, but then begin to differ:

```
["Lasers", "Piranhas", "Lava", "Snakes", "Spikes"]
```

![[Pasted image 20240204111726.png]]

#### Review

- You can use a graph search [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) to traverse the entirety of a graph data structure to locate a specific value
- Vertices in a graph search include a “visited” list to keep track of whether or not each vertex has been checked
- Depth-first search (DFS) and breadth-first search (BFS) are two common approaches to graph search
- The [runtime](https://www.codecademy.com/resources/docs/general/runtime) for graph search algorithms is O(vertices + edges)
- DFS, which employs either recursion or a stack data structure, is useful for determining whether a path exists between two points
- BFS, which generally relies on a queue data structure, is helpful in finding the shortest path between two points
- There are three common traversal orders which you can apply with DFS to generate a list of all values in a graph: pre-order, post-order, and reverse post-order

### Depth-First Search (DFS)

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.

Here are the steps for DFS, specifically in a binary tree (but it also applies to graphs):

1. Start at the root node.
2. If possible, visit an adjacent unvisited node, mark it as visited, and push it on a stack.
3. If you can't follow step 2, and if the stack is not empty, pop a node from the stack.
4. Repeat steps 2 and 3 until the stack is empty.

DFS can be implemented using recursion or using a stack and iteration.

#### Example of DFS in a Binary Tree using Recursion:

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstSearch(node) {
  if (node === null) return;
  console.log(node.value); // Visit the node
  depthFirstSearch(node.left); // Traverse left subtree
  depthFirstSearch(node.right); // Traverse right subtree
}

// Using the same binary tree structure from the previous example:
//      1
//     / \
//    2   3
//   / \
//  4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

depthFirstSearch(root); // Outputs: 1 2 4 5 3
```


```js
const testGraph = require('./testGraph.js');


const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {

  callback(start);

  start.edges.forEach((edge) => {

    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => { console.log(vertex.data) });


const { Graph } = require('./Graph.js');

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex('v0.0.0');
const v1 = simpleGraph.addVertex('v1.0.0');
const v2 = simpleGraph.addVertex('v2.0.0');

const v11 = simpleGraph.addVertex('v1.1.0');
const v12 = simpleGraph.addVertex('v1.2.0');
const v21 = simpleGraph.addVertex('v2.1.0');

const v111 = simpleGraph.addVertex('v1.1.1');
const v112 = simpleGraph.addVertex('v1.1.2');
const v121 = simpleGraph.addVertex('v1.2.1');
const v211 = simpleGraph.addVertex('v2.1.1');

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);  

module.exports = simpleGraph;

```
### Breadth-First Search (BFS)

Breadth-first search (BFS) is another algorithm for traversing or searching tree or graph data structures. It starts at the root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

Here's how BFS works:

1. Start by putting the root node into a queue.
2. Remove the front node from the queue and print it.
3. Insert all its children into the queue.
4. Repeat steps 2 and 3 until the queue is empty.

BFS is typically implemented using a queue.

#### Example of BFS in a Binary Tree:

```javascript
function breadthFirstSearch(root) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift(); // Remove from front of the queue
    console.log(current.value); // Visit the node

    if (current.left !== null) {
      queue.push(current.left); // Add left child to the queue
    }
    if (current.right !== null) {
      queue.push(current.right); // Add right child to the queue
    }
  }
}

// Using the same binary tree structure from above:
//      1
//     / \
//    2   3
//   / \
//  4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

breadthFirstSearch(root); // Outputs: 1 2 3 4 5
```

In both DFS and BFS, you can see that we visit every node exactly once. The difference lies in the order in which nodes are visited. DFS goes deep into one direction first while BFS goes level by level.


```js
const LinkedList = require('./LinkedList');
class Queue {

  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error('Queue is full!');
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error('Queue is empty!');
    }
  }
}

module.exports = Queue;

const { Graph } = require('./Graph.js');

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex('v0.0.0');
const v1 = simpleGraph.addVertex('v1.0.0');
const v2 = simpleGraph.addVertex('v2.0.0');
const v11 = simpleGraph.addVertex('v1.1.0');
const v12 = simpleGraph.addVertex('v1.2.0');
const v21 = simpleGraph.addVertex('v2.1.0');
const v111 = simpleGraph.addVertex('v1.1.1');
const v112 = simpleGraph.addVertex('v1.1.2');
const v121 = simpleGraph.addVertex('v1.2.1');
const v211 = simpleGraph.addVertex('v2.1.1');

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);
simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);
simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);

module.exports = simpleGraph


const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    })
  }
};

breadthFirstTraversal(testGraph.vertices[0]);

```

### Dijkstra's Algorithm

Dijkstra's Algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge path costs, producing a shortest path tree. This algorithm is often used in routing and as a subroutine in other graph algorithms.

- Dijkstra’s [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) is an algorithm to find all of the shortest distances between a start vertex and the rest of the vertices in a graph.
- The algorithm works by keeping track of all the distances and updating the distances as it conducts a breadth-first search.
- Dijkstra’s algorithm runs in O((E+V)log V).

#### How it Works:

1. **Initialization**: Start with a set of unvisited nodes and assign a tentative distance value to every node: set it to zero for our initial node and to infinity for all other nodes.
2. **Visit the Node**: Set the initial node as current. Mark all other nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
3. **For the Current Node**: Consider all of its unvisited neighbors and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
4. **Update Unvisited Set**: After considering all of the unvisited neighbors of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will not be checked again.
5. **Select Next Node**: Select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node," and go back to step 3.
6. **Termination**: When the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when all possible destinations are unreachable), the algorithm has finished.

#### Example:

Let's say we have a graph with nodes A, B, C, D, and E, with A being the starting point. The distances between them are as follows:

- A to B: 6
- A to D: 1
- B to D: 2
- B to E: 2
- B to C: 5
- C to E: 5
- D to E: 1

Using Dijkstra's Algorithm, we would find the shortest path from A to all other nodes as follows:

- Start at A, distances are: A=0, B=∞, C=∞, D=∞, E=∞.
- Visit A, update distances of neighbors: B=6, D=1.
- Visit D (smallest distance), update neighbors: E=2 (1+1), B=3 (1+2).
- Visit B (next smallest distance), update neighbors: C=8 (3+5).
- Visit E (next smallest distance), no updates since E to C is not shorter than current.
- Visit C (final node), no updates needed.

The shortest paths from A are then: A to B via D with distance 3, A to C via B with distance 8, A to D directly with distance 1, and A to E via D with distance 2.


#### Performance:

How efficient is Dijkstra’s algorithm? Let’s break it into different parts:

- Searching through the graph
- Keeping track of distances

Just like breadth-first search and depth-first search, to search through an entire graph, in the worst case, we would go through all of the edges and all of the vertices resulting in a [runtime](https://www.codecademy.com/resources/docs/general/runtime) of O(E + V).

For Dijkstra’s, we use a min-heap to keep track of all the distances. Searching through and updating a min-heap with V nodes takes O(log V) because in each layer of the min-heap, we reduce the number of nodes we are looking at by a factor of 2.

![Min-Heap](https://content.codecademy.com/programs/cs-path/dijkstra's%20conceptual/min%20heap)

In the worst case, we would update the min-heap every iteration. Since there are at most E + V iterations of Dijkstra’s and it takes log V to update a min-heap in the worst case, then the runtime of Dijkstra’s is **O((E+V)log V)**.

![[Pasted image 20240204173335.png]]


The performance of Dijkstra's Algorithm depends on how you implement it:

- **Using a simple array or list**:
  - Time Complexity: O(V^2), where V is the number of vertices.
  - This is because finding the smallest distance in the unvisited set requires scanning all elements in the worst case.

- **Using a min-priority queue implemented by a binary heap**:
  - Time Complexity: O((V + E) log V), where V is the number of vertices and E is the number of edges.
  - The priority queue allows for faster determination of the next node to process.

- **Using a Fibonacci heap**:
  - Time Complexity: O(E + V log V).
  - This is theoretically optimal, but due to large constants in Fibonacci heap operations, it's not often used in practice compared to binary heaps.

Dijkstra's Algorithm is efficient for graphs with a large number of edges where an exhaustive search is impractical. However, it does not accommodate graphs with negative edge weights; for those scenarios, algorithms like Bellman-Ford are used.

The priority queue is used to iterate through every connection in the graph with a shorter path and reevaluate any connections through the shorter path.


