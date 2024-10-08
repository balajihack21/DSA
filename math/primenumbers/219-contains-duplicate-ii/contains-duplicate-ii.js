/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map={}

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]!=undefined){
            let ab=Math.abs(map[nums[i]]-i)
            map[nums[i]]=i
            if(ab<=k){
                return true
            }
        }
        else{
            map[nums[i]]=i
        }
    }
  console.log(map)
    return false
};