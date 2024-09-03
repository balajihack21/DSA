/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {

    function isSingle(n){
   let s=(String)(n)
   return s.length==1
    } 
   
   let sum1=0
   let sum2=0
    for(let i=0;i<nums.length;i++){
        if(isSingle(nums[i])){
            sum1+=nums[i]
        }
        else{
            sum2+=nums[i]
        }
    }

    return sum1!=sum2
};