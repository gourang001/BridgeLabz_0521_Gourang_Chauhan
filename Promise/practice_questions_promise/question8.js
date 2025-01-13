// Convert Callback to Promise: 
// Convert the following callback-based function into a Promise-based one: 
// function getUser(callback) {
    // setTimeout(() => {
        // callback(null, { id: 1, name: 'rahul' });
    // }, 2000);
// }


function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("{id: 1, name: 'rahul'}")
        },2000)
    })
}

getUser().then((mess)=>{
    console.log(mess);
}).catch((error)=>{
    console.log(error);
})