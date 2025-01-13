// .catch() Method:
// Used to handle errors (rejected Promises).
// If a reject is called or an error occurs in the Promise, .catch() is executed.
class customError extends Error{
    constructor(message){
        super(message);
        this.message=message;
        this.name="custom error"
    }
}
function fun(a,b){
    if(b==0){
        throw new customError("operation is not valid");
    }
    return a/b;
}
try{
    let ans=fun(10,0);
    console.log(ans);
}
catch(error){
    console.log(`${error.name} : ${error.message}`);
}

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       reject("not found");
//     // resolve("successfull")
//     }, 1000);
//   });
  
// promise.then((result)=>{
//       console.log(result); 
//     }).catch((error) => {
//       console.error("Error:", error);
// }).finally(()=>{
//     console.log("always run");
// });
  