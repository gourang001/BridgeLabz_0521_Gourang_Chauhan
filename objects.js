// creating an object

const person={
    name:"John",
    age:25,
    isStudent:true
}
console.log(person.name);


// creating object using 'Object' constructor
const person2 = new Object();
person2.name = "Harry";
person2.age = 35;
console.log(person2.age);;

// accessing object properties
console.log(person.name);
console.log(person['age']);

// adding, updating, deleting object properties
person.height=170;
person.age=50;
delete person.isStudent;
console.log(person);

// methods: objects can have functions as properties called methods

const person3={
    name:"Rahul",
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
person3.greet();

// Iterating over properties
for(const key in person){
    console.log(`${key}:${person[key]}`);
}

// objects.value: returns an array of objects values.
console.log(Object.values(person));


// spread operator : copies all properties of an object to another object
const person4={...person,add:"India"};
console.log(person4);

// Destructuring 
const {name,age}=person;
console.log(name);
console.log(age);

// object.assign: copies properties fromone or more objects to a target object

const target={a:1};
const source={b:2,c:3};
Object.assign(target,source);
console.log(target);

// object.freeze: makes an object immutable

const obj={name:"Alice"};
Object.freeze(obj);
obj.name="john" //error
console.log(obj.name);

// object.seal: prevent adding new properties but allows modifying existing ones
const obj1={name:"hello"};
Object.seal(obj1);
obj1.age=25;
obj1.name="bob";
console.log(obj1);

