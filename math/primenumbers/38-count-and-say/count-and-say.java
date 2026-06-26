class Solution {

    static String cs(int n){
        if(n==1){
            return new String("1");
        }

        String s=cs(n-1);

        StringBuilder sb=new StringBuilder();
        char curr=s.charAt(0);
        int cnt=1;

        for(int i=1;i<s.length();i++){
            if(curr==s.charAt(i)){
                    cnt++;
            }
            else{
                sb.append(cnt);
                sb.append(curr);
                cnt=1;
                curr=s.charAt(i);
            }
        }

        sb.append(cnt);
        sb.append(curr);

        return sb.toString();
    }
    public String countAndSay(int n) {

        String ans=cs(n);

        return ans;
        
    }
}