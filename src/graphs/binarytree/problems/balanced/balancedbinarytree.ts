import { IBinaryNode } from '../../types';

type Balanced = [ boolean, number];

export const isBalanced = (root: IBinaryNode): boolean => {
    return dfs(root)[0];
};

export const dfs = (node: IBinaryNode): Balanced => {
    if(!node) return [true, 0];
    let [left, right] = [dfs(node.left), dfs(node.right)];
    return [
        (left[0] && right[0] && 
        ( (Math.abs(left[1] - right[1]) <= 1))), 
        (1 + Math.max(left[1], right[1]))
    ];
}
