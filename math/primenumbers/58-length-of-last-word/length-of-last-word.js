/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str=s.trim().split(" ")
    console.log(str[str.length-1].length)
    return str[str.length-1].length
};