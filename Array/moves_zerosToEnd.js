let arr=[1,0,5,1,0,8];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    if(arr[i]==0){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}
}

console.log(arr);
