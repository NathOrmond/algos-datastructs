// test harness
import "mocha";
import { expect } from "chai";

import { insertNode, Node } from "./insertnode.js";


// @ts-nocheck
describe("InsertLinkedList Test", function () {
  this.beforeEach(() => {});

  it("Insert 1", function () {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    a.next = b;
    b.next = c;
    c.next = d;
    let head = insertNode(a, "x", 2);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("a -> b -> x -> c -> d");
  });

  it("Insert 2", function () {
    const a = new Node("a");
    const b = new Node("b");
    a.next = b;
    // a -> b
    let head = insertNode(a, 'z', 0);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("z -> a -> b");
  });

  it("Insert 3", function () {
    const a = new Node("a");
    const b = new Node("b");
    a.next = b;
    // a -> b
    let head = insertNode(a, 'z', 2);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("a -> b -> z");
  });

});
