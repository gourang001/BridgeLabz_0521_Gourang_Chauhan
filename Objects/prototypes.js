// prototypes are a mechanism by which objects inherit properties and methods from other objects. 


function person(name, age){
    this.name = name;
    this.age = age;
  }
  
  person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  const person1 = new person("rahul", 25);
  const person2 = new person("aman", 30);
  
  person1.sayHello(); 
  person2.sayHello(); 



// prototype inheritance

  const animal={
    eats: true,
    walk(){
      console.log("Animal is walking.");
    }
  };
  
  const dog ={
    bark(){
      console.log("dog barks");
    }
  };
  
  
  Object.setPrototypeOf(dog, animal);
  
  console.log(dog.eats); 
  dog.bark();
  dog.walk(); 
  


// __proto__

const vehicle={
    wheels: 4,
    drive(){
      console.log("Driving...");
    }
  }
  
  const car={
    brand: "Toyota",
  }
  

  car.__proto__ = vehicle;
  
  console.log(car.wheels); 
  car.drive();
  
  
  vehicle.honk = function () {
    console.log("Beep beep!");
  };
  

  car.honk(); 
  
  console.log(car.__proto__ === vehicle); 
  