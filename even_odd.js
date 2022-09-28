// Write a for loop that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen




function evenodd(num){
    for(let i=0;i<=num;i++){
        if(i%2==0){
            console.log(i+" "+"even");
        }else{
            console.log(i+" "+"odd");
        }
    }
}
evenodd(20);