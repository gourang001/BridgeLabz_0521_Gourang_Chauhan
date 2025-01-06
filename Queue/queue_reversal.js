class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }
}

function reverseQueue(queue) {
    const stack = [];
    
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    return queue;
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Original Queue:", queue.items);

reverseQueue(queue);
console.log("Reversed Queue:", queue.items);
