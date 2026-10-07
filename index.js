import Tree from "./binary-search-tree.js";

let tree = new Tree([12]);
let newTree = new Tree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])


newTree.insert(21)
newTree.insert(22)
newTree.insert(23)
newTree.insert(24)
newTree.insert(25)
//newTree.postOrderForEach(console.log)
console.log(newTree.height(11))
newTree.prettyPrint()
//newTree.prettyPrint()



