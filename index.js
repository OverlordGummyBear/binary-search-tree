import Tree from "./binary-search-tree.js";

let tree = new Tree([12]);
let newTree = new Tree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])



newTree.insert(21)
newTree.insert(0)
newTree.insert(-1)


console.log("---------Not Balanced-----------")
console.log(newTree.isBalanced())
newTree.prettyPrint()


console.log("---------Rebalance-----------")
newTree.reBalance()
console.log(newTree.isBalanced());
newTree.prettyPrint()
