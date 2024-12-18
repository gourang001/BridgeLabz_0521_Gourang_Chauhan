class treeNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null;
    }

    insert(data){
        const newNode=new treeNode(data);
        if(!this.root){
            this.root=newNode;
            return;
        }

        const queue=[this.root];
        while(queue.length>0){
            const curr=queue.shift();

            if(!curr.left){
                curr.left=newNode;
                return;
            }
            else{
                queue.push(curr.left);
            }

            if(!curr.right){
                curr.right=newNode;
                return;
            }
            else{
                queue.push(curr.right);
            }
        }
    }

    perOrder(node){
        if(!node) return
        console.log(node.data);
        this.perOrder(node.left);
        this.perOrder(node.right);
    }

    inOrder(node){
        if(!node) return
        this.perOrder(node.left);
        console.log(node.data);
        this.perOrder(node.right);
    }
    postOrder(node){
        if(!node) return
        this.perOrder(node.left);
        this.perOrder(node.right);
        console.log(node.data);
    }
}

const tree=new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

//tree.perOrder(tree.root);
// tree.inOrder(tree.root);
tree.postOrder(tree.root);