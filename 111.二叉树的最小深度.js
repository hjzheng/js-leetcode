/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  if (!root) return 0;

  let q = [root],
    level = 1;

  while (q.length !== 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (isLeaf(node)) {
        return level;
      } else {
        node.left && q.push(node.left);
        node.right && q.push(node.right);
      }
    }
    level++;
  }
};

function isLeaf(node) {
  return !node.left && !node.right;
}
// @lc code=end
