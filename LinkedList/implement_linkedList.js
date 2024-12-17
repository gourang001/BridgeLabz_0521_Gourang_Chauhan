class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    append(data){
        const newNode=new Node(data);
        if(this.size===0){
            this.head=newNode;
        }
        else{
            let curr=this.head;
            while(curr.next!==null){
                curr=curr.next;
            }
            curr.next=newNode;
        }
        this.size++;
    }
    print(){
        let curr=this.head;
        const value=[];

        while(curr!==null){
            value.push(curr.data);
            curr=curr.next;
        }
        console.log(value.join('->'));
        
    }
    removeFirst(){
        if(this.size===0) return null;
        const removeNode=this.head;
        this.head=this.head.next;
        this.size--;
        return removeNode.data;        
    }
    insertAt(data,index){
        if(index<0 || index>this.size){
            console.log("out of bound");
            return;
        }
        const newNode=new Node(data);
        if(index===0){
            newNode.next=this.head;
            this.head=newNode;
        }
        else{
            let curr=this.head;
            let prev;
            let currIdx=0;
            while(currIdx<index){
                prev=curr;
                curr=curr.next;
                currIdx++;
            }
            prev.next=newNode;
            newNode.next=curr;
        }
        this.size++;
    }
    deleteAt(index){
        if(index<0 || index>=this.size){
            console.log("out of bound");
            return;
        }
        let curr=this.head;
        if(index===0){
            this.head=curr.next;
        }
        else{
            let prev=null;
            let currIdx=0;

            while(currIdx<index){
                prev=curr;
                curr=curr.next;
                currIdx++;
            }
            prev.next=curr.next;
        }
        this.size--;
    }
}

const ll=new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.append(60);
ll.print();
ll.removeFirst();
ll.print();
ll.insertAt(25,2);
ll.insertAt(12,3);
ll.print();
ll.deleteAt(4);
ll.print();
ll.append(100);
ll.print();