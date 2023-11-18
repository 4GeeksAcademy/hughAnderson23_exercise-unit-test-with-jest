const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
   
    let valueInEuro = valueInDollar / 1.2;
   
    let valueInYen = valueInEuro * 127.9;
   
    return valueInYen;
}


const fromYenToPound = function(valueInYen){
    
    let valueInEuro = valueInYen / 127.9;
  
    let valueInPound = valueInEuro * 0.8;
   
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
