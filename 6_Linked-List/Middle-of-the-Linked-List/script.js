class ListNode {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}



const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

const middle = middleNode(head)

console.log(middle);