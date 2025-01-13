// Simulate a Delayed API Call:
// Create a function fetchData() that returns a promise simulating a delayed API call. The promise should resolve after 3 seconds with the data: { id: 1, name: 'John Doe' }. Log the data when resolved.

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("{ id: 1, name: 'John Doe' }");
        },3000)
    })
}

fetchData().then((mess)=>{
    console.log(mess);
}).catch((error)=>{
    console.log(error);
})