/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let cnt=1
    let max=1

    for(let i=1;i<s.length;i++){
        if(s[i]==s[i-1]){
            cnt++
        }
        else{
            cnt=1
        }
        if(cnt>max){
            max=cnt
        }

    }

    return max
};