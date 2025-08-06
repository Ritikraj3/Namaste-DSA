function intersectionElement(headA, headB) {
    // put all elements of list B in set

    let setB = new Set()

    while(headB) {
        setB.add(headB)
        headB = headB.next
    }

    // find each elements of headA in setB

    while(headA) {
        if(setB.has(headA)){
            return headA
        }
        headA = headA.next
    }
    return null
}