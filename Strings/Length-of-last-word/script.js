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