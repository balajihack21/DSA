class Solution {
    public int[] leftRightDifference(int[] nums) {
        if(nums.length==1){
            return new int[1];
        }
        
        int n=nums.length;
        int[] left=new int[n];
        int[] right=new int[n];
        int[] answer=new int[n];

        left[0]=0;
        right[n-1]=0;

        for(int i=1;i<n;i++){
            left[i]=left[i-1]+nums[i-1];
        }

        for(int i=n-2;i>=0;i--){
            right[i]=right[i+1]+nums[i+1];
        }


        for(int i=0;i<n;i++){
            answer[i]=Math.abs(left[i]-right[i]);
        }

        return answer;
    }
}