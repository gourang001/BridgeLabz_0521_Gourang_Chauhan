// Property flags and descriptors are mechanisms that allow you to control the behavior of object properties in JavaScript

let obj={
    name:"goni",
    age:21
}

let descriptor=Object.getOwnPropertyDescriptor(obj,"age");
console.log(descriptor);


let obj1={};
Object.defineProperty(obj1,"name",{
    value:"harsh",
    writable:false,
    enumerable:true,
    configurable:false
});

console.log(obj.name);


// writable
let obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "Alice",
  writable: false
});

obj2.name = "Bob"; // Fails silently (strict mode: throws TypeError)
console.log(obj2.name); // Output: "Alice"


// enumerable
let obj3 = {};
Object.defineProperty(obj3, "name", {
  value: "Alice",
  enumerable: false
});

console.log(Object.keys(obj3)); // Output: []
for (let key in obj3) {
  console.log(key); // No output
}

// configurable If false, the property cannot be deleted or modified

let obj4 = {};
Object.defineProperty(obj4, "name", {
  value: "Alice",
  configurable: false
});

delete obj4.name; // Fails silently
console.log(obj4.name); // Output: "Alice"


let abc={};

Object.defineProperty(abc,"name",{
  value:"harsh",
  writable:true,
  enumerable:true,
  configurable:true
})

console.log(abc.name);
