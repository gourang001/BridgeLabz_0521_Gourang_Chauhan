// Object References
// A reference to an object is a variable that holds the memory address of the object.
// It is a way to access the object's properties and methods without having to know the object's

const obj1={name:"rahul"};
const obj2=obj1;

obj2.name="abhay";
console.log(obj1.name); // Output: abhay, obj1 and obj2 are references to the same object. When we change the name property of obj2, we are changing the same object that obj1 references.
console.log(obj2.name);

// Comparing Objects Two object references are only considered equal if they point to the same memory location.
console.log(obj1===obj2);


const person1={name:"john"};
const person2={name:"john"};

console.log(person1===person2);
console.log(person1==person2);