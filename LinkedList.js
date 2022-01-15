class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    // index out of range
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, prev;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      prev = current; // node before index
      count++;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // remove at index
  removeAt(index) {
    if (index < 0 || index > this.size) return;

    let current = this.head;
    let prev;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }
    this.size--;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);
// ll.getAt(0);
// ll.removeAt(4);
// ll.clearList();

ll.printListData();
