var prompt = require('prompt-sync')();
let employee=[];

for(let i=0;i<2;i++){
    let emp=prompt('Enter employee name: ');
    let sal = parseFloat(prompt('Enter employee salary: '));

    employee.push({name:emp,salary:sal});
}
// console.log(employee);

let x = parseFloat(prompt('Enter the threshold salary: '));

function check(employee){
    return employee.salary>x;
}

let result=employee.filter(check);
//console.log(result);

result = result.map(emp => {
    return { ...emp, salary: emp.salary + emp.salary * 0.1 };
});

console.log(result);
