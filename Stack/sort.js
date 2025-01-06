function sortStack(stack) {
    const tempStack = [];

    while (stack.length > 0){
        const current = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
            stack.push(tempStack.pop());
        }

        tempStack.push(current);
    }


    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }
}

let stack = [3, 1, 4, 5, 2];
console.log('Original Stack:', stack);

sortStack(stack);

console.log('Sorted Stack:', stack);
