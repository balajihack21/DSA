/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
     let prod=1
     let sum=0

     while(n!=0){
        let l=n%10
        prod*=l
        sum+=l
        n=Math.floor(n/10)
     }

     return prod-sum
};