/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map={}

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            return true
        }
        else{
            map[nums[i]]=1
        }
    }

    console.log(map)
    return false

};