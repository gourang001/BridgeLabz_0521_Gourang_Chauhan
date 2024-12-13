// 33. Calculate the sum of numbers received in a comma delimited string
let str="10,20,30,40"

let ans=str.split(",");
console.log(ans);

ans = ans.map(num=> parseInt(num));
ans = ans.reduce((acc,cur)=>{
    return acc+cur;
},0);
console.log(ans);
