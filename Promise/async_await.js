// async/await
// Async= makes a function return a promise
// Await= makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameter
// Everything after Await is placed in an event queue


function walkDog(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const dogwalk=true;
        if(dogwalk){
            resolve("you walk the dog")
        }
        else{
            reject("you did not walk the dog")
        }
     },1500)   
    })
}


function cleanKitchen(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const clean=true;
        if(clean){
            resolve("you clean the kitchen")
        }
        else{
            reject("you did not clean the kitchen")
        }
     },2000)   
    })
}


function garbageCollect(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const garbage=false;
        if(garbage){
            resolve("you collect the garbage")
        }
        else{
            reject("you did not collect the garbage")
        }
     },3000)   
    })
}


// traditional method
// walkDog().then((val)=>{
//     console.log(val);
//     return cleanKitchen()
// }).then((val)=>{
//     console.log(val);
//     return garbageCollect();
// }).then((val)=>{
//     console.log(val);
//     console.log("you complete all the work");
// }).catch((error)=>{
//     console.log(error);
// })

// using async/await

async function doneWork(){
    try{

    
    const dogresult=await walkDog();
    console.log(dogresult);
    
    const kitchenresult=await cleanKitchen();
    console.log(kitchenresult);
    
    const garbageresult=await garbageCollect();
    console.log(garbageresult);
    }
    catch(error){
        console.log(error);
    }
}

doneWork();

