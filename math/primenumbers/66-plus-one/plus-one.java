class Solution {
    public int[] plusOne(int[] digits) {
        int n=digits.length;
        int cnt=0;

        if(digits[n-1]!=9){
            digits[n-1]=digits[n-1]+1;
            return digits;
        }
        else{
            for(int i=n-1;i>=0;i--){
                if(digits[i]==9){
                    digits[i]=0;
                    cnt++;
                }
                else{
                    digits[i]=digits[i]+1;
                    return digits;
                }
            }
        }

        if(cnt==n){
            int[] res=new int[n+1];
            Arrays.fill(res,0);
            res[0]=1;
            return res;
        }
        else{
            return digits;
        }


    }
}