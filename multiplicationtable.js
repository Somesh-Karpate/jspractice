// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(let i = 0; i<=10;i++){
    let mul = i * 9;
    console.log(i +"*"+9+"="+mul);
}




for(let i = 1; i<=10;i++){
    for(let j = 1; j<=10;j++){
        console.log(i+"*"+j+"="+i*j);
        
    }
    console.log("---------------------");
}