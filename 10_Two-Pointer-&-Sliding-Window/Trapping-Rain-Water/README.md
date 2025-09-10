
---

# 🌊 Trapping Rain Water Problem

### Problem Statement

Given `n` non-negative integers representing an elevation map (bars of different heights), compute how much water it can trap after raining.

---

## 🧩 Example

```js
Input:  [0,1,0,2,1,0,1,3,2,1,2,1]  
Output: 6
```

---

## 💡 Approach 1: Pre-computation of Max Left & Max Right

We calculate two arrays:

* `maxL[i]` → maximum height from the **left** up to index `i`.
* `maxR[i]` → maximum height from the **right** up to index `i`.

The trapped water at index `i` is:

```
water[i] = min(maxL[i], maxR[i]) - arr[i]
```

### Code

```js
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
    water += Math.max(Math.min(maxR[i], maxL[i]) - arr[i], 0);
  }
  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
```

---

### 📝 Dry Run (for `[0,1,0,2,1,0,1,3,2,1,2,1]`)

1. Build `maxL`:

```
maxL = [0,1,1,2,2,2,2,3,3,3,3,3]
```

2. Build `maxR`:

```
maxR = [3,3,3,3,3,3,3,3,2,2,2,1]
```

3. Water trapped at each index:

```
i=0 → min(0,3) - 0 = 0
i=1 → min(1,3) - 1 = 0
i=2 → min(1,3) - 0 = 1
i=3 → min(2,3) - 2 = 0
i=4 → min(2,3) - 1 = 1
i=5 → min(2,3) - 0 = 2
i=6 → min(2,3) - 1 = 1
i=7 → min(3,3) - 3 = 0
i=8 → min(3,2) - 2 = 0
i=9 → min(3,2) - 1 = 1
i=10 → min(3,2) - 2 = 0
i=11 → min(3,1) - 1 = 0
```

✅ Total = `6`

---

### ⏱️ Time & Space

* Time: `O(n)`
* Space: `O(n)` (for `maxL` and `maxR`)

---

## 💡 Approach 2: Two Pointer Optimization

We can avoid extra space by using two pointers (`l` and `r`) and keeping track of `maxL` and `maxR` dynamically.

### Code

```js
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

console.log(trapWater([4,2,0,3,2,5])); // 9
```

---

### 📝 Dry Run (for `[4,2,0,3,2,5]`)

* Start: `l=0, r=5, maxL=0, maxR=0, water=0`

Step by step:

* arr\[l] < arr\[r] → maxL=4 → water+=0 → l=1
* arr\[l]=2 < arr\[r]=5 → maxL=4 → water+=2 → l=2
* arr\[l]=0 < arr\[r]=5 → maxL=4 → water+=4 → l=3
* arr\[l]=3 < arr\[r]=5 → maxL=4 → water+=1 → l=4
* arr\[l]=2 < arr\[r]=5 → maxL=4 → water+=2 → l=5

✅ Total = `9`

---

### ⏱️ Time & Space

* Time: `O(n)`
* Space: `O(1)` (only variables, no extra arrays)

---

## 🚀 Summary

| Approach        | Time   | Space  | Explanation                                         |
| --------------- | ------ | ------ | --------------------------------------------------- |
| Pre-computation | `O(n)` | `O(n)` | Build `maxL` & `maxR`, then compute trapped water   |
| Two Pointers    | `O(n)` | `O(1)` | Use left & right pointers with dynamic max tracking |

---

👉 Which one do you want me to make **GitHub README ready with icons + badges** (like your `Country Project` style) — Approach 1 only, Approach 2 only, or both together?
