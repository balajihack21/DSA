/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length==1){
        return nums
    }
    //[1,3,0,0,12]
    let i=0
    let j=1

    while(j<nums.length){
        if(nums[i]!=0){
           i++
            j++
        }
        else if(nums[j]==0){
            j++
        }
        else{
            [nums[i],nums[j]]=[nums[j],nums[i]]
            
        }
    }
return nums
};