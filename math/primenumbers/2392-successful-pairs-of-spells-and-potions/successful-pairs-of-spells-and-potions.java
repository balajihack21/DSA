class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {

        Arrays.sort(potions);

        int cnt=0;
        int m=spells.length;
        int n=potions.length;
        int[] res=new int[m];

        for(int i=0;i<m;i++){

            int left=0;
            int right=n-1;
            int index=n;

            while(left<=right){
                int mid=(left+right)/2;

                if(((long)potions[mid]*spells[i])>=success){
                    index=mid;
                   right=mid-1;
                }
                else{
                    left=mid+1;
                }
            }

            res[i]=n-index;

        }
        
        return res;
    }
}