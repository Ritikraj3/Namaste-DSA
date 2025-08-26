class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    push(x) {
        this.s1.push(x)
    }

    pop() {
        if(this.s2.length === 0) {
            while(this.s1.length) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }

    peek() {
        if(this.s2.length === 0) {
            while(this.s2.length) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length - 1]
    }

    isEmpty() {
        return this.s1.length === 0 && this.s2.length === 0
    }
}

let MyQueue = new Queue()

MyQueue.push(5)
MyQueue.push(8)
MyQueue.push(10)
MyQueue.pop()
console.log(MyQueue);
MyQueue.push(12)
MyQueue.push(9)
console.log(MyQueue);
MyQueue.pop()
MyQueue.push(2)
MyQueue.push(1)
MyQueue.push(6)
console.log(MyQueue.isEmpty());
console.log(MyQueue);