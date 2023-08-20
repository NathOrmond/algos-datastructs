import { INode } from './binarytreetypes';

const invertTree = (root: INode) => {
    if(!root) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
}

export { 
    invertTree
}
