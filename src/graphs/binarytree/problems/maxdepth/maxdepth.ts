import { IBinaryNode } from '../../binarytree.types';

export const maxDepth = (root: IBinaryNode): number => {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
