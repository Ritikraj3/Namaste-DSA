function digits (n) {
    if (n===0) return 0
    return 1 + digits(Math.floor(n/10))
}

console.log(digits(1234))
