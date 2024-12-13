// The spread operator (...) in JavaScript allows you to unpack elements from an array or object, or pass elements as individual arguments to a function. 
// It's the opposite of the rest parameter which collects multiple arguments into an array.

// Syntax for Spread Operator
// Array Spread:

// Unpacks elements of an array.
// javascript
// Copy code
// let newArray = [...array];

// Use Cases
// Cloning Arrays/Objects: Create shallow copies of arrays and objects.
// Merging Arrays/Objects: Combine multiple arrays or objects into one.
// Passing Arguments: Pass elements of an array as individual arguments to a function.

// Both operators look similar (...), but they are used in opposite ways: rest collects, and spread expands.

let arr1 = [1, 2, 3];
let arr2 = [...arr1]; 
console.log(arr2); 

let arr3 = [1, 2];
let arr4 = [3, 4];
let merged = [...arr3, ...arr4];
console.log(merged); 

// Passing Array Elements as Arguments

function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2,];
console.log(sum(...numbers,8));
