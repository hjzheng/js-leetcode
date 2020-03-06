/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树结点最小距离
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
var minDiffInBST = function(root) {
  let minDiff = Number.MAX_SAFE_INTEGER,
    lastVal = null;
  // 中序遍历
  function helper(root) {
    if (!root) return;
    if (root.left) helper(root.left);
    if (lastVal !== null) minDiff = Math.min(minDiff, root.val - lastVal);
    lastVal = root.val;

    if (root.right) helper(root.right);
  }

  helper(root);

  return minDiff;
};
// @lc code=end
