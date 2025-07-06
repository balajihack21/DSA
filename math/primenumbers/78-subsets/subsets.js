/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums,res=[]) {
    if(nums.length==0){
        return  [res]
    }
  

  let c=nums[0]
  nums.shift()
  let w=subsets([...nums],[...res,c])
  let wi=subsets([...nums],[...res])

  return w.concat(wi)

};