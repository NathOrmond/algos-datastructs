// @ts-nocheck

class Node {
  val: any;
  next: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  const dummyHead = new Node(0);
  let current = dummyHead;
  let carry = 0;
  while (head1 || head2 || carry) {
    let sum = carry;
    if (head1) {
      sum += head1.val;
      head1 = head1.next;
    }
    if (head2) {
      sum += head2.val; 
      head2 = head2.next;
    }
    current.next = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    current = current.next;
  }
  
  return dummyHead.next;
 };

export { Node, addLists }