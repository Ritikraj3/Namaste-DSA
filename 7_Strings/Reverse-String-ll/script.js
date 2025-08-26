function reverseString (s , k) {
    s = s.split("")

    for(let x = 0; x < s.length; x = x + (2*k)) {
        let mid = Math.floor(k/2)
        for(let i = 0; i < mid; i++) {
            let temp = s[x+k-i-1]
            s[x+k-i-1] = s[x+i]
            s[x+i] = temp
        }
    }
    return s.join("")
}

console.log(reverseString("abcdefghijklmn", 2));