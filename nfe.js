// A Named Function Expression (NFE) in JavaScript is a function expression with an explicit name. 
// Unlike an anonymous function, an NFE provides a name that is available within the function's scope. 
// This is useful for recursion and debugging.
// use case
// local scope: function is accessible only with in the function body.
// Not globally accessible:
// Debugging benifites: NFE provides a meaningful name in stack trace for easier debugging
// Recursive support: enable the function to call itself for recursive operation

const example = function funcName() {
    console.log("This is a Named Function Expression");
};
example();


const greet = function sayHello() {
    console.log(typeof sayHello); 
};
greet();


const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); 
};

console.log(factorial(5)); 
