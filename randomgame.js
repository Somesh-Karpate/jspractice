// Write a function called randomGame that selects a random number between 0 and 1 every 1000 
// milliseconds and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .45, stop the timer and console.log the number of tries 
// it took before we found a number greater than .45.




function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
        num = Math.random()
        times++
        if(num > .45){
            clearInterval(timer);
            console.log(`It took ${times} try/tries`);
        }
    },1000)
}
randomGame();