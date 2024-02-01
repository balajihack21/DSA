/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let str=String(x)

    let rev=str.split('').reverse().join('')

    return rev==str
};