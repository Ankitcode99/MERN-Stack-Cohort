const assert = require('assert');
const isPalindrome = require('../Medium/palindrome');

describe('Palindrome Test Suite', () => {
    it('Should return true', ()=> {
        assert.equal(isPalindrome('madam'), true);
    })
    it('Should return false', ()=> {
        assert.equal(isPalindrome('tap'), false);
    })
})