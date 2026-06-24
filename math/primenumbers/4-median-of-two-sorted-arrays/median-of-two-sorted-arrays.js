/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr=[]

    for(let i=0;i<nums1.length;i++){
        arr.push(nums1[i])
    }

        for(let i=0;i<nums2.length;i++){
        arr.push(nums2[i])
    }

    arr.sort((a,b)=>{return a-b})

    if(arr.length%2==0){
         return (arr[(arr.length/2)-1]+arr[arr.length/2])/2
    }
    else{
        return arr[Math.floor(arr.length/2)]
    }
    
};