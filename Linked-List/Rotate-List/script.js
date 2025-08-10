function rotateList (head , k) {
    // calculate length
    let length = 0
    let curr = head
    while(curr) {
        curr = curr.next
        length++
    }

    // optimize k 
    k = k % length

    //take two pointer 
    let s = head
    let f = head

    //move my head by k 
    for(let i = 0; i < k; i++) {
        f = f.next
    }

    //move both the pointer till f reaches last node

    while(f.next) {
        s = s.next
        f = f.next
    }

    f.next = head
    let newHead = s.next
    s.next = null

    return newHead
}