import { IBinaryNode } from "../../types";

/**
 * Left Subtree -> Right Subtree -> Root
 * Time Complexity: O(n)
 * Space Compolexity: O(n)
 **/
const postOrderTraversal = (rootNode: IBinaryNode) => {
    // Basis
    if(rootNode.value === undefined) return;
    // Left Node First
    if(rootNode.left !== undefined ) postOrderTraversal(rootNode.left);
    // Right Node Second
    if(rootNode.right !== undefined ) postOrderTraversal(rootNode.right);
    // Process Root Node
    console.log(rootNode.value);
}
