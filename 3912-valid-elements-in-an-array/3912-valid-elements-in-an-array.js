/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    let n = nums.length;
    
    if (n === 1) return nums;

    let maxLeft = new Array(n);
    let maxRight = new Array(n);

    maxLeft[0] = nums[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], nums[i]);
    }

    maxRight[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], nums[i]);
    }

    let result = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            result.push(nums[i]);
        } 
        else if (
            nums[i] > maxLeft[i - 1] ||
            nums[i] > maxRight[i + 1]
        ) {
            result.push(nums[i]);
        }
    }

    return result;
};