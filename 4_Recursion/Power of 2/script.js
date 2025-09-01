function isPowerOf2(n) {
    if (n ===1) return true
    else if (n < 1 ||(n%2 != 0)) return false
    return isPowerOf2(n/2)
}

console.log(isPowerOf2(8)) 