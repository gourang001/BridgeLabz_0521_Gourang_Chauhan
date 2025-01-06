let arr=[1,5,-3,-8,7,8];
let sum=0;
let maxsum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    if(sum<0){
        sum=0;
    }
    if(sum>maxsum){
        maxsum=sum;
    }
}

console.log(maxsum);
