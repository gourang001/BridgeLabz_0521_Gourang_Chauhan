// Logical Operators (&&, ||, !)

let x=5,y=10;

console.log(x<15 && y>5); //true

console.log(x==5||y==1); //true

console.log(y!=10); //false

// Nullish operator
// The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.
// Key Difference Between || and ??:
// || returns the right-hand side if the left-hand side is falsy.
// ?? returns the right-hand side only if the left-hand side is null or undefined.

let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);

let a = null;
console.log(a ?? "Guest");


let name1 = 0;
let text1 = null;
let result1 = name1 ?? text1;
console.log(result1);



