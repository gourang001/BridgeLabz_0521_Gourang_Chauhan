function solve(arr1,arr2){
    let i=0,j=0;
    while(i<arr1.length || j<arr2.length){
        if(arr1[i]!=arr2[j]){
            arr.push(arr1[i]);
            arr.push(arr2[j]);
        }
        i++;
        j++;
    }
}

let arr=[];
let arr1=[1,2,3,4,5];
let arr2=[1,5,8,7,5];
arr1.sort;
arr2.sort;
solve(arr1,arr2);
console.log(arr);
