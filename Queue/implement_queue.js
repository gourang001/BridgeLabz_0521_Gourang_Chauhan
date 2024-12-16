class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(ele){
        this.items.push(ele);
    }
    dequeue(){
        if(this.items.length==0) return "underflow"
        else return this.items.shift();
    }
    isEmpty(){
        return this.items.length==0;
    }
    front(){
        if(this.isEmpty()) return "queue is empty"
        else return this.items[0];
    }
    size(){
        return this.items.length;
    }
    printqueue(){
        return this.items.join(" ");
    }
    rear(){
        return this.items[this.items.length-1];
    }
}

const q=new Queue;
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);


console.log(q.size());
console.log(q.printqueue());
q.dequeue();

console.log(q.printqueue());
console.log(q.front());
console.log(q.rear());