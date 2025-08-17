function groupAnagram (strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let sortedKey = strs[i].split("").sort().join("")
        if(!map[sortedKey]) {
            map[sortedKey] = [strs[i]]
        }else {
            map[sortedKey].push(strs[i])
        }
    }
    return [...Object.values(map)]
}

console.log(groupAnagram(["eat", "ate", "tan", "nat", "bat"]));