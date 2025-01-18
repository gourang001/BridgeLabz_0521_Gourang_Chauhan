const user={
    name: "Gourang",
    address:{
        city: "Ambala"
    },
    greet(){
        return "Hello!";
    }
};
console.log(user.address?.city);
console.log(user.address?.zipcode);
console.log(user.profile?.age);
console.log(user.greet?.());
console.log(user.bye?.());


const product = {
    id: 101,
    name: "Laptop",
    brand:"dell",
    availability:{
        online: true,
        inStore: false,
    },
    off(){
        return "10% off";
    },
  };
  
  console.log(product.brand?.processor); 
  console.log(product.brand?.storage); 
  console.log(product.availability?.online); 
  console.log(product.availability?.delivery); 
  console.log(product.off?.());
  console.log(product.coupon?.()); 


const employee = {
    name: "gourang",
    position: "Software Engineer",
    skills: {
        main: "JavaScript",
        sec: "React",
    },
    contact:{
        email: "gourang@gmail.com",
    },
    getIntroduction() {
        return `Hi, I'm ${this.name}, a ${this.position}.`;
    },
  };
  
  console.log(employee.skills?.main); 
  console.log(employee.skills?.third); 
  console.log(employee.contact?.phone); 
  console.log(employee.getIntroduction?.()); 
  console.log(employee.increment?.());
  



const student = {};
Object.defineProperty(student, 'name', {
    value: 'gourang',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(student,'age',{
        value: 30,
        writable: false,
        enumerable: true,
        configurable: true
    });

Object.defineProperty(student,'uni',{
        value: 'chitkara',
        writable: true,
        enumerable: false,
        configurable: true
})

console.log(student);
student.age = 35;
console.log(student.age);

for (let key in student) {
    console.log(key);
}



class Movie{
    constructor(name, dirc){
      this.name = name;
      this.dirc = dirc;
      this.available = true; 
    }
  
    rent(){
      if (this.available) {
        this.available = false;
        console.log(`You have rented "${this.name}". Enjoy watching!`);
      } 
      else{
        console.log(`Sorry, "${this.name}" is already rented.`);
      }
    }
  
    return(){
      if(!this.available){
        this.available = true;
        console.log(`You have returned "${this.name}". Thank you!`);
      } 
      else{
        console.log(`"${this.name}" was not rented.`);
      }
    }
  }
  
  const movie1 = new Movie("War", "Bansali");
  const movie2 = new Movie("Bahubali", "Rajamouli");
  
  movie1.rent();
  movie1.rent(); 
  movie1.return(); 
  movie1.return(); 
  
  movie2.rent(); 
  movie2.return(); 



class Employee{
    constructor(name, dept, salary){
      this.name = name;
      this.dept = dept;
      this.salary = salary;
    }
  
    changedept(newdept){
      this.dept = newdept;
      console.log(`${this.name} has been transferred to the ${newdept} dept.`);
    }
  
    
    increaseSalary(percentage){
      const inc = (this.salary * percentage) / 100;
      this.salary += inc;
      console.log(`${this.name}'s salary has been increased by ${percentage}%. New salary: ${this.salary}`);
    }
  
    displayDetails(){
      console.log(`Employee: ${this.name}, dept: ${this.dept}, Salary: ${this.salary}`);
    }
  
    
    sealEmployee(){
      Object.seal(this);
      console.log(`${this.name}'s object is sealed. No new properties can be added or deleted.`);
    }
  

    freezeEmployee(){
      Object.freeze(this);
      console.log(`${this.name}'s object is frozen. Properties cannot be modified.`);
    }
  

    listProperties(){
      const keys = Object.keys(this);
      console.log(`${this.name}'s properties: ${keys.join(", ")}`);
    }
  

    listValues(){
      const values = Object.values(this);
      console.log(`${this.name}'s property values: ${values.join(", ")}`);
    }
  }
  

  const employee1 = new Employee("rahul", "Sales", 50000);
  const employee2 = new Employee("arya", "Marketing", 60000);
  
  
  employee1.displayDetails();  
  employee2.displayDetails();  


  
  // Seal an employee object
  employee1.sealEmployee();  // No new properties can be added or deleted.
  employee1.age=21;
  console.log(employee1.age);
  

  
//   Freeze an employee object
  employee2.freezeEmployee(); // Properties cannot be modified.
  
//   modify existing properties after freezing
  employee2.salary = 70000;  // not modify the salary
  employee2.displayDetails();  
  
  employee1.listProperties();  
  employee1.listValues();  
  
//   employee2.listProperties(); 
//   employee2.listValues();
  



class Student{
    constructor(name, grade, marks){
      this.name = name;
      this.grade = grade;
      this.marks = marks;
    }
  
    displayDetails() {
      console.log(`Student: ${this.name}, Grade: ${this.grade}, Marks: ${this.marks}`);
    }
  
    sealStudent(){
      Object.seal(this);
      console.log(`${this.name}'s object is sealed. No new properties can be added or deleted.`);
    }
  
    freezeStudent(){
      Object.freeze(this);
      console.log(`${this.name}'s object is frozen. Properties cannot be modified.`);
    }
  
    listProperties(){
      const keys = Object.keys(this);
      console.log(`${this.name}'s properties: ${keys.join(", ")}`);
    }
  
    listValues(){
      const values = Object.values(this);
      console.log(`${this.name}'s property values: ${values.join(", ")}`);
    }
  }
  
  const student1 = new Student("Arjun", 10, 85);
  const student2 = new Student("rahul", 9, 92);
  
  student1.displayDetails();
  student2.displayDetails();
  
  // Seal a student object
  student1.sealStudent();
  student1.age = 16; // Attempt to add a new property
  console.log(student1.age); 
  
  // Freeze a student object
  student2.freezeStudent();
  student2.grade = 10; // Attempt to modify a property
  student2.displayDetails(); // Grade remains unchanged
  
  // List properties and values
  student1.listProperties();
  student1.listValues();
  
  // student2.listProperties();
  // student2.listValues();
  