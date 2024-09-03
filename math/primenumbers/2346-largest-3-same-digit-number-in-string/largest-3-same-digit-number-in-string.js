/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let str=""
    for(let i=1;i<num.length;i++){
        if(num[i]==num[i+1] && num[i]==num[i-1]){
            str1=num[i]+num[i-1]+num[i+1]
            if(str1>str){
                str=str1
            }
        }
    }
        return str 
};