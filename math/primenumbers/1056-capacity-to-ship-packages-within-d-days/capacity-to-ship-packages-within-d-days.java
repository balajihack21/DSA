class Solution {
    private static int canDo(int[] weights,int n){
        int res=1;
        int sum=0;
        for(int i=0;i<weights.length;i++){
            sum+=weights[i];
            
            
            if(sum>n){
                res++;
                sum=weights[i];
                
            }
        }
        return res;
    }


    public int shipWithinDays(int[] weights, int days) {
       
       int ans=0;

       int sum=0;
       int max=0;
       for(int i=0;i<weights.length;i++){
        sum+=weights[i];
        if(weights[i]>max){
            max=weights[i];
        }
       }

       int left=max;
       int right=sum;


       while(left<=right){
        int mid=left+(right-left)/2;

        if(canDo(weights,mid)<=days){
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