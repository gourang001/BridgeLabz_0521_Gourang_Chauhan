// callback: when a function is passed as an argument to another function is known as callback
hello(goodbye);

function hello(callback){
    console.log("hello");
    callback();
    
}


function goodbye(){
    console.log("good-bye");
    
}