class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length<=1){
            return nums.length;
        }

            Arrays.sort(nums);


        int cnt=0;
        int max=0;
        int i;
        for(i=1;i<nums.length;i++){

            if(nums[i]==nums[i-1]){
                continue;
            }
            if((nums[i]-nums[i-1])==1){
                cnt++;
            }
            else{
                cnt=0;
            }

            if(cnt>max){
                max=cnt;
            }
        }


        return max+1;
    }
}