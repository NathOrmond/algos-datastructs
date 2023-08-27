import { IBinaryNode } from "../../types";

/** 
 * Left Subtree -> Root -> Right Subtree
 **/
export const inOrderTraversal = (root: IBinaryNode) => {
	if(root.value === undefined) return;
	if(root.left !== undefined)inOrderTraversal(root.left);
    // process node
	console.log(root.value);
	if(root.right !== undefined) inOrderTraversal(root.right);
 }