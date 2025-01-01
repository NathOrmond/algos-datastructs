// @ts-nocheck

class Node {
  val: any;
  next: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head , value, index) => {
    if(!head) return head;
    let curr = head;
    let currIndex = 1;
    console.log('index', index);
    if(index !== 0){
      console.log("LASJHDKJASD")
      while(currIndex < index){
        console.log(currIndex, index);
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

