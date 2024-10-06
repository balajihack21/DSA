/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
     let max1 = -Infinity; // largest
    let max2 = -Infinity; // second largest
    let max3 = -Infinity; // third largest
    let min1 = Infinity;   // smallest
    let min2 = Infinity;   // second smallest

    for (let num of nums) {
        // Update the largest three
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        // Update the smallest two
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    // The maximum product can be either the product of the three largest numbers
    // or the product of the two smallest numbers and the largest number
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};