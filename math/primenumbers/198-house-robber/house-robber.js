/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Memoization array
    const memo = new Array(nums.length).fill(-1);

    // Helper recursive function with memoization
    function robFrom(index) {
        // Base cases
        if (index >= nums.length) return 0;
        if (index === nums.length - 1) return nums[index];

        // Return the result if it's already computed
        if (memo[index] !== -1) return memo[index];

        // Recursively compute the maximum amount if we rob or skip the current house
        let robCurrent = nums[index] + robFrom(index + 2);
        let skipCurrent = robFrom(index + 1);

        // Store the result in memo and return it
        memo[index] = Math.max(robCurrent, skipCurrent);
        return memo[index];
    }

    return robFrom(0);


};