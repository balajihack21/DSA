/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt=0
    let max=-Infinity
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]==0){
            cnt=0
        }
        else{
            cnt++
        }
        

        if(cnt>max){
            max=cnt
        }
    }

    return max
};