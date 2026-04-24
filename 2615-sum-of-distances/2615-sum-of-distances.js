/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(0)
    let map = new Map();

    for(let i=0;i<n;i++) {
        if(!map.has(nums[i])) map.set(nums[i], [])
       map.get(nums[i]).push(i);
    }

    for(let arr of map.values()) {
        let prefixSum = 0;
        let totalSum = arr.reduce((a, b) => a + b, 0)

        for(let i=0;i<arr.length;i++) {
            let pos = arr[i]

            const left = pos * i - prefixSum
            const right = (totalSum - prefixSum - pos) - pos * (arr.length - i - 1)

            res[pos] = left + right
            prefixSum += pos
        }
    }

    return res;
};