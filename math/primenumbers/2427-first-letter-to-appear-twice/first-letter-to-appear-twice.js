/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++
        if(arr[s.charCodeAt(i)-97]==2){
            return s[i]
        }
    }

    return ""
};