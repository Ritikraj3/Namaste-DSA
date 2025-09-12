function checkInclusion (s1, s2) {
    let hashS = Array(26).fill(0)
    let hashW = Array(26).fill(0)
    let window_size = s1.length

    //create hash for both s1 and window in s2
    for(let i = 0; i < window_size; i++) {
        ++hashS[s1.charCodeAt(i) - 97]
        ++hashW[s2.charCodeAt(i) - 97]
    }

    //check if permutation is available in s2
    let i = 0
    let j = window_size - 1
    while (j < s2.length) {
        
        //check is hash are same
        if(isHashSame(hashS, hashW)) {
            return true
        }
        else {
            --hashW[s2.charCodeAt(i) - 97]
            ++i
            ++j
            ++hashW[s2.charCodeAt(j) - 97]
        }
    }
    return false
}

//helper function which says is hash are same or not ?

function isHashSame(hashS, hashW) {
    for(let i = 0; i < 26; i++) {
        if(hashS[i] !== hashW[i]) {
            return false
        }
    }
    return true
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("gef", "eidbafegooo"));
console.log(checkInclusion("ab", "eidciaooo"));