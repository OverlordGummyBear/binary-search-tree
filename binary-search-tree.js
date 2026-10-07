class Node{
    constructor(value = null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    _root = null;

    constructor(array){
        this._root = this.#buildTree(array);
    }

    getRoot(){ return this._root; }

    #buildTree(array){
        const uniqueArr = [...new Set(array)].sort((a, b) => a - b);
        
        if(1 > uniqueArr.length) return null;

        let mid = Math.floor(uniqueArr.length / 2);
        let root = new Node(uniqueArr[mid]);
        
        root.left = this.#buildTree(uniqueArr.slice(0, mid));;
        root.right = this.#buildTree(uniqueArr.slice(mid+1, uniqueArr.length + 1));

        return root;
    }

    prettyPrint(node, prefix = '', isLeft = true){
        if (node === null || node === undefined) {
            return;
        }

        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

    includes(value){
        let current = this._root;

        while(current !== null){
            if(value === current.value)
                return true;
            else if(value < current.value)
                current = current.left;
            else
                current = current.right
        }

        return false;
    }

    insert(value){
        let temp = new Node(value);

        if(this._root === null){
            this._root = temp;
            return;
        }

        let current = this._root;

        while(current !== null){
            if(value === current.value)
                return;
            else if(value < current.value)
                if(current.left !== null)
                    current = current.left;
                else{
                    current.left = temp;
                    return;
                }
            else
                if(current.right !== null)
                    current = current.right
                else{
                    current.right = temp;
                    return;
                }
        }
    }

    deleteItem(value){

    }

    levelOrderForEach(callback){
        if(!(callback instanceof Function)) throw new Error("A callback is required for levelOrderForEach")

        const queue = [];
        queue.push(this._root);
        
        while(queue.length !== 0){
            let current = queue.shift();

            if(current.left !== null)
                queue.push(current.left);
            if(current.right !== null)
                queue.push(current.right)

            callback(current.value);
        }
    }

    levelOrderForEachRec(callback){
        if(!(callback instanceof Function)) throw new Error("A callback is required for levelOrderForEach")

        this.#levelOrderForEachRec(callback, [this._root])
    }

    #levelOrderForEachRec(callback, currentLevel){
        if(currentLevel.length === 0)
            return;

        let nextLevel = []

        for(let i = 0; i < currentLevel.length; i++){
            let current = currentLevel[i];
            
            if(current.left !== null)
                nextLevel.push(current.left);
            if(current.right !== null)
                nextLevel.push(current.right)

            callback(current.value);
        }

        this.#levelOrderForEachRec(callback, nextLevel)
    }

    inOrderForEach(callback){
        if(!(callback instanceof Function)) throw new Error("A callback is required for levelOrderForEach")
    
        this.#inOrderForEach(callback, this._root);
    }

    #inOrderForEach(callback, node){
        if(node === null) return;

        this.#inOrderForEach(callback, node.left);
        callback(node.value);
        this.#inOrderForEach(callback, node.right);
    }

    preOrderForEach(callback){
        if(!(callback instanceof Function)) throw new Error("A callback is required for levelOrderForEach")
    
        this.#preOrderForEach(callback, this._root);        
    }

    #preOrderForEach(callback, node){
        if(node === null) return;
        
        callback(node.value);
        this.#preOrderForEach(callback, node.left);
        this.#preOrderForEach(callback, node.right);
    }

    postOrderForEach(callback){
        if(!(callback instanceof Function)) throw new Error("A callback is required for levelOrderForEach")
    
        this.#postOrderForEach(callback, this._root);
    }

    #postOrderForEach(callback, node){
        if(node === null) return;
    
        this.#postOrderForEach(callback, node.left);
        this.#postOrderForEach(callback, node.right);
        callback(node.value);
    }

    height(value){
        if(!this.includes(value)) return undefined;
    }

    depth(value){
        if(!this.includes(value)) return undefined;

        let current = this._root;
        let depth = 0;

        while(current !== null){
            if(value === current.value)
                return depth;
            else if(value < current.value)
                current = current.left;
            else
                current = current.right

            depth++;
        }
    }

    isBalanced(){

    }

    reBalance(){

    }

}

export default Tree;