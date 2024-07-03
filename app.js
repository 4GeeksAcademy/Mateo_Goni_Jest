// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

const fromDollarToJapanYen = function(valueInDollar){
    let valueInJapanYen = 146.261682 * valueInDollar;
    return valueInJapanYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (0.87 / 156.5) * valueInYen;
    return valueInPound;
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToJapanYen, fromYenToPound};