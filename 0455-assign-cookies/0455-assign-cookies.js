/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);   // sort greed factors
    s.sort((a, b) => a - b);   // sort cookie sizes

    let child = 0;   // pointer for children
    let cookie = 0;  // pointer for cookies
    let count = 0;

    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            count++;
            child++;
            cookie++;
        } else {
            cookie++; // try larger cookie
        }
    }

    return count;
};