const assert = require('assert');
const isAnagram = require('../Easy/anagram')

describe("Anagram Test Suite", () => {
    it("Should return true", () => {
        assert.equal(isAnagram("anagram", "nagaram"), true);
        assert.equal(isAnagram("rat", "tar"), true);
    })
    it("Should return false", () => {
        assert.equal(isAnagram("rat", "car"), false);
        assert.equal(isAnagram("rac", "rat"), false);
    })
})