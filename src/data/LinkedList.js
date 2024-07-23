class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    getAll() {
      const elements = [];
      let current = this.head;
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      return elements;
    }
  }
  
  export default LinkedList;
  