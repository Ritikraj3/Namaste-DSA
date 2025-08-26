//NEVER USE STACK AND QUEUES AS ARRAY 
// ---> IT WILL DEFY THE PROPERTIES OF STACK AND QUEUE

//USE ONLY THESE PROPERTIES--
//FOR STACK -> 1.PUSH, 2.POP, 3.TOP = A[A.LENGTH-1]
//FOR QUEUE -> 1.PUSH, 2.SHIFT, 3.FRONT = A[0] 

// Stack : --------------
let stack = []

stack.push(2)
stack.push(10)
stack.push(3)
stack.push(8)
stack.push(9)
stack.push(12)

console.log(stack);

stack.pop()
stack.pop()

stack[3] //Invalid stack operation❌


console.log(stack);

let top = stack[stack.length-1]

console.log(top);


//Queues : ----------------------------

let q = []

q.push(4) //enqueue
q.push(6)
q.push(9)
q.push(10)
q.push(3)

console.log(q);

q.shift() //dequeue
q.shift() //dequeue

q.pop() //Invalid Queue operation❌ 

console.log(q);

let front = q[0]
console.log(front);
