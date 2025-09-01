function peakIndex (arr) {
    let l = 0 
    let r = arr.length - 1

    while (l < r) {
        let m = l + Math.floor((r - l)/2)

        if(arr[m] < arr[m+1]) {
            l = m + 1
        } else {
            r = m
        }
    }
    return r
}

console.log(peakIndex([0,2,5,7,10,6,3]));