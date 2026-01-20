/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let left = 0;
    let right = n - 1;

    let maxWater = 0;

    while(left < right) {
        const h = Math.min(height[left], height[right])
        const w = right - left;

        maxWater = Math.max(maxWater, h * w)

        if(height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
};