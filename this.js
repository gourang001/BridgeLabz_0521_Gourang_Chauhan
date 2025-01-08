//  Global Context
// In the global execution context, this refers to the global object. In browsers, it's the window object.


console.log(this); // In a browser, it outputs the window object


// Inside a Function
// In regular functions, the value of this depends on how the function is called:

// In a non-strict mode function, this refers to the global object (window in browsers).
// In strict mode ('use strict'), this is undefined inside a function.

// function example() {
//     console.log(this); // In non-strict mode, 'this' will refer to the global object (window in browsers)
//   }
  
//   example(); // In browsers, outputs the window object
  

'use strict';
function example() {
  console.log(this); // 'this' is undefined in strict mode
}

example(); // Output: undefined



// Inside an Object Method

let person = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, ${this.name}!`); // 'this' refers to the person object
    }
  };
  
  person.greet(); // Output: "Hello, Alice!"
  
//  Inside a Constructor Function

function Person(name) {
    this.name = name; // 'this' refers to the newly created object
  }
  
  let person1 = new Person("Alice");
  console.log(person1.name); // Output: "Alice"
  

