// Create a javascript function that flattens a multidimensional array to a one-dimensional array.


const input = [1,[2,[3,[4,[5,[6,[7]]]]]]];
let result = [];
function flatten(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }
}flatten(input);
console.log(result.toString());
