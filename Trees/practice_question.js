class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

const a=new Node(2);
const b=new Node(5);
const c=new Node(8);
const d=new Node(3);
const e=new Node(4);
const f=new Node(1);

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

const breeadthFirstPrint=(root)=>{
    const queue=[root];
    while(queue.length>0){
        const curr=queue.shift();  //removing the first element
        console.log(curr.data);
        
        if(curr.left!==null){
            queue.push(curr.left);
        }
        if(curr.right!==null){
            queue.push(curr.right);
        }
    }
}


const bfs=(root,target)=>{
    const queue=[root];
    while(queue.length>0){
        const curr=queue.shift();  //removing the first element
        
        if(curr.data===target){
            return true;
        }
        if(curr.left!==null){
            queue.push(curr.left);
        }
        if(curr.right!==null){
            queue.push(curr.right);
        }
    }
    return false;
}


const sumofNodes=(root)=>{
    const queue=[root];
    let sum=0;
    while(queue.length>0){
        const curr=queue.shift();  //removing the first element
        
        sum+=curr.data;
        if(curr.left!==null){
            queue.push(curr.left);
        }
        if(curr.right!==null){
            queue.push(curr.right);
        }
    }
    return sum;
}


const depthFirstPrint=(root)=>{
    const stack=[root];
    while(stack.length>0){
        const curr=stack.pop();
        console.log(curr.data);
        
        // add curr childern to top of the stack
        if(curr.right!==null){
            stack.push(curr.right);
        }
        if(curr.left!==null){
             stack.push(curr.left);
        }
    }
}

const dfs=(root,target)=>{
    if(root===null) return false;
    const stack=[root];
    while(stack.length>0){
        const curr=stack.pop();
        if(curr.data===target){
            return true;
        }
        
        // add curr childern to top of the stack
        if(curr.right!==null){
            stack.push(curr.right);
        }
        if(curr.left!==null){
             stack.push(curr.left);
        }
    }
    return false;
}

const sumoftreeNodes=(root)=>{
    if(root===null) return 0;
    return root.data+sumoftreeNodes(root.left)+sumoftreeNodes(root.right);
}

breeadthFirstPrint(a);
console.log(bfs(a,6));
console.log(sumofNodes(a));

depthFirstPrint(a);
console.log(dfs(a,8));
console.log(sumoftreeNodes(a));

