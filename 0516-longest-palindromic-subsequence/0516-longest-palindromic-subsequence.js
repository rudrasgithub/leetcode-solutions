/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const t = s.split('').reverse().join('');
    const n = s.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(n + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    return dp[n][n];
};