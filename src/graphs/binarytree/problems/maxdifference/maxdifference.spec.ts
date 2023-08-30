import "mocha";
import { expect, should } from "chai";
import { Node } from "../../binarytree";
import { maxDifference } from "./maxdifference";

describe('In Order Traversal Tests', () => {

    beforeEach(() => {

    });

    it('should handle null', () => {
        const root = new Node(undefined, undefined, undefined);
        should().equal(maxDifference(root), undefined);
    });   

    it('Should handle binary tree', () => {
        /**
         *                          5
         *                         / \
         *                       /     \
         *                      4       4
         *                     / \
         *                   /     \
         *                  2       3
         */

        const leftLeft = new Node(2, undefined, undefined);
        const leftRight = new Node(3, undefined, undefined);
        const left = new Node(4, leftLeft, leftRight);
        const right = new Node(4, undefined, undefined);
        const root = new Node(5, left, right);
        const expected = 3;
        expect(maxDifference(root)).to.equal(expected);
    });

    it('Should handle binary tree', () => {
        /**
         *                          5
         *                         / \
         *                       /     \
         *                      1       4
         *                     / \
         *                   /     \
         *                  9       3
         */

        const leftLeft = new Node(9, undefined, undefined);
        const leftRight = new Node(3, undefined, undefined);
        const left = new Node(1, leftLeft, leftRight);
        const right = new Node(4, undefined, undefined);
        const root = new Node(5, left, right);
        const expected = 9;
        expect(maxDifference(root)).to.equal(9);
    });

});