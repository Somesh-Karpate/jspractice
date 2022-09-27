//Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.


function notBad(a){
    let nott = a.indexOf('not');
    let badd = a.indexOf('bad');
    if(nott == -1 || badd == -1 || badd < nott){
        console.log(a);
    }else{
    console.log(a.slice(0,nott)+"good"+a.slice(badd + 3));
    }
}
notBad('This dinner is not that bad!')
notBad('This movie is not so bad!')
notBad('This dinner is bad!')