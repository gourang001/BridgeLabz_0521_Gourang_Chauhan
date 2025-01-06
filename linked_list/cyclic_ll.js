class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    hasCycle() {
        let slow = this.head;  
        let fast = this.head;  

        while(fast !== null && fast.next !== null){
            slow = slow.next;           
            fast = fast.next.next;      

            if (slow === fast) {
                return true;  
            }
        }
        return false;  
    }
}

const ll = new LinkedList();
ll.addLast(5);
ll.addLast(5);
ll.addLast(3);
ll.addLast(2);
ll.addLast(2);

console.log("Linked List has cycle: " + ll.hasCycle());
