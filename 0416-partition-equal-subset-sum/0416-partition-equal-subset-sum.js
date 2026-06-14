/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canPartition = function(nums) {
    const n = nums.length
    let totalSum = nums.reduce((s, ele) => s + ele, 0)

    if(totalSum % 2 !== 0) return false;

    let target = totalSum / 2;

    const dp = Array.from({ length: n }, () => Array(target + 1).fill(false))

    for(let i=0;i<n;i++) dp[i][0] = true;
    if(target >= nums[0]) dp[0][nums[0]] = true;

    for(let ind=1;ind<n;ind++) {
        for(let sum=1;sum<=target;sum++) {
            let notTake = dp[ind-1][sum]

            let take = false;
            if(nums[ind] <= sum) 
                take = dp[ind-1][sum-nums[ind]]

            dp[ind][sum] = take || notTake
        }
    }

    return dp[n-1][target]
};