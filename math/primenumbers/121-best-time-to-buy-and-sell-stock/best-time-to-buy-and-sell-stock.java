class Solution {
    public int maxProfit(int[] prices) {
        int max=Integer.MIN_VALUE;
        int maxprofit=0;
        int n=prices.length;
        int[] suffix=new int[n];


        for(int i=n-1;i>=0;i--){
            max=Math.max(max,prices[i]);
            suffix[i]=max;
        }

        for(int i=0;i<n;i++){
            int diff=suffix[i]-prices[i];
            if(diff>maxprofit){
                maxprofit=diff;
            }
        }

        return maxprofit;
    }
}