// factorial of no.
function fact(n){
    if(n==0) return 1;
    else{
        return n*fact(n-1);
    }
}
console.log(`factorial of ${5} is ${fact(5)}`);

// Fibonacci Sequence
// The Fibonacci sequence is defined as:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2)

function fibo(n){
    if(n<=1) return n;
    else{
        return fibo(n-1)+fibo(n-2);
    }
}
console.log(fibo(6));
