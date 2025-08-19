class Stack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }

    push(x) {
        this.q1.push(x)
    }

    pop() {
        let n = this.q1.length
        for(let i = 0; i < n-1; i++) {
            this.q2.push(this.q1.shift())
        }

        let lastEle = this.q1.shift()

        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp

        return lastEle
    }

    top() {
        let n = this.q1.length

        for(let i = 0; i < n-1; i++) {
            this.q2.push(this.q1.shift())
        }

        let TopEle = this.q1.shift()
        this.q2.push(TopEle)

        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp

        return TopEle
    }

    empty() {
        return this.q1.length === 0
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
console.log(MyStack.empty());
console.log(MyStack);
