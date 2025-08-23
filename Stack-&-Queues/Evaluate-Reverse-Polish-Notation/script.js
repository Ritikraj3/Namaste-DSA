function evalRPN (s) {
    let stack = []
    let map = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
        "*" : (a, b) => a * b,
        "/" : (a, b) => Math.trunc(a / b)
    }

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            let b = stack.pop()
            let a = stack.pop()
            let val = map[s[i]](a,b)
            stack.push(val)
        } else {
            stack.push(Number(s[i]))
        }
    }
    return Number(stack.pop())
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
console.log(evalRPN(["2","1","+","3","*"]));