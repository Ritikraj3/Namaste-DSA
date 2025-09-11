function longestString(s) {
    let i = 0
    let j = 0
    let n = s.length
    let map = {}
    let maxLength = 0

    while(j < n) {
        let curr = s[j]
        //shrink i if duplicate found in map
        if(map[curr] != undefined && map[curr] >= i) {
            i = map[curr] + 1
        }
        else {
            //update map with added char
            map[curr] = j
            let windowSize = (j-i) + 1
            //update lenght of longest substring found yet
            maxLength = Math.max(maxLength, windowSize)
            //expand j
            j++
        }
    }
    return maxLength
}

console.log(longestString("abcabcbb"));