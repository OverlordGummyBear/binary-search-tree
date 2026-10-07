import Tree from "./binary-search-tree.js";

let tree = new Tree([12, 43, 23, 1, 8, 21, 3, 44]);
let newTree = new Tree([1,2,3,4,5,6,7])

tree.insert(12)

newTree.prettyPrint(newTree.getRoot())
newTree.postOrderForEach(console.log)

