// The first resolves in 1 second with "First resolved".
// The second resolves in 2 seconds with "Second resolved".
// The third resolves in 3 seconds with "Third resolved".
// Use Promise.all to wait for all promises to resolve and log the results.

const one=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("solve 1st promise");
    },1000)
})

const two=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("solve 2st promise");
    },2000)
})

const three=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("solve 3st promise");
    },3000)
})

Promise.all([one,two,three]).then((mess)=>{
    console.log(mess);
})
