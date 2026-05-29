/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const f = (ind, dp) => {
        if(ind === 0) return nums[0]
        if(ind < 0) return 0

        if(dp[ind] !== -1) return dp[ind]

        let pick = nums[ind] + f(ind - 2, dp)
        let not_pick = 0 + f(ind - 1, dp)

        return dp[ind] = Math.max(pick, not_pick)
    }
    const n = nums.length
    let dp = Array.from( { length: n }).fill(-1);

    return f(n - 1, dp)
};