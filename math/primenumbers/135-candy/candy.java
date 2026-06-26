class Solution {
    public int candy(int[] nums) {

        int n=nums.length;
        int[] prefix=new int[n];
        Arrays.fill(prefix,1);
        int sum=0;

        for(int i=1;i<n;i++){
            if(nums[i]>nums[i-1]){
                prefix[i]=prefix[i-1]+1;
            }
        }

        for(int i=n-2;i>=0;i--){
            if (nums[i] > nums[i + 1]) {
    prefix[i] = Math.max(prefix[i], prefix[i + 1] + 1);
}
        }

        for(int i=0;i<n;i++){
            sum+=prefix[i];
        }
        return sum;
    }
}