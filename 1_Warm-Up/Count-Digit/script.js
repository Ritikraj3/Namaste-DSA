function countDigit (n) {
    if(n == 0) return 1;
    //handling negative number
    if(n < 0)  n = -n;
    // n = Math.abs(n);
    let count = 0;
    while (n > 0) { n 
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigit(-1234));