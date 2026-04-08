/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(arr) {
    let i=0;
    let n = arr.length;
    
    while(i < n) {
        let correctIndex = arr[i] - 1;

        if(arr[i] !== arr[correctIndex]) 
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
        else
            i++;
    }

    let res = []

    for(let i=0;i<n;i++) {
        if(arr[i] !== i+1)
            res.push(i+1)
    }

    return res;
};