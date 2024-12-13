// 37. Create a function that will convert a string in an array containing the ASCII codes of each character

function solve(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str.charCodeAt(i));
    }
    return arr;
}

let str="hello";
console.log(solve(str));
