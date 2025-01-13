// The optional chaining operator (?.) is a feature in JavaScript that 
// allows you to safely access properties, methods, or elements on an object or array without throwing an error


// object?.property
// object?.[expression]
// object?.method()

let user={
    name:"goni",
    age:21,
    address:{
        city:"Ambala",
        pin:133206
    }
}

// console.log(user?.address?.pin); //133206
// console.log(user?.address?.vill); // undefined


let abc={
    greet(){
        console.log("hello");
    }
}

console.log(abc?.greet());

let arr=[{name:"goni"},{name:"harsh"}];
console.log(arr[0]?.name);















































