class Person{
    constructor(name, age){
        this.name = name; 
        this.age = age;   
    }

    
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const person1 = new Person("Rahul", 30);
person1.greet();


class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const lion = new Animal("Lion", "Mammal");
console.log(lion.name); 
console.log(lion.type); 

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`The ${this.make} ${this.model} is driving.`);
    }
}

const myCar = new Car("Tesla", "Model S");
myCar.drive(); 
