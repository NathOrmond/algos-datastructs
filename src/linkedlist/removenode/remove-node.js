class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
    if(!head) return;
    let curr = head;
    let next = curr.next; 
    if(curr.val === targetVal){
      return next;
    }
    while(curr && curr.next ){
      if(curr.next.next){
        let next = curr.next, newNext = curr.next.next;
        if(next.val === targetVal){
          curr.next = newNext;
          next.next = undefined;
          return head;
        }
      } else if(curr.next.val === targetVal){
        curr.next = null;
        return head;
      }
      curr = curr.next;
    }
    return head;
  };

const q = new Node("q");
const r = new Node("r");
const s = new Node("s");

q.next = r;
r.next = s;

// q -> r -> s

let head = removeNode(q, "q");
// r -> s

let str = "";
while(head){
    if(head.next){
        str += head.val + " -> ";
    } else {
        str += head.val;
    }
    head = head.next;
}
console.log(str); 