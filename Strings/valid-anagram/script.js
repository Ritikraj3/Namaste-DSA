//Approach 1:----

function isAnagram(s,t) {
    if(s.length != t.length) return false
    let obj = {}

    for(let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 1
        }else {
            obj[s[i]]++
        }
    }

    for(let i = 0; i < t.length; t++) {
        if(!obj[t[i]]) return false
        obj[t[i]]--
    }
    return true
}

//Approach 2:-----------

function isAnagram2 (s,t) {
    if(s.length !== t.length) return false
    let obj1 = {}
    let obj2 = {}

    for(let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }

    for (let key in obj1) {
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

console.log(isAnagram2("anagram", "nagaram"));