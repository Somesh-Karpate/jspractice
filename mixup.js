//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings 
//(separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long



function mixUp(a,b){
    let c = a.slice(2);
    let e = a.slice(0,2);
    let d = b.slice(2);
    let f = b.slice(0,2);
    console.log(f + c +" "+ e + d);
}
mixUp("mix","hole");