let obj={
    toString(){
        return "42"
    },
    valueOf(){
        return 42;
    }
}

console.log(obj+10);
console.log(obj+"10");
