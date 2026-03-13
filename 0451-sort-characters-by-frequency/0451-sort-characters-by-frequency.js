/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq_key = Array.from({length: s.length + 1}, () => [])
    let hashmap = new Map()

    for(let x of s) {
        hashmap.set(x, (hashmap.get(x) || 0) + 1)
    }

    for(let [key, value] of hashmap) {
        freq_key[value].push(key)
    }

    let res = [];
    for(let arr=freq_key.length - 1;arr >= 0;arr--) {
        for(let ch=0;ch<freq_key[arr].length;ch++) {
            res.push(freq_key[arr][ch].repeat(arr))
        }
    }

    return res.join("");
};