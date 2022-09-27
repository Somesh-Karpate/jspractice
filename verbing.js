//Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.


function verbing(a){
    if(a.length >= 3){
        if(a.slice(-3) == "ing"){
            console.log(a + "ly");
        }else{
            console.log(a + "ing");
        }
    }else{
        console.log(a);
    }
}
verbing("swim");
verbing("swimming");
verbing("go");