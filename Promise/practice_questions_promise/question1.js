// Write a promise that resolves with the string "Hello, World!" after 2 seconds and log the result using .then().

const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello World");
    },2000)
})

promiseOne.then((mess)=>{
    console.log(mess);
}).catch((error)=>{
    return "not found"
})
