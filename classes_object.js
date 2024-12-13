// A class in JavaScript is a blueprint for creating objects with shared properties and methods
// An object is an instance of a class. It represents a specific entity with unique data


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
    }
}

let person1 = new Person("Alice", 25); // creating objects
let person2 = new Person("Bob", 30);   

person1.greet(); 
person2.greet(); 