// You'll create a simple word guessing game where the user gets infinite
//  tries to guess the word (like Hangman without the hangman, 
//     or like Wheel of Fortune without the wheel and fortune).


var word = ["F","O","X"];
var guess =[];

function guessLetter(a){
    var G = false;
    var count = 0;
    for(let i=0;i<word.length;i++){
        var amount = 0;
        var x = 0;
        if(a == word[i]){
            guess.push(a); 
            amount += 20;
            G = true;      
        }else{
            count++
        }
    }
    if(G){
    console.log(guess);
    x = (amount*guess.length);
    console.log("congratulate you found a new letter");
    }else{
        console.log(a +" " +"invalid character");
    }
    if(guess.length == word.length){
        console.log("congratulate");
        console.log("amount = "+ x);
        console.log("Invalid characters:"+ count);
    }else{
        console.log(word.length - guess.length+" "+"letter remaining\n");
    }
}
guessLetter("F");
guessLetter("T");
guessLetter("Y")
guessLetter("O");
guessLetter("X");



