function reverseFirstKElements(queue, k) {
    const stack = [];
    
    for (let i = 0; i < k; i++) {
        if (queue.length > 0) {
            stack.push(queue.shift());
        }
    }

    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    const remaining = queue.length - k;
    for (let i = 0; i < remaining; i++) {
        queue.push(queue.shift());
    }

    return queue;
}


const queue = [1, 2, 3, 4, 5, 6];
const k = 3;
console.log(reverseFirstKElements(queue, k)); 
