/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let buckets = Array.from({length: words.length + 1}, () => [])
    let hashmap = new Map();

    for(let word of words)
        hashmap.set(word, (hashmap.get(word) || 0) + 1)
    
    for(let [key, value] of hashmap)
        buckets[value].push(key)

    let res = []
    for(let values=buckets.length - 1;values>=0;values--) {
        buckets[values].sort()
        
        for(let word=0;word<buckets[values].length;word++) {
            if(res.length < k)
                res.push(buckets[values][word])
            else
                return res
        }
    }

    return res
};