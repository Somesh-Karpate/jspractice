//Create a function called fixStart. It should take a single argument, a string, and return a version where 
//all occurences of its first character have been replaced with '*', except for the first character itself. 
//You can assume that the string is at least one character long.


function fixStart(s) {
    var c = s.charAt(0);
    console.log(c + s.slice(1).replace(new RegExp(c, 'g'), '*'));
}
fixStart("bubble");