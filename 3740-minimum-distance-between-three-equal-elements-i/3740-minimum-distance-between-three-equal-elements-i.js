/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let map = new Map()
    let minDis = Infinity;

    for(let i=0;i<nums.length;i++) {
        let num = nums[i];

        if(!map.has(num))
            map.set(num, [])
        
        let arr = map.get(num);
        arr.push(i)

        if(arr.length >= 3) {
            let n = arr.length;
            let index3 = arr[n-1];
            let index1 = arr[n-3];

            minDis = Math.min(minDis, 2 * (index3 - index1))
        }
    }
    return minDis === Infinity ? -1 : minDis
};