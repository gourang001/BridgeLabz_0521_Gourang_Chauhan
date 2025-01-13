let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("successfull p1");  
        reject("not found");      
    },1000)
})


let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successfull p2");
        // reject("not found");
    },2000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successfull p3");
    },3000)
})


// p1.then((value)=>{
//     console.log(value);
// })

// all
// let promise_all=Promise.all([p1,p2,p3]);
// let promise_all=Promise.allSettled([p1,p2,p3]);
// let promise_all=Promise.race([p1,p2,p3]);
// let promise_all=Promise.any([p1,p2,p3]);

promise_all.then((value)=>{
    console.log(value);
})

