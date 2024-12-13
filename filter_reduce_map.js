// The filter() method creates a new array filled with elements that pass a test provided by a function.
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);


// The reduce() method returns a single value: the function's accumulated result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0); 

console.log(sum); 


// map() creates a new array from calling a function for every array element.
// map() does not change the original array.
const number = [65, 44, 12, 4];
const newArr = number.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

