/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map={}

    for(let i=0;i<nums.length;i++){
        let a=target-nums[i]

        if(map[a]!=undefined){
            return [map[a],i]
        }
        else{
            map[nums[i]]=i
        }
    }
    console.log(map)
    
};