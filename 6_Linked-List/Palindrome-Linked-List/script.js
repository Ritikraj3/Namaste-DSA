//Approach 1 
// convert linked list into an array and then check palindrome

function isPalindrome(head){
    //Linked-List into an Array
    let arr = []
    let curr = head
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }

    //check Palindrome

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false
        }
        left ++
        right --
    }
    return true
}

//___________________________________________________________________________________________

//Approach 2

// i) Find Middle
// ii) reverse 2nd half of list
// iii) compare each value

function isPalindrome(head) {
    //Middle

    let slow = fast = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // reverse

    let prev = null
    let curr = slow

    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    //compare 

    while (prev) {
        if(head.val !== prev.val) return false
        head = head.next
        prev = prev.next
    }
    return true
}