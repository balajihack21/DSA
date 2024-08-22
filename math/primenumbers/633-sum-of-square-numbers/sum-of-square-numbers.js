/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    //1,2,3,4,5
    //1 ,2,

    let i=0
    let j=Math.floor(Math.sqrt(c))
   

    while(i<=j){
        let sq=(i*i)+(j*j)
        if(sq==c){
            return true
        }
        else if(sq>c){
            j--
        }
        else{
            i++
        }
    }
    return false
};