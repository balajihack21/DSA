class Solution {
    public String capitalizeTitle(String title) {

        String[] s1=title.split(" ");
        StringBuilder sb=new StringBuilder("");

        for(int i=0;i<s1.length;i++){
                        String word = s1[i].toLowerCase();

            if(word.length()>2){
                StringBuilder sb1=new StringBuilder();
                sb1.append(word);
                sb1.setCharAt(0,Character.toUpperCase(sb1.charAt(0)));
                sb.append(sb1);
            }else{
                sb.append(word);
            }
            if(i!=s1.length-1){
            sb.append(" ");
            }
        }
return sb.toString();
        
    }
}