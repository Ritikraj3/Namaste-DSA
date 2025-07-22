function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== x) {              //avoid self swap
        let temp = nums[i];
        nums[i] = nums[x];
        nums[x] = temp;
      }
      x++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 0, 0, 0]));

// approach 2
function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  // set remaining elements to 0
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
