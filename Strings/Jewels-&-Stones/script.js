function totalJewels(jewels, stones) {
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++
        }
    }
    return count
}

console.log(totalJewels("ab" , "aabbAA"));

// Approach 2 :----

function totalJewels2(jewels, stones) {
    let count  = 0
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] == stones[i]) {
                count ++
                break
            }
        }
    }
    return count
}

console.log(totalJewels2("abc" , "aacbbAA"));

// Approach 3 :-----

function totalJewels3(jewels, stones) {
    let set = new Set()
    for(let i = 0; i < stones.length; i++) {
        set.add(stones[i])
    }

    let count = 0

    for(let i = 0; i < jewels.length; i++) {
        if(set.has(jewels[i])) {
            count++
        }
    }
    return count
}

console.log(totalJewels2("abc" , "acbacbAA"));