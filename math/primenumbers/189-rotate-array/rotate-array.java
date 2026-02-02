class Solution {
    public void rotate(int[] nums, int k) {
        int res[]=new int[nums.length];
        int n=nums.length;
        k=k%n;

        int j=0;
        for(int i=n-k;i<nums.length;i++){
            res[j++]=nums[i];
        }
        for(int i=0;i<n-k;i++){
            res[j++]=nums[i];
        }

        System.out.println(Arrays.toString(res));

        for(int i=0;i<n;i++){
            nums[i]=res[i];
        }
        
    }
}