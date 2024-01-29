/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function last(arr,target){
        let tar=-1
        let i=0
        let j=arr.length-1
while(i<=j){
  
  
  let mid=Math.floor((i+j)/2)
  
  if(arr[mid]<target){
    i=mid+1
  }
  else if(arr[mid]>target){
    j=mid-1
  }
  else{
    tar=mid
    i=mid+1
  }
}
return tar
    }

    function first(arr,target){
let tar=-1
let i=0

let j=arr.length-1

while(i<=j){
  let mid=Math.floor((i+j)/2)
  
  
  if(arr[mid]>target){
    j=mid-1
  }
  else if(arr[mid]<target){
    i=mid+1
  }
  else{
    tar=mid
    j=mid-1
  }
}

return tar
    }

return [first(nums,target),last(nums,target)]
   

};