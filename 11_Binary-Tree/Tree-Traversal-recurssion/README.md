
# 🌳 Tree Traversal Explained

![Data Structures](https://img.shields.io/badge/Data%20Structures-Tree%20Traversal-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty-Beginner](https://img.shields.io/badge/Difficulty-Beginner-success?style=for-the-badge)

---

## 📌 What is Tree Traversal?

**Tree Traversal** means visiting all nodes of a tree **in a specific order**.
Since a binary tree node can have **two children (left & right)**, we use different traversal strategies to decide the visiting order.

---

## 🖼️ Example Tree

We’ll use this tree for illustration:

```
       1
      / \
     2   3
    / \
   4   5
```

---

## 🔀 Types of Traversal

### 1. **Inorder Traversal (Left → Root → Right)**

* Visit left subtree
* Visit root
* Visit right subtree

📌 For our example tree:
`[4, 2, 5, 1, 3]`

**Call Stack Simulation**

```text
inorder(1)
 ├─ inorder(2)
 │   ├─ inorder(4) → push(4)
 │   ├─ push(2)
 │   └─ inorder(5) → push(5)
 ├─ push(1)
 └─ inorder(3) → push(3)
```

**How recursion happens (call stack growth & shrink):**

```
Call inorder(1)
Stack: [1]

 → inorder(2)
 Stack: [1,2]

   → inorder(4)
   Stack: [1,2,4]

     → inorder(null) return
     → inorder(null) return
     ✔ push(4)
   Stack unwinds: [1,2]

   ✔ push(2)

   → inorder(5)
   Stack: [1,2,5]

     → inorder(null) return
     → inorder(null) return
     ✔ push(5)
   Stack unwinds: [1]

✔ push(1)

→ inorder(3)
Stack: [1,3]

  → inorder(null) return
  → inorder(null) return
  ✔ push(3)
Stack empty ✅
```

---

### 2. **Preorder Traversal (Root → Left → Right)**

* Visit root
* Visit left subtree
* Visit right subtree

📌 For our example tree:
`[1, 2, 4, 5, 3]`

**Call Stack Simulation**

```text
preorder(1) → push(1)
 ├─ preorder(2) → push(2)
 │   ├─ preorder(4) → push(4)
 │   └─ preorder(5) → push(5)
 └─ preorder(3) → push(3)
```
**Call Stack Visual:**

```
Call preorder(1) → ✔ push(1)
Stack: [1]

 → preorder(2) → ✔ push(2)
 Stack: [1,2]

   → preorder(4) → ✔ push(4)
   Stack: [1,2,4]
   return

   → preorder(5) → ✔ push(5)
   Stack: [1,2,5]
   return

 → preorder(3) → ✔ push(3)
 Stack: [1,3]
 return

Stack empty ✅
```


---

### 3. **Postorder Traversal (Left → Right → Root)**

* Visit left subtree
* Visit right subtree
* Visit root

📌 For our example tree:
`[4, 5, 2, 3, 1]`

**Call Stack Simulation**

```text
postorder(1)
 ├─ postorder(2)
 │   ├─ postorder(4) → push(4)
 │   ├─ postorder(5) → push(5)
 │   └─ push(2)
 ├─ postorder(3) → push(3)
 └─ push(1)
```

**Call Stack Visual:**

```
Call postorder(1)
Stack: [1]

 → postorder(2)
 Stack: [1,2]

   → postorder(4)
   Stack: [1,2,4]
     → left null
     → right null
     ✔ push(4)
   Stack: [1,2]

   → postorder(5)
   Stack: [1,2,5]
     → left null
     → right null
     ✔ push(5)
   Stack: [1,2]

   ✔ push(2)
 Stack: [1]

 → postorder(3)
 Stack: [1,3]
   → left null
   → right null
   ✔ push(3)
 Stack: [1]

✔ push(1)
Stack empty ✅
```


---

### 4. **Level Order Traversal (Breadth-First Search)**

* Visit nodes **level by level** using a queue.

📌 For our example tree:
`[1, 2, 3, 4, 5]`

Here recursion is not used — we use a **queue**:

```
Queue: [1] → pop 1, push children [2,3]
Queue: [2,3] → pop 2, push children [3,4,5]
Queue: [3,4,5] → pop 3
Queue: [4,5] → pop 4
Queue: [5] → pop 5
Queue empty ✅
```

---

## 💻 JavaScript Code Examples

```js
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// Build sample tree
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

// Inorder
function inorder(node, ans = []) {
  if (!node) return ans
  inorder(node.left, ans)
  ans.push(node.val)
  inorder(node.right, ans)
  return ans
}

// Preorder
function preorder(node, ans = []) {
  if (!node) return ans
  ans.push(node.val)
  preorder(node.left, ans)
  preorder(node.right, ans)
  return ans
}

// Postorder
function postorder(node, ans = []) {
  if (!node) return ans
  postorder(node.left, ans)
  postorder(node.right, ans)
  ans.push(node.val)
  return ans
}

// Level Order
function levelOrder(node) {
  if (!node) return []
  let ans = []
  let queue = [node]

  while (queue.length > 0) {
    let curr = queue.shift()
    ans.push(curr.val)
    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right)
  }

  return ans
}

console.log("Inorder:", inorder(root))      // [4, 2, 5, 1, 3]
console.log("Preorder:", preorder(root))    // [1, 2, 4, 5, 3]
console.log("Postorder:", postorder(root))  // [4, 5, 2, 3, 1]
console.log("Level Order:", levelOrder(root)) // [1, 2, 3, 4, 5]
```

---

## 📚 When to Use Each?

* **Inorder** → Useful in **Binary Search Trees** to get sorted order.
* **Preorder** → Useful to **copy/serialize trees**.
* **Postorder** → Useful to **delete/free trees** safely.
* **Level Order** → Useful in **shortest path problems** (BFS).

---

## 🎯 Summary

* Traversals decide **the order in which nodes are visited**.
* Recursive traversals (inorder, preorder, postorder) use **call stack**.
* Level order traversal uses a **queue (BFS)**.

---

✨ *Tree traversal is like choosing how you walk through a house — left rooms first, right rooms first, or floor by floor.*

---

✨ *Recursion is just stacking function calls like plates 🍽️ — first-in, last-out!*


