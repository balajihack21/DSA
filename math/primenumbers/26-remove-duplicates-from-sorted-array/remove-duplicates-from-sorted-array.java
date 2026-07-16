class Solution {
    private static void swap(int[] nums,int i,int j){
        int temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }
    public int removeDuplicates(int[] nums) {
        

        int write=1;

        for(int read=1;read<nums.length;read++){
            if(nums[read]!=nums[read-1]){
                nums[write]=nums[read];
                write++;
            }
        }

        return write;
    }
}