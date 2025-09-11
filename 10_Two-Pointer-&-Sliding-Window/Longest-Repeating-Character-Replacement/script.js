function characterReplacement (s,k) {
    let i = 0
    let j = 0
    let n = s.length
    let maxLength = 0
    // let map = {}
    // map[s[0]] = 1
    let map = Array(26).fill(0)
    map[s.charCodeAt(0) - 65] = 1


    while (j < n) {
        if (iSValidWindow(map, k)) {
            maxLength = Math.max(maxLength, j-i+1)
            j++
            // map[s[j]] = map[s[j]] ? ++map[s[j]] : 1
            ++map[s.charCodeAt(j) - 65]
        }
        else {
            // --map[s[i]]
            --map[s.charCodeAt(i) - 65]
            ++i
        }
    }
    return maxLength
}

function iSValidWindow (map, k) {
    let totalLength = 0
    let maxCount = 0
    for(let i = 0; i < 26; i++) {

        // let char = String.fromCharCode(i + 65)
        // if(map[char]) {
            totalLength += map[i]
            maxCount = Math.max(maxCount, map[i])
        // }
    }
    return (totalLength - maxCount <= k)
}

console.log(characterReplacement("AABABBA", 1));


// ====================================== APPROACH - 2 =====================================

function characterReplacement2 (s, k) {
    let i = 0
    let maxCount = 0
    let maxWindowSize = 0
    let map = {}

    for(let j = 0; j < s.length; j++) {

        // count current char
        map[s[j]] = map[s[j]] ? ++map[s[j]] : 1

        // update maxCount with this char
        maxCount = Math.max(maxCount, map[s[j]])

        //check if window invalid
        while ((j - i + 1) - maxCount > k) {
            --map[s[i]]
            ++i
        }

        // update answer
        maxWindowSize = Math.max(maxWindowSize, (j - i + 1))

    }
    return maxWindowSize
}

console.log(characterReplacement2("AABABBA", 1));