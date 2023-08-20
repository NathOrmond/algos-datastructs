import { INode } from './binarytreetypes';

const maxDepth = (root: INode) => {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
