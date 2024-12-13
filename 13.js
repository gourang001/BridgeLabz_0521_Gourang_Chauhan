// 13. Find the maximum number in an array of numbers
let arr=[12,45,785,145,10245,44,589,10];

let max=arr[0];
max=Math.max(...arr);
console.log(max);

let l=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>l){
        l=arr[i];
    }
}
console.log(l);
