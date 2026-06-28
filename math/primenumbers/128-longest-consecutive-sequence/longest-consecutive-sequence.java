class Solution {
    public int longestConsecutive(int[] nums) {

        int n = nums.length;
        if (n <= 1) {
            return n;
        }

        HashSet<Integer> set = new HashSet<>();

        int max = 0;
    

        for (int i = 0; i < n; i++) {
            set.add(nums[i]);
        }

        for(int num:set) {
                int cnt = 0;
            

            if (!set.contains(num - 1)) {
                int c=num;

                while (set.contains(c)) {
                    cnt++;
                    c++;
                }

                max = Math.max(max, cnt);

            }
        }
        return max;
    }
}