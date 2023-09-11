function isPalindrome(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return str === revStr;
}

module.exports = isPalindrome