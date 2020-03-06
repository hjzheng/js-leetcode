/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [],
    tmp = [],
    tmpSum = 0;

  function helper(root) {
    if (!root) return;

    tmp.push(root.val);
    tmpSum += root.val;

    if (!root.left && !root.right) {
      if (tmpSum === sum) {
        res.push([...tmp]);
      }
    }

    helper(root.left);
    helper(root.right);

    tmpSum -= tmp.pop();
  }

  helper(root);

  return res;
};
// @lc code=end
