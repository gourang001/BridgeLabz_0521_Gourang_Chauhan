Array.prototype.sum=function(){
    return this.reduce((acc,x)=>acc+x,0)
}

let arr=[1,2,3,4];
console.log(arr.sum());

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

let a = "abc";

console.log(a.reverse())


