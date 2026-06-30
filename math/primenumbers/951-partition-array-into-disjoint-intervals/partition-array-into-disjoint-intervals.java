class Solution {
    public int partitionDisjoint(int[] nums) {
        int n=nums.length;
        int[] prefixmax=new int[n];
        int[] suffixmin=new int[n];
        int max=Integer.MIN_VALUE;
        int min=Integer.MAX_VALUE;
        int cnt=1;
        

        for(int i=0;i<n;i++){
            max=Math.max(max,nums[i]);
            prefixmax[i]=max;
        }

         for(int i=n-1;i>=0;i--){
            min=Math.min(min,nums[i]);
            suffixmin[i]=min;
        }

        System.out.println(Arrays.toString(prefixmax));
        System.out.println(Arrays.toString(suffixmin));

         for(int i=0;i<n-1;i++){
            if(prefixmax[i]>suffixmin[i+1]){
                cnt++;
            }
            else{
                break;
            }
        }

        return cnt;
        
    }
}