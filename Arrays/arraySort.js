// sort() method sorts an array alphabetically
let x2=["mayank","harsh","abhay","bhanu","aman"];
x2.sort();
console.log(x2);

// reverse() method reverses the elements in an array:
x2.reverse();
console.log(x2);

// toSorted() method as a safe way to sort an array without altering the original array.
let month=["jan","feb","mar","apr"];
// month.toSorted();  new feature
//console.log(month);

// toReversed() method as a safe way to reverse an array without altering the original array.
// month.toReversed();  //new feature
// console.log(month);  


// Numeric Sort for numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


// Math.min to find the lowest number in an array
console.log(Math.min(...points));

// Math.max to find the highest number in an array
console.log(Math.max(...points));
