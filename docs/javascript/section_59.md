---
title: Complex data structures
description: Slim notes.
order: 59
---

### Hash Maps

#### Tables

A data structure’s main utility is allowing for data to be represented in a way that resembles the way people will use that data. In some cases, the primary function of that data is that it will be sequenced through like a list and so we use a data structure that allows for easier iteration, like a linked list. In others, the usefulness comes from specifying interrelationships within the data.

In the case of tabular data there is a relationship between the elements of a row. Each column corresponds to a different feature of the row. Let’s consider the following table:

|State|State Flower|
|---|---|
|Alabama|Camellia|
|Hawaii|Hibiscus|
|Mississippi|Magnolia|
|New York|Rose|
|West Virginia|Rhododendron|

Each `State` on the left corresponds to a specific `State Flower` given on the right. For instance, “New York” corresponds to “Rose”. This kind of table, with only two columns, represents a special relationship that mathematicians would call a “map”. This table maps states to state flowers, but many other relationships can be modeled with maps.

#### Maps

Being a _map_ means relating two pieces of information, but a map also has one further requirement. Let’s consider the following table:

|Musician|State of Birth|
|---|---|
|Miles Davis|Illinois|
|John Coltrane|North Carolina|
|Duke Ellington|Ohio|
|Dizzy Gillespie|South Carolina|
|Thelonious Monk|North Carolina|

  
In the above table we map different jazz musicians to the state where they were born. When talking about a map we describe the inputs (jazz musicians, in this case) as the _keys_ to the map. The output (here the state of origin) is said to be the _value_ at a given key.

In order for a relationship to be a map, every key that is used can only be the key to a single value. In this example every musician can only have one state that they were born in, so it works. There doesn’t need to be a value for every possible key, there just can’t be more than one value for a given key. For instance, Miles Davis can’t be born in both Illinois and Kentucky.

If we looked at this relationship the other way, with states as the keys and jazz musicians born in a given state as values, this would not be a map. In the example above, if we look at “North Carolina” and try to get _the_ jazz musician from that state, we’ll find it very difficult to do. Our relationship would give two different outputs: “John Coltrane” and “Thelonious Monk”.

We would still be able to describe that relationship with a table, but it wouldn’t be a map, and so we can’t save such a relationship using a hash map.

#### Hash Map Methodology

In the case of a map between two things, we don’t really care about the exact _sequence_ of the data. We only care that a given input, when fed into the map, gives the accurate output. Developing a data structure that performs this is tricky because computers care much more about values than relationships. A computer doesn’t really care to memorize the astrological signs of all of our friends, so we need to trick the computer into caring.

We perform this trick using a structure that our computer is already familiar with, an array. An array uses indices to keep track of values in memory, so we’ll need a way of turning each key in our map to an index in our array.

Imagine we want our computer to remember that our good friend Joan McNeil is a Libra. We take her name, and we turn that name into a number. Let’s say that the number we correspond with the name “Joan McNeil” is 17. We find the 17th index of the array we’re using to store our map and save the value (Libra) there.

How did we get 17, though? We use a special function that turns data like the string “Joan McNeil” into a number. This function is called a _hashing function_, or a hash function. Hashing functions are useful in many domains, but for our data structure the most important aspect is that a hashing function returns an array index as output.

#### Hash Functions

A hash function takes a string (or some other type of data) as input and returns an array index as output. In order for it to return an array index, our hash map implementation needs to know the size of our array. If the array we are saving values into only has 4 slots, our hash map’s hashing method should not return an index bigger than that.

In order for our hash map implementation to guarantee that it returns an index that fits into the underlying array, the hash function will first compute a value using some scoring metric: this is the hash value, hash code, or just the _hash_. Our hash map implementation then takes that hash value [mod](https://en.wikipedia.org/wiki/Modulo_operation) the size of the array. This guarantees that the value returned by the hash function can be used as an index into the array we’re using.

It is actually a defining feature of all hash functions that they greatly reduce any possible inputs (any string you can imagine) into a much smaller range of potential outputs (an integer smaller than the size of our array). For this reason, hash functions are also known as _compression functions_.

Much like an image that has been shrunk to a lower resolution, the output of a hash function contains less data than the input. Because of this, hashing is not a reversible process. With just a hash value it is impossible to know for sure the key that was plugged into the hashing function.
#### How to Write a Hash Function

You might be thinking at this point that we’ve glossed over a very important aspect of a hash table here. We’ve mentioned that a hash function is necessary, and described some features of what a hash function does, but never really given an implementation of a hash function that does not feel like a toy example.

Part of this is because a hash function needs to be simple by design. Performing complex mathematical calculations that our hash table needs to compute every time it wants to assign or retrieve a value for a key will significantly damage a hash table’s performance for two things that it should be able to do quickly.

Hash functions also need to be able to take whatever types of data we want to use as a key. We only discussed strings, a very common use case, but it’s possible to use numbers as hash table keys as well.

A very common hash function for integers, for example, is to perform the modular operation on it to make sure it’s less than the size of the underlying array. If the integer is already small enough to be an index into the array, there’s nothing to be done.

Many hash functions implementations for strings take advantage of the fact that strings are represented internally as numerical data. Frequently a hash function will perform a shift of the data bitwise, which is computationally simple for a computer to do but also can predictably assign numbers to strings.

#### Basic Hash Maps

Now that we have all of the main ingredients for a hash map, let’s put them all together. First, we need some sort of associated data that we’re hoping to preserve. Second, we need an array of a fixed size to insert our data into. Lastly, we need a hash function that translates the keys of our array into indexes into the array. The storage location at the index given by a hash is called the _hash bucket_.

Let’s use the following example for our hash map:

|Key: Album Name|Value: Release Year|
|---|---|
|The Low End Theory|1991|
|Midnight Marauders|1993|
|Beats, Rhymes and Life|1996|
|The Love Movement|1998|

  
Our map here relates to several A Tribe Called Quest studio albums with the year they were produced in. We’ll need an array of at least size 4 to contain all of these elements. And a way to turn each album name into an index into that array.

#### Collisions

Remember hash functions are designed to compress data from a large number of possible keys to a much smaller range. Because of this compression, it’s likely that our hash function might produce the same hash for two different keys. This is known as a _hash collision_. There are several strategies for resolving hash collisions.

The first strategy we’re going to learn about is called _separate chaining_. The separate chaining strategy avoids collisions by updating the underlying data structure. Instead of an array of values that are mapped to by hashes, it could be an array of linked lists!
#### Separate Chaining

A hash map with a linked list separate chaining strategy follows a similar flow to the hash maps that have been described so far. The user wants to assign a value to a key in the map. The hash map takes the key and transforms it into a hash code. The hash code is then converted into an index to an array using the modulus operation. If the value of the array at the hash function’s returned index is empty, a new linked list is created with the value as the first element of the linked list. If a linked list already exists at the address, append the value to the linked list given.

This is effective for hash functions that are particularly good at giving unique indices, so the linked lists never get very long. But in the worst-case scenario, where the hash function gives all keys the same index, lookup performance is only as good as it would be on a linked list. Hash maps are frequently employed because looking up a value (for a given key) is quick. Looking up a value in a linked list is much slower than a perfect, collision-free hash map of the same size. A hash map that uses separate chaining with linked lists but experiences frequent collisions loses one of its most essential features.

#### Saving Keys

A hash collision resolution strategy like separate chaining involves assigning two keys with the same hash to different parts of the underlying data structure. How do we know which values relate back to which keys? If the linked list at the array index given by the hash has multiple elements, they would be indistinguishable to someone with just the key.

If we save both the key and the value, then we will be able to check against the saved key when we’re accessing data in a hash map. By saving the key with the value, we can avoid situations in which two keys have the same hash code where we might not be able to distinguish which value goes with a given key.

Now, when we go to read or write a value for a key we do the following: calculate the hash for the key, find the appropriate index for that hash, and begin iterating through our linked list. For each element, if the saved key is the same as our key, return the value. Otherwise, continue iterating through the list comparing the keys saved in that list with our key.

#### Open Addressing: Linear Probing

Another popular hash collision strategy is called _open addressing_. In open addressing we stick to the array as our underlying data structure, but we continue looking for a new index to save our data if the first result of our hash function has a different key’s data.

A common open method of open addressing is called _probing_. Probing means continuing to find new array indices in a fixed sequence until an empty index is found.

In linear probing, when a collision occurs, you search for the next available slot (in a linear sequence) and insert the key there. If that slot is also occupied, you continue searching linearly until an empty slot is found.

Suppose we want to associate famous horses with their owners. We want our first key, “Bucephalus”, to store our first value, “Alexander the Great”. Our hash function returns an array index 3 and so we save “Alexander the Great”, along with our key “Bucephalus”, into the array at index 3.

After that, we want to store “Seabiscuit”s owner “Charles Howard”. Unfortunately “Seabiscuit” also has a hash value of 3. Our probing method adds one to the hash value and tells us to continue looking at index 4. Since index 4 is open we store “Charles Howard” into the array at index 4. Because “Seabiscuit” has a hash of 3 but “Charles Howard” is located at index 4, we must also save “Seabiscuit” into the array at that index.

When we attempt to look up “Seabiscuit” in our Horse Owner’s Hash Map, we first check the array at index 3. Upon noticing that our key (Seabiscuit) is different from the key sitting in index 3 (Bucephalus), we realize that this can’t be the value we were looking for at all. Only by continuing to the next index do we check the key and notice that at index 4 our key matches the key saved into the index 4 bucket. Realizing that index 4 has the key “Seabiscuit” means we can retrieve the information at that location, Seabiscuit’s owner’s name: Charles Howard.

#### Other Open Addressing Techniques

There are more sophisticated ways to find the next address after a hash collision, although anything too calculation-intensive would negatively affect a hash table’s performance. Linear probing systems, for instance, could jump by five steps instead of one step.

In a quadratic probing open addressing system, we add increasingly large numbers to the hash code. At the first collision we just add 1, but if the hash collides there too we add 4 ,and the third time we add 9. Having a probe sequence change over time like this avoids clustering.

_Clustering_ is what happens when a single hash collision causes additional hash collisions. Imagine a hash collision triggers a linear probing sequence to assigns a value to the next hash bucket over. Any key that would hash to this “next bucket” will now collide with a key that, in a sense, doesn’t belong to that bucket anyway.

As a result the new key needs to be assigned to the next, next bucket over. This propagates the problem because now there are two hash buckets taken up by key-value pairs that were assigned as a result of a hash collision, displacing further pairs of information we might want to save to the table.

#### Reviews

A hash map is:

- Built on top of an array using a special indexing system.
- A key-value storage with fast assignments and lookup.
- A table that represents a map from a set of keys to a set of values.

Hash maps accomplish all this by using a hash function, which turns a key into an index into the underlying array.

A hash collision is when a hash function returns the same index for two different keys.

There are different hash collision strategies. Two important ones are separate chaining, where each array index points to a different data structure, and open addressing, where a collision triggers a probing sequence to find where to store the value for a given key.

### Intro to Hash Maps

_Hash maps_ are data structures that serve as efficient key-value stores. They are capable of assigning and retrieving data in the fastest way possible. This is because the underlying data structure that hash maps use is an array.

A value is stored at an array index determined by plugging the key into a hash function. Because we always know exactly where to find values in a hash map, we have constant access to any of the values it contains.

This quick access to values makes a hash map a good choice of data structure whenever we need to store a lot of values but need fast look-up time.

A hash map (or hash table) is a data structure that allows you to store key-value pairs and provides efficient access to values based on their keys. In JavaScript, you can implement a hash map using objects or the built-in `Map` object.

#### Using Objects

```javascript
class HashMap {
    constructor() {
        this.data = {};
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }

    has(key) {
        return this.data.hasOwnProperty(key);
    }

    delete(key) {
        delete this.data[key];
    }
}

// Example usage
const map = new HashMap();
map.set("name", "John");
map.set("age", 30);

console.log(map.get("name")); // Output: John
console.log(map.get("age"));  // Output: 30
console.log(map.has("name")); // Output: true

map.delete("age");
console.log(map.get("age"));  // Output: undefined
```

#### Using Array

You can implement a simple hash map using an array in JavaScript. The idea is to use an array as a "bucket" to store key-value pairs. Each key is hashed to an index within the array, and the value associated with that key is stored at that index.


```javascript
class HashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.buckets[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (const entry of bucket) {
            if (entry.key === key) {
                return entry.value;
            }
        }
        
        return undefined;
    }
}

// Example usage
const map = new HashMap();
map.set("name", "John");
map.set("age", 30);

console.log(map.get("name")); // Output: John
console.log(map.get("age"));  // Output: 30
```

In this example, the `HashMap` class uses an array called `buckets` to store key-value pairs. The `hash` function converts the key to an index within the array. Each bucket is an array itself, containing key-value pairs. When you set a value, it's added to the appropriate bucket, and when you get a value, the correct bucket is searched for the associated key.

Please note that this is a simple demonstration of a hash map using an array. In a real-world scenario, you might need to handle collisions (multiple keys hashing to the same index), implement resizing, and consider other optimizations. If you need more advanced features, consider using the built-in `Map` object provided by JavaScript.

#### Using the Map Object

```javascript
// Using the built-in Map object
const map = new Map();

map.set("name", "John");
map.set("age", 30);

console.log(map.get("name")); // Output: John
console.log(map.get("age"));  // Output: 30
console.log(map.has("name")); // Output: true

map.delete("age");
console.log(map.get("age"));  // Output: undefined
```

The key differences between using objects and the `Map` object are:

- With objects, keys are always strings (or converted to strings), whereas the `Map` object allows you to use any data type as a key.
- The `Map` object maintains the order of insertion, whereas object properties do not guarantee order.
- The `Map` object provides more methods and functionalities, such as iterating over entries and storing keys of any data type.

Choose the approach that best suits your requirements. For simple cases, using objects can be sufficient. For more advanced use cases, the `Map` object offers additional features and flexibility.

The object `{ name: 'paul', age: 33 }` in JavaScript can be considered a basic form of a hash map. In this object, the keys are `"name"` and `"age"`, and the corresponding values are `'paul'` and `33`. This structure is similar to what you would find in a hash map, where keys are used to look up associated values.

However, it's important to note that JavaScript objects have some limitations compared to more advanced hash map implementations. For example:

1. **Key Type**: In JavaScript objects, keys are always converted to strings. So even if you use numbers as keys, they will be implicitly converted to strings.

2. **Order**: In modern JavaScript, object properties maintain insertion order. However, this wasn't guaranteed in older versions of the language. If order is critical, using the `Map` object is recommended.

3. **Methods**: While JavaScript objects have methods like `hasOwnProperty` for basic operations, the built-in `Map` object offers more advanced methods for working with key-value pairs.

For simple use cases like basic key-value storage and retrieval, using an object like `{ name: 'paul', age: 33 }` is perfectly reasonable and can be thought of as a rudimentary hash map. If you need more features or robustness, you might consider using the built-in `Map` object or implementing a more sophisticated hash map structure.

#### Hashing and compression

The _hashing function_ is the secret to efficiently storing and retrieving values in a hash map. A hashing function takes a key as input and returns an index within the hash map’s underlying array.

This function is said to be _deterministic_. That means the hashing function must always return the same index when given the same key. This is important because we will need to hash the key again later to retrieve the stored value. We won’t be able to do this unless our hashing function behaves in a predictable and consistent way.

Getting an integer representing an index can be done by summing up each character code of the key (as a numeric value) with the running total of the previously summed character codes.

The hashing function should follow this logic:

```plaintext
declare hashCode variable with value of 0

for each character in the key
  add the sum of the current character code value and hashCode to hashCode

return hashCode
```

Adding the sum of `hashCode` and the character code to the `hashCode` again creates a deterministic and also non-reversible implementation of a hashing function. This avoids generating a duplicate index if keys have the same characters in different orders, such as `bat` and `tab`.

The current hashing function will return a wide range of integers — some of which are not indices of the hash map array. To fix this, we need to use _compression_.

Compression means taking some input and returning an output only within a specific range.

In our hash map implementation, we’re going to have our hashing function handle compression in addition to hashing. This means we’ll add an additional line of code to compress the `hashCode` before we return it.

The updated `.hash()` should follow these steps:

```plaintext
initialize hashCode variable to 0

for each character in the key
   add the character code and hashCode to hashCode

return compressed hashCode
```


In JavaScript, the `Map` object doesn't expose the hash values directly to the user like some other languages do. Instead, it handles the hashing internally as part of its implementation. However, you can create a simple hash function to understand how hashing works. Here's an example:

```javascript
function simpleHash(key, size) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i); // <= Hashing
    }
    return hashValue % size; // <= Compression
}

const key = "exampleKey";
const size = 10;

const hashValue = simpleHash(key, size);
console.log(`Hash value for key "${key}" is: ${hashValue}`);
```

In this example, the `simpleHash` function takes a `key` and a `size` as arguments. It calculates the hash value by summing the ASCII values of the characters in the key and then taking the modulo of the size to map the hash value to an index within the desired size.

Remember, this is a basic illustration. Real-world hash functions are more complex and are designed to distribute keys more uniformly to minimize collisions and achieve better performance. JavaScript's built-in `Map` object uses a robust hash function internally to ensure efficient key distribution.

Keep in mind that while understanding how hashing works is useful, the built-in `Map` object in JavaScript abstracts these details away, providing a more reliable and efficient implementation for most use cases.

#### Assign

We now have everything we need to find a place in the hash map array to store a value. The only thing left to do is assign the value to the index we generated. A method, `.assign()` will handle the logic needed to take in a key-value pair and store the value at a particular index.

A general outline of how `.assign()` will work is this:

```plaintext
store the hashed key in a variable arrayIndex
assign the value to the element at arrayIndex in the hash map
```

#### Retrieve

To be a fully functional hash map, we have to be able to retrieve the values we are storing. To implement retrieval for our hash map we’ll create a new `HashMap` method, `.retrieve()`.

This method will make use of `.hash()`‘s deterministic nature to find the value we’re looking for in the hash map.

#### Collisions

We have a hash map implementation, but what happens when two different keys generate the same index? Run the code in **collision.js** to see a collision in action.

Instead of returning `'marsh plant'` and `'forest animal'` we retrieve `'forest animal'` twice. This is because both key-value pairs are assigned to the same index 0 and the first value, `'marsh plants'` was overwritten.

When two different keys resolve to the same array index this is called a collision. In our current implementation, all keys that resolve to the same index are treated as if they are the same key. This is a problem because they will overwrite one another’s values.

#### Collisions: Assigning

Our first step in implementing a collision strategy is updating our constructor and `.assign()` method to use linked lists and nodes inside the hashmap array. This will allow us to store multiple values at the same index by adding new nodes to a linked list instead of overwriting a single value. This strategy of handling collisions is called _separate chaining_.

A collision-proof `.assign()` should look like this to start:

```plaintext
store the hashed key in a variable arrayIndex
store linked list at arrayIndex in a variable linkedList

if linked list is empty
  add the key-value pair to the linked list as a node
```

We’ll be using the `LinkedList` and `Node` classes found in the **LinkedList.js** and **Node.js** files to implement our collision-proof `HashMap` class. The only file you will be working in for this exercise is **HashMap**.

#### Collisions: Looping

We’ve added code to `.assign()` that takes care of an empty list, but what happens when there is a collision and there are already values stored at a particular index?

If there are already values stored in nodes at an index, we need to loop over each node in the list in order to determine how to proceed.

The two possibilities we’ll encounter while looping are:

- The key we are looking for and the key of the current node is the same, so we should overwrite the value
    
- No node in the linked list matches the key, so we should add the key-value pair to the list as the tail node
    

After both cases, if we haven’t already exited the loop, we should reset the loop’s condition.

With this in mind, the `.assign()` code for looping should look like this:

```plaintext
store the head node of the linked list in a variable current

while there is a current node
  if the current node's key is the same as the key
    store the key and value in current
  if the current node is the tail node
    store the key-value pair in the node after current
    exit the loop      
  set current to the next node
```

#### Collisions: Retrieving

When we retrieve hash map values, we also need to be aware that different keys could point to the same array index leading us to retrieve the wrong value.

To avoid this, we’ll search through the linked list at an index until we find a node with a matching key. If we find the node with the correct key, we’ll return the value; otherwise, we’ll return `null`.

The `.retrieve()` method will follow this logic:

```plaintext
store the hashed key in the constant arrayIndex
store the head node of a list in the variable current

while there is a valid node
  if the current node's key matches the key
    return the current node's value
  set current to the next node in the list

return null
```

Use your foundational understanding of hash maps to explore more in-depth materials. These recommendations are **optional** but will help you hone your skills to become more prepared for the technical interview.

Example of method using Separate chaining method.

Separate chaining is a collision resolution technique used in hash maps. It involves creating a data structure, such as a linked list, for each bucket in the hash map. This way, when collisions occur, multiple key-value pairs can be stored in the same bucket using a linked list.

Here's an example implementation of a hash map using separate chaining (linked lists) in JavaScript:

```javascript
class LinkedListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedListNode(key, value);
        } else {
            let currentNode = this.buckets[index];
            while (currentNode.next) {
                if (currentNode.key === key) {
                    currentNode.value = value;
                    return;
                }
                currentNode = currentNode.next;
            }
            currentNode.next = new LinkedListNode(key, value);
        }
    }

    get(key) {
        const index = this.hash(key);
        const head = this.buckets[index];

        let currentNode = head;
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return undefined;
    }
}

// Example usage
const map = new HashMap();
map.set("name", "John");
map.set("age", 30);
map.set("country", "USA");

console.log(map.get("name"));    // Output: John
console.log(map.get("age"));     // Output: 30
console.log(map.get("country")); // Output: USA
```

In this example, the `LinkedListNode` class represents a node in the linked list. The `HashMap` class uses an array of linked list nodes as its buckets. When multiple keys hash to the same index, the linked list nodes handle the collisions by chaining the key-value pairs in the same bucket.

Separate chaining is a powerful collision resolution technique that allows efficient storage and retrieval of key-value pairs even in the presence of collisions.

**Additional Resources**:

- [Visualizer: Hash Maps](https://visualgo.net/en/hashtable?slide=1)
- [Video: Hash Maps](https://www.youtube.com/watch?v=QuFPIZj55hU&feature=emb_title)
- [Cheatsheet: Hash Maps](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)


### Trees

Get started with trees!

Tree data structures are built using tree nodes (a variation on the nodes you created earlier) and are another way of storing information. Specifically, trees are used for data that has a hierarchical structure, such as a family tree or a computer’s file system. The tree data structure you are going to create is an excellent foundation for further variations on trees, including AVL trees, red-black trees, and binary trees - which you will actually create in a lesson later on!

In JavaScript, trees are hierarchical data structures that consist of nodes connected by edges. Each node in a tree can have zero or more child nodes, and there is typically a single node known as the root that serves as the starting point for traversing the tree. Trees are widely used for representing hierarchical structures like directories, organization charts, HTML DOM, and more.

There are various types of trees, each with its own characteristics and use cases. Here are a few common types of trees you might encounter in JavaScript:

1. **Binary Tree**: A binary tree is a tree structure in which each node has at most two child nodes, referred to as the left child and the right child. Binary trees can be used for efficient searching, sorting, and traversing algorithms.

2. **Binary Search Tree (BST)**: A binary search tree is a type of binary tree where the left child of a node contains values less than the node's value, and the right child contains values greater than the node's value. BSTs enable fast searching and insertion.

3. **Balanced Tree**: A balanced tree is a binary tree in which the depth of the left and right subtrees of any node doesn't differ by more than a certain amount. Examples include AVL trees and Red-Black trees, which ensure efficient operations even with frequent insertions and deletions.

4. **N-ary Tree**: An N-ary tree is a tree in which each node can have up to N children. These trees are useful for representing hierarchical structures with more than two branches at each node.

5. **Trie (Prefix Tree)**: A trie is a tree-like data structure that is used to store a dynamic set of strings, usually for fast lookups of words or prefixes. It's commonly used for autocomplete functionality.

6. **Heap**: A heap is a specialized binary tree-based data structure that satisfies the heap property. Heaps are commonly used in priority queues and heapsort algorithms.

JavaScript doesn't provide built-in tree data structures, but you can easily create your own tree structures using objects or classes. Here's a simple example of a binary tree node:

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

console.log(root.value);        // Output: 10
console.log(root.left.value);   // Output: 5
console.log(root.right.value);  // Output: 15
```

This is just a basic introduction to trees in JavaScript. Depending on your needs, you can implement more complex tree structures and algorithms to solve various problems involving hierarchical data.

#### Tree Detail

Trees grow downwards in computer science, and a _root_ node is at the very top. The root of this tree is `/photos`.

`/photos` references to two other nodes: `/safari` and `/wedding`. `/safari` and `/wedding` are _children_ or _child_ nodes of `/photos`.

Conversely, `/photos` is a _parent_ node because it **has child nodes**.

`/safari` and `/wedding` share the same parent node, which makes them _siblings_.

Note that the `/safari` node is child (to `/photos`) **and** parent (to `lion.jpg` and `giraffe.jpg`). It’s extremely common to have nodes act as both parent and child to different nodes within a tree.

When a node has no children, we refer to it as a _leaf_ node.

![[trees.png]]

To recap some terms:

- `root`: A node which has no parent. One per tree.
- `parent`: A node which references other nodes.
- `child`: Nodes referenced by other nodes.
- `sibling`: Nodes which have the same parent.
- `leaf`: Nodes which have no children.
- `level`: The height or depth of the tree. Root nodes are at level 1, their children are at level 2, and so on.
### Tree Varietals

Trees come in various shapes and sizes depending on the dataset modeled.

Some are wide, with parent nodes referencing many child nodes.

Some are deep, with many parent-child relationships.

Trees can be both wide and deep, but each node will only ever have **at most** one parent; otherwise, they wouldn’t be trees!

Each time we move from a parent to a child, we’re moving down a _level_. Depending on the orientation we refer to this as the _depth_ (counting levels down from the root node) or _height_ (counting levels up from a leaf node).

![[trees-varietals.png]]

#### Binary Search Tree

Constraints are placed on the data or node arrangement of a tree to solve difficult problems like efficient search.

A _binary tree_ is a type of tree where each parent can have **no more than two children**, known as the _left child_ and _right child_.

Further constraints make a _binary search tree_:

- Left child values must be lesser than their parent.
- Right child values must be greater than their parent.

The constraints of a binary search tree allow us to search the tree efficiently. At each node, we can discard **half** of the remaining possible values!

Let’s walk through locating the value `31`.

1. Start at the root: `39`
2. `31` < `39`, we move to the left child: `23`
3. `23` < `31`, we move to the right child: `35`
4. `31` < `35`, we move to the left child: `31`
5. We found the value `31`!

In a dataset of **fifteen** elements, we only made **three** comparisons. What a deal!

![[trees-search-binaries.png]]

#### Removing

The generic steps to execute in removing a child from a tree are as follows:

```plaintext
If target child is an instance of TreeNode,
  Compare target child with each child in the children array
  Update the children array if target child is found
Else 
  Compare target child with each child's data in the children array
  Update the children array if target child is found
If target child is not found in the children array
  Recursively call .removeChild() for each grandchild.
```

#### Breadth-first Tree Traversal

Breadth-first traversal visits each child in the `children` array starting from the first child before visiting their children and further layers until the bottom level is visited. The algorithm is as follows:

```plaintext
Assign an array to contain the current root node
While the array is not empty
  Extract the first tree node from the array
  Display tree node's data
  Append tree node's children to the array
```

Based on this tree displayed using `.print()`:

```plaintext
15
-- 3
-- -- 6
-- -- 9
-- 12
-- -- 19
-- -- 8
-- 0
-- -- 10
-- -- 19
```

we can traverse it breadth-wise (level to level) to produce this result:

```plaintext
15
3
12
0
6
9
19
8
10
19
```


#### Sample

Use your foundational understanding of trees to explore more in-depth materials. These recommendations are **optional** but will help you hone your skills to become more prepared for the technical interview.

**Additional Resources**:

- [Article: Wikipedia Tree Data Structure](https://en.wikipedia.org/wiki/Tree_(data_structure))
- [Video: Tree Data Structure Overview](https://www.youtube.com/watch?v=oSWTXtMglKE)
- [Cheatsheet: Trees](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)

```js
class TreeNode {

  constructor(data) {
    this.data = data;
    this.children = [];
  }


  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {

    const length = this.children.length;

    this.children = this.children.filter(child => {
      return childToRemove instanceof TreeNode
      ? child !== childToRemove
      : child.data !== childToRemove;
    });

    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }


  print(level = 0) {

    let result = '';

    for (let i = 0; i < level; i++) {
      result += '-- ';
    }

    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {

    let queue = [ this ];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
};

  

module.exports = TreeNode;



// file

const TreeNode = require('./TreeNode');

const menu = new TreeNode('Menu');

const entries = {
  'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
  'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
  'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
};

const meals = Object.keys(entries);

for (let meal=0; meal < meals.length; meal++){
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach( entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();

```

### Heap

In JavaScript, a "heap" typically refers to a data structure called a "heap" or "priority queue." A heap is a specialized tree-based data structure that satisfies the heap property, which depends on whether it's a "min heap" or a "max heap."

- **Min Heap:** In a min heap, for any given node N, the value of N is less than or equal to the values of its children. The minimum value is always at the root.

- **Max Heap:** In a max heap, for any given node N, the value of N is greater than or equal to the values of its children. The maximum value is always at the root.

Heaps are often used for tasks that involve maintaining the minimum or maximum value efficiently, such as priority queues, heap sort, and various graph algorithms (e.g., Dijkstra's algorithm). JavaScript does not provide a built-in heap data structure, but you can implement one yourself or use third-party libraries that provide heap implementations.

Here's a simplified example of how you can implement a min heap in JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Add an element to the heap and maintain the heap property
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Remove and return the minimum element from the heap
  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);

    return min;
  }

  // Helper function to restore the heap property after insertion
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break;
      }
      // Swap the current element with its parent
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  // Helper function to restore the heap property after extraction
  heapify(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      // Swap the current element with the smallest child
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapify(smallestIndex);
    }
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Usage example:
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(7);
minHeap.insert(1);

console.log(minHeap.extractMin()); // Output: 1
```

In this example, we've implemented a basic `MinHeap` class with methods for inserting elements, extracting the minimum element, and maintaining the heap property. Please note that this is a simplified illustration, and real-world heap implementations may involve additional optimizations and features.

![[heap.png]]

You can manage this problem using a **priority queue** to ensure you’re always working on the most pressing assignment and heaps are commonly used to create a priority queue.

Heaps tracking the maximum or minimum value are _max-heaps_ or _min-heaps_. We will focus on min-heaps, but the concepts for a max-heap are nearly identical.

Think of the min-heap as a binary tree with two qualities:

- The root is the **minimum value** of the dataset.
- Every child’s value is **greater than or equal to its parent**.

These two properties are the defining characteristics of the min-heap. By maintaining these two properties, we can efficiently retrieve and update the minimum value.

![[heap-representation.png]]

Conceptually, the tree representation is beneficial for understanding. Practically, we implement heaps in a sequential data structure like an array or list for efficiency.

Notice how by filling the tree from left to right; we’re leaving no gaps in the array. The location of each child or parent derives from a formula using the index.

- left child: `(index * 2) + 1`
- right child: `(index * 2) + 2`
- parent: `(index - 1) / 2` — **not used on the root!**


**Max-Heap:**

A max-heap is a binary heap in which every parent node has a value greater than or equal to the values of its children. The maximum value is always at the root.

```
      9
     / \
    7   6
   / \ / \
  5  4 2  3
```

In this max-heap:

- The root contains the maximum value, which is `9`.
- Each parent node has a value greater than or equal to the values of its children.

**Min-Heap:**

A min-heap is a binary heap in which every parent node has a value less than or equal to the values of its children. The minimum value is always at the root.

```
      1
     / \
    3   2
   / \ / \
  8  5 7  6
```

In this min-heap:

- The root contains the minimum value, which is `1`.
- Each parent node has a value less than or equal to the values of its children.

These visual representations demonstrate the characteristics of both a max-heap and a min-heap, with the respective minimum and maximum values at the root nodes and the heap property satisfied for parent-child relationships.
#### Adding an Element: Heapify Up

Sometimes you will add an element to the heap that violates the heap’s essential properties.

We’re adding `3` as a left child of `11`, which violates the min-heap property that children must be larger or equal to their parent.

We need to restore the fundamental heap properties. This restoration is known as _heapify_ or _heapifying_. We’re adding an element to the bottom of the tree and moving upwards, so we’re _heapifying up_.

As long as we’ve violated the heap properties, we’ll swap the offending child with its parent until we restore the properties, or until there’s no parent left. If there is no parent left, that element becomes the new root of the tree.

#### Removing an Element: Heapify Down

Maintaining a minimum value is no good if we can never retrieve it, so let’s explore how to remove the root node.

In the diagram, you can see removing the top node itself would be messy: there would be two children orphaned! Instead, we’ll swap the root node, `2`, with the bottom rightmost child: `20`. The bottom rightmost child is simple to remove because it has no children.

Unfortunately, we’ve violated the heap property. `20` is now the root node, and that’s not the minimum value in the heap. We’ll _heapify down_ to restore the heap property.

This process is similar to heapifying up, except we have two options (`5` and `10`) where we can make a swap. We’ll choose the **lesser of the two values** and swap `20` with `5`. This is necessary for the heap property, if we had chosen to swap `20` with `10`, then the minimum value would **not** be at the root. With `5` at the root, the root node is the minimum value in the heap again.

Another swap is required because `20` is greater than its children, so we swap `20` with `11`.

Now `20` no longer has any children (it is a child of `11`), and all other nodes in the heap only have parents with smaller values.

Just like that, we’ve retrieved the minimum value, allocated a _new_ minimum, and maintained the heap property!

Creating a visual schema for a binary heap can be helpful for better comprehension. Here's a simplified visualization of a binary min-heap and the process of removing the minimum element (extracting the minimum) and performing heapify down.

Let's start with an initial min-heap:

```
      1
     / \
    3   2
   / \
  8   5
```

In this min-heap:

- The root contains the minimum value, which is `1`.
- The heap property is satisfied because each parent is smaller than its children.

Now, let's perform the `extractMin` operation:

1. Replace the root (1) with the last leaf node (5):

```
      5
     / \
    3   2
   / \
  8   5
```

2. Heapify down from the root (5) to restore the heap property:

Heapify down compares the root (5) with its children (3 and 2) and swaps elements to maintain the heap property. In this case, 2 is smaller than 5, so they are swapped.

```
      2
     / \
    3   5
   / \
  8   5
```

3. The minimum element (1) has been successfully extracted, and the heap property is restored.

This is a simplified example of extracting the minimum element from a binary min-heap and performing heapify down. In a real heap, the tree structure would be more complex, and the process could involve multiple levels of swapping and comparisons, but the fundamental idea remains the same: ensuring that the minimum element remains at the root and the heap property is maintained.

Let's illustrate the process of removing an element (specifically, the minimum element) from a min-heap and performing heapify up using a visual schema. In this example, we'll start with a min-heap and demonstrate the removal of the minimum element.

Initial Min-Heap:
```
      1
     / \
    3   2
   / \
  8   5
```

1. **Remove the Minimum Element (1):**

   To remove the minimum element (1), we replace it with the last leaf node (5):

```
      5
     / \
    3   2
   / \
  8   ?
```

   The question mark represents the empty spot left by moving the last element.

2. **Heapify Up:**

   We now perform heapify up from the replaced node (5) to restore the min-heap property. In heapify up, we compare the node with its parent and swap if necessary to maintain the heap property.

   - Compare 5 with its parent (3). Since 5 is smaller, swap them:

```
      3
     / \
    5   2
   / \
  8   ?
```

   - Continue heapify up from the swapped node (3):

```
      3
     / \
    5   2
   / \
  8   ?
```

   The final min-heap is achieved with the minimum element (1) successfully removed:

   ```
      2
     / \
    3   5
   / \
  8
   ```

   The heap property is preserved, with the minimum element (2) at the root.

This visual representation demonstrates the process of removing the minimum element from a min-heap and restoring the heap property through heapify up. It ensures that the minimum element is no longer in the heap, and the remaining elements are correctly organized according to the min-heap property.


