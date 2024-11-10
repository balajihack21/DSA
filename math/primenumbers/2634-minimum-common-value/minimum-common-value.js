/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i=0
    let j=0
    let res=[]
   while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        }
        else if(nums1[i]>nums2[j]){
            j++
        }
        else{
            res.push(nums1[i])
            i++
            j++
        }
   }


console.log(res)

return res.length>=1?res[0]:-1

};