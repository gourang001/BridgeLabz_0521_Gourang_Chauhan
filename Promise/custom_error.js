const customErr=new Error("custom error by gourang");
customErr.name="homeError";
let age=10;
try{
    if(age<18){
    throw customErr
}
else{
    console.log("you are eligible");
}
}
catch(e){
    console.log(e.name);
    console.log(e.message);
}
