### 📄 `README.md`

# 🔢 Merge Sort in JavaScript – Beginner Friendly Guide

This project demonstrates how to **sort an array** using the **Merge Sort** algorithm in JavaScript. It includes a step-by-step recursive implementation with detailed explanation and example usage.

---

## 📌 What is Merge Sort?

**Merge Sort** is a popular **Divide and Conquer** sorting algorithm.  
It works by:

1. **Dividing** the array into halves recursively,
2. **Sorting** each half individually,
3. **Merging** the sorted halves together.

### ✅ Characteristics:
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Stable Sort**: Keeps original order of equal elements
- **Used for**: Large datasets, Linked Lists, External sorting

---

## 🧠 How It Works (Step-by-Step)

Let's say we want to sort this array:
```js
[4, 2, 7, 1]

### Step 1: Divide

* Split into: `[4, 2]` and `[7, 1]`
* Then again: `[4] [2]` and `[7] [1]`

### Step 2: Sort & Merge

* `[4]` and `[2]` merge to `[2, 4]`
* `[7]` and `[1]` merge to `[1, 7]`

### Step 3: Final Merge

* `[2, 4]` and `[1, 7]` merge to `[1, 2, 4, 7]`

---

Sure! Below is a **detailed call stack visualization** for your `sortArray` merge sort function using the input:

```js
sortArray([4, 2, 7, 1])
```

---

## 📚 Input: `[4, 2, 7, 1]`

---

### 💡Code Recap:

```js
function sortArray(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
}
```

---

# 📦 Call Stack Behavior (Step-by-step)

The call stack is a **Last In, First Out (LIFO)** structure. Let's simulate each step, growing and shrinking the call stack.

---

### ▶️ Step 1 — Initial Call

```
CALL STACK:
sortArray([4, 2, 7, 1])
```

---

### ▶️ Step 2 — Go Left First

`sortArray([4, 2])` is called from within `[4, 2, 7, 1]`

```
CALL STACK:
sortArray([4, 2])
sortArray([4, 2, 7, 1])
```

---

### ▶️ Step 3 — Go Further Left

`sortArray([4])` — base case (returns immediately)

```
CALL STACK:
sortArray([4])
sortArray([4, 2])
sortArray([4, 2, 7, 1])
```

Now `[4]` returns ⬅️ — remove from stack.

---

### ▶️ Step 4 — Now Right of \[4,2]

Call `sortArray([2])` — base case

```
CALL STACK:
sortArray([2])
sortArray([4, 2])
sortArray([4, 2, 7, 1])
```

`[2]` returns ⬅️ — pop from stack.

Now both left & right are ready → call `merge([4], [2])` → returns `[2, 4]`

⬅️ `sortArray([4, 2])` returns

---

### 🧹 Stack After Left Side Done

```
CALL STACK:
sortArray([4, 2, 7, 1])
```

---

### ▶️ Step 5 — Now Go Right Side

Call `sortArray([7, 1])`

```
CALL STACK:
sortArray([7, 1])
sortArray([4, 2, 7, 1])
```

---

### ▶️ Step 6 — Go Left of \[7,1]

Call `sortArray([7])` — base case

```
CALL STACK:
sortArray([7])
sortArray([7, 1])
sortArray([4, 2, 7, 1])
```

⬅️ `[7]` returns

---

### ▶️ Step 7 — Go Right of \[7,1]

Call `sortArray([1])` — base case

```
CALL STACK:
sortArray([1])
sortArray([7, 1])
sortArray([4, 2, 7, 1])
```

⬅️ `[1]` returns
Now `merge([7], [1])` returns `[1, 7]`

⬅️ `sortArray([7, 1])` returns

---

### 🧹 Almost Final Stack:

```
CALL STACK:
sortArray([4, 2, 7, 1])
```

---

### ✅ Final Merge

Call `merge([2, 4], [1, 7])` → returns `[1, 2, 4, 7]`

⬅️ Done! All calls complete.

---

## 🎯 Final Output

```js
sortArray([4, 2, 7, 1]) → [1, 2, 4, 7]
```

---

# 📊 Tree View of All Calls

```
sortArray([4, 2, 7, 1])
├─ sortArray([4, 2])
│  ├─ sortArray([4]) → [4]
│  └─ sortArray([2]) → [2]
│     → merge([4], [2]) = [2, 4]
└─ sortArray([7, 1])
   ├─ sortArray([7]) → [7]
   └─ sortArray([1]) → [1]
      → merge([7], [1]) = [1, 7]

→ merge([2, 4], [1, 7]) = [1, 2, 4, 7]
```

---

Would you like this visual as an image diagram or want to try with a bigger array like `[6, 5, 3, 1, 8, 7, 2, 4]`?


---

# 📦 Code Implementation

```js
var sortArray = function(nums) {
    if (nums.length <= 1) return nums; // base case

    let mid = Math.floor(nums.length / 2);         // find middle
    let left = sortArray(nums.slice(0, mid));      // sort left half
    let right = sortArray(nums.slice(mid));        // sort right half

    return merge(left, right);                     // merge both halves
};

// Merge helper function
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}
```

---

## 🧪 Example Usage

```js
const input = [4, 2, 7, 1];
const sorted = sortArray(input);
console.log(sorted);  // Output: [1, 2, 4, 7]
```
---
