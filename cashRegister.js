// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart.

var cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};
var y = 0;
function cashRegister(obj){
    let x = Object.values(obj);
    for(let i=0;i<x.length;i++){
        y += parseFloat(x[i]);
    }console.log(y);
}
cashRegister(cartForParty);
