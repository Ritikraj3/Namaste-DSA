Let’s carefully **derive the pseudocode step by step** so you see the full reasoning:

---

### Step 1: Define variables

* `i = 0` → left pointer of window
* `j = 0` → right pointer of window
* `maxLength = 0` → store result
* `map = {}` → store characters and their latest index

---

### Step 2: Iterate through string with `j`

* While `j < n` (where `n` is length of string):

  * Check if `s[j]` is already in `map` **and** `map[s[j]] >= i`

    * If yes → duplicate found inside current window → move `i` to `map[s[j]] + 1`
  * Update/insert `s[j]` in map with its index `j`
  * Calculate window length = `j - i + 1`
  * Update `maxLength = max(maxLength, window length)`
  * Move `j` forward

---

### Step 3: Return answer

* At the end → `maxLength` is the answer

---

## 🔹 Pseudocode

```text
function longestSubstringWithoutRepeating(s):
    i = 0
    j = 0
    maxLength = 0
    map = empty dictionary

    while j < length(s):
        if s[j] in map AND map[s[j]] >= i:
            i = map[s[j]] + 1   // shrink left pointer

        map[s[j]] = j           // update latest index of char

        currentLength = j - i + 1
        maxLength = max(maxLength, currentLength)

        j = j + 1               // expand right pointer

    return maxLength
```

---
Nice — you found the bug. 👍 Below I’ll explain what’s wrong and give a clean, correct version (object and `Map` variants) plus a short walkthrough.

## Problems in your code

1. **Falsy index check**: `if (map[s[j]] && ...)` fails when the stored index is `0` (because `0` is falsy). Use `!== undefined` or `hasOwnProperty` or use a `Map`.
2. **You only update `map` in the `else` branch.** Even when you detect a duplicate and move `i`, you still need to update the character’s latest index to `j`.
3. **Wrong window length calculation.** `let windowLength = (j-1) + 1` is incorrect. The window length is `j - i + 1`.

## Fixed versions

### Using plain object

```javascript
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    let n = s.length;
    let maxLength = 0;
    const map = {}; // stores latest index for each char

    while (j < n) {
        const ch = s[j];

        // check existence correctly (don't rely on truthiness)
        if (map[ch] !== undefined && map[ch] >= i) {
            // duplicate inside current window -> move left pointer
            i = map[ch] + 1;
        }

        // always update latest index for ch
        map[ch] = j;

        // correct window length
        maxLength = Math.max(maxLength, j - i + 1);

        j++;
    }

    return maxLength;
};
```

### Using `Map` (cleaner)

```javascript
const lengthOfLongestSubstring = function(s) {
    let i = 0;
    let maxLength = 0;
    const seen = new Map();

    for (let j = 0; j < s.length; j++) {
        if (seen.has(s[j]) && seen.get(s[j]) >= i) {
            i = seen.get(s[j]) + 1;
        }
        seen.set(s[j], j);
        maxLength = Math.max(maxLength, j - i + 1);
    }

    return maxLength;
};
```

## Quick walkthrough (`"abcabcbb"`)

Start: `i=0, max=0, map={}`

* j=0, ch='a': map\[a] undefined → set map\[a]=0 → window = 0-0+1 = 1 → max=1
* j=1, ch='b': set map\[b]=1 → window = 1-0+1 = 2 → max=2
* j=2, ch='c': set map\[c]=2 → window = 2-0+1 = 3 → max=3
* j=3, ch='a': map\[a]=0 >= i(0) → i = 0+1 = 1; update map\[a]=3 → window = 3-1+1 = 3 → max=3
* j=4, ch='b': map\[b]=1 >= i(1) → i = 2; update map\[b]=4 → window = 4-2+1 = 3 → max=3
* j=5, ch='c': map\[c]=2 >= i(2) → i = 3; update map\[c]=5 → window = 5-3+1 = 3 → max=3
* j=6, ch='b': map\[b]=4 >= i(3) → i = 5; update map\[b]=6 → window = 6-5+1 = 2 → max=3
* j=7, ch='b': map\[b]=6 >= i(5) → i = 7; update map\[b]=7 → window = 7-7+1 = 1 → max=3

Result: `3` (correct).

---
