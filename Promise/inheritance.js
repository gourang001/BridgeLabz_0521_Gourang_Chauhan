class Animal{
    eat(){
        console.log("animal is eating");
    }
}
class Dog extends Animal{
    bark(){
        console.log("Dog barks");
    }
}

let dog=new Dog();
dog.bark();
dog.eat();