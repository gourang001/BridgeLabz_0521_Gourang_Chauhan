// Create a promise that rejects with the error message "Something went wrong!". Handle the rejection using .catch().

const proiseTwo=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("something went wrong!");
    })
})

proiseTwo.then((mess)=>{
    console.log(mess);
}).catch((error)=>{
    console.log(error);
})