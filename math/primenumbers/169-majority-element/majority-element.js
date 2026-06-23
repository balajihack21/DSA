/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let vote=0
    let e=0

    for(let i=0;i<nums.length;i++){
        if(vote==0){
            e=nums[i]
        }
        if(e==nums[i]){
            vote++
        }
        else{
            vote--
        }

        
    }
    
    return e
};