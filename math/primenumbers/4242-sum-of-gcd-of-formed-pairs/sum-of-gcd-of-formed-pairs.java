class Solution {

    private static int gcd(int a,int b){
        if(b==0){
            return a;
        }

        return gcd(b,a%b);
    }
    public long gcdSum(int[] nums) {

        int max=Integer.MIN_VALUE;
        long sum=0;

        int n=nums.length;
        int[] prefixgcd=new int[n];

        for(int i=0;i<n;i++){

            if(nums[i]>max){
                max=nums[i];
            }

            prefixgcd[i]=gcd(max,nums[i]);
        }


        

        Arrays.sort(prefixgcd);

        int i=0;
        int j=n-1;

        while(i<j){
            int g=gcd(prefixgcd[i],prefixgcd[j]);

            sum=(long)sum+g;
            i++;
            j--;

            
        }

System.out.println(Arrays.toString(prefixgcd));
System.out.println(sum);
        return sum;
        
    }
}