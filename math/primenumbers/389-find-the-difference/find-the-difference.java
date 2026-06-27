class Solution {
    public char findTheDifference(String s, String t) {

        int[] arr=new int[26];
        int m=t.length();

        for(int i=0;i<m;i++){
            arr[t.charAt(i)-'a']++;
        }

        for(int i=0;i<m-1;i++){
            arr[s.charAt(i)-'a']--;
        }

        for(int i=0;i<arr.length;i++){
            if(arr[i]==1){
                return (char)(97+i);
            }
        }

        return ' ';
       
    }
}