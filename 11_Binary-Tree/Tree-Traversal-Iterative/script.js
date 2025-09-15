class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node("A")
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");

//=======================================================================================================================================

//pre-order iteration
function preOrder(root) {
    let ans = []
    let stack = [root]
    if(!root) return ans
    while(stack.length) {
        let curr = stack.pop()
        ans.push(curr.val)
        curr.left && stack.push(curr.left)
        curr.right && stack.push(curr.right)
    }
    return ans
}

console.log("preorder: ", preOrder(root));

//------------------------------------------------------------------------------------------------------------------------------------------------

//In-order iteration
function inOrder (root) {
    let ans = []
    let stack = []
    let curr = root

    while(curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        ans.push(curr.val)
        curr = curr.right
    }
    return ans
}

console.log("inorder: ", inOrder(root));