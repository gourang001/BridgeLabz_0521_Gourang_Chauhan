// 23. Reverse a string
let str="hello";
let ans="";
for(let i=str.length-1;i>=0;i--){
    ans+=str.charAt(i);
}
console.log(ans);


let res=str.split('').reverse().join('');
console.log(res);

