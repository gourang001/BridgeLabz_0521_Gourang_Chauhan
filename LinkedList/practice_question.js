// linked list 

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null //initial head is null
    }

    addFirst(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(data){
        const newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }

         let curr=this.head;
         while(curr.next){
            curr=curr.next;
         }
         curr.next=newNode;
    }
    removeAt(index){
        if(index<0){
            return;
        }
        if(index==0){
            this.head=this.head.next;
            return;
        }

        let curr=this.head;
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }

        if(curr.next){
            curr.next=curr.next.next;
        }
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

const ll=new LinkedList();
ll.addLast(5);
ll.addLast(8);
ll.addLast(3);
ll.addLast(4);
ll.addLast(2);
ll.removeAt(1);
ll.print();