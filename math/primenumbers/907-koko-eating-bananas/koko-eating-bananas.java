class Solution {
    private static long canEat(int[] piles, int m) {

        long cnt=0;

        for(int i=0;i<piles.length;i++){
            int c=piles[i];
            cnt+=c/m;

            if(c%m!=0){
                cnt++;
            }
        }

        return cnt;
    }

    public int minEatingSpeed(int[] piles, long h) {

        int max = piles[0];

        for (int i = 1; i < piles.length; i++) {
            max = Math.max(max, piles[i]);
        }
        int ans = 0;
        int left = 1;
        int right = max;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (canEat(piles, mid) <= h) {
                ans=mid;
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }

        return ans;

    }
}