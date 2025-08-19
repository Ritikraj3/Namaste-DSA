class Stack {
    constructor() {
        this.q = []
    }

    push(x) {
        this.q.push(x)
    }

    pop() {
        let n = this.q.length
        for(let i = 0; i < n-1; i++) {
            let deqEle = this.q.shift()
            this.q.push(deqEle)
        }
        return this.q.shift()
    }

    top() {
        let n = this.q.length
        for(let i = 0; i < n-1; i++) {
            let deqEle = this.q.shift()
            this.q.push(deqEle)
        }
        let topEle = this.q.shift()
        this.q.push(topEle)
        return topEle
    }

    isEmpty() {
        return this.q.length === 0
    }

}



let MyStack = new Stack()

MyStack.push(5)
MyStack.push(8)
MyStack.push(10)
MyStack.pop()
console.log(MyStack);
MyStack.push(12)
MyStack.push(9)
console.log(MyStack);
MyStack.pop()
MyStack.push(2)
MyStack.push(1)
MyStack.push(6)
console.log(MyStack.isEmpty());
console.log(MyStack);