class Solution {
     
     private static boolean sum(HashSet<Integer> set,int n){

        if(n==1){
            return true;
        }
        else  if(set.contains(n)){
            return false;
        }
         set.add(n);

        int sum=0;

        while(n!=0){
            int l=n%10;
            int sq=l*l;
            sum+=sq;
            n=n/10;
        }

       

       
         return sum(set,sum);
     }

    public boolean isHappy(int n) {

                HashSet<Integer> set=new HashSet<>();
        return sum(set,n);

        
        
        
    }
}