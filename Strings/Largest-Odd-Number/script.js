function largestOdd(num) {
    let n = num.length-1
    while(n>=0) {
        if(parseInt(num[n])% 2 == 1) {
            return num.slice(0,n+1)
        }
        --n
    }
    return ""
}

//for-Loop:---------

function largestOdd2(num) {
    let n = num.length-1
    for(let i = n; i >= 0; i--){
        if(parseInt(num[i])%2 == 1){
            return num.substring(0,i+1)
        }
    }
    return ""
}



console.log(largestOdd2("425176"));