function slidingMax(arr, k) {
  let i = 0;
  let dq = [];
  let res = [];

  for (let j = 0; j < arr.length; j++) {
    //after removing all smaller element of deque from end , add/push curr window element (nums[j])
    while (dq.length && arr[j] > dq[dq.length - 1]) dq.pop();
    dq.push(arr[j]);

    if (j - i + 1 === k) {
      // if window length is equal to k , then push top element i.e. largest element in res (result).
      res.push(dq[0]);

      //if leftmost element of curr window is largest i.e. equal to dq[0], then remove it.
      if (arr[i] === dq[0]) dq.shift();
      ++i;
    }
  }
  return res;
}

console.log(slidingMax([1, 3, 7, -3, 5, 3, 6, 7], 3));
