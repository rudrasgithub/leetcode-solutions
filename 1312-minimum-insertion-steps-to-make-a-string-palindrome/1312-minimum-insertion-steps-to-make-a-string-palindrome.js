var minInsertions = function(s) {
    let n = s.length;
    let rev = s.split('').reverse().join('');

    let prev = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let curr = new Array(n + 1).fill(0);
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === rev[j - 1]) {
                curr[j] = 1 + prev[j - 1];
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }

    let lps = prev[n];
    return n - lps;
};