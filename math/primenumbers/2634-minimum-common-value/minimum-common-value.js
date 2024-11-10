/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i=0
    let j=0
   while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        }
        else if(nums1[i]>nums2[j]){
            j++
        }
        else{
            return nums1[i]
        }
   }
return -1

};