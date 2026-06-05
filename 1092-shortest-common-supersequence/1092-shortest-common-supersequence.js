function shortestCommonSupersequence(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    // Step 1: Build LCS table
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 2: Build SCS from DP table
    let i = n, j = m;
    let result = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            result.push(str1[i - 1]);
            i--;
        } else {
            result.push(str2[j - 1]);
            j--;
        }
    }

    // Add remaining characters
    while (i > 0) {
        result.push(str1[i - 1]);
        i--;
    }

    while (j > 0) {
        result.push(str2[j - 1]);
        j--;
    }

    return result.reverse().join('');
}