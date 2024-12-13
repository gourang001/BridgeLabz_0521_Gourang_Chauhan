// 38. Create a function that will convert an array containing ASCII codes in a string

function solve(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
}


let arr = [72,69,85,99,97];
let myString = solve(arr);
console.log(myString); 
