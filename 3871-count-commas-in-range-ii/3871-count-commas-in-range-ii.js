/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let totalCommas = 0n;
    let val = BigInt(n);

    let threshold = 1000n

    while(val >= threshold) {
        totalCommas += (val - threshold + 1n)
        threshold *= 1000n;
    }

    return Number(totalCommas)
};