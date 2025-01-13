// Create a promise that resolves if a random number between 1 and 10 is greater than 5, otherwise, it rejects with "Number too low!". Log the outcome.

proiseFour=new Promise((resolve,reject)=>{
    let x=Math.random()*10+1;
    if(x>5){
        resolve(x);
    }
    else{
        reject("no is too low")
    }
})

proiseFour.then((mess)=>{
    console.log(mess);
}).catch((error)=>{
    console.log(error);
})