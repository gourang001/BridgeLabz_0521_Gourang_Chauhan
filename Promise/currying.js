// Currying in JavaScript is a functional programming technique where a function, instead of taking all its arguments at once, takes them one at a time and returns a new function for each argument. When all arguments are provided, the original function is executed.


// Without Currying:
function add(a,b){
    return a + b;
}
  
console.log(add(2, 3)); 


// With Currying:

function Add(a){
    return function(b){
      return a + b;
    };
}
  
const sum = Add(2); 
console.log(sum(3)); 
  

function multi(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(multi(2)(3)(4));