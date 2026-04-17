/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for(let x of nums)
        res ^= x

    return res
};