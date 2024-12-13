// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
    if (arr.length === 0) return arr; 
    const lastElement = arr.pop();   
    arr.unshift(lastElement);       
    return arr;
}


const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateRight(array);
console.log(rotatedArray); 
