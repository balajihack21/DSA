class Solution {

    private static boolean isanagram(String s,String t){
         int[] arr = new int[26];

        int m = s.length();
        int n = t.length();

        if (m != n) {
            return false;
        }

        for (int i = 0; i < m; i++) {
            arr[s.charAt(i) - 'a']++;
        }

        for (int i = 0; i < m; i++) {
            arr[t.charAt(i) - 'a']--;
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                return false;
            }
        }

        return true;
    }
    public List<String> removeAnagrams(String[] words) {

        List<String> res=new ArrayList<>();

        int i=1;
        String w=words[0];
        res.add(words[0]);

        while(i<words.length){
            if(!isanagram(w,words[i])){
                res.add(words[i]);
                w=words[i];
            }
            i++;
        }

        System.out.println(res);

        return res;

        
    }
}