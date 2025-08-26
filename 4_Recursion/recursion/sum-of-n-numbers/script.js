function sum(n) {
  if (n === 0) return 0;      // base case
  return n + sum(n - 1);      // recursive call
}

console.log(sum(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Time Complexity: O(n)
// Space Complexity: O(n)  