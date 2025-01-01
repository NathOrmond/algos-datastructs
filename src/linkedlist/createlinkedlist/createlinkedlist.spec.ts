// test harness
import "mocha";
import { expect } from "chai";

import { createLinkedList, Node } from "./createlinkedlist.js";


// @ts-nocheck
describe("CreateLinkedList Test", function () {
  this.beforeEach(() => {});

  it("Create 1", function () {
    let head = createLinkedList(["h", "e", "y"]);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("h -> e -> y");
  });


  it("Create 2", function () {
    let head = createLinkedList([1, 7, 1, 8]);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("1 -> 7 -> 1 -> 8");
  });

  it("Create 3", function () {
    let head = createLinkedList(["a"]);
    let str = "";
    while (head) {
      if (head.next) {
        str += head.val + " -> ";
      } else {
        str += head.val;
      }
      head = head.next;
    }
    expect(str).to.equal("a");
  });

});
