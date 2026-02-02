class Solution {
    public int maxArea(int[] height) {
        int maxarea=-1;
        int left=0;
        int right=height.length-1;

        while(left<right){
                int area=Math.min(height[left],height[right])*(right-left);
                  if(area>maxarea){
                    maxarea=area;
                }

                if(height[left]<height[right]){
                    left++;
                }
                else{
                    right--;
                }
              
        }

        System.out.println(maxarea);
        return maxarea;
        
    }
}