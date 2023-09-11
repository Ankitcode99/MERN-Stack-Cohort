const fs = require('fs');
const assert = require('assert');
const path  = require('path');
const calculateTotalSpentByCategory = require('../Easy/expenditure-analysis');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/resources/expenditure-analysis-test-data.json'), 'utf8'));

const positiveResult = [
    {
        "electronics": 50000
    },
    {
        "grocery": 90
    },
    {
        "clothing": 450
    }
];

const negativeResult = [
    {
        "electronics": 5000
    },
    {
        "grocery": 900
    },
    {
        "clothing": 450
    }
];


describe("Expenditure Analysis Test Suite", ()=> {
    it("Should return an array of objects", function() {
        assert.deepStrictEqual(calculateTotalSpentByCategory(data), positiveResult);
    });

    it("Should return an array of objects", ()=>{
        assert.equal(typeof (calculateTotalSpentByCategory(data)), typeof (positiveResult))
    })

    it("Should match negative result", ()=>{
        assert.notDeepStrictEqual(calculateTotalSpentByCategory(data), negativeResult);
    })
})