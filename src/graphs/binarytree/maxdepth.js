"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxDepth = (root) => {
    if (!root)
        return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
