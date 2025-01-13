// let promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(function sayhello(){
//         console.log("hello");
//     },5000)
//     resolve("successful");
// })

// console.log(promiseOne);


let promisetwo=new Promise((resolve,reject)=>{
    let flag=true;
    if(flag){
        resolve("fullfiled")
    }
    else{
        reject("rejected")
    }
})

promisetwo.then((mess)=>{
    console.log("message is "+mess);
}).catch((error)=>{
    console.log("error: "+error);
})


// promise chaining
// promisetwo.then((mess)=>{
//     console.log("message no 1 "+mess);
// }).then((mess)=>{
//     console.log("message no 2 "+mess);
// }).then((mess)=>{
//     console.log("message no 3 "+mess);
// }).catch((error)=>{
//     console.log("error "+error);
// })




let promisethree=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve(10)
    }
    else{
        reject(-1)
    }
})



// promise chaining
promisethree.then((mess)=>{
    console.log("message no 1 "+mess);
    return 20;
}).then((mess)=>{
    console.log("message no 2 "+mess);
    return 30;
}).then((mess)=>{
    console.log("message no 3 "+mess);
    return 40;
}).catch((error)=>{
    console.log("error "+error);
}).finally((mess)=>{
    console.log("run allways");
})



let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"third");
})

Promise.all([promise3,promise2,promise1]).then((values)=>{
    console.log(values);
})

