// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var books = [{
    title : "book1",
    author : "somesh",
    alreadyread : true
},{
    title : "book2",
    author : "sushi",
    alreadyread : false
},{
    title : "book3",
    author : "karpate",
    alreadyread : false
}];
for(let i=0;i<books.length;i++){
    console.log("The "+ books[i].title + " by "+books[i].author);
    if(books[i].alreadyread != false){
        console.log("you already read "+ books[i].title + " by "+books[i].author);
    }else{
        console.log("you still need to read "+books[i].title + " by "+books[i].author);
    }
}
