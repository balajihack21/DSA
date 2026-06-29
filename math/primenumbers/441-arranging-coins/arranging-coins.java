class Solution {
    public int arrangeCoins(int n) {
        int ans=0;

        int left=1;
        int right=n;

        while(left<=right){
            int mid = left + (right - left) / 2;

            if((long)mid*(mid+1)/2<=n){
                ans=mid;
                left=mid+1;
                
            }
            else{
                right=mid-1;
            }
        }

        return ans;
        
    }
}