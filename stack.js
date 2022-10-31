//stack using array

class Stack{
    constructor(capacity){
        this.top=-1;
        this.item = [];
        this.capacity = capacity;
    }
    push(element){
        if(this.top == this.capacity){
            console.log("STACK OVERFLOW");
            return;
        }
        this.top++;
        this.item[this.top]=element;
    }
    pop(){
        if(this.isEmpty()){
            console.log("STACK UNDERFLOW");
            return;
        }
            let result = this.item[this.top];
            this.top--;
            return result;            
        }
    peek(){
        if(this.top == -1){
            console.log("STACK IS EMPTY");
            return;
        }
        return this.item[this.top];
    }
    isEmpty(){
        return this.top==-1;
    }
    size(){
        return this.top+1;
    }
    clear(){
        this.item = [];
    }
}
let stack = new Stack(4);
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);
stack.push(16);
console.log(stack.item);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.item);