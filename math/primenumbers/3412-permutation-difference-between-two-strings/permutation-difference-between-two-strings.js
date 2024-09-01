/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sum=0
    let map={}

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=i
        }
    }
console.log(map)
    for(let i=0;i<t.length;i++){
        if(map[t[i]]>=0){
            // console.log(map[t[i]])
            let diff=Math.abs(map[t[i]]-i)
            // console.log(diff)
            sum+=diff
        }
    }

    return sum

};