// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 japanese yen", function(){
const { fromDollarToJapanYen } = require('./app.js');

const yen = fromDollarToJapanYen(1.07);

const expected = 1.07 * 146.261682;

expect(fromDollarToJapanYen(1.07)).toBe(156.49999974000002);
})

test("1000 japanese yen should be 5.559105431309904 pounds", function(){
    const { fromYenToPound } = require('./app.js');
    
    const yen = fromYenToPound(1000);
    
    const expected = 1000 * (0.87 / 156.5);
    
    expect(fromYenToPound(1000)).toBe(5.559105431309904);
    })