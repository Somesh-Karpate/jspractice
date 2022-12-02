// Write a javascript function to sort a stack using another stack.

function Stack(arr){
    let arr1 = [];
    while(arr.length>0){
        let tmp = arr.pop();
        
        while(arr1.length>0 && arr1[arr1.length-1]>tmp){
            arr.push(arr1[arr1.length-1]);
            arr1.pop();
        }

        arr1.push(tmp);
    }
    console.log(arr1);
}

const arrToSort = [98, 88, 3, 69, 55];
Stack(arrToSort);