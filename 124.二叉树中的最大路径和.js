/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = Number.MIN_SAFE_INTEGER;

  function helper(root) {
    if (!root) return 0;

    let left = Math.max(helper(root.left), 0);
    let right = Math.max(helper(root.right), 0);

    max = Math.max(max, left + right + root.val);

    return root.val + Math.max(left, right);
  }

  helper(root);

  return max;
};
// @lc code=end
