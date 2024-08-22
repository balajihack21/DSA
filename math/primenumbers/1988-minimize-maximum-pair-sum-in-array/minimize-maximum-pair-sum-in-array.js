/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>{return a-b})

    let i=0
    let j=nums.length-1
     let max=0


     while(i<j){
        let sum=nums[i]+nums[j]
        max=Math.max(sum,max)
        i++
        j--
     }

     return max


};