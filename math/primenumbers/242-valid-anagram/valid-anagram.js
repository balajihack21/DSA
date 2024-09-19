/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let str=s.split('').sort().join("")
    // let str1=t.split('').sort().join("")
    // return str==str1


    let arr=new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++
    }
    
    for(let i=0;i<t.length;i++){
        arr[t.charCodeAt(i)-97]--
    }

    console.log(arr)

    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            return false
        }
    }

    return true
};