// 40. Implement the bubble sort algorithm for an array of numbers

let arr=[5,1,9,7,3,0];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr);
