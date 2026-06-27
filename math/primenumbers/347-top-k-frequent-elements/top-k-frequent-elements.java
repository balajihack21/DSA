class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        HashMap<Integer, Integer> map = new HashMap<>();
        int[] res = new int[k];

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                map.put(nums[i], map.get(nums[i]) + 1);
            } else {
                map.put(nums[i], 1);
            }
        }

        System.out.println(map);
        int m=0;

        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(map.entrySet());

        list.sort((a, b) -> b.getValue() - a.getValue());


        for (Map.Entry<Integer, Integer> entry : list) {
            System.out.println(entry.getKey() + " " + entry.getValue());

            if (k != 0) {
                res[m++]=entry.getKey();
            } else {
                break;
            }
            k--;
        }

        return res;

    }
}