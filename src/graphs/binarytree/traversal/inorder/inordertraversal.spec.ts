// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { Node } from "../../binarytree";
import { inOrderTraversal } from "./inordertraversal";

describe('In Order Traversal Tests', () => {


    /**
     *                          D
     *                         / \
     *                       /     \
     *                      B       E
     *                     / \
     *                   /     \
     *                  A       C
     */

    const expected: Array<String> = ['A', 'B', 'C', 'D', 'E'];

    const leftLeft = new Node('A', undefined, undefined);
    const leftRight = new Node('C', undefined, undefined);
    const left = new Node('B', leftLeft, leftRight);
    const right = new Node('E', undefined, undefined);
    const root = new Node('D', left, right);

    let traversed: Array<String>;

    beforeEach(() => {
        traversed = [];
    });

    it('Should traverse the binary tree inorder', () => {
        let rx = inOrderTraversal(root, traversed);
        expect(rx).to.be.deep.equal(expected);
    });

});