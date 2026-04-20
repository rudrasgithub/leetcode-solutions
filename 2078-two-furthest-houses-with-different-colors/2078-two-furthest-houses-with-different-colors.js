/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let maxDist = 0
    let n = colors.length

    for(let j = n - 1;j > 0;j--) {
        if(colors[j] !== colors[0]) {
            maxDist = Math.max(maxDist, j - 0)
            break
        }
    }

    for(let i = 0;i < n - 1;i++) {
        if(colors[i] !== colors[n-1]) {
            maxDist = Math.max(maxDist, n - 1 - i)
            break
        }
    }

    return maxDist
};