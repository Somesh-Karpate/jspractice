//queue using array


class Queue{
    constructor(capacity){
        this.capacity = capacity;
        this.front = 0;
        this.size = 0;
        this.arr = [];
    }
    isFull(){
        return this.size==this.capacity;
    }
    isEmpty(){
        return this.size == 0;
    }

    enqueue(element){
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        let rear = (this.front + this.size - 1) % this.capacity;
        rear = (rear+1)% this.capacity;
        this.arr[rear]=element;
        this.size += 1;
        console.log(element + " is enqueued");   
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        let element = this.arr[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size -= 1;
        console.log(element + " is dequeued");

    }
    //PEEK
    getFront(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.arr[this.front];
    }
    getRear(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        let rear = (this.front+this.size-1)%this.capacity;
        return this.arr[rear];
    }
}
let que = new Queue(10);
que.enqueue(1);
que.enqueue(2);
que.enqueue(4);
que.enqueue(8);
que.enqueue(16);
console.log(que.arr);
que.dequeue();
console.log(que.getFront());
console.log(que.getRear());

