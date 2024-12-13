// In JavaScript, the rest parameter (...) allows you to represent an indefinite number of arguments as an array.
//  It's useful when you're not sure how many arguments will be passed to a function

// Both operators look similar (...), but they are used in opposite ways: rest collects, and spread expands.

function sum(...number){
    let x=0;
    for(let num of number){
        x+=num
    }
    return x;
}

console.log(sum(2,3,4,5));
console.log(sum(2,3));


let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;

console.log(first);  
console.log(second);
console.log(rest);   
