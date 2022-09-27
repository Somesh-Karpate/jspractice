//Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. 


function drevil(amt){
    if(amt >= 1000000){
        console.log(`${amt} dollars (pinky)`);
    }
    else{
        console.log(`${amt} dollars`);
    }
}
drevil(10);
drevil(1000000);