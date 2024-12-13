function solve(n){
    let fib=[0,1];

    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    for(let i=0;i<fib.length;i++){
        console.log(fib[i]);
        
    }
}
console.log(solve(10));

