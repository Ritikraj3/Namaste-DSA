//Approach 1:-

function findWord(words, x) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        if(words[i].includes(x)){
            res.push(i)
        }
    }
    return res
}

console.log(findWord(["leet", "code"], "e"));

//Approach 2 :----

function findWord2 (words, x) {
    let res = []
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            if (words[i][j] == x) {
                res.push(i)
                break
            }
        }
    }
    return res

}

console.log(findWord2(["leet", "code"], "e"));