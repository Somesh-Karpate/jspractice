// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize(a, b){
    if(b === 1 || a == "sheep"){
        console.log(b + a);
    }else if(a == "goose"){
        console.log(b + "geese");
    }
    else{
        console.log(b + a +"s");
    }
}
pluralize("goose",1);
pluralize("goose",5);