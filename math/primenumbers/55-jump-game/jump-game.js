/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let a=0

    for(let i=0;i<nums.length;i++){

        if(a<0){
            return false
        }

        if(nums[i]>a){
            a=nums[i]
        }


        a--

    }

    return true
    
};