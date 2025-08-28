function sqrt(x) {
    if(x < 2) return x

    let l = 2
    let r = Math.floor(x/2)
    while(l <= r) {
        let m = Math.floor((l+r)/2)
        if(x === m*m) return m
        else if(x > m*m) {
            l = m+1
        } else {
            r = m-1
        }
    }
    return r
}

console.log(sqrt(16));
console.log(sqrt(10));
console.log(sqrt(2000));