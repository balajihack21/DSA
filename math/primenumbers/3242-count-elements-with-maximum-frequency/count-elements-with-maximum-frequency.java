class Solution {
    public int maxFrequencyElements(int[] nums) {
            if(nums.length==1){
                return 1;
            }

        int n = nums.length;
        int[] arr = new int[101];
        int max = Integer.MIN_VALUE;
        int sum=0;

        for (int i = 0; i < n; i++) {
            arr[nums[i]]++;
        }

        for (int i = 0; i < arr.length; i++) {
            if(arr[i]>max){
                max=arr[i];
            }
        }

        for (int i = 0; i < arr.length; i++) {
            if(arr[i]==max){
                sum+=arr[i];
            }
        }


        return sum;
    }
}