class Solution {
    private static boolean ispalindrome(String s, int i ,int j){
        while(i<j){
            if(s.charAt(i)!=s.charAt(j)){
                return false;
            }
            i++;
            j--;
        }

        return true;
    }

    public boolean validPalindrome(String s) {
        int left=0;
        int right=s.length()-1;

        if(s.length()==1){
            return true;
        }

        while(left<right){
            if(s.charAt(left)==s.charAt(right)){
                left++;
            right--;

            }
            else{
                return ispalindrome(s,left+1,right)||ispalindrome(s,left,right-1);
            }

        }

        return true;
        
    }
}