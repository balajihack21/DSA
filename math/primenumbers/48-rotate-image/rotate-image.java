class Solution {
    private static void swap(int[][] matrix,int i,int j){
        int temp=matrix[i][j];
        matrix[i][j]=matrix[j][i];
        matrix[j][i]=temp;
    }

    private static void reverse(int[] matrix,int i,int j){

            while(i<j){
                int temp=matrix[i];
                matrix[i]=matrix[j];
                matrix[j]=temp;
                i++;
                j--;
            }
    }
    public void rotate(int[][] matrix) {
        
        int n=matrix.length;


        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                swap(matrix,i,j);
            }
        }


        for(int i=0;i<n;i++){
            reverse(matrix[i],0,n-1);
        }

       
    }
}