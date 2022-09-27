// let my_age = 21;
// let max_age = 71;
// let amt = 5;
// let total = (max_age - my_age)*(amt * 365);
// console.log( `You will need ${total} to last you until the ripe old age of ${max_age}`);


function calculatesupply(a,b){
    const age = 71;
    let amt = (age - a)*(b * 365);
    console.log(`You will need ${amt} to last you until the ripe old age of ${age}`);
}
calculatesupply(21,5);
calculatesupply(13,2);
