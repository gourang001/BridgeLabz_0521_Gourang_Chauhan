// classes are the blueprint for creating objects
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ${this.name} and your age is ${this.age}`);
    }
}

const person1=new Person("John",25);
person1.greet();

class calculator{
    add(a,b){
        return a+b;
    }
}

const cal=new calculator();
console.log(cal.add(2,3));

// private fields in class

class Bank{
    #pin; // private field, not accessible
    constructor(name,pin){
        this.name="rahul";
        this.#pin=123456;
    }
    getName(){
        return this.name;
    }
}

const details=new Bank();
console.log(details.pin);

// Inheritance in classes

class Animal{
    makeSound(){
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}

const myanimal=new Dog();
myanimal.makeSound(); // Animal makes sound
myanimal.sound(); // Dog barks