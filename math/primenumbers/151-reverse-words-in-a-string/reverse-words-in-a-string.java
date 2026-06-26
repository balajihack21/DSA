class Solution {


    public String reverseWords(String s) {

        String[] s1=s.split(" ");

        StringBuilder sb=new StringBuilder("");

        int n=s1.length;
        System.out.println(Arrays.toString(s1));

        for(int i=n-1;i>=0;i--){
            if(!s1[i].equals("")){
                sb.append(s1[i]);
                sb.append(" ");
            }
        }

        
        System.out.println(sb);
        return sb.toString().trim();
    }
}