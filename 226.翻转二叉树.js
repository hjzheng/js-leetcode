/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function helper(root) {
    if (!root) return;

    [root.left, root.right] = [root.right, root.left];

    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
  }

  helper(root);
  return root;
};
// @lc code=end
