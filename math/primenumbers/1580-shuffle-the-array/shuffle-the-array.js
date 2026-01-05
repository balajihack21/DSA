/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {


    let arr=new Array(nums.length)
    arr[0]=nums[0]
    arr[nums.length-1]=nums[nums.length-1]

   let i=0
   let j=n
   let k=0

   while(i<n && j<nums.length){
            if(k%2!=0){
                arr[k]=nums[j]
                j++
            }
            else{
                arr[k]=nums[i]
                i++
            }

            k++
            
   }


    return arr
    
};