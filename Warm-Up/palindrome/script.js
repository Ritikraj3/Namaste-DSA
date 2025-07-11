// leetcode url = https://leetcode.com/problems/palindrome-number/

const isPalindrome = function(x) {
    if (x < 0) return false
    // if (x.toString().length === 1) return true
    let xCopy = x
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = 10*rev + rem;
        x = Math.floor(x/10)
    }
    return rev === xCopy
};

console.log(isPalindrome(5));

// let n = 123
// console.log(n.toString().length);