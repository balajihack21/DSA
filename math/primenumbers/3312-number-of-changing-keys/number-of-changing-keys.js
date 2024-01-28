/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let str=s.toLowerCase()
    
  let i=0;
    let j=1
    let cnt=0
    while(j<str.length){
        if(str[i]!=str[j]){
            cnt++
        }
        i++
        j++
    }
    return cnt
};