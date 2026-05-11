/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = [];
    for(let x of nums) {
        let acc = x.toString().split('')
        for(let d of acc) {
            res.push(Number(d))
        }
    }
    return res;
};