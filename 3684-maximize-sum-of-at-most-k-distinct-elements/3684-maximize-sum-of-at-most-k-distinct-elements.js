/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let unique = [...new Set(nums)];

    unique.sort((a, b) => b - a);

    return unique.slice(0, k);
};