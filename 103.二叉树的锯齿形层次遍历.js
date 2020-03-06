/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let q = [root],
    res = [];

  while (q.length !== 0) {
    let size = q.length,
      currLevel = [];

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      (res.length & 1) === 1
        ? currLevel.unshift(node.val)
        : currLevel.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    res.push(currLevel);
  }

  return res;
};
// @lc code=end
