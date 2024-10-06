/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let map={}
    let map2={}
    let ans1=0
    let ans2=0

    for(let i=0;i<nums1.length;i++){
        if(map[nums1[i]]){
            map[nums1[i]]++
        }
        else{
            map[nums1[i]]=1
        }
    }
    console.log(map)

     for(let i=0;i<nums2.length;i++){
        if(map2[nums2[i]]){
            map2[nums2[i]]++
           
        }
        else{
            map2[nums2[i]]=1
        }
        // console.log(map2)
     }
   console.log(map2)

    for(let m in map){
        if(map2[m]){
            ans1+=map[m]
            ans2+=map2[m]
        }
    
}

console.log([ans1,ans2])
return [ans1,ans2]
};