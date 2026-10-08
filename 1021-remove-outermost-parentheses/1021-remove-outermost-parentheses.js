/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let res = [];

    for (const ch of s) {
        if(ch === "(") {
            if(stack.length > 0)
                res.push(ch)
            stack.push(ch)
        }
        else {
            stack.pop()
            if(stack.length > 0)
                res.push(ch)
        }
    }

    return res.join("")
};