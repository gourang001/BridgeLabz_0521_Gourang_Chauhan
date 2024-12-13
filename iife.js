// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after it is defined.
//  It helps create a private scope to avoid polluting the global namespace and is commonly used for encapsulation.

(function one(){
    console.log("DB Connected");
})();

// using arrow function
(()=>{
    console.log("2nd DB connected");
})();

// passing argument in function
((name)=>{
    console.log(`hi ${name} you will start your work now`);
    
})("Gourang")
