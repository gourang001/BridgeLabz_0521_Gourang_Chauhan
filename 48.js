// 48. Create a function to return the longest word in a string
function solve(text){
    let str=text.split(" ");

    let n=str.length;
    let ans=0;
    let j=0;
    for(let i=0;i<n;i++){
        let l=str[i].length;
        if(l>ans){
            ans=l;
            j=i;
        }
    }
    return str[j];
}

let text="hello i am going to university"

console.log(solve(text));
