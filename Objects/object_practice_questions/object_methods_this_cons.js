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
  
  employee2.listProperties();  
  employee2.listValues();  



//2



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
