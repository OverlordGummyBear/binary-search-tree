import Tree from "./binary-search-tree.js";

let tree = new Tree([12, 43, 23, 1, 8, 21, 3, 44]);


tree.insert(12)

tree.prettyPrint(tree.getRoot())

console.log(tree.height(21))
console.log(tree.height(1))
console.log(tree.height(23))