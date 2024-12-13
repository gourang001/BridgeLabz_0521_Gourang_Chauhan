// 17. Calculate the sum of digits of a positive integer number
function solve(num){
    let sum=0;
    while(num>0){
    let rem=num%10;
    sum+=rem;
    num=num/10;
    num=Math.floor(num);
}
return sum;
}

console.log(solve(671));
