class Person {
    #name; 

    constructor(name, age) {
        this.#name = name;
        this.age = age; 
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        if (newName) {
            this.#name = newName;
        } else {
            console.log("Name cannot be empty");
        }
    }

    describe() {
        return `Name: ${this.getName()}, Age: ${this.age}`;
    }
}


const person = new Person("Alice", 30);
console.log(person.describe()); 
person.setName("Bob");
console.log(person.describe()); 
// console.log(person.#name); 
