/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    let prev = new Array(n + 1).fill(0);

    // base case: convert "" -> word2
    for (let j = 0; j <= n; j++) {
        prev[j] = j;
    }

    for (let i = 1; i <= m; i++) {
        let curr = new Array(n + 1).fill(0);

        // convert word1 -> ""
        curr[0] = i;

        for (let j = 1; j <= n; j++) {

            // characters match
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            }
            else {
                let insert = curr[j - 1];
                let remove = prev[j];
                let replace = prev[j - 1];

                curr[j] =
                    1 + Math.min(insert, remove, replace);
            }
        }

        prev = curr;
    }

    return prev[n];
};