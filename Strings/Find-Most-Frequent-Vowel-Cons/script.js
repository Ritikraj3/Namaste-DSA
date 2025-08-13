
// Optimized Approach 3:----
function maxFreqSum3(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0
    let maxCons = 0
    let mapKeys = Object.keys(map)

    for (let i = 0; i < mapKeys.length; i++) {
        if(vowels.includes(mapKeys[i])){
            maxVowel = Math.max(map[mapKeys[i]], maxVowel)
        } else {
            maxCons = Math.max(map[mapKeys[i]], maxCons)
        }
    }
    return maxVowel + maxCons
}



// Approach 2 :-----

function maxFreqSum2(s){
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0
    let maxCons = 0
    let mapKeys = Object.keys(map)

    for (let i = 0; i < mapKeys.length; i++) {
        if(vowels.includes(mapKeys[i])){
            maxVowel = Math.max(map[mapKeys[i]], maxVowel)
        } else {
            maxCons = Math.max(map[mapKeys[i]], maxCons)
        }
    }
    return maxVowel + maxCons
}



// Approach 1: ------
function maxFreqSum1 (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }

    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0
    let maxCons = 0

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (map[s[i]] > maxVowel) {
                maxVowel = map[s[i]]
            }
        }
        else if (map[s[i]] > maxCons) {
            maxCons = map[s[i]]
        }
    }
    return maxVowel + maxCons
}

