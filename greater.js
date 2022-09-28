// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works 


function greaterNum(a,b){
    if(a > b){
        console.log(" a is greater");
    }else if(a === b){
        console.log("a is equal to b");
    }else{
        console.log("a is samller than b");
    }
}
greaterNum(10,5);
greaterNum(5,5);
greaterNum(5,10);