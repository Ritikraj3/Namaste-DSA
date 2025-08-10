function swapNodesInPair (head) {
    if (!head || !head.next) return head

    let dummy = new ListNode()
    let p = dummy
    let c = head
    let n = head.next

    while(c && n) {
        p.next = n
        c.next = n.next
        n.next = c

        p = c
        c = p.next
        n = c && c.next
    }
    return dummy.next
}