/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(arr, k) {
    // let cnt=0
    // for(let i=0;i<arr.length;i++){
    //     let prod=1
    //     for(let j=i;j<arr.length;j++){
    //         prod*=arr[j]
    //         if(prod<k){
    //             cnt++
    //         }
    //     }
    // }
    // console.log(cnt)
    // return cnt


    let i=0
    let prod=1
    let cnt=0
   if(k<=0 || k==1){
        return 0
    }
   for(let j=0;j<arr.length;j++){
       prod*=arr[j]

       while(prod>=k){
           prod/=arr[i]
           i++
       }
       cnt+=j-i+1
   }
return cnt

};