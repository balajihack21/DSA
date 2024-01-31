/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split=s.split(' ')

    let reversed=split.reverse()
    let res=""
    for(let i=0;i<reversed.length;i++){
        if(reversed[i].length>0){
            res+=reversed[i]+" "
        }
    }
    console.log(res)
    return res.trim()
};