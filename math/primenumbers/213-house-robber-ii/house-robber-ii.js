/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if(nums.length==1){
        return nums[0]
    }


    function hrob(arr){
        let n=arr.length
        let dp=new Array(n)

        dp[0]=arr[0]
        dp[1]=Math.max(arr[0],arr[1])


        for(let i=2;i<n;i++){
            dp[i]=Math.max(arr[i]+dp[i-2],dp[i-1])
        }

        return dp[n-1]
    }


    let ex_last=hrob(nums.slice(0,nums.length-1))
    let ex_first=hrob(nums.slice(1))

    return Math.max(ex_last,ex_first)
    
};