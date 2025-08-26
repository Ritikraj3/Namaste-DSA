Here’s a **ready-to-use README.md** for your `balancedStringSplit` solution — you can copy-paste it directly into your repo.

---

# Balanced String Split

## 📝 Problem Statement

Given a string `s` consisting of only the characters `'L'` and `'R'`, 
split the string into the maximum number of balanced substrings.

A **balanced string** is one where the number of `'L'` characters equals the number of `'R'` characters.

Return the **maximum number of balanced substrings** you can obtain.

---
## 📌 Example
**Example 1:**

```
Input: s = "RLRRLLRLRL"
Output: 4
Explanation:
R L | R R L L | R L | R L
```
**Example 2:**


````
Input: s = "RLRRRLLRLL"
Output: 2
Explanation:
R L | R R R L L R L L
````

## 💡 Approach
---


We keep track of a `balance` variable:
- Increment `balance` for each `'R'`
- Decrement `balance` for each `'L'`
- Every time `balance` becomes `0`, it means we have a balanced substring → increment `pair`

---

## 🛠 Code Implementation (JavaScript)
```javascript
var balancedStringSplit = function(s) {
    let balance = 0;
    let pair = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'R' ? balance++ : balance--;
        balance === 0 && pair++;
    }
    return pair;
};
````

---

## 🔍 Complexity Analysis

* **Time Complexity:** `O(n)` — We iterate over the string once.
* **Space Complexity:** `O(1)` — Only constant extra space is used.

---

## 📊 Dry Run

**Input:** `"RLRRLLRLRL"`

| Char | Balance | Pair Count |
| ---- | ------- | ---------- |
| R    | 1       | 0          |
| L    | 0       | 1 ✅        |
| R    | 1       | 1          |
| R    | 2       | 1          |
| L    | 1       | 1          |
| L    | 0       | 2 ✅        |
| R    | 1       | 2          |
| L    | 0       | 3 ✅        |
| R    | 1       | 3          |
| L    | 0       | 4 ✅        |

**Output:** `4`

---