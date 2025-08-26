// leetcode url = https://leetcode.com/problems/reverse-integer/
//32 bit integer
const reverse = function(x) {
    let xCopy = x;
    x = Math.abs(x)
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = 10*rev + rem;
        x = Math.floor(x/10)
    }
    let limit = Math.pow(2,31)
    if (rev < -limit || rev > limit) return 0
    return (xCopy<0)?-rev:rev
};

console.log(reverse(123));
console.log(reverse(-123));
//32 bit
console.log(reverse(2147483648434));