// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

function solve(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            ans.push(arr[i][j]);
        }
    }
    return ans;
}

let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(solve(arr));
