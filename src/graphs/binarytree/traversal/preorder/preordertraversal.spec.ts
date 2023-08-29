// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { Node } from "../../binarytree";
import { preOrderTraversal } from "./preordertraversal";

describe('In Order Traversal Tests', () => {


    /**
     *                          A
     *                         / \
     *                       /     \
     *                      B       E
     *                     / \
     *                   /     \
     *                  C       D
     */

    const expected: Array<String> = ['A', 'B', 'C', 'D', 'E'];

    const leftLeft = new Node('C', undefined, undefined);
    const leftRight = new Node('D', undefined, undefined);
    const left = new Node('B', leftLeft, leftRight);
    const right = new Node('E', undefined, undefined);
    const root = new Node('A', left, right);

    let traversed: Array<String>;

    beforeEach(() => {
        traversed = [];
    });

    it('Should traverse the binary tree inorder', () => {
        let rx = preOrderTraversal(root, traversed);
        expect(rx).to.be.deep.equal(expected);
    });

});