
function findCycle(head) {
    let seenNode = new Set()
    let curr = head
    
    while(curr) {
        if(seenNode.has(curr)) {
            return true
        }
        seenNode.add(curr)
        curr = curr.next
    }
    return false
}