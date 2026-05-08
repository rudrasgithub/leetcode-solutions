/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    let freq = new Map();

    // Count each unique word once per array
    for (let arr of responses) {
        let set = new Set(arr);

        for (let word of set) {
            freq.set(word, (freq.get(word) || 0) + 1);
        }
    }

    let maxFreq = 0;
    let ans = "";

    // Find highest frequency
    // If tie -> lexicographically smaller word
    for (let [word, count] of freq) {
        if (
            count > maxFreq ||
            (count === maxFreq && word < ans)
        ) {
            maxFreq = count;
            ans = word;
        }
    }

    return ans;
};