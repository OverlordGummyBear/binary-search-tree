import Tree from "./binary-search-tree.js";

let tree = new Tree([12, 43, 23, 1, 8, 21, 3, 44]);


tree.insert(12)

let queue = [];

tree.prettyPrint(tree.getRoot())
tree.levelOrderForEach(console.log)
tree.levelOrderForEachRec(console.log)

