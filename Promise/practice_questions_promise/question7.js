// The first resolves in 5 seconds.The second resolves in 2 seconds.
// Log the result of the promise that resolves first.


const one=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("solve 1st promise");
    },5000)
})

const two=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("solve 2st promise");
    },2000)
})

Promise.race([one,two]).then((mess)=>{
    console.log(mess);
})