/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let res = 0
    for(let x of nums) {
        if(x % 2 === 0)
            res |= x
    }

    return res
};