class Solution {
    public int pivotIndex(int[] nums) {

        int[] prefixsum=new int[nums.length];
        int[] suffixsum=new int[nums.length];
        prefixsum[0]=nums[0];
        suffixsum[nums.length-1]=nums[nums.length-1];

        for(int i=1;i<nums.length;i++){
            prefixsum[i]=prefixsum[i-1]+nums[i];
        }



        for(int i=nums.length-2;i>=0;i--){
            suffixsum[i]=suffixsum[i+1]+nums[i];
        }

        System.out.print(Arrays.toString(prefixsum));
        System.out.print(Arrays.toString(suffixsum));
        
        for(int i=0;i<nums.length;i++){
            if(suffixsum[i]==prefixsum[i]){
                return i;
            }
        }



        return -1;
        
    }
}