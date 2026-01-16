/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];

    for (let i = 0; i < nums.length; i++) {
        let size = res.length;   // freeze current size

        for (let j = 0; j < size; j++) {
            let c = res[j];                 // existing subset
            let newSubset = [...c];         // create a copy
            newSubset.push(nums[i]);        // add current element
            res.push(newSubset);            // add new subset
        }
    }

    return res;
};
