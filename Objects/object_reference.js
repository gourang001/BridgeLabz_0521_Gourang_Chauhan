let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj2.name);  


console.log(obj2.name); // Output: "Bob"
console.log(obj1.name); // Output: "Bob" (because obj1 and obj2 share the same memmory)
