var n = 24;
var m = 12;
function operatorr(op){
    switch(op){
        case '+':
            let add = n+m; 
            console.log("Addition: "+ add);
            break;
        case '-': 
            let sub = n-m;
            console.log("Subtraction: "+ sub);
            break;
        case '*': 
            let mul = n*m;
            console.log("Multiplication: "+ mul);
            break;
        case '/': 
            let div = n/m;
            console.log("Division: "+ div);
            break;
        case '%': 
            let modulo = n%m;
            console.log("Remainder: "+ modulo);
            break;
        default:
            console.log("Invalid character");    
    }
}
operatorr("+");
operatorr("-");
operatorr("*");
operatorr("/");
operatorr("%");
operatorr("_");
