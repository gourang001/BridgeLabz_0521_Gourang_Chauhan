// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.

function solve(n) {
    const arr = [];
    while(arr.length < n){
        const num = Math.floor(Math.random() * n)+1;
        if(!arr.includes(num)){
            arr.push(num);
        }
    }
    return arr;
}

const n = 5;
console.log(solve(n));
