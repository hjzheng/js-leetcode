/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  let q = [root],
    res = [];
  while (q.length !== 0) {
    let size = q.length,
      currMax = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      currMax = Math.max(currMax, node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(currMax);
  }

  return res;
};
// @lc code=end
