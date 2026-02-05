class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxcnt=Integer.MIN_VALUE;
        int cnt=0;

        for(int i=0;i<nums.length;i++){
            if(nums[i]==1){
                cnt++;
            }
            else{
                cnt=0;
            }

            maxcnt=Math.max(maxcnt,cnt);
        }

        return maxcnt;
        
    }
}