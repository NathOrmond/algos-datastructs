interface ILinkedListNode {
  val: any;
  next?: ILinkedListNode | null;
}

class LinkedListNode implements ILinkedListNode {
  val: any;
  next?: ILinkedListNode | undefined;
  constructor(val: any) {
    this.val = val;
    this.next = undefined;
  }
}

const removeNode = (head: ILinkedListNode, targetVal : any) => {
  if (!head) return;
  let curr = head;
  let next = curr.next;
  if (curr.val === targetVal) {
    return next;
  }
  while (curr && curr.next) {
    if (curr.next.next) {
      let next = curr.next,
        newNext = curr.next.next;
      if (next.val === targetVal) {
        curr.next = newNext;
        next.next = undefined;
        return head;
      }
    } else if (curr.next.val === targetVal) {
      curr.next = null;
      return head;
    }
    curr = curr.next;
  }
  return head;
};


export {
    ILinkedListNode, 
    LinkedListNode,
    removeNode
}


