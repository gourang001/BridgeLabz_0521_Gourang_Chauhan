class stack{
    constructor(){
        this.items=[];
    }
    push(ele){
        this.items.push(ele);
    }
    pop(ele){
        if (this.items.length == 0)
            return 'Underflow'
        return this.items.pop();
    }
    
    peek(){
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
    
    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    
}

const ex=new stack();
ex.push(30);
ex.push(10);
ex.push(50);
ex.push(20);
ex.push(80);

console.log(ex.printStack());

ex.pop();
console.log(`after pop operation ${ex.printStack()}`);

console.log(ex.isEmpty());

console.log(`peek element is ${ex.peek()}`);