/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(arr) {
    let n = arr.length;

    let i=0;
    while(i<n) {
        let correctIndex = arr[i] - 1
        if(arr[i] !== arr[correctIndex])
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
        else
            i++;
    }

    let res = [];
    for(let i=0;i<n;i++) {
        if(arr[i] !== i+1)
            res.push(arr[i])
    }

    return res;
};