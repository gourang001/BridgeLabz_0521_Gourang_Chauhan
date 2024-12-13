// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function solve(arr1,arr2){
    arr=[...arr1,...arr2];
    const set=new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    }
    return set;
}

let arr=[];
let arr1=[1,2,3,4,5];
let arr2=[2,5,8,9,6];
console.log(solve(arr1,arr2));