function Node(val) {
  this.val = val;
  this.next = null;
}


function LinkedList() {
  this.head = null;
  this.size = 0;
}


LinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};


LinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};


LinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addToTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};


LinkedList.prototype.get = function (index) {
  let curr = this.head;
  if (index < 0 || index >= this.size) return -1;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};


LinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  else if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};



LinkedList.prototype.printList = function () {
  let curr = this.head;
  let output = "";
  while (curr !== null) {
    output += curr.val + " -> ";
    curr = curr.next;
  }
  output += "null";
  console.log(output);
};


let list = new LinkedList();

list.addAtHead(10);
list.addToTail(20);
list.addToTail(30);
list.addAtIndex(1, 15); // Insert 15 at index 1

list.printList(); // Output: 10 -> 15 -> 20 -> 30 -> null

console.log("Value at index 2:", list.get(2)); // 20

list.deleteAtIndex(1);
list.printList(); // Output: 10 -> 20 -> 30 -> null
