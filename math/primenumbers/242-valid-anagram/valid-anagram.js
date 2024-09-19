/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str=s.split('').sort().join("")
    let str1=t.split('').sort().join("")
    return str==str1
};