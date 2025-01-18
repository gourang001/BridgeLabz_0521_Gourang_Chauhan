// Optional Chaining (?.), Property Flags, and Property Descriptors


  // optional Chaning 
// 1
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


// 2

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


// 3
const employee = {
name: "gourang",
position: "Software Engineer",
skills: {
    primary: "JavaScript",
    secondary: "React",
},
contact:{
    email: "gourang@gmail.com",
},
getIntroduction() {
    return `Hi, I'm ${this.name}, a ${this.position}.`;
},
};

console.log(employee.skills?.primary); 
console.log(employee.skills?.tertiary); 
console.log(employee.contact?.phone); 
console.log(employee.getIntroduction?.()); 
console.log(employee.increment());


const user1 = {
    name: "Gourang",
    address: {
      city: "Ambala",
      zip: {
        code: 12547
      }
    }
  };
  
  
  console.log(user1?.address?.city); 
  console.log(user1?.address?.zip?.code); 
  console.log(user1?.address?.country?.name); 
  

  
  // Adding a property with default flags
  Object.defineProperty(user1, "username", "account",
    {
    value: "gourang001",
    writable: true,      
    enumerable: true,    
    configurable: true,  
  },{
    value:"subscription",
    writable:false,
    enumerable:true,
    configurable:true,
  }
);
  
  console.log(user1);
  


 
  Object.defineProperty(user1, "accountType",{
    value: "premium",
    writable: false,     
    enumerable: true,    
    configurable: false, 
  });
  
  
  console.log(user1.username); 
  console.log(user1.accountType); 
  
//   modify a read-only property
  user1.accountType = "standard";
  console.log(user1.accountType); 
  
   // delete property
  delete user1.accountType; 
  console.log(user1.accountType); 
  
  // Listing properties
  console.log(Object.keys(user1)); 
  

  
  
  // Making a property non-enumerable
  Object.defineProperty(user1, "password", {
    value: "pass001",
    writable: true,
    enumerable: false, // Hidden from loops
    configurable: true,
  });
  

  console.log(Object.keys(user1));
  




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