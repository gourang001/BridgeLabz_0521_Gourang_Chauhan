// Copying Objects
// There are two primary ways to copy objects:

// Shallow Copy: Duplicates the top-level properties only.
// Deep Copy: Recursively duplicates all levels of an object.

const original={
    name:"harsh",
    age:25,
    address:{
        country:"India"
    }
}

const ShallowCopy={...original};
ShallowCopy.name="bhanu"; // only modifies shallowCopy
ShallowCopy.address.country="haryana" // modifies both objects
console.log(original);
console.log(ShallowCopy);


const original1={
    name:"harsh",
    age:25,
    address:{
        country:"India"
    }
}

const DeepCopy=JSON.parse(JSON.stringify(original1));
DeepCopy.name="bhanu"; // only modifies DeepCopy
DeepCopy.address.country="haryana" // modifies only DeepCopy
console.log(original1);
console.log(DeepCopy);