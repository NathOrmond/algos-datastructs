"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrderTraversal = exports.preOrderTraversal = exports.inOrderTraversal = exports.Node = void 0;
class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
exports.Node = Node;
/**
 * Left Subtree -> Root -> Right Subtree
 **/
const inOrderTraversal = (root) => {
    if (root.value === undefined)
        return;
    if (root.left !== undefined)
        inOrderTraversal(root.left);
    console.log(root.value);
    if (root.right !== undefined)
        inOrderTraversal(root.right);
};
exports.inOrderTraversal = inOrderTraversal;
/**
 * Root -> Left Subtree -> Right Subtree
 **/
const preOrderTraversal = (root) => {
    if (root.value === undefined)
        return;
    console.log(root.value);
    if (root.left !== undefined)
        preOrderTraversal(root.left);
    if (root.right !== undefined)
        preOrderTraversal(root.right);
};
exports.preOrderTraversal = preOrderTraversal;
/**
 * Left Subtree -> Right Subtree -> Root
 * Time Complexity: O(n)
 * Space Compolexity: O(n)
 **/
const postOrderTraversal = (rootNode) => {
    // Basis
    if (rootNode.value === undefined)
        return;
    // Left Node First
    if (rootNode.left !== undefined)
        preOrderTraversal(rootNode.left);
    // Right Node Second
    if (rootNode.right !== undefined)
        preOrderTraversal(rootNode.right);
    // Root Node
    console.log(rootNode.value);
};
exports.postOrderTraversal = postOrderTraversal;
