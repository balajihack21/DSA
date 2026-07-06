class Solution {
    public int maxScoreSightseeingPair(int[] values) {

        int n=values.length;

        int[] prefixmax=new int[n];
        int max=Integer.MIN_VALUE;
        int maxpref=Integer.MIN_VALUE;
        int index=-1;


        for(int i=0;i<n;i++){
            if(values[i]+i>maxpref){
                maxpref=values[i]+i;
                index=i;
            }
            prefixmax[i]=index;
        }


        for(int i=1;i<n;i++){
            int sum=(values[prefixmax[i-1]]+prefixmax[i-1]) + (values[i]-i);

            max=Math.max(sum,max);
        }
        System.out.println(Arrays.toString(prefixmax));


        return max;
        
    }
}