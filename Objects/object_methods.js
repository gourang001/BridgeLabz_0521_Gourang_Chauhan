// Use Cases
// Use Object.keys(), Object.values(), or Object.entries() for iteration.
// Use Object.freeze() or Object.seal() for immutability.
// Use Object.create() for prototypal inheritance.

// 1. Static Methods
// These are methods available directly on the Object global object.

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]

let obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj1)); // Output: [1, 2, 3]

// Object.entries()
// Returns an array of the object's own enumerable key-value pairs as [key, value] arrays.


let obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj2)); // Output: [["a", 1], ["b", 2], ["c", 3]]


// Object.assign()
// Copies the properties of one or more source objects to a target object.


let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }

// Object.freeze()
// Prevents modification of an object's properties and values (non-extensible and read-only).

let obj3 = { a: 1 };
Object.freeze(obj3);
obj3.a = 2; // No effect
console.log(obj3.a); // Output: 1


// Object.seal()
// Prevents adding or removing properties but allows modification of existing ones.

let obj4 = { a: 1 };
Object.seal(obj4);
obj4.b = 2; // Cannot add new properties
obj4.a = 2; // Can modify existing properties
console.log(obj4); // Output: { a: 2 }

// Object.create()
// Creates a new object with a specified prototype and optional properties.

let proto = { greet() { console.log("Hello!"); } };
let obj5 = Object.create(proto);
obj5.greet(); // Output: "Hello!"


// Object.is()
// Compares two values for strict equality, including special cases like NaN.

console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0));    // Output: false


// Object.getOwnPropertyDescriptors()
// Returns an object containing all property descriptors of the object.

let obj6 = { a: 1 };
console.log(Object.getOwnPropertyDescriptors(obj6));
/*
Output:
{
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/




// Prototype Methods
// These are methods available on all object instances through the prototype chain.

// hasOwnProperty()
// Checks if the object has a property as its own (not inherited).


let obj7 = { a: 1 };
console.log(obj7.hasOwnProperty('a')); // Output: true
console.log(obj7.hasOwnProperty('b')); // Output: false




















