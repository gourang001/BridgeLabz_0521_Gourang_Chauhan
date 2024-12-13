function merge(arr1,arr2){
    arr=[...arr1,...arr2];
    return arr;
}
let arr=[];
let arr1=[1,2,3];
let arr2=[4,5,6];

console.log(merge(arr1,arr2));

