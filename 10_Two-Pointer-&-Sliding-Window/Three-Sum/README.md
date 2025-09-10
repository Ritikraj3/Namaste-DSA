# Let’s do a **visual dry run** with arrows showing how `i` and `j` move inside the array step by step.

We’ll use the same test case:

```js
arr = [-1, 0, 1, 2, -1, -4]
```

After sorting:

```js
arr = [-4, -1, -1, 0, 1, 2]
```

---

## Case 1: Pivot = **-4**

```
[-4, -1, -1, 0, 1, 2]
  x    i              j
```

* sum = -4 + (-1) + 2 = -3 → too small → move `i →`

```
[-4, -1, -1, 0, 1, 2]
  x         i        j
```

* sum = -4 + (-1) + 2 = -3 → too small → move `i →`

```
[-4, -1, -1, 0, 1, 2]
  x              i   j
```

* sum = -4 + 0 + 2 = -2 → too small → move `i →`

```
[-4, -1, -1, 0, 1, 2]
  x                 i j
```

* sum = -4 + 1 + 2 = -1 → too small → move `i →`
* i == j → stop.

✅ No triplet.

---

## Case 2: Pivot = **-1 (index 1)**

```
[-4, -1, -1, 0, 1, 2]
       x    i        j
```

* sum = -1 + (-1) + 2 = 0 ✅ → save \[-1, -1, 2]
* move both → `i++`, `j--`

```
[-4, -1, -1, 0, 1, 2]
       x         i j
```

* sum = -1 + 0 + 1 = 0 ✅ → save \[-1, 0, 1]
* move both → `i++`, `j--`

Now `i >= j` → stop.

✅ Got two triplets here.

---

## Case 3: Pivot = **-1 (index 2)**

Duplicate of previous pivot → skipped.

---

## Case 4: Pivot = **0**

```
[-4, -1, -1, 0, 1, 2]
             x    i  j
```

* sum = 0 + 1 + 2 = 3 → too big → move `j ←`

```
[-4, -1, -1, 0, 1, 2]
             x    i j
```

* Now i == j → stop.
  ✅ No triplet.

---

## Case 5 & 6: Pivot = **1, 2**

Not enough room for i, j → stop.

---

## ✅ Final Answer

```
[[-1, -1, 2], [-1, 0, 1]]
```

---

💡 Pattern to remember:

* **sum < 0** → move `i →` (need bigger numbers).
* **sum > 0** → move `j ←` (need smaller numbers).
* **sum == 0** → save triplet, move both, and skip duplicates.

---