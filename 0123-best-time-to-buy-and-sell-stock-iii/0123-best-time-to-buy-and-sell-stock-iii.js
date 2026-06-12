var maxProfit = function(prices) {
    const n = prices.length;

    const dp = Array.from(
        { length: n },
        () => Array.from(
            { length: 2 },
            () => Array(3).fill(-1)
        )
    );

    function solve(i, buy, cap) {
        if (i === n || cap === 0) return 0;

        if (dp[i][buy][cap] !== -1)
            return dp[i][buy][cap];

        let profit = 0;

        if (buy) {
            profit = Math.max(
                -prices[i] + solve(i + 1, 0, cap),
                solve(i + 1, 1, cap)
            );
        } else {
            profit = Math.max(
                prices[i] + solve(i + 1, 1, cap - 1),
                solve(i + 1, 0, cap)
            );
        }

        return dp[i][buy][cap] = profit;
    }

    return solve(0, 1, 2);
};