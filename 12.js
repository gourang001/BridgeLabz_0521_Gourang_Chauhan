// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positive(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=0){
            console.log(arr[i]);
        }
    }
}
let arr=[1,2,-3,8,-9,-10,5,4,-3];
positive(arr);

let arr1=[];
