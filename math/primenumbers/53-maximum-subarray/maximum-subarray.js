/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0]
    let sum=0


    for(let s=0;s<nums.length;s++){
        sum+=nums[s]

        if(sum>max){
            max=sum
        }


        if(sum<0){
            sum=0
        }
    }

    console.log(max)
    return max
    
};