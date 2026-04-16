/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let res = ""

    for(let num of nums) {
        res += num.toString()
    }

    let count = 0;
    for(let x of res) {
        if(x == digit)
            count++;
    }

    return count
};