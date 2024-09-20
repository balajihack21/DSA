/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++
    }

    for(let j=0;j<t.length;j++){
        if(arr[t.charCodeAt(j)-97]){
            arr[t.charCodeAt(j)-97]--
        }
        else{
            return t[j]
        }
    }

    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]==1){
    //         return String.fromCharCode(i+97)
    //     }
    // }
};