import { IBinaryNode } from "../../types";

/** 
 * Left Subtree -> Root -> Right Subtree
 **/
export const inOrderTraversal = (root: IBinaryNode, processed: Array<any>) => {
	if(root.value === undefined) return processed;
	if(root.left !== undefined)inOrderTraversal(root.left, processed);
    // process node
    processed.push(root.value);
	if(root.right !== undefined) inOrderTraversal(root.right, processed);
    return processed;
 }