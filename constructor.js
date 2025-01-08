class Person {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  person1.sayHello(); // "Hello, my name is Alice and I'm 25 years old."
  person2.sayHello(); // "Hello, my name is Bob and I'm 30 years old."
  