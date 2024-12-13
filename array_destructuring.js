let user=["Aman",50,"Delhi"];
let [name,age,city]=user;

console.log("name");
console.log(age);

let admin=["Vishal",,"Ambala"];
let [name1,age1=30,city1]=admin;

console.log(age1);

let user2=["Rahul",50,["male",25000]];

let [name2,age2,[gender,salary]]=user2;
console.log(gender);
