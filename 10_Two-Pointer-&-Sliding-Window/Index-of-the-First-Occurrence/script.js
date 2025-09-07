function strStr(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  for (let i = 0; i <= n - m; i++) {

    //check if needle is present in the haystack
    let j = 0;
    while (j < m) {
      if (haystack[i + j] === needle[j]) {
        j++;
      } else {
        break;
      }
    }
    if (j == m) return i;
  }
  return -1;
}

console.log(strStr("onionionsky", "onions"));
