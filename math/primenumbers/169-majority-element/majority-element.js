/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map={}

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]]++
        }
        else{
            map[nums[i]]=1
        }
    }


   for(let m in map){
       if(map[m]>Math.floor(nums.length/2)){
        return Number(m)
       }
   }
};