function validateCreditCard(card){

    // TO remove the " - " from the card as we all know the position of it
    var card1 = card.slice(0,4);
    var card2 = card.slice(5,9);
    var card3 = card.slice(10,14);
    var card4 = card.slice(15);
    var CreditCard = card1+card2+card3+card4;

    //check whether the length is 16 or not 
    if(CreditCard.length==16){
        var num = Number(CreditCard);       // convert ot number
        if(isNaN(num)){                       // check whether it's a number or not
            console.log("valid: "+false+", number: "+card+", error: Not a number");
        }else{

            // to check whether the characters are same
            function allcharactersame(s){     
            for(let i=1;i<s.length;i++)   
                if(s[i] != s[0])
                    return false;

            return true;
        }
        let s = CreditCard;
        if(allcharactersame(s)){
            console.log("valid: "+false+", number: "+card+", error: All characters are same");
            
        }else{
            
            // after we got to know that it is not same we will check if there sum is greater than 16 and if the last character 
            // is even or not
            var sum=0;
            for(var j = 0;j<CreditCard.length;j++){
                sum += Number(CreditCard[j]);
            }
            if(sum > 16 && CreditCard.charAt(CreditCard.length-1)%2==0){
                console.log("valid: "+true+", number: "+card);
            }else{
                console.log("valid: "+false+", number: "+card+", error:sum is less or equal to 16 or last digit is not even");
            }
        }
        }
    }else{
        console.log("valid: "+false+", number: "+card+", error: Length is less than 16");
    }
}
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('9999-7777-8888-0000');
validateCreditCard('a923-3211-9c01-1112');
validateCreditCard('6666-6666-6666-1666');
validateCreditCard('1211-1111-1111-1112');
validateCreditCard('1111-1111-1111-1110');








