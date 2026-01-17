/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[i] = minimum coins needed to make amount i
    let dp = new Array(amount + 1).fill(Infinity);



    // base case
    dp[0] = 0;

    // build dp
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }

    // final answer
    if (dp[amount] === Infinity) {
        return -1;
    }

    return dp[amount];
};
