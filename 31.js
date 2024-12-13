// 31. Create a function that will return the number of words in a text
let text="today is wednesday and i am going to work"
text=text.split(" ").join("");

let count=0;
for(let i=0;i<text.length;i++){
    if(text.charAt(i)>'a' || text.charAt(i)<'z'){
        count++;
    }
}

console.log(count);
