/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];

    function twosum(nums, target, i, j) {
        while (i < j) {
            let sum = nums[i] + nums[j];

            if (sum > target) {
                j--;
            } 
            else if (sum < target) {
                i++;
            } 
            else {
                res.push([-target, nums[i], nums[j]]);

                // move pointers once
                i++;
                j--;

                // skip duplicates
                while (i < j && nums[i] === nums[i - 1]) i++;
                while (i < j && nums[j] === nums[j + 1]) j--;
            }
        }
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let target = -nums[i];
        twosum(nums, target, i + 1, nums.length - 1);
    }

    return res;
};
