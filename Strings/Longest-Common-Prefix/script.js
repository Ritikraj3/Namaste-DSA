function longestPrefix(s) {
    let n = 0
    while (n < s[0].length) {
        let char = s[0][n]
        for(let i = 1; i < s.length; i++){
            if(char !== s[i][n] || n == s[i].length) {
                return s[0].slice(0,n)
            }
        }
        ++n
    }
    return s[0]
}

console.log(longestPrefix(["flower", "flow", "flight"]));