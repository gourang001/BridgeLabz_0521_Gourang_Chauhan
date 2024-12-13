// 22. Reverse an array
let arr=[1,2,4,5,8];
let newarr=[];

let j=0;
for(let i=arr.length-1;i>=0;i--){
    newarr[j]=arr[i];
    j++;
}
console.log(newarr);

for(let k=0;k<newarr.length;k++){
    // console.log(newarr[k]);
}
let x=arr.reverse();
console.log(x);

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i] );
}

