/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map={}
    let map2={}
    let res=[]

    for(let i=0;i<nums1.length;i++){
        map[nums1[i]]++
    }

     for(let i=0;i<nums2.length;i++){
        map2[nums2[i]]++
    }

    console.log(map)
    console.log(map2)

   for(let m in map){
    if(map2[m]!=undefined){
        res.push(Number(m))
    }
   }
   console.log(res)
   return res
};