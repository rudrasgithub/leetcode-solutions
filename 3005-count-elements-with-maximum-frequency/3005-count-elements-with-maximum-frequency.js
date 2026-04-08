/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();

    let maxFreq = -Infinity;

    for(let x of nums) {
        map.set(x, (map.get(x) || 0) + 1)
        if(map.get(x) > maxFreq) {
            maxFreq = map.get(x)
        }
    }

    let totalFreq = 0
    for(let [key, value] of map) {
        if(value === maxFreq)
            totalFreq += value
    }
    
    return totalFreq
};