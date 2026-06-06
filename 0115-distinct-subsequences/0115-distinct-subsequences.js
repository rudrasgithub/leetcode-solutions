var numDistinct = function(s, t) {
    let n = s.length;
    let m = t.length;

    let dp = Array(n + 1)
        .fill(0)
        .map(() => Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][m] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {

            if (s[i] === t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }

        }
    }

    return dp[0][0];
};