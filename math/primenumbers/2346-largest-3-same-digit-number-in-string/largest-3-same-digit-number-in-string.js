/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let str=""
    for(let i=0;i<num.length-2;i++){
        if(num[i]==num[i+1] && num[i]==num[i+2]){
            str1=num[i]+num[i+2]+num[i+1]
            if(str1>str){
                str=str1
            }
        }
    }
        return str 
};