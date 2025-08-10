
// 1st Approach
function megre(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1

    let curr = null
    if(l1.val < l2.val) {
        curr = l1
        l1 = l1.next
    } else {
        curr = l2
        l2 = l2.next
    }
    let start = curr

    while(l1 && l2) {
        if(l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if(!l1) {
        curr.next = l2
    }
    if(!l2) {
        curr.next = l1
    }
    return start
}



//Another Approach
function mergeTwoSortedArray(l1, l2) {
    
    let dummy = new ListNode()
    let curr = dummy

    while(l1 && l2) {
        if(l1.val < l2.val) {
            curr = curr.next(l1)
            l1 = l1.next
        }
        else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    curr.next = l1 || l2
    return dummy.next
}