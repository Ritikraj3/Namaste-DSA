function strStr(haystack, needle) {
  let i = 0;
  let j = 1;

  let lps = [0];
  let n = haystack.length;
  let m = needle.length;

  //creating LPS
  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  //check if needle is present in the haystack
  i = 0
  j = 0

  while(j < m) {
    if(haystack[i] === needle[j]) {
        i++
        j++
    } else {
        if(j === 0) {
            i++
        } else {
            j = lps[j-1]
        }
    }
    if(j === m) return i - m
  }
  return -1
}


console.log(strStr("onionionsky", "onions"));
console.log(strStr("madmanmadam", "madam"));
console.log(strStr("saturdaysad", "sad"));