Maximum Difference

Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

Example 1:

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
Example 2:

Input: root = [1,null,2,null,0,3]
Output: 3
Constraints:

The number of nodes in the tree is in the range [2, 5000].

0 <= Node.val <= 105

Code

Javascript

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    
};
Java

public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode() {}
  TreeNode(int val) { this.val = val; }
  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
    public int maxAncestorDiff(TreeNode root) {
       return 0;
    }
}
Test cases

Javascript

const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
  it("should test for the first example", function() {
     var tree = new TreeNode(8);
     tree.left = new TreeNode(3);
     tree.right = new TreeNode(10);
     tree.left.left = new TreeNode(1);
     tree.left.right = new TreeNode(6);
     tree.left.right.left = new TreeNode(4);
     tree.left.right.right = new TreeNode(7);
     tree.right.right = new TreeNode(14);
     tree.right.right.left = new TreeNode(13);
     assert.strictEqual(7, maxAncestorDiff(tree));
  });
   it("should test for the second example", function() {
     var tree = new TreeNode(1);
     tree.right = new TreeNode(2);
     tree.right.right = new TreeNode(0);
     tree.right.right.left = new TreeNode(3);
     assert.strictEqual(3, maxAncestorDiff(tree));
  });
});
Java

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {
    Solution solution = new Solution();
    @Test
    void testFirstExample() {
        TreeNode tree = new TreeNode(8);
        tree.left = new TreeNode(3);
        tree.right = new TreeNode(10);
        tree.left.left = new TreeNode(1);
        tree.left.right = new TreeNode(6);
        tree.left.right.left = new TreeNode(4);
        tree.left.right.right = new TreeNode(7);
        tree.right.right = new TreeNode(14);
        tree.right.right.left = new TreeNode(13);
       
        assertEquals("7", solution.maxAncestorDiff(tree));
    }
    
    @Test
    void testSecondExample() {
        TreeNode tree = new TreeNode(1);
        tree.right = new TreeNode(2);
        tree.right.right = new TreeNode(0);
        tree.right.right.left = new TreeNode(3);

        assertEquals("3", solution.maxAncestorDiff(tree));
    }
}
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  return 0;
};