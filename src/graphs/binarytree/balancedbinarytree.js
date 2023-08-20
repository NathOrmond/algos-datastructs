"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBalanced = (root) => {
    return dfs(root)[0];
};
const dfs = (node) => {
    if (!node)
        return [true, 0];
    let [left, right] = [dfs(node.left), dfs(node.right)];
    return [
        (left[0] && right[0] &&
            ((Math.abs(left[1] - right[1]) <= 1))),
        (1 + Math.max(left[1], right[1]))
    ];
};
