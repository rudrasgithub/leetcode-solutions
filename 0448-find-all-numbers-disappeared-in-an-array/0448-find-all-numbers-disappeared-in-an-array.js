/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(arr) {
    let n = arr.length;
    
    for(let i=0;i<n;i++) {
        let index = Math.abs(arr[i]) - 1
        if(arr[index] > 0)
            arr[index] *= -1
    }

    let res = []

    for(let i=0;i<n;i++) {
        if(arr[i] > 0)
            res.push(i+1)
    }

    return res;
};