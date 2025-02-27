function derive(coefficient, exponent) {
    const resultY = exponent - 1;
    const resultX = coefficient * exponent;
    return resultX + "x^" + resultY
}

console.log(derive(8, 2))


// Sample Test

// const { assert } = require("chai");

// describe("Tests the example test cases", function () {
//     it("derive(7, 8)", function () {
//         assert.strictEqual(derive(7, 8), "56x^7", "derive(7, 8)");
//     });
//     it("derive(5, 9)", function () {
//         assert.strictEqual(derive(5, 9), "45x^8", "derive(5, 9)");
//     });
// });
