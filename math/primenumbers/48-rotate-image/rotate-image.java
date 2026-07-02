class Solution {
    private static void swap(int[][] matrix,int i,int j){
        int temp=matrix[i][j];
        matrix[i][j]=matrix[j][i];
        matrix[j][i]=temp;
    }
    private static void swapall(int[][] matrix,int i,int j,int r,int c){
        int temp=matrix[i][j];
        matrix[i][j]=matrix[r][c];
        matrix[r][c]=temp;
    }

    private static void reverse(int[][] matrix,int i,int j){
        int left=0;
        int right=j;

            while(left<right){
                swapall(matrix,i,left,i,right);
                left++;
                right--;
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
            reverse(matrix,i,n-1);
        }

       
    }
}