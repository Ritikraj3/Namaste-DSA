function isBad (n) {
    let l = 1
    let r = n

    while(l < r) {
        let m = l + Math.floor((r-l)/2)
        if(!isBadVersion) {
            l = m + 1
        } else {
            r = m
        }
    }
    return r
}