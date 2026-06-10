/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    const dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(false));

    dp[m][n] = true;

    // Handle empty string with remaining pattern
    for (let j = n - 1; j >= 0; j--) {
        if (p[j] === '*') {
            dp[m][j] = dp[m][j + 1];
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            if (p[j] === '*') {
                dp[i][j] =
                    dp[i][j + 1] || // '*' matches empty
                    dp[i + 1][j];   // '*' matches current char
            }
            else if (
                s[i] === p[j] ||
                p[j] === '?'
            ) {
                dp[i][j] = dp[i + 1][j + 1];
            }
        }
    }

    return dp[0][0];
};