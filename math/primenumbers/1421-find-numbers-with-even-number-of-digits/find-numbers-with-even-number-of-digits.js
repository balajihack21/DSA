/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    function iseven(n){
     let c=(String)(n)
     return c.length%2==0
    }

let cnt=0
    for(let i=0;i<nums.length;i++){
            if(iseven(nums[i])){
                cnt++
            }
    }

    return cnt
};