class Node{
    constructor(value = null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    _root;

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
}

export default Tree;