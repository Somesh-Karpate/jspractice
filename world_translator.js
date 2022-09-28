// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
    if (lang == "fr"){
        console.log("hemlo");
    }else if(lang == "ru"){
        console.log("hola");
    }else{
        console.log("hello world");
    }
}
helloWorld("rt");
helloWorld("ru");
helloWorld("fr");