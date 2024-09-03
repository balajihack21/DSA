/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str=(String)(num)
    let sum=0
    while(str.length!=1){
        sum=0
        for(let i=0;i<str.length;i++){
            sum+=(Number)(str[i])
        }
        console.log(sum)
        str=sum.toString()
    }

    console.log(str)
    return (Number)(str)
};