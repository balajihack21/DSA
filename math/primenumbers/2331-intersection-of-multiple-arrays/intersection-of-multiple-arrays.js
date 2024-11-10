/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let map={}
    let res=[]

    if(nums.length==1){
        return nums[0].sort((a,b)=>{return a-b})
    }

    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            if(map[nums[i][j]]){
                map[nums[i][j]]+=1
                if(map[nums[i][j]]==nums.length){
                    res.push(nums[i][j])
                }
            }
            else{
                map[nums[i][j]]=1
            }
        }
    }
return res.sort((a,b)=>{return a-b})
};