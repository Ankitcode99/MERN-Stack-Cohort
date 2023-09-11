/**
 * WAP to check whether 2 strings are anagram or not.
 * Anagram means that strings must contain same set of characters.
 */

function isAnagram( str1, str2 ) {
    if(str1.length !=  str2.length)
        return false;

    let sum = 0;

    for(var i = 0; i < str1.length; i++){
        sum += str1[i].charCodeAt(0) - str2[i].charCodeAt(0);
    }

    return sum==0;
}

module.exports = isAnagram