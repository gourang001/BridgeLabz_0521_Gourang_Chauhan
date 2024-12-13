// In JavaScript, a constructor is a special method used to initialize objects created from a class or function. 
// It is typically used to set up the properties of an object when it is created.

// Syntax for Class Constructor
class MyClass {
    constructor(parameter1, parameter2) {
        this.property1 = parameter1;
        this.property2 = parameter2;
    }
}

const instance = new MyClass('value1', 'value2');
console.log(instance.property1);
console.log(instance.property2); 


// Syntax for Constructor Function
function Person(name, age) {
    this.name1 = name;
    this.age1 = age;
}

const person1 = new Person('Alice', 25);
console.log(person1.name1); 
console.log(person1.age1);  

