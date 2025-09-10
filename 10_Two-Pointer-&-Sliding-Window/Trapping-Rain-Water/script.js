function trap(arr) {
  let n = arr.length;

  let maxL = [];
  maxL[0] = arr[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], arr[i]);
  }

  let maxR = [];
  maxR[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], arr[i]);
  }

  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.max(Math.min(maxR[i], maxL[i]) - arr[i]);
  }
  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// ============================================================================================
// Approach-2

function trapWater(arr) {
  let l = 0;
  let r = arr.length - 1;
  let maxR = 0;
  let maxL = 0;
  let water = 0;

  while (l < r) {
    if (arr[l] < arr[r]) {
      maxL = Math.max(maxL, arr[l]);
      water += maxL - arr[l];
      l++;
    } else {
      maxR = Math.max(maxR, arr[r]);
      water += maxR - arr[r];
      r--;
    }
  }
  return water;
}

console.log(trapWater([4,2,0,3,2,5]));
