function intersection(headA, headB) {
  //length of L1
  let n = 0;
  let pA = headA;

  while (pA) {
    pA = pA.next;
    n++;
  }

  //length of L2
  let m = 0;
  let pB = headB;

  while (pB) {
    pB = pB.next;
    m++;
  }

  //making L2 as longest List in alternate cases

  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  //diff
  const diff = Math.abs(m - n);

  //move head of longest List by diff (i.e. List2)
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  //check where both list intersect

  while (headA != headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
}

//-===================================================
//Approach - 2

function intersection2 (headA,headB) {
    let pA  = headA
    let pB = headB

    while (pA != pB) {
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }
    return pA
}
