class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {

        Arrays.sort(arr);

        List<List<Integer>> ans=new ArrayList<>();
        int min=Integer.MAX_VALUE;

        for(int i=1;i<arr.length;i++){
            int temp=arr[i]-arr[i-1];
            if(temp<min){
                min=temp;
            }
        }

        for(int i=1;i<arr.length;i++){
            List<Integer> res=new ArrayList<>();
            int temp=arr[i]-arr[i-1];
            if(temp==min){
                res.add(arr[i-1]);
                res.add(arr[i]);
                ans.add(res);
            }
            
            
        }
        System.out.println(ans);

        return ans;
    }
}