//Approach 1 :----
function lengthOfLastWord(s) {
    let n = s.length - 1

    while (n>=0) {
        // if (s[n] === " ") {
        //     n--
        // } else {
        //     break
        // }
        if(s[n] != " ") break
        n--
    }

    let count = 0

    while (n>=0) {
        // if(s[n] !== ' ') {
        //     n--
        //     count++
        // }else {
        //     break
        // }
        if(s[n] == " ") break
        n--
        count++
    }
    return count
}

console.log(lengthOfLastWord("  ok  i am coming  "));

//Approach 2:---

function lastWord(s) {
    let n = s.length-1
    let count = 0

    while(n>=0) {
        if(s[n] !== " "){
            count++
        } else if ( count > 0){
            break
        }
        n--
    }
    return count
}

console.log(lastWord("  Ritik  Raj   "));