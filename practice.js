const student = [
    { name: "rahul", age: 20, marks: 50, tech: "ruby" },
    { name: "sahil", age: 21, marks: 60, tech: "native" },
    { name: "vikas", age: 25, marks: 55, tech: "react" },
    { name: "aman", age: 22, marks: 66, tech: "native" },
    { name: "nikhil", age: 22, marks: 30, tech: "ruby" },
    { name: "rahil", age: 25, marks: 20, tech: "ruby" }
];

const rubyCount = student.filter(s => s.tech === "ruby").length;
// console.log(rubyCount);
const nativeCount = student.filter(s => s.tech === "native").length;
const reactCount = student.filter(s => s.tech === "react").length;

function check(student){
    return student.marks > 55; 
}

const highmarks = student.filter(check); 
console.log(highmarks);

// console.log(highmarks.name);

const topper = student.filter(check).map(s => s.name);
console.log(topper);


const totalRuby = student.filter(s => s.tech === "ruby").reduce((total, curr) => total + curr.marks, 0); 
console.log(`avg marks of ruby student ${totalRuby/rubyCount}`);

const totalreact = student.filter(s => s.tech === "react").reduce((total, curr) => total + curr.marks, 0); 
console.log(`avg marks of react student ${totalRuby/reactCount}`);

const totalnative = student.filter(s => s.tech === "native").reduce((total, curr) => total + curr.marks, 0); 
console.log(`avg marks of native student ${totalRuby/nativeCount}`);


const totalAge = student.reduce((sum, currentStudent) => sum + currentStudent.age, 0);
const avg=totalAge/6;

if(avg<18){
    console.log("teen group");
}
else if(avg>18 && avg<45){
    console.log("Adult group");
}
else{
    console.log("experince group");
}

// add new student
const newStudent = { name: "karan", age: 27, marks: 75, tech: "react" };
student.push(newStudent);

// remove aman from student
const updatedStudents = student.filter(s => s.name !== 'aman');
console.log(updatedStudents);


const studentMap = new Map();
student.forEach(s => studentMap.set(s.name, s));

console.log(studentMap);

// getting size of class
console.log(`size of class: ${studentMap.size}`);


const techSet = new Set();
student.forEach(s => techSet.add(s.tech));
console.log("Unique technologies used by students:", techSet);

console.log(studentMap.get("rahul"));
console.log(studentMap.has("rahul")); // check student is persent or not


let highStudent=[];
let lowStudent=[];
student.forEach(s => {
    if (s.marks > 33) {
        highStudent.push(s);
    }else if (s.marks < 33) {
        lowStudent.push(s);
    }
});
console.log(lowStudent);
