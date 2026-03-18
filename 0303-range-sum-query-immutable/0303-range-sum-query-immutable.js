/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let prefixSum = 0
    for(let i=left;i<=right;i++) {
        prefixSum += this.arr[i]
    }
    return prefixSum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */