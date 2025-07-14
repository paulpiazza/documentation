---
title: Graphs
description: Slim notes.
order: 60
---

### Introduction

Graphs are the perfect data structure for modeling networks, which make them an indispensable piece of your data structure toolkit. They’re composed of nodes, or _vertices_, which hold data, and _edges_, which are a connection between two vertices. A single node is a _vertex_.

- `vertex`: A node in a graph.
- `edge`: A connection between two vertices.
- `adjacent`: When an edge exists between vertices.
- `path`: A sequence of one or more edges between vertices.
- `disconnected`: Graph where at least two vertices have no path connecting them.
- `weighted`: Graph where edges have an associated cost.
- `directed`: Graph where travel between vertices can be restricted to a single direction.
- `cycle`: A path which begins and ends at the same vertex.
- `adjacency matrix`: Graph representation where vertices are both the rows and the columns. Each cell represents a possible edge.
- `adjacency list`: Graph representation where each vertex has a list of all the vertices it shares an edge with.

#### Exemple

This graph represents a social network; people are vertices and edges are friendships. `Ted` is _adjacent_ to `Patty`, `Ron`, and `Alice` because an edge **directly** connects them.

We use a single line for an edge, but these friendships are **bi-directional**. `Patty` is friends with `Ron` and `Ron` is friends with `Patty`.

A _path_ is vertices which are connected by any number of intermediate edges. The paths from `Alice` to `Patty` could go `Alice` to `Ted` to `Patty` **or**, `Alice` to `Ted` to `Ron` to `Patty`.


![[Pasted image 20240210161858.png]]
### Weight graph

This is a _weighted_ graph, where edges have a number or cost associated with traveling between the vertices. When tallying the cost of a path, we add up the **total** cost of the edges used.

These costs are essential to algorithms that find the shortest distance between two vertices.

`Gym` and `Library` are adjacent, there’s one edge between them, but there’s less total cost to travel from `Gym` to `Bakery` to `Library` (10 vs. 9).

In a weighted graph, the shortest path is not always the least expensive.

![[Pasted image 20240210162056.png]]

### Directed Graphs

A _directed_ graph: edges restrict the direction of movement between vertices.

We can move from `spikes` to `lasers`, but not from `lasers` to `spikes`. This differs from earlier examples when every edge was bi-directional.

Note the path `spikes` to `lasers` to `piranhas` to `spikes`. This path is a _cycle_, because it ends on the vertex where it began: `spikes`.

![[Pasted image 20240210162158.png]]

### Representing Graphs

We typically represent the vertex-edge relationship of a graph in two ways: an adjacency list or an adjacency matrix.

An adjacency matrix is a table. Across the top, every vertex in the graph appears as a column. Down the side, every vertex appears again as a row. Edges can be bi-directional, so each vertex is listed twice.

To find an edge between `B` and `P`, we would look for the `B` row and then trace across to the `P` column. The contents of this cell represent a possible edge.

Our diagram uses `1` to mark an edge, `0` for the absence of an edge. In a weighted graph, the cell contains the cost of that edge.

In an adjacency list, each vertex contains a list of the vertices where an edge exists. To find an edge, one looks through the list for the desired vertex.

![[Pasted image 20240210162326.png]]


### Create your graph

With this in mind, we will create our `Graph` with the following requirements:

- A `Vertex` can store any data.
    
- A `Vertex` maintains a list of connections to other vertices, represented by a list of `Edge` instances.
    
- A `Vertex` can add and remove edges going to another `Vertex`.
    
- A `Graph` stores all of its vertices, represented by a list of `Vertex` instances.
    
- A `Graph` knows if it is directed or undirected.
    
- A `Graph` knows if it is weighted or unweighted.
    
- A `Graph` can add and remove its own vertices.
    
- A `Graph` can add and remove edges between stored vertices.

```js
// trainNetwork.js

  

const Graph = require('./Graph.js');

  

const trainNetwork = new Graph(true, true)

  

const losAngelesStation = trainNetwork.addVertex('Los Angeles')

const sanFranciscoStation = trainNetwork.addVertex('San Francisco')

const newYorkStation = trainNetwork.addVertex('New York')

const atlantaStation = trainNetwork.addVertex('Atlanta')

const denverStation = trainNetwork.addVertex('Denver')

const calgaryStation = trainNetwork.addVertex('Calgary')

  

trainNetwork.addEdge(sanFranciscoStation, losAngelesStation, 400)

trainNetwork.addEdge(losAngelesStation, sanFranciscoStation, 400)

trainNetwork.addEdge(newYorkStation, denverStation, 1800)

trainNetwork.addEdge(denverStation, newYorkStation, 1800)

trainNetwork.addEdge(calgaryStation, denverStation, 1000)

trainNetwork.addEdge(denverStation, calgaryStation, 1000)

trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100)

trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100)

  

trainNetwork.print()

console.log('=====')

  

trainNetwork.removeEdge(newYorkStation, denverStation)

  

trainNetwork.removeEdge(calgaryStation, denverStation)

trainNetwork.removeEdge(denverStation, calgaryStation)

trainNetwork.removeVertex(calgaryStation)

trainNetwork.print()

  
  

// Graph.js

  

const Edge = require('./Edge.js');

const Vertex = require('./Vertex.js');

  

class Graph {

    constructor(isWeighted = false, isDirected = false) {

        this.vertices = [];

        this.isWeighted = isWeighted;

        this.isDirected = isDirected;

    }

  

    addVertex(data) {

        const newVertex = new Vertex(data);

        this.vertices.push(newVertex);

  

        return newVertex;

    }

  

    removeVertex(vertex) {

        this.vertices = this.vertices.filter(v => v !== vertex);

    }

  

    addEdge(vertexOne, vertexTwo, weight) {

        const edgeWeight = this.isWeighted ? weight : null;

  

        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {

            vertexOne.addEdge(vertexTwo, edgeWeight);

  

            if (!this.isDirected) {

                vertexTwo.addEdge(vertexOne, edgeWeight);

            }

        } else {

            throw new Error('Expected Vertex arguments.');

        }

    }

  

    removeEdge(vertexOne, vertexTwo) {

        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {

            vertexOne.removeEdge(vertexTwo);

  

            if (!this.isDirected) {

                vertexTwo.removeEdge(vertexOne);

            }

        } else {

            throw new Error('Expected Vertex arguments.');

        }

    }

  

    print() {

        this.vertices.forEach(vertex => vertex.print());

    }

}

  

module.exports = Graph;

  

// vertex.js

  

const Edge = require('./Edge.js');

  

class Vertex {

    constructor(data) {

        this.data = data;

        this.edges = [];

    }

  

    addEdge(vertex, weight) {

        if (vertex instanceof Vertex) {

            this.edges.push(new Edge(this, vertex, weight));

        } else {

            throw new Error('Edge start and end must both be Vertex');

        }

    }

  

    removeEdge(vertex) {

        this.edges = this.edges.filter(edge => edge.end !== vertex);

    }

  

    print() {

        const edgeList = this.edges.map(edge =>

            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

  

        const output = `${this.data} --> ${edgeList.join(', ')}`;

        console.log(output);

    }

}

  

module.exports = Vertex;

  

// Edge.js

  

class Edge {

    constructor(start, end, weight = null) {

        this.start = start;

        this.end = end;

        this.weight = weight;

    }

}

  

module.exports = Edge;
```

**Additional Resources**:

- [Visualizer: Graphs](https://visualgo.net/en/graphds?slide=1)
- [Video: Introduction to Graph Theory](https://www.youtube.com/watch?v=5hPfm_uqXmw)
- [GitHub Repo: Graph JS Practice](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph)

**Code Challenges**:

- [Beginner - Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)
- [Beginner - Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/)
- [Intermediate - Clone Graph](https://leetcode.com/problems/clone-graph/)
- [More Practice Problems](https://leetcode.com/problemset/all/?search=graph)

