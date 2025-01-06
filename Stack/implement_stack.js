class StackUsingQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const poppedElement = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return poppedElement;
    }

    top() {
        return this.queue1[this.queue1.length - 1];
    }

    empty() {
        return this.queue1.length === 0;
    }
}

const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.empty());
