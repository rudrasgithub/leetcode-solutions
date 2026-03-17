/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map()
    map.set(0, -1)
    let prefixSum = 0;

    for(let i=0;i<nums.length;i++) {
        prefixSum += nums[i]

        let remainder = prefixSum % k

        if(map.has(remainder)) {
            let prevIndex = map.get(remainder)

            if(i - prevIndex >= 2)
                return true;
        } else {
            map.set(remainder, i)
        }
    }

    return false;
};