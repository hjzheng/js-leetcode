/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
  if (!root) return [];
  let q = [root],
    res = [];

  while (q.length !== 0) {
    let size = q.length,
      currLevel = [];

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      currLevel.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    res.unshift(currLevel);
  }

  return res;
};
// @lc code=end
