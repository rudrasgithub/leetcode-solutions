/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0, right = 0, count = 0;
    for(let x of moves) {
        if(x === 'L')
            left++;
        else if(x === 'R')
            right++;
        else
            count++
    }

    const leftDist = left + count;
    const rightDist = right + count;

    return Math.abs(left - right) + count
}; 