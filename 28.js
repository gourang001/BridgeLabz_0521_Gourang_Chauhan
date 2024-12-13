// 28. Calculate the sum of first 100 prime numbers and return them in an array
function check(n){
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

let i=0,j=2,k=0;
let sum=0;
let arr=[];
while(i<100){
    if(check(j)){
        i++;
        sum+=j;
        arr[k]=j;
        k++;
    }
    j++;
}
console.log(`sum: ${sum}`);
console.log(arr);

