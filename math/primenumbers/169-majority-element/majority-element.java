class Solution {
    public int majorityElement(int[] nums) {

        int vote=0;
        int candidate =-1;
        int cnt=0;

        for(int i=0;i<nums.length;i++){
            if(vote==0){
                candidate =nums[i];
            }
            if(candidate==nums[i]){
                vote++;
            }
            else{
                vote--;
            }
        }

        for(int i=0;i<nums.length;i++){
            if(nums[i]==candidate){
                cnt++;
            }
        }

        if(cnt>nums.length/2){
            return candidate;
        }

return -1;

        
    }
}