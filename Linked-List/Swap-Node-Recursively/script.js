function swapNodesInPair (head) {
    if(!head || !head.next) return head

    let l = head
    let r = head.next

    l.next = swapNodesInPair(r.next)
    r.next = l
    return r
}