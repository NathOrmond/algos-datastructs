// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { Node } from "../../binarytree";
import { postOrderTraversal } from "./postordertraversal";

describe('Post Order Traversal Tests', () => {


    /**
     *                          E
     *                         / \
     *                       /     \
     *                      C       D
     *                     / \
     *                   /     \
     *                  A       B
     */

    const expected: Array<String> = ['A', 'B', 'C', 'D', 'E'];

    const leftLeft = new Node('A', undefined, undefined);
    const leftRight = new Node('B', undefined, undefined);
    const left = new Node('C', leftLeft, leftRight);
    const right = new Node('D', undefined, undefined);
    const root = new Node('E', left, right);

    let traversed: Array<String>;

    beforeEach(() => {
        traversed = [];
    });

    it('Should traverse the binary tree inorder', () => {
        let rx = postOrderTraversal(root, traversed);
        expect(rx).to.be.deep.equal(expected);
    });

});