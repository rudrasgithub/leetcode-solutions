/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(arr) {
    let n = arr.length;

    let i=0;
    while(i<n) {
        let correctIndex = arr[i] - 1;
        if(arr[i] > 0 && arr[i] <= n && arr[i] !== arr[correctIndex])
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
        else
            i++;
    }

    for(let i=0;i<n;i++) {
        if(arr[i] !== i+1)
            return i+1
    }

    return n + 1
};