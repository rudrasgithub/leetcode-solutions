/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];

    for(let ele of s) {
        if(stack.length < 0) return ''
        if(stack[stack.length - 1] === ele) stack.pop()
        else stack.push(ele)
    }

    return stack.join('')
};