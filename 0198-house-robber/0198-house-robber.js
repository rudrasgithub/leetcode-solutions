/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    let dp = Array.from( { length: n }).fill(0);

    dp[0] = nums[0]
    for(let i=1;i<n;i++) {
        let pick = nums[i]
        if(i > 1)
            pick += dp[i - 2]
        let not_pick = 0 + dp[i - 1]

        dp[i] = Math.max(pick, not_pick)
    }

    return dp[n - 1]
};