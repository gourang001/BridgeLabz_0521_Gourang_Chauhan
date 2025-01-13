// Write a promise that resolves with a number. In the .then() chain, add 5 to the number, then multiply it by 2, and log the final result.

const proiseThree=new Promise((resolve,reject)=>{
    resolve(10);
})

proiseThree.then((value)=>{
    return value+5;
}).then((value)=>{
    return value*2;
}).then((final)=>{
    console.log(final);
})