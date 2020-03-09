/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
  let sum = 0;
  function helper(root, nums) {
    if (!root) return;

    nums.push(root.val);

    if (isLeaf(root)) {
      sum += Number(nums.join(''));
    }

    helper(root.left, nums);
    helper(root.right, nums);

    nums.pop();
  }

  helper(root, []);

  return sum;
};

function isLeaf(node) {
  return !node.left && !node.right;
}
// @lc code=end
