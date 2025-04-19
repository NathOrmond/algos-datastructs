import { IBinaryNode } from "../../binarytree.types";

/**
 * Left Subtree -> Right Subtree -> Root
 * Time Complexity: O(n)
 * Space Compolexity: O(n)
 **/
export const postOrderTraversal = (rootNode: IBinaryNode, processed: Array<any>) => {
    // Basis
    if(rootNode.value === undefined) return processed;
    // Left Node First
    if(rootNode.left !== undefined ) postOrderTraversal(rootNode.left, processed);
    // Right Node Second
    if(rootNode.right !== undefined ) postOrderTraversal(rootNode.right, processed);
    // Process Root Node
    processed.push(rootNode.value);
    return processed;
}
