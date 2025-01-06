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

    // Print the linked list
    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    static mergeSortedLists(l1, l2) {
        let dummy = new Node(0); 
        let current = dummy; 

        let p1 = l1; 
        let p2 = l2; 

        while (p1 !== null && p2 !== null) {
            if (p1.data <= p2.data) {
                current.next = p1;  
                p1 = p1.next;       
            } else {
                current.next = p2;  
                p2 = p2.next;       
            }
            current = current.next; 
        }

        if (p1 !== null) {
            current.next = p1;
        } else if (p2 !== null) {
            current.next = p2;
        }

        return dummy.next; 
    }
}


const ll1 = new LinkedList();
ll1.addLast(1);
ll1.addLast(3);
ll1.addLast(5);

const ll2 = new LinkedList();
ll2.addLast(2);
ll2.addLast(4);
ll2.addLast(6);

console.log("List 1:");
ll1.print();

console.log("List 2:");
ll2.print();

const mergedHead = LinkedList.mergeSortedLists(ll1.head, ll2.head);

console.log("Merged List:");
let curr = mergedHead;
while (curr) {
    console.log(curr.data);
    curr = curr.next;
}
