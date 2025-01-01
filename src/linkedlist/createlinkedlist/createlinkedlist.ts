// @ts-nocheck

class Node {
  val: any;
  next: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
    if(!values.length) return null;
    let head = new Node(values[0]);
    let curr = head;
    for(let index = 1; index < values.length; index++){
        let newNode = new Node(values[index]);
        curr.next = newNode;
        curr = newNode;
    }
    return head;
};


export { Node, createLinkedList };

