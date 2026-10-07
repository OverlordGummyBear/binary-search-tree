# Binary Search Tree

A balanced binary search tree implemented in JavaScript, built from an array of numbers and kept balanced through a `rebalance()` method.

## Structure

* `Node`: holds a `data` value along with `left` and `right` child references
* `Tree`: accepts an array on initialization, builds a balanced tree from it via a private `buildTree()` function, and stores the resulting root in its `root` property

## Methods

* `insert(value)`: inserts a new value
* `deleteItem(value)`: removes a value from the tree
* `includes(value)`: returns `true`/`false` depending on whether the value exists in the tree
* `levelOrderForEach(callback)`: traverses the tree breadth-first, calling `callback` with each value
* `inOrderForEach(callback)` / `preOrderForEach(callback)` / `postOrderForEach(callback)`: traverse the tree depth-first in their respective order, calling `callback` with each value
* `height(value)`: returns the height of the node containing the given value or `undefined` if the value isn't found
* `depth(value)`: returns the depth of the node containing the given value or `undefined` if the value isn't found
* `isBalanced()`: returns `true`/`false` depending on whether the tree is balanced
* `rebalance()`: rebuilds the tree into a balanced one

## Visualizing the Tree

A `prettyPrint(node)` helper is included to print the tree's structure to the console, for example when debugging or confirming a rebalance worked as expected.

## Driver Script

Running the project builds a tree from random numbers under 100, confirms it's balanced, prints it in level, pre, post, and in order, then unbalances it with numbers over 100, confirms it's unbalanced, rebalances it, and prints it again.

## Getting Started

Clone the repo and install dependencies:
```bash
git clone https://github.com/OverlordGummyBear/binary-search-tree.git
cd binary-search-tree
npm install
```

## Running the Driver Script

```bash
node index.js
```