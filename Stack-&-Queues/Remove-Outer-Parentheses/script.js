// with Stack :---------

function removeOuterParentheses (s) {
    let stack = []
    let output = ""

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            stack.push(s[i])
            if(stack.length > 1) {
                output += s[i]
            }
        }else {
            if(stack.length > 1) {
                output += s[i]
            }
            stack.pop(s[i])
        }
    }
    return output
}

console.log(removeOuterParentheses("(()())(())(()(()))"));


// without Stack:-----------------------------

function removeOutermostParentheses(s) {
    let level = 0
    let output = "" 

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            level++
            if(level > 1) {
                output += s[i]
            }
        } else {
            if(level > 1) {
                output += s[i]
            }
            level--
        }
    }
    return output
}

console.log(removeOutermostParentheses("(()())(())"));