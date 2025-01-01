// test harness 
import "mocha";
import { expect } from "chai";

import { removeNode, LinkedListNode } from "./removenode";

describe('RemoveLinkedList Test', function() {


  let testLinkedList: LinkedListNode;

    this.beforeEach(() => {
    });

    it('Should remove first elements', function() {
      const q = new LinkedListNode("q");
      const r = new LinkedListNode("r");
      const s = new LinkedListNode("s");
      q.next = r;
      r.next = s;
      let head = removeNode(q, "q");
      let str = "";
      while (head) {
        if (head.next) {
          str += head.val + " -> ";
        } else {
          str += head.val;
        }
        head = head.next;
      }
      expect(str).to.equal("r -> s");
    });

});