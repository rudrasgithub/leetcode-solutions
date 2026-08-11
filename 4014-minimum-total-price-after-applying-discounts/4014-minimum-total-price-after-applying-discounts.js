/**
 * @param {number[]} prices
 * @param {number[]} discounts
 * @return {number}
 */
var minPrice = function(prices, discounts) {
    const sorted_prices = prices.sort((a, b) => b - a)
    const sorted_discounts = discounts.sort((a, b) => b - a)

    let min_sum = 0;
    const n = sorted_prices.length;
    const m = sorted_discounts.length;
    
    let j = 0;
    while(j < m && j < n) {
        min_sum += (sorted_prices[j] * (100 - sorted_discounts[j]) / 100)
        j++;
    }

    let i = m;
    while(i < n) {
        min_sum += sorted_prices[i]
        i++;
    }


    return min_sum
};