// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var movie = {
    title : "taare zameen par",
    duration : 150,
    stars : ["Amir khan","Ishan", "yoshan"]
}
function getMovie(mov){
    console.log(mov.title + " lasts for "+mov.duration+" minutes. "+"stars: "+mov.stars);
}
getMovie(movie);
