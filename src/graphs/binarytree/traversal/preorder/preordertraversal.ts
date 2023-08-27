import { IBinaryNode } from "../../types";

 /**
  * Root -> Left Subtree -> Right Subtree
  **/
 const preOrderTraversal = ( root: IBinaryNode ) => {
	if(root.value === undefined) return;
	console.log(root.value);
	if(root.left !== undefined) preOrderTraversal(root.left);
	if(root.right !== undefined) preOrderTraversal(root.right);
 }