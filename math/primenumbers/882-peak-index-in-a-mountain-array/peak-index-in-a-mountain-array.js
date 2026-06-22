/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(nums) {
    let index=0
    let max=nums[0]

    for(let i=1;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
            index=i
        }
    }

    return index
};