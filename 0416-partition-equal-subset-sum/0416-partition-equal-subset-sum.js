/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    const n = nums.length
    let totalSum = nums.reduce((s, ele) => s + ele, 0)

    if(totalSum % 2 !== 0) return false;

    let target = totalSum / 2;

    let prev = Array(target + 1).fill(false)

    prev[0] = true
    prev[nums[0]] = true
    
    for(let ind=1;ind<n;ind++) {
        let curr = Array(target + 1).fill(false)
        curr[0] = true

        for(let sum=0;sum<=target;sum++) {
            let notTake = prev[sum]

            let take = false;
            if(nums[ind] <= sum) 
                take = prev[sum-nums[ind]]

            curr[sum] = take || notTake
        }
        prev = curr;
    }

    return prev[target]
};