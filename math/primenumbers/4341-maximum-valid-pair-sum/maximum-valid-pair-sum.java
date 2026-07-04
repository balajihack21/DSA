class Solution {
    public int maxValidPairSum(int[] nums, int k) {
        int n=nums.length;
        int max=Integer.MIN_VALUE;

        int[] suffix=new int[n];
        suffix[0]=nums[0];

        for(int i=1;i<n;i++){
            suffix[i]=Math.max(suffix[i-1],nums[i]);
        }

        max=Integer.MIN_VALUE;
        for(int i=k;i<n;i++){
            int sum=suffix[i-k]+nums[i];
            if(sum>max){
                max=sum;
            }
            
        }


        System.out.println(Arrays.toString(suffix));

        return max;
        
    }
}