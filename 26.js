//  26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
function solve(arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }
    return arr; 
}

let arr1 = [1, 2, 3, 4, 5, 6, 8];
let arr2 = [1, 5, 4, 8, 9, 6];
let arr = [];


let result = solve(arr1,arr2);
console.log(result);