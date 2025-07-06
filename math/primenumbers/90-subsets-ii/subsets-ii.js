/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums,i=0,res=[],r=[]) {
   nums.sort((a,b)=>{return a-b})

    if(i==nums.length){
        res.push([...r])
        return res
    }

    r.push(nums[i])

    subsetsWithDup(nums,i+1,res,r)

    r.pop()

    while(nums[i]==nums[i+1] && i+1<=nums.length){
        i++
    }
    subsetsWithDup(nums,i+1,res,r)
    return res
};