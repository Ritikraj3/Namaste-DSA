class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Build sample tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Inorder
function inorder(curr, ans = []) {
  if (!curr) return;
  inorder(curr.left, ans);
  ans.push(curr.val);
  inorder(curr.right, ans);
  return ans;
}

// Preorder
let ans = [];
function preorder(curr) {
  if (!curr) return;
  ans.push(curr.val);
  preorder(curr.left);
  preorder(curr.right);
  return ans;
}

// Postorder
function postorder(curr, ans = []) {
  if (!curr) return;
  postorder(curr.left, ans);
  postorder(curr.right, ans);
  ans.push(curr.val);
  return ans;
}

console.log("Inorder:", inorder(root));
console.log("Preorder:", preorder(root));
console.log("Postorder:", postorder(root));
