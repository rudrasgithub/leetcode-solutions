/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(arr) {
    let s = new Set();
    let n = arr.length;
    let res = []

    for(let i=0;i<n;i++) {
        if(s.has(arr[i]))
            res.push(arr[i])
        else
            s.add(arr[i])
    }

    let i=0;
    while(i<n) {
        let correctIndex = arr[i] - 1
        if(arr[i] !== arr[correctIndex])
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
        else
            i++;
    }
    
    for(let i=0;i<n;i++) {
        if(arr[i] !== i+1)
            res.push(i+1)
    }

    return res;
};