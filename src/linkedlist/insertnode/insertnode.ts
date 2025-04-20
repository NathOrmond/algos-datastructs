class Node {
  val: any;
  next: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head:any , value:any, index:any) => {
    if(!head) return head;
    let curr = head;
    let currIndex = 1;
    if(index !== 0){
      while(currIndex < index){
          if(curr.next){
              currIndex++;
              curr = curr.next;
          } 
      }
      let insertNode = new Node(value);
      insertNode.next = curr.next;
      curr.next = insertNode;
    } else {
      let insertNode = new Node(value);
      insertNode.next = curr; 
      return insertNode;
    } 
    return head;
};


export { Node, insertNode };

