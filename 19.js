function check(n){
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}
let p=5;
let k=10;
let i=0,j=2;
while(i<p){
    if(check(j) && j>k){
        i++;
        console.log(j);
    }
    j++;
}