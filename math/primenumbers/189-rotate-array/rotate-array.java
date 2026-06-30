class Solution {
    private static void swap(int[] arr,int i,int j){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }

    private static void reverse(int[] nums, int i,int j){
        j=j-1;
        
        while(i<j){
            swap(nums,i,j);
            i++;
            j--;
        }
    }
    public void rotate(int[] nums, int k) {
        k %= nums.length;

      reverse(nums,0,nums.length);

        reverse(nums,0,k);
        reverse(nums,k,nums.length);
        
    }
}