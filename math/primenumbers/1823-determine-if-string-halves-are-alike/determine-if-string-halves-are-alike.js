/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels=['a','e','i','o','u','A','E','I','O','U']

    let cnt=0
    let cnt1=0
    let n=s.length
    let i=0
    let j=Math.floor(n/2)
    while(i<j && j<n){
        if(vowels.indexOf(s[i])!=-1){
            cnt++
        }
        if(vowels.indexOf(s[j])!=-1){
            cnt1++
        }
        i++
        j++
    }

    return cnt==cnt1
};