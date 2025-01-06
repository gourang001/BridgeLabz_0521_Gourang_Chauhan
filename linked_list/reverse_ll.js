class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
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
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let nextNode = curr.next; 
            curr.next = prev;          
            prev = curr;              
            curr = nextNode;           
        }
        this.head = prev; 
    }
}

const ll=new LinkedList();
ll.addLast(5);
ll.addLast(8);
ll.addLast(3);
ll.addLast(4);
ll.addLast(2);
ll.print();
ll.reverse();
ll.print();