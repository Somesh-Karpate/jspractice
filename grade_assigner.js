// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


function assignGrade(marks){
    if(marks >= 90){
        console.log("A grade");
    }else if(marks >= 70 && marks < 90){
        console.log("B grade");
    }else if(marks >= 50 && marks < 70){
        console.log("C grade");
    }else if(marks >= 35 && marks < 50){
        console.log("D grade");
    }else{
        console.log("FAIL");
    }
}
assignGrade(91);
assignGrade(34);
assignGrade(42);
assignGrade(50);
assignGrade(89);