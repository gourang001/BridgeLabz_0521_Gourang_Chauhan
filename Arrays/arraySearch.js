// indexOf() method searches an array for an element value and returns its position.
let arr=["Apple", "Orange","Mango", "kiwi", "Mango"];
console.log(arr.indexOf("kiwi"));

// lastIndexOf() returns the position of the last occurrence of the specified element.
console.log(arr.lastIndexOf("Mango"));

// includes() methods to check weather element is present or not return boolean value
console.log(arr.includes("kiwi"));


// find() method returns the value of the first array element that passes a test function.

const num = [4,9,16,25,29,1,88,9,22];
let first = num.find(fun);

function fun(value, index, array) {
  return value > 18;
}
console.log(first);

// findIndex() method returns the index of the first array element that passes a test function.
let x1=num.findIndex(fun);
console.log(x1);


//  findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// console.log(high);

