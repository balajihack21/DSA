/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<t.length;i++){
        arr[t.charCodeAt(i)-97]++
    }

    for(let j=0;j<s.length;j++){
        arr[s.charCodeAt(j)-97]--
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            return String.fromCharCode(i+97)
        }
    }
};