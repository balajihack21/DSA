/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[]

    nums.sort((a,b)=>{return a-b})
    for(let k=0;k<nums.length;k++){
        let i=k+1
        let j=nums.length-1
        if(nums[k]==nums[k-1]){
            continue
        }
        while(i<j){
            let sum=nums[k]+nums[i]+nums[j]
            if(sum==0){
                let trip=[]
                trip.push(nums[k])
                trip.push(nums[i])
                trip.push(nums[j])
                res.push(trip)
                i++
                j--
                while(i<j && nums[i]==nums[i-1]){
                    i++
                }

                while(i<j && nums[j]==nums[j+1]){
                    j--
                }
            }
            else if(sum<0){
                i++
            }
            else{
                j--
            }

        }
    }

    console.log(res)
    return res
};