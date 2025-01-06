function nextGreaterElement(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++){
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            const index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    return result;
}


const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); 
