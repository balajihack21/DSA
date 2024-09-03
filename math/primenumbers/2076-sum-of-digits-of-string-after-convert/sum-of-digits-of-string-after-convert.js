/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str=""

    for(let i=0;i<s.length;i++){
        str+=s.charCodeAt(i)-96
    }

    console.log(str)
    // let n=(Number)(str)
    // console.log(n)
    // console.log(typeof(n))

let sum=0
    while(k--){
      sum=0
        for(let i=0;i<str.length;i++){
            sum+=(Number)(str[i])
        }
        str=sum.toString()
    }

    return sum
};