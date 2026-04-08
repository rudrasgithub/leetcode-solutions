/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();

    for(let x of s)
        map.set(x, (map.get(x) || 0) + 1)

    for(let i=0;i<s.length;i++) {
        if(map.get(s[i]) === 1)
            return i
    }
    return -1
};