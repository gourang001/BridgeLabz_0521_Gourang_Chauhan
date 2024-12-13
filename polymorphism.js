// Polymorphism in JavaScript is typically implemented using method overriding. A parent class defines a method, and child classes provide their specific implementations of that method.
class Animal{
    sound(){
        console.log("Animal make sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    sound(){
        console.log("Cat meow");
    }
}

function makeSound(animal) {
    animal.sound(); 
}
let dog=new Dog();
let cat=new Cat();
// console.log(dog);
makeSound(dog);
makeSound(cat);