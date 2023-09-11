const assert = require('assert');
const Calculator = require('../Hard/calculator');


describe("Calculator Test Suite", () => {
    it("Should return true", () => {
        const obj = new Calculator(0);
        obj.add(13)
        obj.subtract(3)
        obj.multiply(2)
        obj.divide(4)

        assert.equal(obj.getResult(), 5)
    });

    
})