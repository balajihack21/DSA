class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        
        Arrays.sort(arr);

        
        int previous=1;
        int current=0;

        for(int i=1;i<arr.length;i++){
            current=arr[i];
            if(current<=previous+1){
                previous=current;
            }
            else{
                 previous=previous+1;
            }
        }

        System.out.println(previous);
        return previous;
    }
}