// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

function fromDollarToJapanYen(amount){
    return amount * oneEuroIs.JPY;
}

function fromYenToPound(amount){
    return amount * oneEuroIs.GBP;
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToJapanYen, fromYenToPound};