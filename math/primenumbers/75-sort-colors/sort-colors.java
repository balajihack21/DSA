class Solution {
    public void sortColors(int[] nums) {

        int cntzero=0;
        int cntone=0;
        int cnttwo=0;


        for(int i=0;i<nums.length;i++){
            if(nums[i]==1){
                cntone++;
            }
            else if(nums[i]==0){
                cntzero++;
            }
            else{
                cnttwo++;
            }
        }

        int i=0;

        while(cntzero!=0 && i<nums.length){
            nums[i++]=0;
            cntzero--;
        }
                while(cntone!=0 && i<nums.length){
            nums[i++]=1;
            cntone--;
        }
                while(cnttwo!=0 && i<nums.length){
            nums[i++]=2;
            cnttwo--;
        }

    
        
    }
}