/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    function iseven(c){
        let n=(String)(c)
        if(n.length==1){
            return (Number)(n)%2==0
        }
        else{
            let sum=0
            for(let i=0;i<n.length;i++){
                sum+=(Number)(n[i])
            }
            return sum%2==0
        }
    }

let cnt=0
    for(let i=2;i<=num;i++){
        if(iseven(i)){
            cnt++
        }
    }

    console.log(cnt)
    return cnt
};