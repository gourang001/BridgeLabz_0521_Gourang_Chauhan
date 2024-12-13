// 16. Create a function that will return a Boolean specifying if a number is prime

function check(n){
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

console.log(check(10));