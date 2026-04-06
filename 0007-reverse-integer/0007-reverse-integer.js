/**
 * @param {number} x
 * @return {number}
 */
function leverage(x, sum) {
    while(x !== 0) {
        const rem = x % 10
        sum = sum * 10 + rem
        x = Math.floor(x / 10)
    }
    return sum
}

var reverse = function(x) {
    let sum = 0
    const LIMIT = Math.pow(2, 31);
    
    if(x < 0) {
        x *= -1
        sum = leverage(x, sum)
        sum *= -1

    } else {
        sum = leverage(x, sum)
    }

    if(sum > LIMIT - 1 || sum < -LIMIT) {
        return 0
    }
    return sum
};