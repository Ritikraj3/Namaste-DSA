class MyStack {
    constructor() {
        this.s = []
    }

    push(val) {
        //In the beginning my stack is empty so value & minimum value will be same 
        if(this.s.length === 0) {
            this.s.push([val,val])
        } else {
            let lastMin = this.s[this.s.length-1][1]
            let newMin = Math.min(val , lastMin)
            this.s.push([val,newMin])
        }
    }

    pop() {
        this.s.pop()
    }

    top() {
        return this.s[this.s.length-1][0]
    }

    getMin() {
        return this.s[this.s.length-1][1]
    }

}

let st = new MyStack();

st.push(5);   
st.push(3);   
st.push(7);   

console.log(st.getMin()); // 3

st.pop();     
console.log(st.getMin()); // 3

st.pop();     
st.push(1)
console.log(st.getMin()); // 1

console.log(st);  // to see the internal stack