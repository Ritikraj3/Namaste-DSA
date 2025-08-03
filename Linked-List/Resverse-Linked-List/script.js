function reverse(head) {
    let prev = null
    let curr = head

    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    head = prev
    return head
}