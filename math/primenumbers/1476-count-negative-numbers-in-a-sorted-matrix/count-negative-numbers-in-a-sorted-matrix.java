class Solution {

    private static int cnt(int[] arr){

        for(int i=0;i<arr.length;i++){
            if(arr[i]<0){
                return ((arr.length-1)-i)+1;
            }
        }
        return 0;

    }
    public int countNegatives(int[][] grid) {

        int neg=0;

        for(int i=0;i<grid.length;i++){
            neg+=cnt(grid[i]);
        }

        return neg;


        
    }
}