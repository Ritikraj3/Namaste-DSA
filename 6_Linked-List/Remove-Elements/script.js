function removeElements(head, val){
    let newNode = new ListNode()
    newNode.next = head
    let prev = newNode
    
    while (prev && prev.next){
        if(prev.next.val === val) {
            prev.next = prev.next.next
        }
        else {
            prev = prev.next
        }
    }
    return newNode.next
}