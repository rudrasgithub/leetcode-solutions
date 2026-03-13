
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let i = 0;
    while(i < this.arr.length && this.arr[i] < num) {
        i++;
    }
    this.arr.splice(i, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const n = this.arr.length;

    if(n%2===0) {
        const sum = this.arr[n/2] + this.arr[(n/2) - 1]
        return sum / 2
    }
    return this.arr[Math.floor(n/2)]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */