/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<t.length;i++){
        arr[t.charCodeAt(i)-97]++
        if(i<s.length){
            arr[s.charCodeAt(i)-97]--
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return String.fromCharCode(i + 97); // Convert back to character
        }
    }
};