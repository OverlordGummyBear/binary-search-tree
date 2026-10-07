import Tree from "./binary-search-tree.js";

function createIntArray(amount, min, max){
    let arr = []

    for(let i = 0; i < amount; i++){
        arr.push(Math.floor(Math.random() * (max - min) + min))
    }

    return arr;
}

let tree = new Tree(createIntArray(20, 0, 100));

console.log("Tree is Balanced: " + tree.isBalanced());
tree.prettyPrint();

console.log("Traversal print");
console.log("Level-order traversal");
let levelOrderArr = [];
tree.levelOrderForEach(value => levelOrderArr.push(value));
console.log(levelOrderArr);

console.log("Pre-order traversal");
let preOrderArr = [];
tree.preOrderForEach(value => preOrderArr.push(value));
console.log(preOrderArr);

console.log("Post-order traversal");
let postOrderArr = [];
tree.postOrderForEach(value => postOrderArr.push(value));
console.log(postOrderArr);

console.log("In-order traversal");
let inOrderArr = [];
tree.inOrderForEach(value => inOrderArr.push(value));
console.log(inOrderArr);

//Adding new elements
let moreThan100Arr = createIntArray(5, 100, 200);

moreThan100Arr.forEach(number => tree.insert(number));

console.log("Balanced after insertion (> 100): " + tree.isBalanced());
tree.prettyPrint()
tree.reBalance();
console.log("Balanced after rebalance: " + tree.isBalanced());
tree.prettyPrint()

//Print elements in traversal order again
console.log("Traversal print");
console.log("Level-order traversal");
let levelOrderArr2 = [];
tree.levelOrderForEach(value => levelOrderArr2.push(value));
console.log(levelOrderArr2);

console.log("Pre-order traversal");
let preOrderArr2 = [];
tree.preOrderForEach(value => preOrderArr2.push(value));
console.log(preOrderArr2);

console.log("Post-order traversal");
let postOrderArr2 = [];
tree.postOrderForEach(value => postOrderArr2.push(value));
console.log(postOrderArr2);

console.log("In-order traversal");
let inOrderArr2 = [];
tree.inOrderForEach(value => inOrderArr2.push(value));
console.log(inOrderArr2);