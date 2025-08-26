function dailyTemperature(s) {
    const ans = new Array(s.length).fill(0)

    const stack = []

    for(let i = s.length-1; i >=0; i--) {
        while(stack.length) {
            if(s[i] < s[stack[stack.length-1]]) {
                ans[i] = stack[stack.length-1] - i
                break
            } else {
                stack.pop()
            }
        }
        stack.push(i)
    }
    return ans
}

console.log(dailyTemperature([73, 74,  75, 71, 69, 72, 76, 73]));