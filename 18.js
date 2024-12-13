function check(n){
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

let i=0,j=2;
while(i<100){
    if(check(j)){
        i++;
        console.log(j);
    }
    j++;
}