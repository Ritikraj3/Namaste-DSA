function addTwoNumbers(l1, l2) {
    let dummy = new ListNode()
    let dummyHead = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = (l1 ? 0 : l1.val) + (l2 ? 0 : l2.val) + carry 
        carry = Math.floor(sum / 10)
        let digit = sum % 10
        dummy.next = new ListNode(digit)
        dummy = dummy.next

        l1 = l1 && l1.next
        l2 = l2 && l2.next
        
    }
    return dummyHead.next
}