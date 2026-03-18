/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let prefixSum = 0;
    let count = 0;

    let map = new Map();
    map.set(0, 1)

    for(let ele of nums) {
        prefixSum += ele
        
        let remainder = prefixSum % k
        
        if(remainder < 0) remainder += k
        
        if(map.has(remainder)) {
            count += map.get(remainder)
        }

        map.set(remainder, (map.get(remainder) || 0) + 1)
    }
    
    return count;
};