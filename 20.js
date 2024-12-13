// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    if (arr.length === 0) return arr; 
    const firstElement = arr.shift(); 
    arr.push(firstElement);        
    return arr;
}


const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateLeft(array);
console.log(rotatedArray); 
