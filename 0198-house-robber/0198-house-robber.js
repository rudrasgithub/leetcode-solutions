/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length

    prev = nums[0]
    prev2 = 0
    for(let i=1;i<n;i++) {
        let pick = nums[i]
        if(i > 1)
            pick += prev2
        let not_pick = 0 + prev

        curr = Math.max(pick, not_pick)
        prev2 = prev
        prev = curr
    }

    return prev
};