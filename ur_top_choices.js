var arr = ["red","green","yellow","blue"];
for(let i =0;i<arr.length;i++){
    let num = i + 1;
    console.log("My #"+ num + " choice is" + arr[i]);
}

for(let i = 0; i<arr.length; i++){
    var num = i+1;
    var num1;
    if(num == 1){
        num1 = "st";
    }else if(num == 2){
        num1 = "nd";
    }else if(num == 3){
        num1 = "rd";
    }else{
        num1 = "th";
    }
    console.log("My " + num + num1 +" choice is" + arr[i]);
}