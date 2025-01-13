let original = { 
    name: "Alice", 
    address: { 
        city: "island" 
    } 
};
let shallowCopy = { ...original }; // Shallow copy using spread operator

shallowCopy.name = "Bob"; 
shallowCopy.address.city = "New Wonderland"; 

console.log(original.name);         // Output: "Alice" (independent copy for primitive property)
console.log(original.address.city); // Output: "New Wonderland" (shared reference for nested object)
