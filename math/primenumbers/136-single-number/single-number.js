/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let map={}

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]]++
        }
        else{
            map[nums[i]]=1
        }
    }
    console.log(map)

    for(let m in map){
        if(map[m]==1){
            return m
        }
    }
};