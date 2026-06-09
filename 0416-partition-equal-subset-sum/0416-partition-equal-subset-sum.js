/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canPartition = function(nums) {
    let totalSum = nums.reduce((s, ele) => s + ele, 0)

    if(totalSum % 2 !== 0) return false;

    let target = totalSum / 2;

    function partition(ind, nums, target, dp) {
        if(target === 0) return true;

        if(ind === 0) return (nums[0] === target);

        if(dp[ind][target] !== -1) return dp[ind][target]

        let notTake = partition(ind - 1, nums, target, dp);

        let take = false;
        if(nums[ind] <= target) 
            take = partition(ind - 1, nums, target - nums[ind], dp);

        return dp[ind][target] = take || notTake
    }

    const dp = Array.from({ length: nums.length }, () => Array(target + 1).fill(-1))
    return partition(nums.length - 1, nums, target, dp);
};