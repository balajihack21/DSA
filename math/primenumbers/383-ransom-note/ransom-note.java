class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        
        int m=ransomNote.length();
        int n=magazine.length();

        int[] arr=new int[26];

        for(int i=0;i<n;i++){
            arr[magazine.charAt(i)-'a']++;
        }

        for(int i=0;i<m;i++){
            arr[ransomNote.charAt(i)-'a']--;
        }

        for(int i=0;i<arr.length;i++){
            if(arr[i]<0){
                return false;
            }
        }

        return true;

        
    }
}