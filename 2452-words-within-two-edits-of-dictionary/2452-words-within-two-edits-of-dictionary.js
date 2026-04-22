/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let res = [];

    for(let query of queries) {
        for(let word of dictionary) {
            let dist = 0

            for(let i=0;i<query.length;i++) {
                if(word[i] !== query[i]) {
                    dist++;
                    if(dist > 2) break;
                }
            }

            if(dist <= 2) {
                res.push(query)
                break;
            }
        }
    }

    return res;
};