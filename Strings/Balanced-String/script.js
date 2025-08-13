 function balanceString (s) {
    let balance = 0
    let pair = 0
    for(let i = 0; i < s.length; i++) {
        s[i] === 'R' ? balance ++ : balance--
        balance === 0 && pair++
    }
    return pair
 }

 console.log(balanceString("RLRRLLRLRL"));