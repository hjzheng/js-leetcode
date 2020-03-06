/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let res = false,
    tmp = [],
    tmpSum = 0;

  function helper(root) {
    if (!root) return;

    tmp.push(root.val);
    tmpSum += root.val;

    if (!root.left && !root.right) {
      if (tmpSum === sum) {
        res = true;
        return;
      }
    }

    helper(root.left);
    helper(root.right);

    let val = tmp.pop();
    tmpSum -= val;
  }

  helper(root);

  return res;
};
// @lc code=end
