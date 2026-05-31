/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let freq = Array.from({ length: 10 }).fill(0)
    
    while(n) {
        let rem = n%10
        freq[rem] += 1
        n = Math.floor(n/10)
    }

    let total = 0;
    for(let i=0;i<10;i++) {
        total += (i * freq[i])
    }

    return total;
};