/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums,res=[],i=0) {
    if(nums.length==i){
        return  [res]
    }
  

  let c=nums[i]
//   nums.shift()
  let w=subsets(nums,[...res,c],i+1)
  let wi=subsets(nums,res,i+1)

  return w.concat(wi)

};