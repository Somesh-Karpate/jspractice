// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information 

var favRecipe = {
    title : "Maggie",
    servings : 2,
    ingredients : ["noodles","maggi masala","water"]
}
console.log(favRecipe.title);
console.log(favRecipe.servings); 
for(let i=0;i<favRecipe.ingredients.length;i++){
    console.log(favRecipe.ingredients[i]);
}
