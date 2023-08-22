import { IBinaryNode } from '../types';

class Node implements IBinaryNode { 
    
    value: any;
    left: any;
    right: any;

    constructor( value: any, left: any, right: any){
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

/** 
 * Left Subtree -> Root -> Right Subtree
 **/
 const inOrderTraversal = (root: IBinaryNode) => {
	if(root.value === undefined) return;
	if(root.left !== undefined)inOrderTraversal(root.left);
	console.log(root.value);
	if(root.right !== undefined) inOrderTraversal(root.right);
 }


 /**
  * Root -> Left Subtree -> Right Subtree
  **/
 const preOrderTraversal = ( root: IBinaryNode) => {
	if(root.value === undefined) return;
	console.log(root.value);
	if(root.left !== undefined) preOrderTraversal(root.left);
	if(root.right !== undefined) preOrderTraversal(root.right);
 }

/**
 * Left Subtree -> Right Subtree -> Root
 * Time Complexity: O(n)
 * Space Compolexity: O(n)
 **/
const postOrderTraversal = (rootNode: IBinaryNode) => {
    // Basis
    if(rootNode.value === undefined) return;
    // Left Node First
    if(rootNode.left !== undefined ) preOrderTraversal(rootNode.left);
    // Right Node Second
    if(rootNode.right !== undefined ) preOrderTraversal(rootNode.right);
    // Root Node
    console.log(rootNode.value);
}

export {
    Node,
    inOrderTraversal,
    preOrderTraversal,
    postOrderTraversal
}
