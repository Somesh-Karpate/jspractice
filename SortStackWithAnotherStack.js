// Write a javascript function to sort a stack using another stack.


const arrToSort = [98, 88, 3, 69, 55]
function Sort(input){
    let tmpStack = [];
    while(input.length>0){
        let tmp = input.pop();
        while(tmpStack.length>0&&tmpStack[tmpStack.length-1]>tmp){
            input.push(tmpStack[tmpStack.length-1]);
            tmpStack.pop();
        }
        tmpStack.push(tmp);
    }
    return tmpStack;
}
let stack = new Sort(arrToSort);
console.log(stack);
