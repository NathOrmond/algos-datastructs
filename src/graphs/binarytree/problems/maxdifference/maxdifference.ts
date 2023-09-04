import { Node } from "../../binarytree";


export const maxDifferencePreorderTraversal = ( node: Node, max: number, min: number ): number  => {
    if((max === undefined) || (min === undefined)) return 0;
    if(!node || node.value === undefined) return (max-min);
    max = (node.value > max) ? node.value : max; 
    min = (node.value < min) ? node.value : min;
    let leftSubtree = maxDifferencePreorderTraversal(node.left, max, min );
    let rightSubtree = maxDifferencePreorderTraversal(node.right, max, min );
    return leftSubtree > rightSubtree ? leftSubtree : rightSubtree;
}

export const maxDifference = (root: Node): number => {
    return maxDifferencePreorderTraversal(root, root.value, root.value);
}


