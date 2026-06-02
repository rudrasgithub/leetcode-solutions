/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let totalSum = nums.reduce((a, b) => a + b, 0);

    if (Math.abs(target) > totalSum) return 0;

    if ((totalSum + target) % 2 !== 0) return 0;

    let req = (totalSum + target) / 2;

    let dp = Array(req + 1).fill(0);
    dp[0] = 1;

    for (let num of nums) {
        for (let sum = req; sum >= num; sum--) {
            dp[sum] += dp[sum - num];
        }
    }

    return dp[req];
};