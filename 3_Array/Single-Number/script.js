function singleNumber(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x ^= arr[i];
  }
  return x;
}

console.log(singleNumber([2, 3, 5, 4, 5, 3, 4])); 

// Time Complexity: O(n)


//hash map approach

function singleNo(nums) {
   let hash = {}

   for (let i = 0; i < nums.length; i++) {
       if (!hash[nums[i]]) {
          hash[nums[i]] = 1
       } else {
           hash[nums[i]]++
       }
   }
   for(let i = 0; i < nums.length; i++) {
       if (hash[nums[i]] == 1) {
           return nums[i]
       }
   }
   
}

console.log(singleNo([2, 3, 5, 4, 5, 3, 4]));