/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let i=0;
    let n = arr.length;
    
    while(i<n) {
        let correctIndex = arr[i]

        if(arr[i] !== arr[correctIndex]) 
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
        else
            i++
    }

    for(let i=0;i<n;i++) {
        if(arr[i] !== i)
            return i
    }

    return n
};