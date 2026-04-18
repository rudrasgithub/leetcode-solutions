/**
 * @param {number} n
 * @return {number}
 */

function reverse(num) {
    let res = 0
    while(num > 0) {
        let rem = num % 10
        res = res * 10 + rem
        num = Math.floor(num/10)
    }

    return res
}

var mirrorDistance = function(n) {
    return Math.abs(n - reverse(n))
};