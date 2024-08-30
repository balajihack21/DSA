/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr=new Array(256).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)]++
    }

    for(let i=0;i<s.length;i++){
        if(arr[s.charCodeAt(i)]==1){
            return i
        }
    }

   return -1
};