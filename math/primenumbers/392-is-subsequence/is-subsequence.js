/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let cnt=0
    let i=0
    let j=0

    while(i<s.length && j<t.length){
        if(s[i]==t[j]){
            cnt++
            i++
        }
        j++
    }
  return cnt==s.length

};