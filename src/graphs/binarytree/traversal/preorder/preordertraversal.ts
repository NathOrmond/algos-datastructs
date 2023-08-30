import { IBinaryNode } from "../../types";

 /**
  * Root -> Left Subtree -> Right Subtree
  **/
 export const preOrderTraversal = ( root: IBinaryNode, processed: Array<any> ) => {
	if(root.value === undefined) return processed;
    processed.push(root.value);
	if(root.left !== undefined) preOrderTraversal(root.left, processed);
	if(root.right !== undefined) preOrderTraversal(root.right, processed);
    return processed;
 }
