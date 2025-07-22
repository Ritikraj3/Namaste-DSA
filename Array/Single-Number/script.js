function singleNumber(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num; // XOR cancels out duplicate numbers
  }
  return result;
}

console.log(singleNumber([2, 3, 5, 4, 5, 3, 4])); 

// Time Complexity: O(n)