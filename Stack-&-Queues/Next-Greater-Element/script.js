function nge(s1, s2) {
    
    let stack = []
    let ngeMap = {}
    let n = s2.length

    stack.push(s2[n-1]),
    ngeMap[s2[n-1]] = -1

    for(let i = n-2; i >= 0; i--) {
        // let top = stack[stack.length-1]
        
        // if(s2[i] < top) {
        //     ngeMap[s2[i]] = top
        // } else {
            while(stack.length) {
                if(stack[stack.length-1] < s2[i]) {
                    stack.pop()
                } else {
                    ngeMap[s2[i]] = stack[stack.length-1]
                    break
                }
            }
            if(stack.length === 0) {
                ngeMap[s2[i]] = -1
            }
        stack.push(s2[i])
    }
    // let ans = []
    // for(let i = 0; i < s1.length; i++) {
    //     ans.push(ngeMap[s1[i]])
    // }

    return s1.map(x => ngeMap[x])
}

console.log(nge([4, 1, 2], [1, 3, 4, 2]));