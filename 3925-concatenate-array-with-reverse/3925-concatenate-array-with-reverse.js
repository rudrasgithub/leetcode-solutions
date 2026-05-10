/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const rev = [...nums].reverse();
    return nums.concat(rev)
};