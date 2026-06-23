/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let f=-1
    let l=-1


    let s=0
    let e=nums.length-1

    while(s<=e){
        let mid=Math.floor((s+e)/2)

        if(nums[mid]==target){
            f=mid
            e=mid-1
        }
        else if(nums[mid]>target){
            e=mid-1
        }

        else{
            s=mid+1
        }
    }

  s=0
  e=nums.length-1

      while(s<=e){
        let mid=Math.floor((s+e)/2)

        if(nums[mid]==target){
            l=mid
            s=mid+1
        }
        else if(nums[mid]>target){
            e=mid-1
        }

        else{
            s=mid+1
        }
    }

    console.log(f,l)

    return [f,l]
    
};