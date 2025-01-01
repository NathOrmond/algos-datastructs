// test harness
import "mocha";
import { expect } from "chai";

import { addLists, Node } from "./addlists";


// @ts-nocheck
describe("Add linked list Test", function () {
  this.beforeEach(() => {});

  it("add 1", function () {
    const a1 = new Node(1);
    const a2 = new Node(2);
    const a3 = new Node(6);
    a1.next = a2;
    a2.next = a3;
    // 1 -> 2 -> 6

    const b1 = new Node(4);
    const b2 = new Node(5);
    const b3 = new Node(3);
    b1.next = b2;
    b2.next = b3;
    // 4 -> 5 -> 3    

    let head = addLists(a1, b1);
    // 5 -> 7 -> 9
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("5 -> 7 -> 9");
  });


  it("add 2", function () {
        const a1 = new Node(1);
        const a2 = new Node(4);
        const a3 = new Node(5);
        const a4 = new Node(7);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 1 -> 4 -> 5 -> 7
        const b1 = new Node(2);
        const b2 = new Node(3);
        b1.next = b2;
        // 2 -> 3 
        let head = addLists(a1, b1);
        let str = "";
        while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("3 -> 7 -> 5 -> 7");
  });


});
