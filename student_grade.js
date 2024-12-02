var prompt = require('prompt-sync')();
let student=[];
let marks=[];

for(let i=0;i<4;i++){
    let std=prompt('Enter student name: ');
    let mrk=prompt('enter student marks: ');

    student.push(std);
    marks.push(mrk);
}

function check(marks){
    return marks>=33;
}

const result=marks.filter(check);
console.log(`${result.length} pass the examination`);