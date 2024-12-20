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

    add(data) {
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

    ispalimdrome(head) {
        let str1 = "", str2 = "";
        let curr = head;

        while (curr != null) {
            str1 = `${str1}${curr.data}`;
            str2 = `${curr.data}${str2}`;
            curr = curr.next; 
        }

        return str1 === str2;
    }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(2);
ll.add(1);
ll.add(5);
ll.print();

console.log("Is Palindrome:", ll.ispalimdrome(ll.head));
