/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    let res = []
    let stack = []
    let curr= ""
    
    let s = str.trim()
    for(let i=0;i<s.length;i++) {
        if(s[i]!== ' ')
            curr+=s[i]
        else {
            if(curr!=="") stack.push(curr);
            curr=""
        }
    }

    if(curr) stack.push(curr)
    // console.log(stack)

    while(stack.length) {
        res.push(stack.pop())
    }

    return res.join(" ");
};